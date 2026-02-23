import s from './page.module.scss';
import { AllProductsLightDocument, ProductDocument } from '@/graphql';
import { FeaturedGallery, Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import React from 'react';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Intro from './Intro';
import Specifications from './Specifications';
import Downloads from './Downloads';
import Shop from './Shop';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/layout';
import { getProductPageData } from '../utils';
import ShopInfo from '@/app/[locale]/products/[product]/ShopInfo';
import * as geins from '@/lib/geins/merchant-api';

//export const dynamic = 'force-dynamic'; // disable for now

export default async function Product({ params }: PageProps<'/[locale]/products/[product]'>) {
	const { locale, product: slug } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const res = await getProductPageData(slug, locale as CountryCode);
	//const { v } = searchParams ? await searchParams : {}; // disable for now
	const variantId = res?.geins.products?.[0]?.productId;

	if (!res) return notFound();

	const {
		geins,
		product,
		relatedProducts,
		relatedProjects,
		productsByCategory,
		drawings,
		specsCols,
		files,
		shipping,
	} = res;

	return (
		<>
			<Intro product={product} drawings={drawings} />
			<Specifications product={product} drawings={drawings} specsCols={specsCols} />
			<Downloads files={files} />
			<ShopInfo product={product} shipping={shipping} currencyCode={geins.i18n.currencyCode} />
			<Shop product={product} geins={geins} variantId={variantId} shipping={shipping} />
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
	const { allProducts } = await apiQuery(AllProductsLightDocument, { all: true });
	const paths = allProducts.map(({ slug }) => ({ slug }));
	return paths;
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/products/[product]'>): Promise<Metadata> {
	const { product: slug } = await params;
	const { product } = await apiQuery(ProductDocument, {
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
