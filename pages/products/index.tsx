
import styles from './index.module.scss'
import { GetProductStart, GetAllProducts, GetProductCategories } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { FeaturedBlock, ProductThumbnail } from '/components'
import { toSectionId } from '/lib/utils'

export type ProductsStartProps = {
	productStart: ProductStart,
	products: Product[],
	productCategories: ProductCategory[]
}

export default function Products({ productStart: { featured }, products, productCategories }: ProductsStartProps) {

	const productsByCategory = {}
	productCategories.forEach(({ name }) => {
		productsByCategory[name] = products.filter(({ categories }) => categories[0].name === name)
	})

	return (
		<div className={styles.products}>
			{featured.map((data, idx) =>
				<FeaturedBlock key={idx} data={data} />
			)}

			{Object.keys(productsByCategory).map(name => productsByCategory[name]).map((products, idx) => {
				const category = products[0].categories?.[0].name

				return (
					<section key={idx} id={toSectionId(category)} title={category}>
						<h1>{category}</h1>
						<ul >
							{products.map((product, idx) =>
								<li key={idx}>
									<Link href={`/products/${product.slug}`} passHref>
										<a>
											<ProductThumbnail product={product} />
										</a>
									</Link>
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