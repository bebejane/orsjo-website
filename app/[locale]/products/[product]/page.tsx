import s from './page.module.scss';
import { AllProductsLightDocument, ProductDocument } from '@/graphql';
<<<<<<< HEAD
import { FeaturedGallery, Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import React from 'react';
=======
import { FeaturedGallery, Section, ProductJsonLd } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Intro from './Intro';
import Specifications from './Specifications';
import Downloads from './Downloads';
import Shop from './Shop';
import { Metadata } from 'next';
<<<<<<< HEAD
import { buildMetadata } from '@/app/layout';
import { getProductPageData } from '../utils';
import ShopInfo from '@/app/[locale]/products/[product]/ShopInfo';
import { parseGid } from '@/lib/shopify/utils';
=======
import { buildMetadata } from '@/app/[locale]/layout';
import { getProductPageData } from '../utils';
import ShopInfo from '@/app/[locale]/products/[product]/ShopInfo';
import { GEINS_MARKET_CURRENCY } from '@/geins/constants';
import { DraftMode } from 'next-dato-utils/components';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

//export const dynamic = 'force-dynamic'; // disable for now

export default async function Product({ params }: PageProps<'/[locale]/products/[product]'>) {
	const { locale, product: slug } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const res = await getProductPageData(slug, locale as CountryCode);
	//const { v } = searchParams ? await searchParams : {}; // disable for now
	const id = res?.shopify.product?.selectedOrFirstAvailableVariant?.id;
	const v = id ? parseGid(id) : undefined;
=======
	const res = await getProductPageData(slug, locale);
	const variantId = res?.geins.products?.[0]?.productId;
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

	if (!res) return notFound();

	const {
<<<<<<< HEAD
		shopify,
=======
		marketId,
		geins,
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		product,
		relatedProducts,
		relatedProjects,
		productsByCategory,
		drawings,
		specsCols,
		files,
		shipping,
<<<<<<< HEAD
	} = res;

	return (
		<>
			<Intro product={product} drawings={drawings} />
			<Specifications product={product} drawings={drawings} specsCols={specsCols} />
			<Downloads files={files} />
			<ShopInfo product={product} shipping={shipping} currencyCode={shopify.i18n.currencyCode} />
			<Shop product={product} shopify={shopify} variantId={v} shipping={shipping} />
=======
		draftUrls,
	} = res;

	const currencyCode = geins.products?.[0]?.unitPrice?.currency?.code ?? GEINS_MARKET_CURRENCY;
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';

	return (
		<>
			<ProductJsonLd
				product={product}
				geinsProduct={geins.products?.[0] ?? null}
				currency={currencyCode}
				baseUrl={baseUrl}
			/>
			<Intro product={product} drawings={drawings} />
			<Specifications product={product} drawings={drawings} specsCols={specsCols} />
			<Downloads files={files} />
			<ShopInfo product={product} shipping={shipping} currencyCode={currencyCode} />
			<Shop
				product={product}
				geins={geins}
				variantId={variantId}
				shipping={shipping}
				marketId={marketId}
			/>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
<<<<<<< HEAD
=======
			<DraftMode url={draftUrls} path={`/products/${slug}`} />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}

export async function generateStaticParams() {
	const { allProducts } = await apiQuery(AllProductsLightDocument, { all: true });
	const paths = allProducts.map(({ slug }) => ({ slug }));
	return paths;
}

<<<<<<< HEAD
export async function generateMetadata({ params }: PageProps<'/[locale]/products/[product]'>): Promise<Metadata> {
=======
export async function generateMetadata({
	params,
}: PageProps<'/[locale]/products/[product]'>): Promise<Metadata> {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
