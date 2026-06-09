import {
	ProductDocument,
	AllRelatedProductsDocument,
	AllProductsByCategoryDocument,
	AllRelatedProjectsForProductDocument,
	ShippingDocument,
} from '@/graphql';
<<<<<<< HEAD
import { parseSpecifications, ProductDownload, productDownloads, ProductRecordWithPdfFiles } from '@/lib/utils';
import { apiQuery } from 'next-dato-utils/api';
import { firstBy } from 'thenby';
import shopifyQuery from '@/lib/shopify/shopify-query';
import { ShopifyProductDocument, ShopifyProductsByQueryDocument } from '@/lib/shopify/graphql';

export function findCheapestVariant(
	product: ProductRecord,
	shopifyProducts: AllShopifyProductsQuery['products']
): ProductVariant | undefined {
	const shopifyProduct = shopifyProducts.edges.find(({ node }) => node.handle === product.slug);
	if (!shopifyProduct) console.log('no shopify product found for:', product.slug);
	if (!shopifyProduct) return undefined;

	//@ts-ignore
	return shopifyProduct.node.variants.edges.reduce<undefined | ProductVariant>((acc, variant) => {
		if (!acc) return variant.node;
		return parseFloat(variant.node.price.amount) > parseFloat(acc.price.amount) ? variant.node : acc;
	}, undefined);
}
=======
import {
	parseSpecifications,
	ProductDownload,
	productDownloads,
	ProductRecordWithPdfFiles,
} from '@/lib/utils';
import { apiQuery } from 'next-dato-utils/api';
import { firstBy } from 'thenby';
import * as geins from '@/geins/merchant-api';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export type SpecCol = {
	label: string;
	value: string;
	linebreaks?: boolean;
	slug?: string;
};

export type ProductPageDataProps = {
<<<<<<< HEAD
	shopify: {
		product: ShopifyProductQuery['product'];
		accessories: ShopifyProductsByQuery['products']['edges'][0]['node'][];
		lightsources: ShopifyProductsByQuery['products']['edges'][0]['node'][];
		i18n: {
			countryCode: CountryCode;
			currencyCode: CurrencyCode;
		};
=======
	marketId: string;
	geins: {
		products: ProductType[];
		accessories: ProductType[];
		lightsources: ProductType[];
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	};
	product: ProductQuery['product'];
	relatedProducts: AllRelatedProductsQuery['allProducts'];
	relatedProjects: AllRelatedProjectsForProductQuery['allProjects'];
	productsByCategory: AllProductsByCategoryQuery['allProducts'];
	drawings: FileField[];
	specsCols: SpecCol[];
	files: ProductDownload[];
	shipping: ShippingQuery['shipping'];
<<<<<<< HEAD
=======
	draftUrls: (string | null)[];
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
};

export const getProductPageData = async (
	slug: string,
<<<<<<< HEAD
	countryCode: CountryCode
=======
	locale: string,
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
): Promise<ProductPageDataProps | null> => {
	const { product } = await apiQuery(ProductDocument, {
		variables: { slug },
	});

	if (!product) return null;

<<<<<<< HEAD
	const [{ allProducts }, { allProducts: allProductCategories }, { allProjects }, { shipping }] = await Promise.all([
=======
	const marketId = locale;
	const [
		{ allProducts, draftUrl },
		{ allProducts: allProductCategories, draftUrl: categoriesDraftUrl },
		{ allProjects, draftUrl: projectsDraftUrl },
		{ shipping, draftUrl: shippingDraftUrl },
	] = await Promise.all([
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		apiQuery(AllRelatedProductsDocument, {
			all: true,
			variables: { designerId: product.designer?.id, familyId: product.family.id },
			tags: ['shipping', 'accessory', 'lightsource'],
		}),
		apiQuery(AllProductsByCategoryDocument, {
			variables: { categoryId: product.categories[0]?.id },
			tags: ['shipping', 'accessory', 'lightsource'],
			all: true,
		}),
		apiQuery(AllRelatedProjectsForProductDocument, {
			all: true,
			variables: { productId: product.id },
		}),
		apiQuery(ShippingDocument),
	]);

<<<<<<< HEAD
	const { product: shopifyProduct } = await shopifyQuery(ShopifyProductDocument, {
		variables: { handle: product.slug },
		country: countryCode,
	});

	const relatedArticleNos = product.models.reduce(
		(acc, model) => {
			return acc
				.concat(model.accessories.map(({ accessory }) => accessory?.articleNo ?? null))
				.concat(model.lightsources.map(({ lightsource }) => lightsource?.articleNo ?? null));
		},
		[] as (string | null)[]
	);

	const query = relatedArticleNos.map((articleNo) => `tag:${articleNo}`).join(' OR ');
	const { products } = await shopifyQuery(ShopifyProductsByQueryDocument, {
		country: countryCode,
		variables: { query },
	});
	const shopifyAccessories = products.edges.map(({ node }) => node).filter((p) => p.tags.includes('accessory'));
	const shopifyLightsources = products.edges.map(({ node }) => node).filter((p) => p.tags.includes('lightsource'));
=======
	const draftUrls: (string | null)[] = [
		draftUrl,
		categoriesDraftUrl,
		projectsDraftUrl,
		shippingDraftUrl,
	].filter(Boolean);

	const [products, accessories, lightsources] = await Promise.all([
		geins.getProductsByCategory(slug, marketId),
		geins.getProductsByCategory('accessory', marketId),
		geins.getProductsByCategory('lightsource', marketId),
	]);

	const articleNumbers = product.models
		.map((m) => [
			...m.accessories.map((a) => a.accessory?.articleNo),
			...m.lightsources.map((l) => l.lightsource.articleNo),
		])
		.flat()
		.filter(Boolean) as string[];

	const geinsLightsources = lightsources.filter(
		(a) => a.articleNumber && articleNumbers.includes(a.articleNumber),
	);
	const geinsAccessories = accessories.filter(
		(a) => a.articleNumber && articleNumbers.includes(a.articleNumber),
	);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

	const specs = parseSpecifications(product as any, 'en', null);
	const specsCols = [
		{ label: 'Designer', value: specs.designer, slug: `/designers/${product.designer?.slug}` },
		{ label: 'Mounting', value: specs.mounting },
		{ label: 'Electrical data', value: specs.electricalData },
		{ label: 'Socket', value: specs.socket },
		{ label: 'Connection', value: specs.connection },
		{ label: 'Lightsource', value: specs.lightsource },
		{ label: 'Additional info', value: specs.additionalInformation },
		{ label: 'Note', value: product.note, linebreaks: true },
	].filter((el) => el.value) as SpecCol[];

	const files = productDownloads(product as ProductRecordWithPdfFiles);
	const drawings: FileField[] = [];

<<<<<<< HEAD
	product.models.forEach((m) => m.drawing && drawings.push({ ...m.drawing, title: m.name?.name || null } as FileField));
=======
	product.models.forEach(
		(m) => m.drawing && drawings.push({ ...m.drawing, title: m.name?.name || null } as FileField),
	);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

	const sort = {
		byFamily: (a: ProductRecord, b: ProductRecord) => (a.family.id === b.family.id ? 0 : 1),
		byTitle: (a: ProductRecord, b: ProductRecord) => (a.title > b.title ? 1 : -1),
		byCategory: (a: ProductRecord, b: ProductRecord) =>
<<<<<<< HEAD
			a.categories.map((el) => el.id).find((id) => product.categories.map((el) => el.id).includes[id]) ? 1 : -1,
		byDesigner: (a: ProductRecord, b: ProductRecord) => (a.designer?.id === product.designer?.id ? 1 : -1),
	};

	const currencyCode = shopifyProduct?.variants.edges[0].node.price.currencyCode ?? ('SEK' as CurrencyCode);

	return {
		product,
		shopify: {
			product: shopifyProduct,
			accessories: shopifyAccessories,
			lightsources: shopifyLightsources,
			i18n: {
				countryCode,
				currencyCode,
			},
		},
		relatedProducts: allProducts.filter((p) => p.id !== product.id).sort(firstBy(sort.byFamily).thenBy(sort.byTitle)),
		productsByCategory: allProductCategories
			.filter((p) => p.id !== product.id)
=======
			a.categories
				.map((el) => el.id)
				.find((id: string) => product?.categories?.map((el) => el.id).includes(id))
				? 1
				: -1,
		byDesigner: (a: ProductRecord, b: ProductRecord) =>
			a.designer?.id === product.designer?.id ? 1 : -1,
	};

	return {
		marketId,
		product,
		geins: {
			products: products,
			accessories: geinsAccessories,
			lightsources: geinsLightsources,
		},
		relatedProducts: allProducts
			.filter((p) => p.id !== product.id)
			//@ts-ignore
			.sort(firstBy(sort.byFamily).thenBy(sort.byTitle)),
		productsByCategory: allProductCategories
			.filter((p) => p.id !== product.id)
			//@ts-ignore
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
			.sort(firstBy(sort.byDesigner).thenBy(sort.byCategory)),
		relatedProjects: allProjects,
		files,
		drawings,
		specsCols,
		shipping,
<<<<<<< HEAD
	};
};

export async function getShopifyProductsBySku(
	skus: string[],
	country: string
): Promise<ShopifyProductsByQuery['products']['edges'][0]['node'][]> {
	const query = skus.map((sku) => `sku:${sku}`).join(' OR ');

	const { products } = await shopifyQuery(ShopifyProductsByQueryDocument, {
		variables: { query },
		country,
	});
	return products.edges.map(({ node }) => node);
}
=======
		draftUrls,
	};
};
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
