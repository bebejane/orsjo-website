import { buildBlockRecord, ItemTypeDefinition } from '@datocms/cma-client-browser';
import { readSheet } from 'read-excel-file/node';
import {
	Pricelist,
	Product,
	ProductAccessory,
	ProductLightsource,
	Variant,
} from '@/types/datocms-cma';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument, PricelistDocument } from '@/graphql';
import {
	convertPriceWithRate,
	convertPriceWithRatesAndTaxes,
	getCurrencyRateByLocale,
} from '@/lib/currency';
import { toLanguageLocale } from '@/pricelist/lib/utils';
import { buildClient } from '@datocms/cma-client-node';

import fs from 'fs';
import {
	Environment,
	ItemInNestedResponse,
} from '@datocms/cma-client/dist/types/generated/ApiTypes.js';

export const DRAFT_ENVIRONMENT = 'pricelist';

export type Article = {
	articleNo: string;
	description: string;
	name: string | null;
	price: number;
};

export type ProductUpdatesResponse = {
	notFound: Article[];
	updates: ProductUpdate;
	errors: { product: ProductRecord; error: string }[];
};

export type ProductUpdate = Record<
	string,
	{
		product: ProductRecord;
		variants: { id: string; price: number; article_no: string | null }[];
		lightsources: { id: string; price: number }[];
		accessories: { id: string; price: number }[];
		articles: number;
	}
>;

type ProductRecord = ItemInNestedResponse<Product>;
type LightsourceRecord = ItemInNestedResponse<ProductLightsource>;
type VariantRecord = ItemInNestedResponse<Variant>;
type AccessoryRecord = ItemInNestedResponse<ProductAccessory>;
type ModelBlock = any;

const ROW_INDEX = { articleNo: 0, description: 1, price: 3 };

export async function parse(file: Buffer | string): Promise<Article[]> {
	const rows = await readSheet(file);
	const articles: Article[] = [];
	let name: string | null = null;
	for (const row of rows) {
		if (
			typeof row[ROW_INDEX.description] === 'string' &&
			!row[ROW_INDEX.articleNo] &&
			!row[ROW_INDEX.price]
		) {
			name = (row[ROW_INDEX.description] as string)?.split('\n')[0] ?? null;
			continue;
		}

		if (
			!row[ROW_INDEX.articleNo] ||
			!row[ROW_INDEX.description] ||
			isNaN(row[ROW_INDEX.price] as number)
		)
			continue;

		const article: Article = {
			name,
			description: row[ROW_INDEX.description] as string,
			articleNo: ('' + row[ROW_INDEX.articleNo]).trim().toUpperCase(),
			price: Number(
				Math.round(
					typeof row[ROW_INDEX.price] === 'string'
						? parseInt((row[ROW_INDEX.price] as string)?.replace(/[^\d.-]+/g, '') ?? '0')
						: (row[ROW_INDEX.price] as number),
				),
			),
		};

		if (typeof article.price !== 'number') continue;
		if (typeof article.articleNo !== 'string') continue;
		if (typeof article.description !== 'string') continue;

		articles.push(article);
	}

	if (articles.length === 0) throw new Error('No articles found');

	return articles;
}

export async function generate(
	articles: Article[],
	environment = DRAFT_ENVIRONMENT,
): Promise<ProductUpdatesResponse> {
	console.log('Generate updates:', articles.length);

	await initDraftEnvironment();

	const client = buildClient({
		apiToken: process.env.DATOCMS_API_TOKEN as string,
		environment,
	});

	async function getAllRecords<T extends ItemTypeDefinition>(
		itemType: string,
	): Promise<ItemInNestedResponse<T>[]> {
		const items: ItemInNestedResponse<T>[] = [];

		for await (const record of client.items.listPagedIterator({
			filter: { type: itemType },
			perPage: 500,
			version: 'published',
			nested: true,
		})) {
			items.push(record as ItemInNestedResponse<T>);
		}

		return items;
	}

	const [productRecords, lightsources, variants, accessories] = await Promise.all([
		getAllRecords<Product>('product'),
		getAllRecords<ProductLightsource>('product_lightsource'),
		getAllRecords<Variant>('variant'),
		getAllRecords<ProductAccessory>('product_accessory'),
	]);

	const all = [...lightsources, ...variants, ...accessories] as (
		| LightsourceRecord
		| VariantRecord
		| AccessoryRecord
	)[];

	const notFound: Article[] = [];
	const errors: { product: ProductRecord; error: string }[] = [];
	const updates: ProductUpdate = {};

	for (let i = 0; i < articles.length; i++) {
		const items = all.filter(
			(l) => l.article_no && l.article_no.trim() === articles[i].articleNo.trim(),
		);

		if (!items.length) {
			notFound.push(articles[i]);
			continue;
		}

		for (let y = 0; y < items.length; y++) {
			const objectId = items[y].id;

			for (let x = 0; x < productRecords.length; x++) {
				const product = productRecords[x];
				const variantUpdates: { id: string; price: number; article_no: string | null }[] = [];
				const lightsourceUpdates: { id: string; price: number }[] = [];
				const accessoryUpdates: { id: string; price: number }[] = [];
				const models = product.models as ModelBlock[];

				models?.filter((m: ModelBlock) =>
					m.attributes.variants
						?.filter((v: { id: string }) => v.id === objectId)
						.forEach(
							(v: {
								id: string;
								attributes: { article_no: string | null; price: number | null };
							}) => variantUpdates.push({ ...v.attributes, id: v.id, price: articles[i].price }),
						),
				);
				models?.filter((m: ModelBlock) =>
					m.attributes.lightsources
						?.filter(
							(l: { attributes: { lightsource: string } }) => l.attributes.lightsource === objectId,
						)
						.forEach((l: { attributes: Record<string, unknown>; id: string }) =>
							lightsourceUpdates.push({
								id: l.attributes.lightsource as string,
								price: articles[i].price,
							}),
						),
				);
				models?.filter((m: ModelBlock) =>
					m.attributes.accessories
						?.filter(
							(a: { attributes: Record<string, unknown>; id: string }) =>
								a.attributes.accessory === objectId,
						)
						.forEach((a: { attributes: Record<string, unknown>; id: string }) =>
							accessoryUpdates.push({
								id: a.attributes.accessory as string,
								price: articles[i].price,
							}),
						),
				);

				if (!variantUpdates.length && !lightsourceUpdates.length && !accessoryUpdates.length) {
					continue;
				}

				if (!updates[product.id]) {
					updates[product.id] = {
						lightsources: [],
						variants: [],
						accessories: [],
						articles: 0,
						product,
					};
				}

				updates[product.id].articles++;
				updates[product.id].product = product;
				updates[product.id].variants.push(...variantUpdates);
				updates[product.id].lightsources.push(...lightsourceUpdates);
				updates[product.id].accessories.push(...accessoryUpdates);
			}
		}
	}
	return { notFound, updates, errors };
}

export async function update(
	updates: ProductUpdate,
	environment = DRAFT_ENVIRONMENT,
): Promise<{ updated: ProductRecord[]; errors: { product: ProductRecord; error: string }[] }> {
	console.time('update pricelist');

	const client = buildClient({
		apiToken: process.env.DATOCMS_API_TOKEN as string,
		environment,
	});

	const itemTypes = await client.itemTypes.list();
	const variantBlockId = itemTypes.filter((t) => t.api_key === 'variant')[0].id;
	const modelBlockId = itemTypes.filter((t) => t.api_key === 'product_model')[0].id;
	const lightsourceBlockId = itemTypes.filter((t) => t.api_key === 'lightsource')[0].id;
	const accessoryBlockId = itemTypes.filter((t) => t.api_key === 'accessory')[0].id;

	console.log(`Updating ${Object.keys(updates).length} products...`);

	const productIds = Object.keys(updates) as (keyof typeof updates)[];
	const updated: ProductRecord[] = [];
	const errors: { product: ProductRecord; error: string }[] = [];

	for (let i = 0; i < productIds.length; i++) {
		const productId = productIds[i];
		const { accessories, lightsources, variants } = updates[productId];

		console.log(`${i + 1}/${productIds.length}`, productId);

		if (lightsources.length) {
			for (let x = 0; x < lightsources.length; x++) {
				const { id, price } = lightsources[x];
				await client.items.update(id, { price: parseFloat(String(price)) });
			}
		}
		if (accessories.length) {
			for (let x = 0; x < accessories.length; x++) {
				const { id, price } = accessories[x];
				await client.items.update(id, { price: parseFloat(String(price)) });
			}
		}
		const product = await client.items.find(productId, { version: 'published', nested: true });

		const query = {
			models: (product.models as ModelBlock[]).map((model: ModelBlock) =>
				buildBlockRecord({
					item_type: { type: 'item_type', id: modelBlockId },
					name: model.attributes.name,
					drawing: model.attributes.drawing,
					lightsources: model.attributes.lightsources.map((l: ModelBlock) =>
						buildBlockRecord({
							item_type: { type: 'item_type', id: lightsourceBlockId },
							...l.attributes,
						}),
					),
					accessories: model.attributes.accessories.map((a: ModelBlock) =>
						buildBlockRecord({
							item_type: { type: 'item_type', id: accessoryBlockId },
							...a.attributes,
						}),
					),
					variants: model.attributes.variants.map((v: ModelBlock) =>
						buildBlockRecord({
							item_type: { type: 'item_type', id: variantBlockId },
							...v.attributes,
							price:
								variants.find((el) => el.article_no === v.attributes.article_no)?.price ||
								v.attributes.price,
						}),
					),
				}),
			),
		};
		try {
			await client.items.update(productId, query);
			if (product.meta.status === 'published') await client.items.publish(productId);
			updated.push(product as ProductRecord);
		} catch (err) {
			const error =
				typeof err === 'string' ? err : err instanceof Error ? err.message : (err as string);
			errors.push({
				product: product as ProductRecord,
				error,
			});
		}
	}

	console.timeEnd('update pricelist');
	return { updated, errors };
}

export async function csv(
	locale: SiteLocale,
	environment = DRAFT_ENVIRONMENT,
	vat = false,
): Promise<string> {
	const hideIncluded = true;
	if (!locale) throw new Error('Locale not found');

	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		environment,
		revalidate: 0,
		variables: { locale: toLanguageLocale(locale) },
	});

	const currency = await getCurrencyRateByLocale(locale);
	if (!currency) throw new Error(`Currency not found: ${locale}`);

	const rows: string[][] = [];

	for (const product of allProducts) {
		if (product.hideInPricelist) continue;
		rows.push([
			'',
			`${product.family.name?.trim()}${product.categories.length > 0 ? ` - ${product.categories.map((c) => c.name?.trim()).join(' · ')}` : ''}`,
			'',
		]);

		for (const model of product.models) {
			model.name?.name && rows.push(['', `="${model.name.name.trim()}"`, '']);
			for (const variant of model.variants) {
				rows.push([
					`="${variant.articleNo}"`,
					[variant.color?.name, variant.material?.name, variant.feature?.name]
						.filter(Boolean)
						.join(', '),
					vat
						? convertPriceWithRatesAndTaxes(variant.price, currency).toFixed(0)
						: convertPriceWithRate(variant.price, currency).toFixed(0),
				]);
			}
			for (const lightsources of model.lightsources) {
				const { lightsource, optional, included } = lightsources;
				const includedWithoutPrice = hideIncluded && included;

				if (!included) {
					rows.push([
						`="${lightsource?.articleNo}"`,
						`${lightsource?.name}${includedWithoutPrice ? ` (included)` : ''}`,
						includedWithoutPrice
							? ''
							: vat
								? convertPriceWithRatesAndTaxes(lightsource?.price, currency).toFixed(0)
								: convertPriceWithRate(lightsource?.price, currency).toFixed(0),
					]);
				}
			}
			for (const accessories of model.accessories)
				rows.push([
					`="${accessories.accessory?.articleNo}"`,
					accessories.accessory?.name ?? '',
					vat
						? convertPriceWithRatesAndTaxes(accessories.accessory?.price, currency).toFixed(0)
						: convertPriceWithRate(accessories.accessory?.price, currency).toFixed(0),
				]);
			rows.push(['', '', '']);
		}
	}

	const csv = `\ufeff${rows.map((r) => r.map((r) => r.trim()).join(';')).join('\n')}`;
	return csv;
}

export async function draftEnvironment(): Promise<Environment | null> {
	const client = buildClient({
		apiToken: process.env.DATOCMS_API_TOKEN as string,
	});
	const environments = await client.environments.list();
	return environments.find((e) => e.id === DRAFT_ENVIRONMENT) ?? null;
}

export async function initDraftEnvironment(): Promise<Environment> {
	console.time('draft');
	const client = buildClient({
		apiToken: process.env.DATOCMS_API_TOKEN as string,
	});
	const environments = await client.environments.list();
	if (environments.find((e) => e.id === DRAFT_ENVIRONMENT)) {
		await client.environments.destroy(DRAFT_ENVIRONMENT);
	}
	const environment = await client.environments.fork(
		process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT as string,
		{
			id: DRAFT_ENVIRONMENT,
		},
		{
			immediate_return: false,
			fast: true,
			force: true,
		},
	);
	console.timeEnd('draft');
	return environment;
}

export async function currentPricelist(): Promise<{
	buffer: ArrayBuffer;
	filename: string;
} | null> {
	const { pricelist, pricelistFile } = await apiQuery(PricelistDocument, {
		environment: 'main',
		revalidate: 0,
		variables: { locale: 'en' as SiteLocale },
	});
	console.log(pricelist);
	if (!pricelistFile?.currentPricelist) return null;
	const { url } = pricelistFile.currentPricelist;
	const response = await fetch(url);
	if (!response.ok) return null;

	return {
		buffer: await response.arrayBuffer(),
		filename: pricelistFile.currentPricelist.filename,
	};
}

export async function updateCurrentPricelistFile(
	buffer: Buffer<ArrayBuffer>,
	filename: string,
): Promise<void> {
	const client = buildClient({
		apiToken: process.env.DATOCMS_API_TOKEN as string,
	});
	const current = (await client.items.list({ type: 'pricelist', version: 'published' }))?.[0];
	if (!current) throw new Error('Current pricelist not found');

	const localPath = `/tmp/${filename}`;
	fs.writeFileSync(localPath, buffer, 'binary');

	const upload = await client.uploads.createFromLocalFile({
		localPath,
	});
	console.log(current.id, upload.id);
	await client.items.update<Pricelist>(current.id, {
		current_pricelist: { upload_id: upload.id },
	});
}
