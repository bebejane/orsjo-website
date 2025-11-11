import {
	ProductDocument,
	AllRelatedProductsDocument,
	AllProductsByCategoryDocument,
	AllRelatedProjectsForProductDocument,
	ShippingDocument,
} from '@/graphql';
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

export type SpecCol = {
	label: string;
	value: string;
	linebreaks?: boolean;
	slug?: string;
};

export type ProductPageDataProps = {
	shopify: {
		product: ShopifyProductQuery['product'];
		accessories: ShopifyProductsByQuery['products']['edges'][0]['node'][];
		lightsources: ShopifyProductsByQuery['products']['edges'][0]['node'][];
		i18n: {
			countryCode: CountryCode;
			currencyCode: CurrencyCode;
		};
	};
	product: ProductQuery['product'];
	relatedProducts: AllRelatedProductsQuery['allProducts'];
	relatedProjects: AllRelatedProjectsForProductQuery['allProjects'];
	productsByCategory: AllProductsByCategoryQuery['allProducts'];
	drawings: FileField[];
	specsCols: SpecCol[];
	files: ProductDownload[];
	shipping: ShippingQuery['shipping'];
};

export const getProductPageData = async (
	slug: string,
	countryCode: CountryCode
): Promise<ProductPageDataProps | null> => {
	const { product } = await apiQuery(ProductDocument, {
		variables: { slug },
	});

	if (!product) return null;

	const [{ allProducts }, { allProducts: allProductCategories }, { allProjects }, { shipping }] = await Promise.all([
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

	product.models.forEach((m) => m.drawing && drawings.push({ ...m.drawing, title: m.name?.name || null } as FileField));

	const sort = {
		byFamily: (a: ProductRecord, b: ProductRecord) => (a.family.id === b.family.id ? 0 : 1),
		byTitle: (a: ProductRecord, b: ProductRecord) => (a.title > b.title ? 1 : -1),
		byCategory: (a: ProductRecord, b: ProductRecord) =>
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
			.sort(firstBy(sort.byDesigner).thenBy(sort.byCategory)),
		relatedProjects: allProjects,
		files,
		drawings,
		specsCols,
		shipping,
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
