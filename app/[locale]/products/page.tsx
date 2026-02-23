import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
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
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';
import * as geins from '@/lib/geins/merchant-api';

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

	const [{ productStart }, { allProducts }, { allProductCategories }, allGeinsProducts] =
		await Promise.all([
			apiQuery(ProductStartDocument),
			apiQuery(AllProductsLightDocument, { all: true }),
			apiQuery(AllProductCategoriesDocument, { all: true }),
			geins.getProducts(),
		]);

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
					<FeaturedGallery
						id={data.id}
						key={`featured-${idx}`}
						headline={data.headline}
						theme='light'
						showMarkAsNew={data.showMarkAsNew}
						items={data.items.map((product) => ({
							...(product as ProductRecord),
							geins: allGeinsProducts.find((p) =>
								p?.categories?.find((c) => c?.alias === (product as ProductRecord).slug),
							),
						}))}
					/>
				</Section>
			))}
			<ProductList
				productCategories={allProductCategories}
				allProducts={allProducts}
				geinsProducts={allGeinsProducts as ProductType[]}
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
