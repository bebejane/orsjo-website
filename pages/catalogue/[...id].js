import styles from './index.module.scss'
import ProductSheet from '/components/catalogue/ProductSheet';
import { apiQuery } from "/lib/dato/api";
import { GetProduct } from "/graphql"

export default function Home(props){
	const { product } = props
	return (
		<div className={styles.container}>
      <ProductSheet product={product}/>
		</div>
	)
}

export const getServerSideProps = async (context) => {

  const id = context.params.id[0];
	const locale = context.query.locale || 'en';
	const { product } = await apiQuery(GetProduct, {id, locale});
	
	if(!product) return {notFound:true}
	
	return { 
		props:{
			product
		}
	}
}