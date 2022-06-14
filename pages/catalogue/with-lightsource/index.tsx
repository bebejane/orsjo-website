import styles from './index.module.scss'
import { GetServerSideProps } from 'next'
import CatalogueLight from '/components/catalogue/CatalogueLight';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { sortProductsByCategory } from "/lib/utils";
import { GetProducts } from "/graphql"
import { Product, Locale } from '/types';


type CatalogueLightWrapperProps = { products: Product[], locale: Locale}

export default function CatalogueLightWrapper({ products, locale } : CatalogueLightWrapperProps) {
	
	return (
		<div className={styles.container}>
			<CatalogueLight products={products} withLightsource={true} locale={locale} />
		</div>
	)
}

export const getServerSideProps : GetServerSideProps = async ({ locale }) => {

	let { products } = await apiQuery(GetProducts, { variables: { locale }});
	if (!products) return { notFound: true }

	// Filter out model name containing hard wired and products with mounting that is fixed
	const hardWiredModelNameId = '107174981'
	const fixedMountingId = '107174756'

	let filteredProducts: Product[] = []
	products.forEach((p, idx) =>
		filteredProducts.push({
			...products[idx], models: p.models.filter(m =>
				!(m.name?.id == hardWiredModelNameId))
		}));

	filteredProducts = filteredProducts.filter(p => p.models.length > 0 && !(p.mounting?.id === fixedMountingId))

	return {
		props: {
			products: sortProductsByCategory(filteredProducts),
			messages: await intlQuery('Catalogue', locale, ['sv', 'en']),
			locale
		}
	}
}
