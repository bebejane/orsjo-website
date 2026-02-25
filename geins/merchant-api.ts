import geinsQuery from '@/geins/geins-query';
import {
	AllGeinsChannelsDocument,
	AllGeinsProductsDocument,
	GeinsProductsByCategoryDocument,
} from '@/geins/graphql';

export async function getProduct(slug: string, marketId?: string): Promise<ProductType[]> {
	const { products } = await geinsQuery(GeinsProductsByCategoryDocument, {
		variables: { categoryAlias: slug, marketId },
	});

	return (products?.products as ProductType[]) ?? [];
}

export async function getAllProducts(marketId?: string): Promise<{
	products: ProductType[];
	lightsources: ProductType[];
	accessories: ProductType[];
}> {
	const all: ProductType[] = [];

	let skip = 0;
	let take = 200;

	let res = await geinsQuery(AllGeinsProductsDocument, {
		variables: { skip, take },
		marketId,
		logs: true,
	});

	let count = res?.products?.count ?? 0;

	while (count > skip) {
		const items = (res.products?.products ?? []) as ProductType[];
		all.push(...items);
		skip = all.length;
		take = Math.min(count - skip, take);

		if (skip >= count) break;

		res = await geinsQuery(AllGeinsProductsDocument, {
			variables: { skip, take },
			marketId,
			logs: true,
		});
	}
	const accessories = all.filter((p) => p?.categories?.find((c) => c?.alias === 'accessory'));
	const lightsources = all.filter((p) => p?.categories?.find((c) => c?.alias === 'lightsource'));
	const products = all.filter(
		(p) => !p?.categories?.find((c) => ['lightsource', 'accessory'].includes(c?.alias ?? '')),
	);

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

	let skip = 0;
	let take = 200;

	let res = await geinsQuery(GeinsProductsByCategoryDocument, {
		variables: { skip, take, categoryAlias },
		marketId,
		logs: true,
	});

	let count = res?.products?.count ?? 0;

	while (count > skip) {
		const items = (res.products?.products ?? []) as ProductType[];
		all.push(...items);
		skip = all.length;
		take = Math.min(count - skip, take);

		if (skip >= count) break;

		res = await geinsQuery(GeinsProductsByCategoryDocument, {
			variables: { skip, take, categoryAlias },
			marketId,
			logs: true,
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

export async function getMarketId(locale: string): Promise<string> {
	const { channels } = await geinsQuery(AllGeinsChannelsDocument);
	console.log(channels);
	const marketId = channels?.[0]?.markets?.find(
		(m) => m?.country?.code.toLowerCase() === locale.toLowerCase(),
	)?.id;
	if (!marketId) throw new Error('Invalid market locale: ' + locale);
	return marketId;
}
