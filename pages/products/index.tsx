import styles from './Products.module.scss'
import { GetProductStart, GetProducts, GetProductCategories } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import { FeaturedBlock, ProductThumbnail } from '/components'

type ProductsStartProps = { productStart: ProductStart }

export default function Products({ productStart : { featured }, products, productCategories }: ProductsStartProps) {

	const productsByCategory = {}
	productCategories.forEach(({name}) => productsByCategory[name] = products.filter(({categories}) => categories[0].name === name))

	return (
		<div className={styles.products}>
			{featured.map((data)=>
				<FeaturedBlock data={data}/>
			)}
			
			{Object.keys(productsByCategory).map(name => productsByCategory[name]).map((products, idx) => {
				const category = products[0].categories[0].name
				return (
					<section key={idx}>
						<h3>{category}</h3>
						<ul >					
							{products.map((product, idx) => 
								<li key={idx}>
									<Link  href={`/products/${product.slug}`} passHref>
										<a>
											<ProductThumbnail product={product}/>
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

export const getStaticProps = withGlobalProps({ queries: [GetProducts, GetProductStart, GetProductCategories] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});