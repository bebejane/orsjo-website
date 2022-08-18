import styles from './index.module.scss'
import { ServerSideProps } from 'next'
import ProductSheet from '/components/catalogue/ProductSheet';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { ProductDocument } from "/graphql"

export type ProductProps = {product:ProductRecord, locale:Locale}

export default function Product({product, locale} : ProductProps){
	
	return (
		<div className={styles.container}>
      <ProductSheet product={product} locale={locale}/>
		</div>
	)
}

export const getServerSideProps : ServerSideProps = async ({locale, params}) => {

	if(typeof params === 'undefined' || params.id === undefined) 
		return { notFound:true }

  const id = params?.id[0];
	const { product } = await apiQuery(ProductDocument, { variables: {id, locale}});
	
	if(!product) return {notFound:true}
	
	return { 
		props:{
			product,
			messages : await intlQuery('Catalogue', locale, ['sv', 'en']),
			locale
		}
	}
}