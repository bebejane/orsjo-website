import styles from './index.module.scss'
import Catalogue from '/components/catalogue/Catalogue';
import { apiQuery } from "/lib/dato/api";
import { GetProduct } from "/graphql"

export default function Home(props){
	const { product } = props
	return (
		<div className={styles.container}>
      <Catalogue products={[product]}/>
		</div>
	)
}

export const getServerSideProps = async (context) => {
  const id = context.params.id[0];
	const { product } = await apiQuery(GetProduct, {id});
	
	if(!product) return {notFound:true}
	
	return { 
		props:{
			product
		}
	}
}

/*
export async function getStaticPaths() {
  const { products } = await apiQuery(GetProducts);
	const paths = []
  products.forEach(({id}) => paths.push({ params: { id: [id] }}));
	return {
		paths:paths,
		fallback: 'blocking',
	};
}
*/