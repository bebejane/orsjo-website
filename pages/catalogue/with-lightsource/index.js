import styles from './index.module.scss'
import CatalogueLight from '/components/catalogue/CatalogueLight';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { sortProductsByCategory } from "/lib/utils";
import { GetProducts } from "/graphql"

const hardWiredModelNameId = 107174981
const fixedMountingId = 107174756

export default function catalogueLight({products, locale}) {
	
	return (
		<div className={styles.container}>
			<CatalogueLight products={products} withLightsource={true} locale={locale}/>
		</div>
	)
}

export const getServerSideProps = async ({ locale }) => {
	
	let { products } = await apiQuery(GetProducts, { locale });
	if (!products) return { notFound: true }

	// Filter out model name containing hard wired and products with mounting that is fixed
	products.forEach((p, idx) => products[idx].models = p.models.filter(m => !(m.name?.id == hardWiredModelNameId)))
	products = products.filter(p => p.models.length > 0 && !(p.mounting?.id == fixedMountingId))

	return {
		props: {
			products : sortProductsByCategory(products),
			messages: await intlQuery('Catalogue', locale, ['sv', 'en']),
			locale
		}
	}
}