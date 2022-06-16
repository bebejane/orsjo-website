import styles from './Products.module.scss'
import { GetProducts, GetProduct } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { withGlobalProps } from '/lib/hoc'

export default function Product({product}) {
	
	return (
		<div>{product.title}</div>	
	)
}

export async function getStaticPaths(context) {
	const { products } = await apiQuery(GetProducts)
	const paths = products.map(({ slug }) => ({ params: { slug: [slug] } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({ model: 'product' }, async ({ props, context, revalidate }) => {
	const { product } = await apiQuery(GetProduct, { slug: context.params.slug[0] })

	if (!product) 
		return { notFound: true }

	return {
		props: {
			...props,
			product
		},
		revalidate
	};
});