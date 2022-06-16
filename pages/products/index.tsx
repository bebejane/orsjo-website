import styles from './Products.module.scss'
import { GetProducts } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'

type ProductsProps = { products: Product[]}

export default function Products({products} : ProductsProps) {
	return (
		<div className={styles.container}>
			<ul>
				{products.map((product, idx)=>
					<Link key={idx} href={`/products/${product.slug}`} passHref>
						<a><li>{product.title}</li></a>
					</Link>
				)}
			</ul>
		</div>
	)
}

export const getStaticProps = withGlobalProps({queries:[GetProducts]}, async ({props, revalidate } : any) => {
	
	return {
		props,
		revalidate
	};
});