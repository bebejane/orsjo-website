import styles from './index.module.scss'
import type { Product, Locale } from '/types';
import { GetServerSideProps } from 'next'
import Catalogue from '/components/catalogue/Catalogue';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { sortProductsByCategory } from "/lib/utils";
import { GetProducts } from "/graphql"

type CatalogueWrapperProps = { products: [Product], locale: Locale }

export default function CatalogueWrapper({ products, locale } : CatalogueWrapperProps) {
	//console.log(products)
	return (
		<div className={styles.container}>
			<Catalogue products={products} locale={locale} />
		</div>
	)
}

export const getServerSideProps : GetServerSideProps = async ({ locale  } : any ) => {
	
	const { products } = await apiQuery(GetProducts, { variables: {locale} });
	
	if (!products) return { notFound: true }

	return {
		props: {
			products: sortProductsByCategory(products),
			messages: await intlQuery('Catalogue', locale, ['sv', 'en']),
			locale
		}
	}
}
