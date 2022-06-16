import styles from './Products.module.scss'
import { GetProducts } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'

type ProductsProps = { products: Product[] }

export default function Products({ products }: ProductsProps) {
	return (
		<div className={styles.container}>
			<h1>Products</h1>
			<ul>
				{products.map((product, idx) =>
					<Link key={idx} href={`/products/${product.slug}`} passHref>
						<a>
							<li>
								<caption>{product.title}</caption>
								
							</li>
							<Image data={product.image?.responsiveImage} layout={'fill'} objectFit={'contain'}/>
						</a>
					</Link>
				)}
			</ul>
		</div>
	)
}

export const getStaticProps = withGlobalProps({ queries: [GetProducts] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});