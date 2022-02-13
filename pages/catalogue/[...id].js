import styles from './index.module.scss'
import ProductSheet from '/components/catalogue/ProductSheet';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { GetProduct } from "/graphql"

export default function Home({product, locale}){
	
	return (
		<div className={styles.container}>
      <ProductSheet product={product} locale={locale}/>
		</div>
	)
}

export const getServerSideProps = async ({locale, params}) => {

  const id = params.id[0];
	const { product } = await apiQuery(GetProduct, {id, locale});
	
	if(!product) return {notFound:true}
	
	return { 
		props:{
			product,
			messages : await intlQuery('Catalogue', locale),
			locale
		}
	}
}