import 'dotenv/config';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { ApiError, buildBlockRecord, buildClient } from '@datocms/cma-client';
import type { ItemTypeDefinition } from '@datocms/cma-client';
import type {
	Item,
	ItemInNestedResponse,
} from '@datocms/cma-client/dist/types/generated/ApiTypes.js';
import {
	Product,
	ProductAccessory,
	ProductLightsource,
	ProductModel,
	ProductVariant,
} from '../../types/datocms-cma.d';

const require = createRequire(import.meta.url);
const XLSX = require('xlsx') as {
	readFile: (path: string) => {
		SheetNames: string[];
		Sheets: Record<string, unknown>;
	};
	utils: {
		sheet_to_json: <T>(ws: unknown, opts: { range: number; defval: null; raw: boolean }) => T[];
	};
};

const ENV = 'dev';
const XLSX_PATH = 'articles_update.xlsx';

// Item type ids (from types/datocms-cma.d.ts)
const PRODUCT_TYPE = Product.ID;
const PRODUCT_MODEL_TYPE = ProductModel.ID; // block inside product.models
const PRODUCT_MASTER_DATA_KEY = 'product_mdm';
const PRODUCT_VARIANT_TYPE = ProductVariant.ID; // record linked by product_model.variants
const PRODUCT_LIGHTSOURCE_TYPE = ProductLightsource.ID;
const PRODUCT_ACCESSORY_TYPE = ProductAccessory.ID;

type SheetRow = Partial<
	Record<
		| 'Varumärke'
		| 'Leverantör'
		| 'Leverantörens artikelnr'
		| 'Produktnamn'
		| 'Produkttyp'
		| 'Basfärg (ex röd, blå)'
		| string,
		string | number | null
	>
>;

type VariantRecord = ItemInNestedResponse<ProductVariant>;

type NestedBlock = {
	id: string;
	attributes: Record<string, unknown>;
};

/* ------------------------------------------------------------------ */
/* Sanitization                                                        */
/* ------------------------------------------------------------------ */

function sanitizeText(value: string | number | null | undefined): string | null {
	if (value === null || value === undefined) return null;
	let s = String(value).replace(/\s+/g, ' ').trim();
	if (!s || /^(nej|no|-|n\/?a)$/i.test(s)) return null;
	// Collapse ALL-CAPS display text ("NEJ"→null, "Olivgrön" preserved, "BLACK"→"Black");
	// never touch values containing digits (article numbers like "36124-30S-000")
	if (!/\d/.test(s) && s === s.toUpperCase() && s.length > 3) s = s.toLowerCase();
	return s.charAt(0).toUpperCase() + s.slice(1);
}
function sanitizeUrl(value: string | number | null | undefined): string | null {
	return sanitizeText(value)?.toLowerCase() ?? null;
}

type Locales = 'sv' | 'en' | 'no' | 'da' | 'en-GB';

const EN_TRANSLATIONS: Record<string, string> = {
	'svart': 'Black',
	'vit': 'White',
	'grå': 'Grey',
	'mörkgrå': 'Dark grey',
	'ljusgrå': 'Light grey',
	'röd': 'Red',
	'blå': 'Blue',
	'grön': 'Green',
	'gul': 'Yellow',
	'orange': 'Orange',
	'brun': 'Brown',
	'beige': 'Beige',
	'mässing': 'Brass',
	'krom': 'Chrome',
	'nickel': 'Nickel',
	'koppar': 'Copper',
	'silver': 'Silver',
	'varmgrå': 'Warm grey',
	'tallgrön': 'Pine green',
	'olivgrön': 'Olive green',
	'ljusblå': 'Light blue',
	'textil': 'Textile',
	'plast': 'Plastic',
	'transparent': 'Transparent',
	// lamp_switch
	'på sladden': 'On the cord',
	'på sladd': 'On the cord',
	'på armaturen': 'On the luminaire',
	'ja': 'Yes',
};

function toLocalized(
	value: string | number | null | undefined,
): Partial<Record<Locales, string>> | null {
	const sv = sanitizeText(value);
	if (!sv) return null;
	const en = EN_TRANSLATIONS[sv.toLowerCase()] ?? sv;
	return { sv, en, 'no': sv, 'da': sv, 'en-GB': en };
}

function toFloat(value: string | number | null | undefined): number | null {
	if (value === null || value === undefined || value === '') return null;
	const n = Number(
		String(value)
			.replace(',', '.')
			.replace(/[^\d.-]/g, ''),
	);
	return Number.isNaN(n) ? null : n;
}

function toInt(value: string | number | null | undefined): number | null {
	if (value === null || value === undefined || value === '') return null;
	const n = Number(
		String(value)
			.replace(',', '.')
			.replace(/[^\d.-]/g, ''),
	);
	return Number.isNaN(n) ? null : n;
}

function toBool(value: string | number | null | undefined): boolean {
	const s = String(value ?? '')
		.trim()
		.toLowerCase();
	return /^(ja|yes|true|1|x)$/.test(s);
}

/* ------------------------------------------------------------------ */
/* Spreadsheet parsing (row 3 = headers, row 4+ = data)                */
/* ------------------------------------------------------------------ */

function parseXlsx(): SheetRow[] {
	const wb = XLSX.readFile(XLSX_PATH);
	const ws = wb.Sheets[wb.SheetNames[0]];
	if (!ws) throw new Error('No worksheet found');
	// Rows are 0-indexed in the lib → header row 3, data from row 4
	const rows = XLSX.utils.sheet_to_json<SheetRow>(ws, {
		range: 2,
		defval: null,
		raw: true,
	});
	return rows.filter((r) => sanitizeText(r['Leverantörens artikelnr']));
}

type RowData = {
	article_no: string;
	ean: string | null;
	// one product_master_data record per product model —
	// model-level values + dims from the first matched article row
	master_data: Record<string, unknown>;
	variant: Record<string, unknown>;
	lightsource: Record<string, unknown>;
	accessory: Record<string, unknown>;
};

function rowToData(row: SheetRow): RowData {
	const article_no = sanitizeText(row['Leverantörens artikelnr']) ?? '';
	const ean = sanitizeText(row['EAN']);
	return {
		article_no,
		ean,
		master_data: {
			lightsource_exchangeable: toBool(row['Är ljuskällan utbytbar? (om ljuskälla ingår)']),
			lightsource_type: toLocalized(row['Typ av ljuskälla (om ljuskälla ingår)']),
			ceiling_rose_color: toLocalized(row['Takkopp färg']),
			lamp_switch: toLocalized(row['Brytare var (på sladden/på armaturen/nej)']),
			cable_color: toLocalized(row['Sladdfärg']),
			cable_type: toLocalized(row['Typ av sladd (textil/plast)']),
			dimmable: toBool(row['Dimbar (ja/nej)']),
			dimmer_included: toBool(row['Dimmer inkl. (ja/nej)']),
			length: toFloat(row['Produktlängd (cm)']),
			width: toFloat(row['Produktbredd (cm)']),
			height: toFloat(row['Produkthöjd (cm)']),
			depth: toFloat(row['Produktdjup (cm)']),
			diameter: toFloat(row['Produktens diameter (cm)']),
			lampshade_height: toFloat(row['Lampskärm höjd (cm)']),
			ceiling_rose_included: toBool(row['Takkopp ingår (om taklampa)']),
			lampshade_included: toBool(row['Ingår lampupphängning']),
			cable_length: sanitizeText(row['Sladdlängd (m)']),
		},
		variant: {},
		lightsource: {},
		accessory: {},
	};
}

/* ------------------------------------------------------------------ */
/* Field definitions                                                   */
/* ------------------------------------------------------------------ */

type FieldDef = {
	label: string;
	api_key: string;
	field_type: 'string' | 'float' | 'boolean' | 'integer';
	localized?: boolean;
	validators?: Record<string, unknown>;
	hint?: string;
};

const VARIANT_FIELDS: FieldDef[] = [
	{
		label: 'EAN',
		api_key: 'ean',
		field_type: 'integer',
		// note: `required` would fail because legacy variants have no EAN values
	},
];

// product_master_data record — linked (single_item) from the product_model block.
// Localized string fields are allowed here because it is a standalone model.
const MASTER_DATA_FIELDS: FieldDef[] = [
	{ label: 'Length (cm)', api_key: 'length', field_type: 'float' },
	{ label: 'Width (cm)', api_key: 'width', field_type: 'float' },
	{ label: 'Height (cm)', api_key: 'height', field_type: 'float' },
	{ label: 'Depth (cm)', api_key: 'depth', field_type: 'float' },
	{
		label: 'Diameter (cm)',
		api_key: 'diameter',
		field_type: 'float',
	},
	{
		label: 'Lampshade height (cm)',
		api_key: 'lampshade_height',
		field_type: 'float',
	},
	{
		label: 'Cable length (m)',
		api_key: 'cable_length',
		field_type: 'string',
	},
	{
		label: 'Lightsource type (if lightsource included)',
		api_key: 'lightsource_type',
		field_type: 'string',
		localized: true,
	},
	{
		label: 'Ceiling rose color',
		api_key: 'ceiling_rose_color',
		field_type: 'string',
		localized: true,
	},
	{
		label: 'Switch location (on the cord / on the fixture / none)',
		api_key: 'lamp_switch',
		field_type: 'string',
		localized: true,
	},
	{
		label: 'Cable color',
		api_key: 'cable_color',
		field_type: 'string',
		localized: true,
	},
	{
		label: 'Cable type (textile/plastic)',
		api_key: 'cable_type',
		field_type: 'string',
		localized: true,
	},

	{
		label: 'Dimmable (yes/no)',
		api_key: 'dimmable',
		field_type: 'boolean',
	},
	{
		label: 'Dimmer included (yes/no)',
		api_key: 'dimmer_included',
		field_type: 'boolean',
	},
	{
		label: 'Lightsource replaceable (if lightsource included)',
		api_key: 'lightsource_exchangeable',
		field_type: 'boolean',
	},
	{
		label: 'Ceiling rose included (if ceiling lamp)',
		api_key: 'ceiling_rose_included',
		field_type: 'boolean',
	},
	{
		label: 'Lamp suspension included',
		api_key: 'lampshade_included',
		field_type: 'boolean',
	},
];

// api keys on other models that were superseded by product_master_data
const LEGACY_MODEL_FIELD_KEYS = [
	'lightsource_exchangeable',
	'lightsource_type',
	'ceiling_rose_color',
	'lamp_switch',
	'cable_color',
	'cable_type',
	'dimmable',
	'dimmer_included',
];
const LEGACY_VARIANT_FIELD_KEYS = [
	'length',
	'width',
	'height',
	'depth',
	'diameter',
	'lampshade_height',
	'ceiling_rose_included',
	'lampshade_included',
	'cable_length',
];
const LIGHTSOURCE_FIELDS: FieldDef[] = [];
const ACCESSORY_FIELDS: FieldDef[] = [];

/* ------------------------------------------------------------------ */
/* Environment + schema                                                */
/* ------------------------------------------------------------------ */

async function prepareEnvironment(): Promise<ReturnType<typeof buildClient>> {
	const base = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN as string });
	const environments = await base.environments.list();
	const target = environments.find((e) => e.id === ENV);
	if (target) {
		if (target.meta.primary) throw new Error(`${ENV} is the primary environment`);
		console.log(`Deleting existing environment "${ENV}"…`);
		await base.environments.destroy(target.id);
	}
	const primary = environments.find((e) => e.meta.primary);
	if (!primary) throw new Error('No primary environment found');
	console.log(`Forking "${primary.id}" into "${ENV}"…`);
	const forked = await base.environments.fork(primary.id, { id: ENV });
	console.log(`Environment "${forked.id}" created`);
	return buildClient({
		apiToken: process.env.DATOCMS_API_TOKEN as string,
		environment: ENV,
	});
}

type CreateFieldBody = Parameters<ReturnType<typeof buildClient>['fields']['create']>[1];

// Fields downgraded from localized when the platform rejects them
async function createField(
	client: ReturnType<typeof buildClient>,
	itemTypeId: string,
	def: FieldDef,
): Promise<void> {
	const makeBody = (localized: boolean): CreateFieldBody =>
		({
			label: def.label,
			field_type: def.field_type,
			api_key: def.api_key,
			localized,
			validators: def.validators,
			hint: def.hint,
		}) as CreateFieldBody;
	for (let attemptLocalized = def.localized === true; ; attemptLocalized = false) {
		try {
			await client.fields.create(itemTypeId, makeBody(attemptLocalized));
			if (def.localized && !attemptLocalized) {
				console.log(
					`  + field ${def.api_key} on ${itemTypeId} (localized not allowed here → non-localized)`,
				);
			} else {
				console.log(`  + field ${def.api_key} on ${itemTypeId}`);
			}
			return;
		} catch (err) {
			if (err instanceof ApiError && err.findError('TAKE_FIELD_API_KEY')) {
				console.log(`  · field ${def.api_key} already exists on ${itemTypeId} (upsert)`);
				return;
			}
			const isLocalizedRejection =
				attemptLocalized &&
				err instanceof ApiError &&
				err.errors.some(
					(e) =>
						e.attributes.code === 'INVALID_FIELD' &&
						(e.attributes.details as { field?: string } | undefined)?.field === 'localized',
				);
			if (isLocalizedRejection) continue;
			console.error(`  ! failed creating field ${def.api_key} on ${itemTypeId}:`, err);
			throw err;
		}
	}
}

/* ------------------------------------------------------------------ */
/* product_master_data schema                                          */
/* ------------------------------------------------------------------ */

type ItemTypeRecord = {
	id: string;
	api_key: string;
};

type Client = ReturnType<typeof buildClient>;

async function ensureMasterDataModel(client: Client): Promise<ItemTypeRecord> {
	const itemTypes = await client.itemTypes.list();
	let itemType = itemTypes.find((t) => t.api_key === PRODUCT_MASTER_DATA_KEY);
	if (!itemType) {
		console.log(`Creating item type "${PRODUCT_MASTER_DATA_KEY}"…`);
		itemType = await client.itemTypes.create({
			name: 'Product master data',
			api_key: PRODUCT_MASTER_DATA_KEY,
			singleton: false,
			draft_mode_active: false,
			draft_saving_active: false,
		} as never);
		console.log(`  + item type ${PRODUCT_MASTER_DATA_KEY}`);
	}
	return { id: itemType.id, api_key: itemType.api_key };
}

async function addMasterDataLinkField(
	client: Client,
	productModelId: string,
	masterDataId: string,
): Promise<void> {
	const existing = await client.fields.list(productModelId);
	if (existing.some((f) => f.api_key === 'master_data')) {
		console.log('  · product_model.master_data link already exists');
		return;
	}
	await client.fields.create(productModelId, {
		label: 'Master data',
		api_key: 'master_data',
		field_type: 'link',
		validators: { item_item_type: { item_types: [masterDataId] } },
	} as CreateFieldBody);
	console.log('  + product_model.master_data link field');
}

async function destroyLegacyFields(
	client: Client,
	itemTypeId: string,
	apiKeys: string[],
): Promise<void> {
	const existing = await client.fields.list(itemTypeId);
	for (const apiKey of apiKeys) {
		const field = existing.find((f) => f.api_key === apiKey);
		if (!field) continue;
		try {
			await client.fields.destroy(field.id);
			console.log(`  - removed legacy field ${apiKey} on ${itemTypeId}`);
		} catch (err) {
			console.log(`  · could not remove legacy field ${apiKey}:`, (err as Error).message);
		}
	}
}

// link values come back either as string ids (nested) or objects with an id
function linkIdOf(value: unknown): string | undefined {
	if (typeof value === 'string') return value;
	if (value && typeof value === 'object' && 'id' in (value as Record<string, unknown>)) {
		return String((value as { id: string }).id);
	}
	return undefined;
}

/* ------------------------------------------------------------------ */
/* Publishing helper                                                   */
/* ------------------------------------------------------------------ */

async function republishIfPublished(
	client: ReturnType<typeof buildClient>,
	id: string,
): Promise<void> {
	try {
		const item = await client.items.find(id, { version: 'published' });
		if (item) await client.items.publish(id);
	} catch (err) {
		if (!(err instanceof ApiError)) throw err;
	}
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

export async function testParse(): Promise<RowData[]> {
	return parseXlsx().map(rowToData);
}

// listPagedIterator exposes fields at top level, find(nested) returns raw
// records (article_no inside .attributes) — support both shapes
function articleOf(item: {
	article_no?: string | null;
	attributes?: { article_no?: string | null };
}): string {
	return String(item.article_no ?? item.attributes?.article_no ?? '');
}

async function listAll<T extends ItemTypeDefinition>(
	client: ReturnType<typeof buildClient>,
	type: string,
): Promise<Item<T>[]> {
	const items: Item<T>[] = [];
	for await (const item of client.items.listPagedIterator<T>({
		version: 'current',
		filter: { type },
	}))
		items.push(item);
	return items;
}

async function main(): Promise<void> {
	if (!fs.existsSync(XLSX_PATH)) throw new Error(`${XLSX_PATH} not found`);
	const rows = parseXlsx().map(rowToData);
	console.log(`Parsed ${rows.length} article rows`);
	const byArticle = new Map(rows.map((r) => [r.article_no.toUpperCase(), r]));

	const client = await prepareEnvironment();

	console.log('Ensuring schema fields…');
	const masterDataModel = await ensureMasterDataModel(client);
	for (const def of MASTER_DATA_FIELDS) await createField(client, masterDataModel.id, def);
	await addMasterDataLinkField(client, PRODUCT_MODEL_TYPE, masterDataModel.id);
	await destroyLegacyFields(client, PRODUCT_MODEL_TYPE, LEGACY_MODEL_FIELD_KEYS);
	await destroyLegacyFields(client, PRODUCT_VARIANT_TYPE, LEGACY_VARIANT_FIELD_KEYS);
	for (const def of VARIANT_FIELDS) await createField(client, PRODUCT_VARIANT_TYPE, def);
	for (const def of LIGHTSOURCE_FIELDS) await createField(client, PRODUCT_LIGHTSOURCE_TYPE, def);
	for (const def of ACCESSORY_FIELDS) await createField(client, PRODUCT_ACCESSORY_TYPE, def);

	/* ---------------- Lightsource + accessory lookup ---------------- */

	const lightsources = await listAll<ProductLightsource>(client, PRODUCT_LIGHTSOURCE_TYPE);

	let updatedLightsources = 0;
	for (const item of lightsources) {
		const row = byArticle.get((item.article_no ?? '').toUpperCase());
		if (!row || !row.lightsource.eprel_url) continue;
		const was = item.meta.status;
		await client.items.update(item.id, row.lightsource as never);
		if (was === 'published') await client.items.publish(item.id);
		updatedLightsources++;
	}
	console.log(`Updated ${updatedLightsources} product_lightsource records`);

	const accessories = await listAll<ProductAccessory>(client, PRODUCT_ACCESSORY_TYPE);
	const matchedAccessories = accessories.filter((item) =>
		byArticle.has((item.article_no ?? '').toUpperCase()),
	);
	console.log(`Matched ${matchedAccessories.length} product_accessory records`);

	/* ---------------- Products → models → variants ------------------ */

	const itemTypes = await client.itemTypes.list();
	const modelBlockId = itemTypes.find((t) => t.api_key === 'product_model')!.id;
	const lightsourceBlockId = itemTypes.find((t) => t.api_key === 'lightsource')!.id;
	const accessoryBlockId = itemTypes.find((t) => t.api_key === 'accessory')!.id;

	const products = await listAll<Product>(client, PRODUCT_TYPE);

	// one product_master_data record per model, identified by the first
	// matched article row; reuse existing records (idempotent re-runs)
	const masterDataByKey = new Map<string, string>();
	for (const record of await listAll<ItemTypeDefinition>(client, masterDataModel.id)) {
		const key = articleOf(record as any).toUpperCase();
		if (key) masterDataByKey.set(key, record.id);
	}

	let updatedModels = 0;
	let updatedVariants = 0;

	// EAN lives on product_variant records. Model-level values + dims live on
	// a product_master_data record linked from the product_model block, which
	// is rewritten through its parent product item using buildBlockRecord.
	for (const product of products) {
		const item = await client.items.find<Product>(product.id, { nested: true });
		const models = (item.models ?? []) as unknown as NestedBlock[];
		const wasPublished = product.meta?.status === 'published';

		const modelsPayload: unknown[] = [];
		let productDirty = false;
		let masterDataWrites = 0;

		for (const model of models) {
			const variantIds = (model.attributes.variants ?? []) as string[];

			const variantRecords: VariantRecord[] = [];
			for (const id of variantIds) {
				try {
					variantRecords.push(await client.items.find<ProductVariant>(id, { nested: true }));
				} catch (err) {
					// stale/dangling links in product_model.variants → skip
					if (!(err instanceof ApiError) || !err.findError('NOT_FOUND')) {
						throw err;
					}
				}
			}

			const matched = variantRecords.flatMap((v) => {
				const row = byArticle.get(articleOf(v).toUpperCase());
				return row ? [{ v, row }] : [];
			});

			// EAN lives on the product_variant record
			for (const { v, row } of matched) {
				const ean = (row.ean ?? (v as VariantRecord & { ean?: string }).ean ?? '') as string;
				try {
					await client.items.update(v.id, { ...row.variant, ean } as never);
					await republishIfPublished(client, v.id);
					updatedVariants++;
				} catch (err) {
					console.log('failed to update variant', v.id, row.variant, ean);
					throw err;
				}
			}

			// Create or update the product_master_data record for this model
			// (first matched article row wins), then link it from the block
			let masterDataId: string | undefined;
			const modelRow = matched[0]?.row;
			if (modelRow) {
				const key = modelRow.article_no.toUpperCase();
				const attrs: Record<string, unknown> = {};
				for (const [k, val] of Object.entries(modelRow.master_data)) {
					if (val === null || val === undefined) continue;
					attrs[k] = val;
				}
				const existingId = masterDataByKey.get(key);
				try {
					if (existingId) {
						await client.items.update(existingId, attrs as never);
						await republishIfPublished(client, existingId);
						masterDataId = existingId;
					} else {
						// on create, localized fields must be provided as a
						// hash containing every locale (null values inside are ok)
						const nullLocalized = Object.fromEntries(
							['sv', 'en', 'no', 'da', 'en-GB'].map((l) => [l, null]),
						);
						for (const def of MASTER_DATA_FIELDS) {
							if (def.api_key in attrs) continue;
							attrs[def.api_key] = def.localized ? nullLocalized : null;
						}
						const created = await client.items.create({
							item_type: { type: 'item_type', id: masterDataModel.id },
							...attrs,
						} as never);
						if (wasPublished) await client.items.publish(created.id);
						masterDataByKey.set(key, created.id);
						masterDataId = created.id;
					}
				} catch (err) {
					console.error(`  ! failed writing master data for article ${key}:`, err);
					console.log(attrs);
					throw err;
				}
			}
			const currentMasterDataId = linkIdOf(model.attributes.master_data);
			if (masterDataId) masterDataWrites++;

			// Rebuild every model block (variants links are passed through unchanged)
			modelsPayload.push(
				buildBlockRecord({
					item_type: { type: 'item_type', id: modelBlockId },
					id: model.id,
					name: model.attributes.name,
					drawing: model.attributes.drawing,
					master_data: masterDataId ?? currentMasterDataId,
					lightsources: ((model.attributes.lightsources ?? []) as NestedBlock[]).map(
						(l: NestedBlock) =>
							buildBlockRecord({
								item_type: { type: 'item_type', id: lightsourceBlockId },
								id: l.id,
								...l.attributes,
							}),
					),
					accessories: ((model.attributes.accessories ?? []) as NestedBlock[]).map(
						(a: NestedBlock) =>
							buildBlockRecord({
								item_type: { type: 'item_type', id: accessoryBlockId },
								id: a.id,
								...a.attributes,
							}),
					),
					variants: model.attributes.variants,
				} as never),
			);

			if (matched.length || masterDataId) productDirty = true;
		}

		if (!productDirty) continue;

		try {
			await client.items.update(product.id, { models: modelsPayload } as never);
			await republishIfPublished(client, product.id);
			updatedModels += masterDataWrites;
		} catch (err) {
			console.error(`  ! failed updating models of product ${product.id}:`, err);
			throw err;
		}
		process.stdout.write('.');
	}
	console.log(`Updated ${updatedModels} models / ${updatedVariants} variants / master data linked`);

	console.log('Done — run it again safely (idempotent upserts).');
}

if (process.env.SKIP !== '1') {
	main().catch((err) => {
		console.error(err);
		err.errors && console.log(JSON.stringify(err.errors, null, 2));
		process.exitCode = 1;
	});
}
