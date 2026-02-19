import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import {
	ProductStartDocument,
	AllProductsLightDocument,
	AllProductCategoriesDocument,
} from '@/graphql';
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
import geinsQuery from '@/lib/geins/geins-query';
import { AllGeinsProductsDocument } from '@/lib/geins/graphql';

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

export default async function Products({ params }: PageProps<'/[locale]/products'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const [
		{ productStart },
		{ allProducts },
		{ allProductCategories },
		{ products: allGeinsProducts },
	] = await Promise.all([
		apiQuery(ProductStartDocument),
		apiQuery(AllProductsLightDocument, { all: true }),
		apiQuery(AllProductCategoriesDocument, { all: true }),
		geinsQuery(AllGeinsProductsDocument),
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
				<Section
					id={`featured-products-${idx}`}
					className={s.featured}
					name={data.headline}
					top={idx === 0}
					key={idx}
				>
					{/* <FeaturedGallery
						id={data.id}
						key={`featured-${idx}`}
						headline={data.headline}
						theme='light'
						showMarkAsNew={data.showMarkAsNew}
						items={
							data.items.map((product) => ({
								...product,
								geins: allGeinsProducts.products.find(
									(p) => p?.articleNumber === (product as ProductRecord).slug,
								)?.node.selectedOrFirstAvailableVariant as ProductVariant,
							})) as ProductRecordWithShopifyData[]
						}
					/> */}
				</Section>
			))}
			<ProductList
				productCategories={allProductCategories}
				allProducts={allProducts}
				geinsProducts={allGeinsProducts?.products}
			/>
		</>
	);
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/products'>): Promise<Metadata> {
	return await buildMetadata({
		title: 'Products',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/products`,
	});
}
