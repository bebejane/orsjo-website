import styles from './index.module.scss'
import Catalogue from '/components/catalogue/Catalogue';
import { apiQuery } from "/lib/dato/api";
import { GetProducts } from "/graphql"

export default function Home(props){
	const { products } = props
	return (
		<div className={styles.container}>
      <Catalogue products={products}/>
		</div>
	)
}

export const getServerSideProps = async (context) => {
	let { products } = await apiQuery(GetProducts);
	
	if(!products) return {notFound:true}
	
	// for (let i = 0; i < 5; i++) { products = products.concat(products)} //TEst large catalogue

	return { 
		props:{
			products
		}
	}
}
