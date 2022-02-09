import styles from './index.module.scss'
import Catalogue from '/components/catalogue/Catalogue';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { GetProducts } from "/graphql"

export default function Home({ products }){
	
	return (
		<div className={styles.container}>
      <Catalogue products={products}/>
		</div>
	)
}

export const getServerSideProps = async ({locale}) => {
	
	const { products} = await apiQuery(GetProducts, {locale});
	const messages = await intlQuery('Catalogue', locale)

	if(!products) return {notFound:true}

	return { 
		props:{
			products,
			messages
		}
	}
}
