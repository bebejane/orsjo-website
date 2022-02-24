import styles from './index.module.scss'
import CatalogueLight from '/components/catalogue/CatalogueLight';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { GetProducts } from "/graphql"

const hardWiredModelNameId = 107174981
const fixedMountingId = 107174756

export default function catalogueLight({products}) {
	
	return (
		<div className={styles.container}>
			<CatalogueLight products={products} withLightsource={true} />
		</div>
	)
}

export const getServerSideProps = async ({ locale }) => {	
	let { products } = await apiQuery(GetProducts, { locale });
	if (!products) return { notFound: true }

	// Filter out model name containing hard wired and products with mounting that is fixed
	products.forEach((p, idx) => products[idx].models = p.models.filter(m => !(m.name?.id == hardWiredModelNameId)))
	products = products.filter(p => p.models.length > 0 && !(p.mounting?.id == fixedMountingId))

	//console.log(products.length, products.reduce((acc, p) => acc + p.models.length, 0))

	return {
		props: {
			products,
			messages: await intlQuery('Catalogue', locale)
		}
	}
}
