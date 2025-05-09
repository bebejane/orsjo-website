import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import {
	ProductStartDocument,
	AllProductsLightDocument,
	ProductCategoriesDocument,
} from '@/graphql';
import { FeaturedGallery, Section } from '@/components';
import ProductList from './ProductList';
import { Metadata } from 'next';

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
	const [{ productStart }, { allProducts }, { productCategories }] = await Promise.all([
		apiQuery<ProductStartQuery, ProductStartQueryVariables>(ProductStartDocument),
		apiQuery<AllProductsLightQuery, AllProductsLightQueryVariables>(AllProductsLightDocument),
		apiQuery<ProductCategoriesQuery, ProductCategoriesQueryVariables>(ProductCategoriesDocument),
	]);

	return (
		<>
			{productStart?.featured.slice(0).map((data, idx) => (
				<Section
					id={`featured-products-${idx}`}
					className={s.featured}
					name={data.headline}
					top={idx === 0}
					key={idx}
				>
					<FeaturedGallery
						key={`featured-${idx}`}
						headline={data.headline}
						id={data.id}
						items={data.items as ProductRecord[]}
						theme='light'
						showMarkAsNew={data.showMarkAsNew}
					/>
				</Section>
			))}
			<ProductList productCategories={productCategories} products={allProducts} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Products',
	};
}
