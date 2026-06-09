import { buildBlockRecord, ItemTypeDefinition } from '@datocms/cma-client-browser';
import { readSheet } from 'read-excel-file/node';
import { ItemInNestedResponse } from '@datocms/cma-client/dist/types/generated/ApiTypes';
import { Product, ProductAccessory, ProductLightsource, Variant } from '@/types/datocms-cma';
import { client } from '@/lib/client';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument } from '@/graphql';
import { convertPriceWithRate, getCurrencyRateByLocale } from '@/lib/currency';
import { toLanguageLocale } from '@/app/(catalogue)/lib/utils';

export type Article = { articleNo: string; name: string; price: number };
export type ProductUpdatesResponse = {
	notFound: Article[];
	updates: ProductUpdate;
	errors: { product: ProductRecord; error: string }[];
};

type ProductRecord = ItemInNestedResponse<Product>;
type LightsourceRecord = ItemInNestedResponse<ProductLightsource>;
type VariantRecord = ItemInNestedResponse<Variant>;
type AccessoryRecord = ItemInNestedResponse<ProductAccessory>;
type ModelBlock = any;
type ProductUpdate = Record<
	string,
	{
		product: ProductRecord;
		variants: { id: string; price: number; article_no: string | null }[];
		lightsources: { id: string; price: number }[];
		accessories: { id: string; price: number; article_no: string | null }[];
		articles: number;
	}
>;

const ROW_INDEX = { articleNo: 1, name: 2, price: 3 };

export async function parse(file: Buffer | string): Promise<Article[]> {
	const rows = await readSheet(file);
	const articles: Article[] = [];
	for (const row of rows) {
		if (!row[ROW_INDEX.articleNo] || !row[ROW_INDEX.name] || !row[ROW_INDEX.price]) continue;

		const article: Article = {
			name: row[ROW_INDEX.name] as string,
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
		if (typeof article.name !== 'string') continue;

		articles.push(article);
	}

	if (articles.length === 0) throw new Error('No articles found');

	return articles;
}

export async function generate(articles: Article[]): Promise<ProductUpdatesResponse> {
	console.log('Generate updates:', articles.length);

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
				const accessoryUpdates: { id: string; price: number; article_no: string | null }[] = [];

				(product.models as ModelBlock[] | undefined)?.filter((m: ModelBlock) =>
					m.attributes.variants
						?.filter((v: { id: string }) => v.id === objectId)
						.forEach(
							(v: {
								id: string;
								attributes: { article_no: string | null; price: number | null };
							}) => variantUpdates.push({ ...v.attributes, id: v.id, price: articles[i].price }),
						),
				);
				(product.models as ModelBlock[] | undefined)?.filter((m: ModelBlock) =>
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
				(product.models as ModelBlock[] | undefined)?.filter((m: ModelBlock) =>
					m.attributes.accessories
						?.filter((a: { id: string }) => a.id === objectId)
						.forEach(
							(a: {
								id: string;
								attributes: { article_no: string | null; price: number | null };
							}) => accessoryUpdates.push({ ...a.attributes, id: a.id, price: articles[i].price }),
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
): Promise<{ updated: ProductRecord[]; errors: { product: ProductRecord; error: string }[] }> {
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
							price:
								accessories.find((el) => el.article_no === a.attributes.article_no)?.price ||
								a.attributes.price,
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
			if (product.meta.status === 'published') {
				await client.items.update(productId, query);
				await client.items.publish(productId);
			} else await client.items.update(productId, query);

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

	return { updated, errors };
}

export async function csv(locale: SiteLocale): Promise<string> {
	const hideIncluded = true; //searchParams.get('hideincluded');
	if (!locale) throw new Error('Locale not found');

	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
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
					convertPriceWithRate(variant.price, currency).toFixed(0),
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
							: convertPriceWithRate(lightsource?.price, currency).toFixed(0),
					]);
				}
			}
			for (const accessories of model.accessories)
				rows.push([
					`="${accessories.accessory?.articleNo}"`,
					accessories.accessory?.name ?? '',
					convertPriceWithRate(accessories.accessory?.price, currency).toFixed(0),
				]);
			rows.push(['', '', '']);
		}
	}

	const csv = `\ufeff${rows.map((r) => r.map((r) => r.trim()).join(';')).join('\n')}`;
	return csv;
}
