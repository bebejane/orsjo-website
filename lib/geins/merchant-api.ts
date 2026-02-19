import geinsQuery from '@/lib/geins/geins-query';
import { AllGeinsProductsDocument, GeinsProductByCategoryDocument } from '@/lib/geins/graphql';

export async function getProduct(slug: string): Promise<ProductType[]> {
	const { products } = await geinsQuery(GeinsProductByCategoryDocument, {
		variables: { categoryAlias: slug },
	});

	return (products?.products as ProductType[]) ?? [];
}

type GeinsProduct = {
	slug: string;
	variants: ProductType[];
	accessories: ProductType[];
	lightsources: ProductType[];
};

export async function getProducts(): Promise<GeinsProduct[]> {
	const all: ProductType[] = [];

	let skip = 0;
	let take = 200;

	let res = await geinsQuery(AllGeinsProductsDocument, {
		variables: { skip, take },
	});

	let count = res?.products?.count ?? 0;

	while (count > skip) {
		const items = (res.products?.products ?? []) as ProductType[];
		all.push.apply(all, items);
		skip = all.length - 1;
		take = Math.min(count - skip, take);
		if (skip >= count) break;

		res = await geinsQuery(AllGeinsProductsDocument, {
			variables: { skip, take },
		});
	}
	const accessories = all.filter((p) => p?.categories?.find((c) => c?.alias === 'accessory'));
	const lightsources = all.filter((p) => p?.categories?.find((c) => c?.alias === 'lightsource'));
	const products = all.filter(
		(p) => !p?.categories?.some((c) => ['accessory', 'lightsource'].includes(c?.alias ?? '')),
	);

	console.log(JSON.stringify(all, null, 2));
	console.log('Count:', count);
	console.log('All:', all.length);
	console.log('Products:', products.length);
	console.log('Accessories:', accessories.length);
	console.log('Lightsources:', lightsources.length);

	const result: GeinsProduct[] = [];
	products.forEach((p) => {
		const slug = p.categories?.find((c) => c?.alias === 'product')?.alias as string;
		const index = result.findIndex((r) => r.slug === slug);

		if (index === -1) {
			result.push({
				slug,
				variants: [p],
				accessories: [],
				lightsources: [],
			});
		} else result[index].variants.push(p);
	});

	return result;
}

export async function getProducts2(): Promise<GeinsProduct[]> {
	const all: ProductType[] = [];

	let skip = 0;
	let take = 200;

	let res = await geinsQuery(AllGeinsProductsDocument, {
		variables: { skip, take },
	});

	let count = res?.products?.count ?? 0;
	console.log('count:', count);

	while (count > skip) {
		const items = (res.products?.products ?? []) as ProductType[];
		all.push.apply(all, items);
		skip = all.length;
		take = Math.min(count - skip, take);
		if (skip >= count) break;

		res = await geinsQuery(AllGeinsProductsDocument, {
			variables: { skip, take },
		});
	}
	console.log(JSON.stringify(all, null, 2));
	const accessories = all.filter((p) =>
		p?.parameterGroups
			?.find((p) => p?.parameterGroupId === 2)
			?.parameters?.find((p) => p?.identifier === 'accessory'),
	);
	const lightsources = all.filter((p) =>
		p?.parameterGroups
			?.find((p) => p?.parameterGroupId === 2)
			?.parameters?.find((p) => p?.identifier === 'lightsource'),
	);
	const products = all.filter(
		(p) => ![...accessories, ...lightsources].find(({ productId }) => productId === p.productId),
	);

	console.log('Total products:', products.length);
	console.log('Accessories:', accessories.length);
	console.log('Lightsources:', lightsources.length);

	const result: GeinsProduct[] = [];
	products.forEach((p) => {
		const slug = p.categories?.find((c) => c?.alias === 'product')?.alias as string;
		const index = result.findIndex((r) => r.slug === slug);

		if (index === -1) {
			result.push({
				slug,
				variants: [p],
				accessories: [],
				lightsources: [],
			});
		} else result[index].variants.push(p);
	});

	return result;
}
