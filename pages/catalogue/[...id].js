import styles from './index.module.scss'
import { apiQuery } from "/lib/dato/api";
import { withGlobalProps } from "/lib/utils";
import { GetProduct, GetProducts } from "/graphql"

export default function Home(props){
	const { product } = props
	return (
		<div className={styles.container}>
			Product pdf<br/>
      {product.name}
		</div>
	)
}

export const getStaticProps = withGlobalProps( async ({props, revalidate, context}) => {
  const id = context.params.id[0];
	console.log(id)
  const { product } = await apiQuery(GetProduct, {id})
	if(!product) return {notFound:true}
	//console.log(product)
	return { 
		props:{
			...props,
			product
		},
		revalidate
	};
});

export async function getStaticPaths() {
  const { products } = await apiQuery(GetProducts);
	const paths = []
  products.forEach(({id}) => paths.push({ params: { id: [id] }}));
	return {
		paths:paths,
		fallback: 'blocking',
	};
}