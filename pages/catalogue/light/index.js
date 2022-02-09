import styles from './index.module.scss'
import CatalogueLight from '/components/catalogue/CatalogueLight';
import { apiQuery } from "/lib/dato/api";
import { GetProducts } from "/graphql"

export default function catalogueLight(props) {
	const { products } = props
	return (
		<div className={styles.container}>
			<CatalogueLight products={products} />
		</div>
	)
}

export const getServerSideProps = async ({locale}) => {
	const { products } = await apiQuery(GetProducts, { locale });
	const messages = await intlQuery('Catalogue', locale)
	if (!products) return { notFound: true }

	return {
		props: {
			products,
			messages
		}
	}
}
