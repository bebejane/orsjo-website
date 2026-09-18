import 'dotenv/config';
import { ApiError, buildBlockRecord, buildClient } from '@datocms/cma-client';

/**
 * Migrates the product model tree from inline `variant` blocks to standalone
 * `product_variant` records.
 *
 *   1. deletes the `dev` sandbox environment (if it exists)
 *   2. forks the primary environment into a fresh `variants` sandbox
 *   3. creates a `product_variant` model copying every field of the `variant` block
 *   4. renames `product_model.variants` (Modular Content) -> `variants_legacy`
 *      and creates a new `variants` links field pointing at `product_variant`
 *   5. copies every legacy variant block into a `product_variant` record and
 *      links it back on its parent model block
 *   6. destroys the `variants_legacy` field once the data is safely linked
 *
 * Run with: pnpm exec tsx lib/scripts/variants_migration.ts
 */

const ENV = 'dev';
const PRODUCT_TYPE = 'product';
const PRODUCT_MODEL_API_KEY = 'product_model';
const VARIANT_BLOCK_API_KEY = 'variant';
const VARIANTS_FIELD_API_KEY = 'variants';
const LEGACY_FIELD_API_KEY = 'variants_legacy';
const NEW_MODEL_API_KEY = 'product_variant';
const NEW_MODEL_NAME = 'Product variant';

type Client = ReturnType<typeof buildClient>;
type FieldCreateBody = Parameters<Client['fields']['create']>[1];
type FieldRecord = Awaited<ReturnType<Client['fields']['list']>>[number];
type ItemTypeRecord = Awaited<ReturnType<Client['itemTypes']['list']>>[number];

type NestedBlock = {
	id: string;
	__itemTypeId?: string;
	type?: string;
	attributes: Record<string, unknown>;
};

type NestedProduct = {
	id: string;
	meta?: { status?: string };
	models?: Array<NestedBlock | string>;
};

/* ------------------------------------------------------------------ */
/* Environment                                                         */
/* ------------------------------------------------------------------ */

async function prepareEnvironment(): Promise<Client> {
	const apiToken = process.env.DATOCMS_API_TOKEN;
	if (!apiToken) throw new Error('DATOCMS_API_TOKEN is not set');

	const base = buildClient({ apiToken });
	const environments = await base.environments.list();

	const existing = environments.find((e) => e.id === ENV);
	if (existing) {
		if (existing.meta.primary) throw new Error(`"${ENV}" is the primary environment`);
		console.log(`Deleting existing environment "${ENV}"…`);
		await base.environments.destroy(existing.id);
	}

	const primary = environments.find((e) => e.meta.primary);
	if (!primary) throw new Error('No primary environment found');

	console.log(`Forking "${primary.id}" into "${ENV}"…`);
	const forked = await base.environments.fork(primary.id, { id: ENV });
	console.log(`Environment "${forked.id}" ready`);

	return buildClient({ apiToken, environment: ENV });
}

/* ------------------------------------------------------------------ */
/* Schema                                                              */
/* ------------------------------------------------------------------ */

function findModel(
	itemTypes: ItemTypeRecord[],
	apiKey: string,
	modularBlock?: boolean,
): ItemTypeRecord {
	const model = itemTypes.find(
		(t) => t.api_key === apiKey && (modularBlock === undefined || t.modular_block === modularBlock),
	);
	if (!model) throw new Error(`Model "${apiKey}" not found`);
	return model;
}

async function ensureProductVariantModel(
	client: Client,
	variantBlock: ItemTypeRecord,
): Promise<{ model: ItemTypeRecord; copiedKeys: string[] }> {
	const itemTypes = await client.itemTypes.list();
	let model = itemTypes.find((t) => t.api_key === NEW_MODEL_API_KEY);

	if (!model) {
		console.log(`Creating model "${NEW_MODEL_API_KEY}"…`);
		model = await client.itemTypes.create({
			name: NEW_MODEL_NAME,
			api_key: NEW_MODEL_API_KEY,
			singleton: false,
			draft_mode_active: false,
			draft_saving_active: false,
		});
	} else {
		console.log(`Model "${NEW_MODEL_API_KEY}" already exists — reusing`);
	}

	const existing = await client.fields.list(model.id);
	const existingKeys = new Set(existing.map((f) => f.api_key));
	const source = (await client.fields.list(variantBlock.id)).sort(
		(a, b) => a.position - b.position,
	);

	const copiedKeys: string[] = [];
	for (const field of source) {
		copiedKeys.push(field.api_key);
		if (existingKeys.has(field.api_key)) continue;

		const body = {
			label: field.label,
			api_key: field.api_key,
			field_type: field.field_type,
			localized: field.localized,
			hint: field.hint ?? undefined,
			position: field.position,
			validators: field.validators ?? {},
			default_value: field.default_value ?? undefined,
			appearance: field.appearance,
		} as FieldCreateBody;

		try {
			await client.fields.create(model.id, body);
			console.log(`  + ${field.api_key} (${field.field_type})`);
		} catch (err) {
			if (err instanceof ApiError && err.findError('TAKE_FIELD_API_KEY')) continue;
			// some editors aren't valid on regular models — retry without appearance
			if (body.appearance) {
				const { appearance: _appearance, ...rest } = body;
				await client.fields.create(model.id, rest as FieldCreateBody);
				console.log(`  + ${field.api_key} (${field.field_type}, default editor)`);
				continue;
			}
			throw err;
		}
	}

	return { model, copiedKeys };
}

async function swapVariantsField(
	client: Client,
	productModel: ItemTypeRecord,
	productVariant: ItemTypeRecord,
): Promise<FieldRecord> {
	const fields = await client.fields.list(productModel.id);
	let variantsField = fields.find((f) => f.api_key === VARIANTS_FIELD_API_KEY);

	if (variantsField?.field_type === 'links') {
		console.log('`variants` is already a links field — skipping swap');
		return variantsField;
	}

	if (!variantsField) throw new Error('`product_model.variants` field not found');

	console.log(`Renaming \`variants\` -> \`${LEGACY_FIELD_API_KEY}\`…`);
	await client.fields.update(variantsField.id, {
		api_key: LEGACY_FIELD_API_KEY,
		label: `${variantsField.label} (legacy)`,
	});

	console.log('Creating new `variants` links field…');
	variantsField = await client.fields.create(productModel.id, {
		label: variantsField.label,
		api_key: VARIANTS_FIELD_API_KEY,
		field_type: 'links',
		hint: variantsField.hint ?? undefined,
		validators: {
			items_item_type: {
				item_types: [productVariant.id],
			},
		},
	} as FieldCreateBody);

	return variantsField;
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

async function migrateContent(
	client: Client,
	productModelId: string,
	productVariantId: string,
	copiedKeys: string[],
): Promise<number> {
	let products = 0;
	let created = 0;
	let errors = 0;

	const iterator = client.items.listPagedIterator({
		filter: { type: PRODUCT_TYPE },
		version: 'current',
		nested: true,
	});

	for await (const raw of iterator) {
		const product = raw as unknown as NestedProduct;
		const modelBlocks = (product.models ?? []).filter(
			(b): b is NestedBlock => typeof b !== 'string',
		);
		if (!modelBlocks.length) continue;

		const wasPublished = product.meta?.status === 'published';
		const modelsPayload: unknown[] = [];
		let dirty = false;

		for (const modelBlock of modelBlocks) {
			const legacy = modelBlock.attributes[LEGACY_FIELD_API_KEY] as NestedBlock[] | undefined;

			if (!legacy?.length) {
				modelsPayload.push(modelBlock.id);
				continue;
			}

			const linkIds: string[] = [];
			for (const variant of legacy) {
				try {
					const attributes: Record<string, unknown> = {};
					for (const key of copiedKeys) {
						if (variant.attributes[key] !== undefined) {
							attributes[key] = variant.attributes[key];
						}
					}

					const record = await client.items.create({
						item_type: { type: 'item_type', id: productVariantId },
						...attributes,
					} as never);

					if (wasPublished) await client.items.publish(record.id);
					linkIds.push(record.id);
					created++;
				} catch (err) {
					errors++;
					console.error(
						`  ! failed to create variant for model ${modelBlock.id}:`,
						err instanceof ApiError ? JSON.stringify(err.errors) : err,
					);
				}
			}

			modelsPayload.push(
				buildBlockRecord({
					id: modelBlock.id,
					__itemTypeId: productModelId,
					...modelBlock.attributes,
					variants: linkIds,
				} as never),
			);
			dirty = true;
		}

		if (dirty) {
			try {
				await client.items.update(product.id, { models: modelsPayload } as never);
				if (wasPublished) await client.items.publish(product.id);
			} catch (err) {
				errors++;
				console.error(`  ! failed to update product ${product.id}:`, err);
			}
		}

		products++;
		if (products % 25 === 0) {
			console.log(`  … ${products} products, ${created} variants created, ${errors} errors`);
		}
	}

	console.log(
		`Migrated ${products} products: ${created} product_variant records created, ${errors} errors`,
	);

	return errors;
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

async function main(): Promise<void> {
	const started = Date.now();
	console.log(`\n=== variants migration (target env: "${ENV}") ===\n`);

	const client = await prepareEnvironment();

	const itemTypes = await client.itemTypes.list();
	const productModel = findModel(itemTypes, PRODUCT_MODEL_API_KEY, true);
	const variantBlock = findModel(itemTypes, VARIANT_BLOCK_API_KEY, true);

	console.log('\nCopying variant block fields to product_variant…');
	const { model: productVariant, copiedKeys } = await ensureProductVariantModel(
		client,
		variantBlock,
	);

	console.log('\nSwapping product_model.variants field…');
	await swapVariantsField(client, productModel, productVariant);

	console.log('\nMigrating content…');
	const errors = await migrateContent(client, productModel.id, productVariant.id, copiedKeys);

	// Cleanup: drop the legacy Modular Content field (and its inline blocks).
	// Skipped when content migration had errors so no variant data is lost.
	const fields = await client.fields.list(productModel.id);
	const legacy = fields.find((f) => f.api_key === LEGACY_FIELD_API_KEY);
	if (legacy && errors === 0) {
		console.log(`\nDestroying legacy field \`${LEGACY_FIELD_API_KEY}\`…`);
		await client.fields.destroy(legacy.id);
	} else if (legacy) {
		console.warn(
			`\n${errors} error(s) during migration — keeping \`${LEGACY_FIELD_API_KEY}\` for safety.`,
		);
	}

	const elapsed = ((Date.now() - started) / 1000).toFixed(1);
	console.log(`\nDone in ${elapsed}s — environment "${ENV}" is ready for review.`);
	console.log('The `variant` block model is now unused and can be destroyed manually if desired.');
}

if (process.env.SKIP !== '1') {
	main().catch((err) => {
		if (err instanceof ApiError) {
			console.error('API Error:', err.response.status);
			console.error('Errors:', JSON.stringify(err.errors, null, 2));
		} else {
			console.error(err);
		}
		process.exitCode = 1;
	});
}
