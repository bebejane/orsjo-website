import styles from './index.module.scss'
import { ServerSideProps } from 'next'
import Catalogue from '/components/catalogue/Catalogue';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { sortProductsByCategory } from "/lib/utils";
import { AllProductsDocument } from "/graphql"

type CatalogueWrapperProps = { products: ProductRecord[], locale: Locale }

export default function CatalogueWrapper({ products, locale } : CatalogueWrapperProps) {
	
	return (
		<div className={styles.container}>
			<Catalogue products={products} locale={locale} />
		</div>
	)
}

export const getServerSideProps : ServerSideProps = async ({ locale  } : any ) => {
	
	const { products } = await apiQuery(AllProductsDocument, { variables: {locale} });
	
	if (!products) return { notFound: true }

	return {
		props: {
			products: sortProductsByCategory(products),
			messages: await intlQuery('Catalogue', locale, ['sv', 'en']),
			locale
		}
	}
}
