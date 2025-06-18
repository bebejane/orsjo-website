import s from './page.module.scss';
import { AllProductsLightDocument, ProductDocument } from '@/graphql';
import { FeaturedGallery, Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import React from 'react';
import { notFound } from 'next/navigation';
import Intro from './Intro';
import Specifications from './Specifications';
import Downloads from './Downloads';
import Shop from './Shop';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/layout';
import { getProductPageData } from '../utils';

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
