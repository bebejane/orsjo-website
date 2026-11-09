import geinsQuery from '@/geins/geins-query';
import {
	AllGeinsChannelsDocument,
	AllGeinsProductsDocument,
	GeinsCategoriesDocument,
	GeinsProductsByCategoryDocument,
} from '@/geins/graphql';
import { defaultLocale } from '@/i18n/routing';

type GeinsCategory = NonNullable<GeinsCategoriesQuery['categories']>[number];

const CATEGORIES_TTL = 60_000;

const categoriesCache = new Map<
	string,
	{ expires: number; categories: Promise<GeinsCategory[]> }
>();

async function getCategories(marketId: string): Promise<GeinsCategory[]> {
	const cached = categoriesCache.get(marketId);
	const now = Date.now();

	if (!cached || cached.expires < now) {
		const categories = geinsQuery(GeinsCategoriesDocument, {
			variables: { marketId },
		}).then(({ categories }) => (categories ?? []) as GeinsCategory[]);

		const entry = { expires: now + CATEGORIES_TTL, categories };
		categoriesCache.set(marketId, entry);
		categories.catch(() => {
			if (categoriesCache.get(marketId) === entry) categoriesCache.delete(marketId);
		});
	}

	return categoriesCache.get(marketId)!.categories;
}

/**
 * Category aliases are generated from the category name and must be unique per
 * channel, so they can drift to e.g. `accessory-1` when an old alias is still
 * reserved. Resolve the real alias from the category name instead of relying
 * on a hardcoded alias.
 */
export async function resolveCategoryAlias(alias: string, marketId: string): Promise<string> {
	const categories = await getCategories(marketId);
	const wanted = alias.toLowerCase();

	return (
		categories.find((c) => c?.alias?.toLowerCase() === wanted)?.alias ??
		categories.find((c) => c?.name?.toLowerCase() === wanted)?.alias ??
		alias
	);
}

const inCategory = (p: ProductType, alias: string) =>
	!!p?.categories?.find(
		(c) =>
			c?.alias === alias ||
			(c?.alias ?? '').replace(/-\d+$/, '') === alias ||
			c?.name?.toLowerCase() === alias,
	);

export async function getProduct(slug: string, marketId: string): Promise<ProductType[]> {
	const alias = await resolveCategoryAlias(slug, marketId);
	const { products } = await geinsQuery(GeinsProductsByCategoryDocument, {
		variables: { categoryAlias: alias, marketId },
	});

	return (products?.products as ProductType[]) ?? [];
}

export async function getAllProducts(marketId: string): Promise<{
	products: ProductType[];
	lightsources: ProductType[];
	accessories: ProductType[];
}> {
	const all: ProductType[] = [];

	let skip = 0;
	let take = 200;

	let res = await geinsQuery(AllGeinsProductsDocument, {
		variables: { skip, take, marketId },
	});

	let count = res?.products?.count ?? 0;

	while (count > skip) {
		const items = (res.products?.products ?? []) as ProductType[];
		all.push(...items);
		skip = all.length;
		take = Math.min(count - skip, take);

		if (skip >= count) break;

		res = await geinsQuery(AllGeinsProductsDocument, {
			variables: { skip, take, marketId },
			marketId,
		});
	}
	const accessories = all.filter((p) => inCategory(p, 'accessory'));
	const lightsources = all.filter((p) => inCategory(p, 'lightsource'));
	const products = all.filter((p) => !inCategory(p, 'lightsource') && !inCategory(p, 'accessory'));

	return { products, lightsources, accessories };
}

export async function getProducts(marketId: string): Promise<ProductType[]> {
	const { products } = await getAllProducts(marketId);
	return products;
}

export async function getProductsByCategory(
	categoryAlias: string,
	marketId: string,
): Promise<ProductType[]> {
	const all: ProductType[] = [];
	const alias = await resolveCategoryAlias(categoryAlias, marketId);

	let skip = 0;
	let take = 200;

	let res = await geinsQuery(GeinsProductsByCategoryDocument, {
		variables: { skip, take, categoryAlias: alias, marketId },
	});

	let count = res?.products?.count ?? 0;

	while (count > skip) {
		const items = (res.products?.products ?? []) as ProductType[];
		all.push(...items);
		skip = all.length;
		take = Math.min(count - skip, take);

		if (skip >= count) break;

		res = await geinsQuery(GeinsProductsByCategoryDocument, {
			variables: { skip, take, categoryAlias: alias, marketId },
		});
	}

	return all;
}

export async function getAccessories(marketId: string): Promise<ProductType[]> {
	const accessories = await getProductsByCategory('accessory', marketId);
	return accessories;
}

export async function getLightsources(marketId: string): Promise<ProductType[]> {
	const lightsources = await getProductsByCategory('lightsource', marketId);
	return lightsources;
}

export async function getMarketId(locale: string = defaultLocale): Promise<string> {
	const { channels } = await geinsQuery(AllGeinsChannelsDocument);
	const marketId = channels?.[0]?.markets?.find(
		(m) => m?.country?.code.toLowerCase() === locale.toLowerCase(),
	)?.id;

	if (!marketId) throw new Error('Invalid market locale: ' + locale);
	return marketId;
}
