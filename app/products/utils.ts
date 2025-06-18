import {
	ProductDocument,
	RelatedProductsDocument,
	AllProductsByCategoryDocument,
	RelatedProjectsForProductDocument,
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
	};
	product: ProductQuery['product'];
	relatedProducts: RelatedProductsQuery['relatedProducts'];
	relatedProjects: RelatedProjectsForProductQuery['relatedProjects'];
	productsByCategory: AllProductsByCategoryQuery['productsByCategory'];
	drawings: FileField[];
	specsCols: SpecCol[];
	files: ProductDownload[];
};

export const getProductPageData = async (slug: string): Promise<ProductPageDataProps | null> => {
	const { product } = await apiQuery<ProductQuery, ProductQueryVariables>(ProductDocument, {
		variables: { slug },
	});

	if (!product) return null;

	const [{ relatedProducts }, { productsByCategory }, { relatedProjects }] = await Promise.all([
		apiQuery<RelatedProductsQuery, RelatedProductsQueryVariables>(RelatedProductsDocument, {
			variables: { designerId: product.designer?.id, familyId: product.family.id },
		}),
		apiQuery<AllProductsByCategoryQuery, AllProductsByCategoryQueryVariables>(AllProductsByCategoryDocument, {
			variables: { categoryId: product.categories[0]?.id },
		}),
		apiQuery<RelatedProjectsForProductQuery, RelatedProjectsForProductQueryVariables>(
			RelatedProjectsForProductDocument,
			{
				variables: { productId: product.id },
			}
		),
	]);

	const { product: shopifyProduct } = await shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(
		ShopifyProductDocument,
		{
			variables: { handle: product.slug },
		}
	);

	const relatedArticleNos = product.models.reduce(
		(acc, model) => {
			return acc
				.concat(model.accessories.map(({ accessory }) => accessory?.articleNo ?? null))
				.concat(model.lightsources.map(({ lightsource }) => lightsource?.articleNo ?? null));
		},
		[] as (string | null)[]
	);

	const query = relatedArticleNos.map((articleNo) => `tag:${articleNo}`).join(' OR ');
	const { products } = await shopifyQuery<ShopifyProductsByQuery, ShopifyProductsByQueryVariables>(
		ShopifyProductsByQueryDocument,
		{
			variables: { query },
		}
	);
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

	return {
		product,
		shopify: {
			product: shopifyProduct,
			accessories: shopifyAccessories,
			lightsources: shopifyLightsources,
		},
		relatedProducts: relatedProducts
			.filter((p) => p.id !== product.id)
			//@ts-ignore
			.sort(firstBy(sort.byFamily).thenBy(sort.byTitle)),
		productsByCategory: productsByCategory
			.filter((p) => p.id !== product.id)
			//@ts-ignore
			.sort(firstBy(sort.byDesigner).thenBy(sort.byCategory)),
		relatedProjects,
		files,
		drawings,
		specsCols,
	};
};

export async function getShopifyProductsBySku(
	skus: string[]
): Promise<ShopifyProductsByQuery['products']['edges'][0]['node'][]> {
	const query = skus.map((sku) => `sku:${sku}`).join(' OR ');

	const { products } = await shopifyQuery<ShopifyProductsByQuery, ShopifyProductsByQueryVariables>(
		ShopifyProductsByQueryDocument,
		{
			variables: { query },
		}
	);
	return products.edges.map(({ node }) => node);
}
