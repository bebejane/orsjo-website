import styles from './index.module.scss'
import CatalogueLight from '/components/catalogue/CatalogueLight';
import { apiQuery, intlQuery } from "/lib/dato/api";
import { GetProducts } from "/graphql"

export default function catalogueLight(props) {
	const { products, locale } = props
	return (
		<div className={styles.container}>
			<CatalogueLight products={products} withLightsource={false} locale={locale} />
		</div>
	)
}

export const getServerSideProps = async ({ locale }) => {
	const { products } = await apiQuery(GetProducts, { locale });
	if (!products) return { notFound: true }
	return {
		props: {
			products,
			messages: await intlQuery('Catalogue', locale),
			locale
		}
	}
}
