
import styles from './index.module.scss'
import { GetProductStart, GetAllProducts, GetProductCategories } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Featured, ProductThumbnail } from '/components'
import { sectionId } from '/lib/utils'

export type ProductsStartProps = {
	productStart: ProductStartRecord,
	products: ProductRecord[],
	productCategories: ProductCategoryRecord[]
}

export default function Products({ productStart: { featured }, products, productCategories }: ProductsStartProps) {

	const productsByCategory = {}
	productCategories.forEach(({ name }) => {
		productsByCategory[name] = products.filter(({ categories }) => categories[0].name === name)
	})
	
	return (
		<div className={styles.products}>
			{featured.slice(0).map((data, idx) =>
				<Featured key={`featured-${idx}`} data={data} />
			)}

			{Object.keys(productsByCategory).map(name => productsByCategory[name]).map((products, idx) => {
				const category = products[0].categories?.[0].name
				return (
					<section key={idx} {...sectionId(category)}>
						<h1>{category}</h1>
						<ul >
							{products.map((product, idx) =>
								<li key={idx}>
									<ProductThumbnail product={product} />
								</li>
							)}
						</ul>
					</section>
				)
			})}
		</div>
	)
}

export const getStaticProps = withGlobalProps({ queries: [GetAllProducts, GetProductStart, GetProductCategories] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});