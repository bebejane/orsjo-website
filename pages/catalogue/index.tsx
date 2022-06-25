import styles from './index.module.scss'
import { GetServerSideProps } from 'next'
import Catalogue from '/components/catalogue/Catalogue';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { sortProductsByCategory } from "/lib/utils";
import { GetAllProductsDocument } from "/graphql"

type CatalogueWrapperProps = { products: ProductRecord[], locale: Locale }

export default function CatalogueWrapper({ products, locale } : CatalogueWrapperProps) {
	
	return (
		<div className={styles.container}>
			<Catalogue products={products} locale={locale} />
		</div>
	)
}

export const getServerSideProps : GetServerSideProps = async ({ locale  } : any ) => {
	
	const { products } = await apiQuery(GetAllProductsDocument, { variables: {locale} });
	
	if (!products) return { notFound: true }

	return {
		props: {
			products: sortProductsByCategory(products),
			messages: await intlQuery('Catalogue', locale, ['sv', 'en']),
			locale
		}
	}
}
