import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { ProductStartDocument, AllProductsLightDocument, ProductCategoriesDocument } from '@/graphql';
import { FeaturedGallery, Section } from '@/components';
import ProductList from './ProductList';
import { Metadata } from 'next';
import shopifyQuery from '@/lib/shopify/shopify-query';
import { AllShopifyProductsDocument, ShopifyProductsByQueryDocument } from '@/lib/shopify/graphql';
import { ProductRecordWithShopifyData } from '@/components/common/FeaturedGallery';

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

export default async function Products() {
	const [{ productStart }, { allProducts }, { productCategories }, { products }] = await Promise.all([
		apiQuery<ProductStartQuery, ProductStartQueryVariables>(ProductStartDocument),
		apiQuery<AllProductsLightQuery, AllProductsLightQueryVariables>(AllProductsLightDocument),
		apiQuery<ProductCategoriesQuery, ProductCategoriesQueryVariables>(ProductCategoriesDocument),
		shopifyQuery<AllShopifyProductsQuery, AllShopifyProductsQueryVariables>(AllShopifyProductsDocument),
	]);

	return (
		<>
			{productStart?.featured.map((data, idx) => (
				<Section id={`featured-products-${idx}`} className={s.featured} name={data.headline} top={idx === 0} key={idx}>
					<FeaturedGallery
						id={data.id}
						key={`featured-${idx}`}
						headline={data.headline}
						items={data.items as ProductRecordWithShopifyData[]}
						theme='light'
						showMarkAsNew={data.showMarkAsNew}
					/>
				</Section>
			))}
			<ProductList productCategories={productCategories} allProducts={allProducts} shopifyPropducts={products} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Products',
	};
}
