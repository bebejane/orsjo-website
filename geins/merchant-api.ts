import geinsQuery from '@/geins/geins-query';
import { AllGeinsProductsDocument, GeinsProductsByCategoryDocument } from '@/geins/graphql';

export async function getProduct(slug: string): Promise<ProductType[]> {
	const { products } = await geinsQuery(GeinsProductsByCategoryDocument, {
		variables: { categoryAlias: slug },
	});

	return (products?.products as ProductType[]) ?? [];
}

export async function getAllProducts(categoryAlias?: string): Promise<{
	products: ProductType[];
	lightsources: ProductType[];
	accessories: ProductType[];
}> {
	const all: ProductType[] = [];

	let skip = 0;
	let take = 200;

	let res = await geinsQuery(AllGeinsProductsDocument, {
		variables: { skip, take },
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

export async function getProductsByCategory(categoryAlias: string): Promise<ProductType[]> {
	const all: ProductType[] = [];

	let skip = 0;
	let take = 200;

	let res = await geinsQuery(GeinsProductsByCategoryDocument, {
		variables: { skip, take, categoryAlias },
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
			logs: true,
		});
	}

	return all;
}

export async function getProducts(): Promise<ProductType[]> {
	const { products } = await getAllProducts();
	return products;
}

export async function getAccessories(): Promise<ProductType[]> {
	const accessories = await getProductsByCategory('accessory');
	return accessories;
}

export async function getLightsources(): Promise<ProductType[]> {
	const lightsources = await getProductsByCategory('lightsource');
	return lightsources;
}
