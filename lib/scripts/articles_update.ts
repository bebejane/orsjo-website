import 'dotenv/config';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import {
	buildBlockRecord,
	buildClient,
	ApiError,
} from '@datocms/cma-client';

const require = createRequire(import.meta.url);
const XLSX = require('xlsx') as {
	readFile: (path: string) => {
		SheetNames: string[];
		Sheets: Record<string, unknown>;
	};
	utils: {
		sheet_to_json: <T>(
			ws: unknown,
			opts: { range: number; defval: null; raw: boolean },
		) => T[];
	};
};
import type {
	Product,
	ProductAccessory,
	ProductLightsource,
	ProductModel,
	Variant,
} from '@/types/datocms-cma';
import type { Item } from '@datocms/cma-client/dist/types/generated/ApiTypes.js';

const ENV = 'dev';
const XLSX_PATH = 'articles_update.xlsx';

// Item type ids (from types/datocms-cma.d.ts)
const PRODUCT_TYPE = '1801291';
const PRODUCT_MODEL_TYPE = '1801307'; // block inside product.models
const VARIANT_TYPE = '1801308'; // block inside model.variants
const PRODUCT_LIGHTSOURCE_TYPE = '1801292';
const PRODUCT_ACCESSORY_TYPE = 'ZU6qDmJWRnGkIqsGWmJa2A';

type ExtendedVariant = Variant & { attributes: { ean?: string; article_no?: string } };
type ExtendedModel = ProductModel & {
	attributes: { variants?: string[]; [k: string]: unknown };
};

type SheetRow = Partial<Record<
	| 'Varumärke'
	| 'Leverantör'
	| 'Leverantörens artikelnr'
	| 'Produktnamn'
	| 'Produkttyp'
	| 'Basfärg (ex röd, blå)'
	| string,
	string | number | null
>>;

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

type Locales = 'sv' | 'en' | 'no' | 'da' | 'en-GB';

const EN_TRANSLATIONS: Record<string, string> = {
	svart: 'Black',
	vit: 'White',
	grå: 'Grey',
	mörkgrå: 'Dark grey',
	ljusgrå: 'Light grey',
	röd: 'Red',
	blå: 'Blue',
	grön: 'Green',
	gul: 'Yellow',
	orange: 'Orange',
	brun: 'Brown',
	beige: 'Beige',
	mässing: 'Brass',
	krom: 'Chrome',
	nickel: 'Nickel',
	koppar: 'Copper',
	silver: 'Silver',
	varmgrå: 'Warm grey',
	tallgrön: 'Pine green',
	olivgrön: 'Olive green',
	ljusblå: 'Light blue',
	textil: 'Textile',
	plast: 'Plastic',
	transparent: 'Transparent',
};

function toLocalized(
	value: string | number | null | undefined,
): Partial<Record<Locales, string>> | null {
	const sv = sanitizeText(value);
	if (!sv) return null;
	const en = EN_TRANSLATIONS[sv.toLowerCase()] ?? sv;
	return { sv, en, no: sv, da: sv, 'en-GB': en };
}

const toBlockLocalized = sanitizeText;

function toFloat(value: string | number | null | undefined): number | null {
	if (value === null || value === undefined || value === '') return null;
	const n = Number(String(value).replace(',', '.').replace(/[^\d.-]/g, ''));
	return Number.isNaN(n) ? null : n;
}

function toBool(value: string | number | null | undefined): boolean {
	const s = String(value ?? '').trim().toLowerCase();
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
	model: Record<string, unknown>;
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
		model: {
			lightsource_exchangeable: toBool(
				row['Är ljuskällan utbytbar? (om ljuskälla ingår)'],
			),
			lightsource_type: toLocalized(
				row['Typ av ljuskälla (om ljuskälla ingår)'],
			),
			ceiling_rose_color: toLocalized(row['Takkopp färg']),
			lamp_switch: sanitizeText(row['Brytare var (på sladden/på armaturen/nej)']),
			cable_color: toLocalized(row['Sladdfärg']),
			cable_type: toLocalized(row['Typ av sladd (textil/plast)']),
			dimmable: toBool(row['Dimbar (ja/nej)']),
			dimmer_included: toBool(row['Dimmer inkl. (ja/nej)']),
		},
		// per-article values: dimensions etc. vary between variants of a model,
		// so they live on the Variant block for 1:1 correspondence with the xlsx
		variant: {
			dimension_length: toFloat(row['Produktlängd (cm)']),
			dimension_width: toFloat(row['Produktbredd (cm)']),
			dimension_height: toFloat(row['Produkthöjd (cm)']),
			dimension_depth: toFloat(row['Produktdjup (cm)']),
			dimensions_diameter: toFloat(row['Produktens diameter (cm)']),
			lampshade_height: toFloat(row['Lampskärm höjd (cm)']),
			ceiling_rose_included: toBool(row['Takkopp ingår (om taklampa)']),
			lampshade_included: toBool(row['Ingår lampupphängning']),
			cable_length: sanitizeText(row['Sladdlängd (m)']),
		},
		lightsource: {
			eprel_url: sanitizeText(row['Eprel-länk']),
		},
		accessory: {},
	};
}

/* ------------------------------------------------------------------ */
/* Field definitions                                                   */
/* ------------------------------------------------------------------ */

type FieldDef = {
	label: string;
	api_key: string;
	field_type: 'string' | 'float' | 'boolean';
	localized?: boolean;
	validators?: Record<string, unknown>;
	hint?: string;
};

const VARIANT_FIELDS: FieldDef[] = [
	{
		label: 'EAN',
		api_key: 'ean',
		field_type: 'string',
		// note: `unique` validator is not applicable inside a modular block;
		// `required` would also fail because legacy variants have no EAN values
	},
];

// product.model → the ProductModel block; localized string fields are
// attempted as localized:true with automatic downgrade to non-localized
// (modular blocks reject localized fields on this project)
const MODEL_FIELDS: FieldDef[] = [
	{
		label: 'Är ljuskällan utbytbar? (om ljuskälla ingår)',
		api_key: 'lightsource_exchangeable',
		field_type: 'boolean',
	},
	{
		label: 'Typ av ljuskälla (om ljuskälla ingår)',
		api_key: 'lightsource_type',
		field_type: 'string',
		localized: true,
	},
	{
		label: 'Takkopp färg',
		api_key: 'ceiling_rose_color',
		field_type: 'string',
		localized: true,
		hint: 'Ceiling rose color',
	},
	{
		label: 'Brytare var (på sladden/på armaturen/nej)',
		api_key: 'lamp_switch',
		field_type: 'string',
		hint: 'Switch location (on the cord / on the fixture / none)',
	},
	{
		label: 'Sladdfärg',
		api_key: 'cable_color',
		field_type: 'string',
		localized: true,
		hint: 'Cable color',
	},
	{
		label: 'Typ av sladd (textil/plast)',
		api_key: 'cable_type',
		field_type: 'string',
		localized: true,
		hint: 'Cable type (textile/plastic)',
	},
	{
		label: 'Dimbar (ja/nej)',
		api_key: 'dimmable',
		field_type: 'boolean',
	},
	{
		label: 'Dimmer inkl. (ja/nej)',
		api_key: 'dimmer_included',
		field_type: 'boolean',
	},
];

// variant-varying values live on the Variant block for per-article correspondence
const VARIANT_LITERAL_FIELDS: FieldDef[] = [
	{ label: 'Produktlängd (cm)', api_key: 'dimension_length', field_type: 'float' },
	{ label: 'Produktbredd (cm)', api_key: 'dimension_width', field_type: 'float' },
	{ label: 'Produkthöjd (cm)', api_key: 'dimension_height', field_type: 'float' },
	{ label: 'Produktdjup (cm)', api_key: 'dimension_depth', field_type: 'float' },
	{
		label: 'Produktens diameter (cm)',
		api_key: 'dimensions_diameter',
		field_type: 'float',
	},
	{
		label: 'Lampskärm höjd (cm)',
		api_key: 'lampshade_height',
		field_type: 'float',
	},
	{
		label: 'Takkopp ingår (om taklampa)',
		api_key: 'ceiling_rose_included',
		field_type: 'boolean',
	},
	{
		label: 'Ingår lampupphängning',
		api_key: 'lampshade_included',
		field_type: 'boolean',
	},
	{
		label: 'Sladdlängd (m)',
		api_key: 'cable_length',
		field_type: 'string',
		hint: 'Cable length (m)',
	},
];

const LIGHTSOURCE_FIELDS: FieldDef[] = [
	{
		label: 'Eprel-länk',
		api_key: 'eprel_url',
		field_type: 'string',
		validators: { format: { predefined_pattern: 'url' } },
		hint: 'Eprel link',
	},
];

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

type CreateFieldBody = Parameters<
	ReturnType<typeof buildClient>['fields']['create']
>[1];

// Fields downgraded from localized when the platform rejects them
const downgradedLocalized = new Set<string>();

async function createField(
	client: ReturnType<typeof buildClient>,
	itemTypeId: string,
	def: FieldDef,
): Promise<void> {
	const makeBody = (localized: boolean): CreateFieldBody => ({
		label: def.label,
		field_type: def.field_type,
		api_key: def.api_key,
		localized,
		validators: def.validators,
		hint: def.hint,
	});
	for (let attemptLocalized = def.localized === true; ; attemptLocalized = false) {
		try {
			await client.fields.create(itemTypeId, makeBody(attemptLocalized));
			if (def.localized && !attemptLocalized) {
				downgradedLocalized.add(def.api_key);
				console.log(`  + field ${def.api_key} on ${itemTypeId} (localized not allowed here → non-localized)`);
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
						(e.attributes.details as { field?: string } | undefined)?.field ===
							'localized',
				);
			if (isLocalizedRejection) continue;
			console.error(`  ! failed creating field ${def.api_key} on ${itemTypeId}:`, err);
			throw err;
		}
	}
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
		// Blocks without independent publish status live under their parent
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
// items (article_no inside .attributes) — support both shapes
function articleOf(item: {
	article_no?: string | null;
	attributes?: { article_no?: string | null };
}): string {
	return String(item.article_no ?? item.attributes?.article_no ?? '');
}

async function main(): Promise<void> {
	if (!fs.existsSync(XLSX_PATH)) throw new Error(`${XLSX_PATH} not found`);
	const rows = parseXlsx().map(rowToData);
	console.log(`Parsed ${rows.length} article rows`);
	const byArticle = new Map(rows.map((r) => [r.article_no.toUpperCase(), r]));

	const client = await prepareEnvironment();

	console.log('Ensuring schema fields…');
	for (const def of VARIANT_FIELDS) await createField(client, VARIANT_TYPE, def);
	for (const def of VARIANT_LITERAL_FIELDS)
		await createField(client, VARIANT_TYPE, def);
	for (const def of MODEL_FIELDS) await createField(client, PRODUCT_MODEL_TYPE, def);
	for (const def of LIGHTSOURCE_FIELDS)
		await createField(client, PRODUCT_LIGHTSOURCE_TYPE, def);

	/* ---------------- Lightsource + accessory lookup ---------------- */

	const lightsources: Item<ProductLightsource>[] = [];
	for await (const item of client.items.listPagedIterator<ProductLightsource>({
		version: 'current',
		filter: { type: PRODUCT_LIGHTSOURCE_TYPE },
	}))
		lightsources.push(item);

	const accessories: Item<ProductAccessory>[] = [];
	for await (const item of client.items.listPagedIterator<ProductAccessory>({
		version: 'current',
		filter: { type: PRODUCT_ACCESSORY_TYPE },
	}))
		accessories.push(item);

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

	const matchedAccessories = accessories.filter((item) =>
		byArticle.has((item.article_no ?? '').toUpperCase()),
	);
	console.log(`Matched ${matchedAccessories.length} product_accessory records`);

	/* ---------------- Products → models → variants ------------------ */

	const products: Item<Product>[] = [];
	for await (const item of client.items.listPagedIterator<Product>({
		version: 'current',
		filter: { type: PRODUCT_TYPE },
	}))
		products.push(item);

	let updatedModels = 0;
	let updatedVariants = 0;
	// Nested blocks (model + variants) cannot be PUT directly — they must be
	// updated through their parent product item, using buildBlockRecord payloads
	for (const product of products) {
		let productDirty = false;

		for (const modelId of product.models ?? []) {
			let model: ProductModel | undefined;
			try {
				model = await client.items.find<ProductModel>(modelId, {
					nested: true,
				});
			} catch (err) {
				// stale/dangling block references in product.models → skip
				if (!(err instanceof ApiError) || !err.findError('NOT_FOUND')) {
					throw err;
				}
			}
			if (!model) continue;

			type VariantRaw = {
				type: string;
				id: string;
				attributes: { article_no?: string; ean?: string } & Record<
					string,
					unknown
				>;
			};
			const variantItems = (model.variants ?? []) as VariantRaw[];

			// EAN + per-article values live on the variant
			const variantRecords = variantItems.map((v) => {
				const row = byArticle.get(articleOf(v).toUpperCase());
				return {
					v,
					row,
					newEan: row?.ean ?? v.attributes.ean ?? '',
				};
			});
			const touchedVariants = variantRecords.filter((b) => b.row);

			const modelAttrs: Record<string, unknown> = {};
			const modelRow = variantRecords
				.map((b) => b.row)
				.filter((r): r is RowData => Boolean(r))[0];
			if (modelRow) {
				for (const [k, v] of Object.entries(modelRow.model)) {
					if (v === null || v === undefined) continue;
				modelAttrs[k] =
					typeof v === 'object' && downgradedLocalized.has(k)
						? (v as { sv?: string }).sv
						: v;
				}
			}

			if (!touchedVariants.length && !Object.keys(modelAttrs).length) continue;

			const modelRecord = buildBlockRecord<ProductModel>({
				id: String(model.id),
				__itemTypeId: PRODUCT_MODEL_TYPE,
				...modelAttrs,
				variants: variantRecords.map((b) =>
					buildBlockRecord<Variant>({
						id: b.v.id,
						__itemTypeId: VARIANT_TYPE,
						...b.v.attributes,
						...b.row?.variant,
						ean: b.newEan,
					}),
				),
			});

			try {
				await client.items.rawUpdate(product.id, {
					data: {
						type: 'item',
						id: product.id,
						attributes: { models: [modelRecord] },
					},
				});
				if (Object.keys(modelAttrs).length) updatedModels++;
				updatedVariants += touchedVariants.length;
				productDirty = true;
			} catch (err) {
				console.error(
					`  ! failed updating models of product ${product.id}:`,
					err,
				);
				throw err;
			}
		}

		if (productDirty) await republishIfPublished(client, product.id);
	}
	console.log(`Updated ${updatedModels} models / ${updatedVariants} variants (EAN + dims/cable values)`);

	console.log('Done — run it again safely (idempotent upserts).');
}

if (process.env.SKIP !== '1') {
	main().catch((err) => {
		console.error(err);
		process.exitCode = 1;
	});
}
