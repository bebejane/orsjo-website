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
	const { products } = await apiQuery(GetProducts);
	
	if(!products) return {notFound:true}
	
	return { 
		props:{
			products
		}
	}
}
