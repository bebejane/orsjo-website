import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
<<<<<<< HEAD
import { ProductStartDocument, AllProductsLightDocument, AllProductCategoriesDocument } from '@/graphql';
import { FeaturedGallery, Section } from '@/components';
import ProductList from './ProductList';
import shopifyQuery from '@/lib/shopify/shopify-query';
import { AllShopifyProductsDocument, ShopifyProductsByQueryDocument } from '@/lib/shopify/graphql';
import { ProductRecordWithShopifyData } from '@/components/common/FeaturedGallery';
import { findCheapestVariant } from './utils';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';
=======
import {
	ProductStartDocument,
	AllProductsLightDocument,
	AllProductCategoriesDocument,
} from '@/graphql';
import { FeaturedGallery, Section } from '@/components';
import ProductList from './ProductList';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';
import * as geins from '@/geins/merchant-api';
import { DraftMode } from 'next-dato-utils/components';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export type ProductsByCategory = {
	products: ProductRecord[];
	name: string;
	namePlural: string;
};

export type ProductsStartProps = {
	productStart: ProductStartRecord;
	products: ProductRecord[];
	productCategories: ProductCategoryRecord[];
};

<<<<<<< HEAD
=======
export const dynamic = 'force-static';

>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
export default async function Products({ params }: PageProps<'/[locale]/products'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const [{ productStart }, { allProducts }, { allProductCategories }, { products: allShopifyProducts }] =
		await Promise.all([
			apiQuery(ProductStartDocument),
			apiQuery(AllProductsLightDocument, { all: true }),
			apiQuery(AllProductCategoriesDocument, { all: true }),
			shopifyQuery(AllShopifyProductsDocument, { country: locale, all: true }),
		]);

	/*
	const skus = allProducts
		.map(({ models }) => models.map(({ variants }) => variants.map(({ articleNo }) => articleNo).flat()).flat())
		.flat();

	const query = skus.map((sku) => `sku:${sku}`).join(' OR ');

	const { products: variants } = await shopifyQuery(
		ShopifyProductsByQueryDocument,
		{
			variables: { query },
		}
	);
*/
	return (
		<>
			{productStart?.featured.map((data, idx) => (
				<Section id={`featured-products-${idx}`} className={s.featured} name={data.headline} top={idx === 0} key={idx}>
=======
	const [
		{ productStart, draftUrl: productStartDraftUrl },
		{ allProducts, draftUrl: productsDraftUrl },
		{ allProductCategories, draftUrl: categoriesDraftUrl },
		allGeinsProducts,
	] = await Promise.all([
		apiQuery(ProductStartDocument),
		apiQuery(AllProductsLightDocument, { all: true }),
		apiQuery(AllProductCategoriesDocument, { all: true }),
		geins.getProducts(locale),
	]);

	const draftUrls: (string | null)[] = [
		productStartDraftUrl,
		productsDraftUrl,
		categoriesDraftUrl,
	].filter(Boolean);

	return (
		<>
			{productStart?.featured.map((data, idx) => (
				<Section
					id={`featured-products-${idx}`}
					className={s.featured}
					name={data.headline}
					top={idx === 0}
					key={idx}
				>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
					<FeaturedGallery
						id={data.id}
						key={`featured-${idx}`}
						headline={data.headline}
						theme='light'
						showMarkAsNew={data.showMarkAsNew}
<<<<<<< HEAD
						items={
							data.items.map((product) => ({
								...product,
								shopify: allShopifyProducts.edges.find((v) => v.node.handle === (product as ProductRecord).slug)?.node
									.selectedOrFirstAvailableVariant as ProductVariant,
							})) as ProductRecordWithShopifyData[]
						}
=======
						marketId={locale}
						items={data.items.map((product) => ({
							...(product as ProductRecord),
							geins: allGeinsProducts.find((p) =>
								p?.categories?.find((c) => c?.alias === (product as ProductRecord).slug),
							),
						}))}
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
					/>
				</Section>
			))}
			<ProductList
				productCategories={allProductCategories}
				allProducts={allProducts}
<<<<<<< HEAD
				shopifyProducts={allShopifyProducts}
			/>
=======
				geinsProducts={allGeinsProducts as ProductType[]}
				marketId={locale}
			/>
			<DraftMode url={draftUrls} path='/products' />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}

<<<<<<< HEAD
export async function generateMetadata({ params }: PageProps<'/[locale]/products'>): Promise<Metadata> {
=======
export async function generateMetadata({
	params,
}: PageProps<'/[locale]/products'>): Promise<Metadata> {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	return await buildMetadata({
		title: 'Products',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/products`,
	});
}
