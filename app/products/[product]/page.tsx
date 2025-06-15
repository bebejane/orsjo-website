import s from './page.module.scss';
import {
	AllProductsLightDocument,
	ProductDocument,
	RelatedProductsDocument,
	AllProductsByCategoryDocument,
	RelatedProjectsForProductDocument,
} from '@/graphql';
import { FeaturedGallery, Section } from '@/components';
import { parseSpecifications, productDownloads, ProductRecordWithPdfFiles } from '@/lib/utils';
import { apiQuery } from 'next-dato-utils/api';
import type { ProductDownload } from '@/lib/utils';
import { firstBy } from 'thenby';
import React from 'react';
import { notFound } from 'next/navigation';
import Intro from './Intro';
import Specifications from './Specifications';
import Downloads from './Downloads';
import Shop from './Shop';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/layout';
import shopifyQuery from '@/lib/shopify/shopify-query';
import { ShopifyProductDocument, ShopifyProductsByQueryDocument } from '@/lib/shopify/graphql';

type Props = {
	params: Promise<{
		product: string;
	}>;
	searchParams?: Promise<{
		v?: string;
	}>;
};

export const dynamic = 'force-dynamic';

export default async function Product({ params, searchParams }: Props) {
	const { product: slug } = await params;
	const { v } = (await searchParams) ?? {};
	const res = await getProductPageData(slug);
	if (!res) return notFound();

	const { shopify, product, relatedProducts, relatedProjects, productsByCategory, drawings, specsCols, files } = res;

	return (
		<>
			<Intro product={product} drawings={drawings} />
			<Specifications product={product} drawings={drawings} specsCols={specsCols} />
			<Downloads files={files} />
			<Shop product={product} shopify={shopify} variantId={v} />
			<Section name='Related' className={s.related} bgColor='--mid-gray' fadeColor={'#ffffff'}>
				{relatedProducts.length > 0 && (
					<FeaturedGallery
						headline={`Related products`}
						items={relatedProducts as ProductRecord[]}
						theme={'light'}
						id='related'
						fadeColor={'--mid-gray'}
					/>
				)}
				{relatedProjects.length > 0 && (
					<FeaturedGallery
						headline={`Related projects`}
						items={relatedProjects as ProjectRecord[]}
						theme={'light'}
						id='relatedProjects'
						fadeColor={'--mid-gray'}
					/>
				)}
				{productsByCategory.length > 0 && (
					<FeaturedGallery
						headline={`Other ${product?.categories[0].namePlural?.toLowerCase()}`}
						items={productsByCategory as ProductRecord[]}
						theme={'light'}
						id='relatedbycategory'
						fadeColor={'--mid-gray'}
					/>
				)}
			</Section>
		</>
	);
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

const getProductPageData = async (slug: string): Promise<ProductPageDataProps | null> => {
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

export async function generateStaticParams() {
	const { allProducts } = await apiQuery<AllProductsLightQuery, AllProductsLightQueryVariables>(
		AllProductsLightDocument,
		{ all: true }
	);
	const paths = allProducts.map(({ slug }) => ({ slug }));
	return paths;
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { product: slug } = await params;
	const { product } = await apiQuery<ProductQuery, ProductQueryVariables>(ProductDocument, {
		variables: { slug },
	});
	if (!product) return notFound();
	return await buildMetadata({
		title: product.title,
		description: product.description,
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/products/${slug}`,
		image: product.image as FileField,
	});
}
