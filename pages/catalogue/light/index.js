import styles from './index.module.scss'
import CatalogueLight from '/components/catalogue/CatalogueLight';
import { apiQuery } from "/lib/dato/api";
import { GetProducts } from "/graphql"

export default function Home(props) {
	const { products } = props
	return (
		<div className={styles.container}>
			<CatalogueLight products={products} />
		</div>
	)
}

export const getServerSideProps = async (context) => {
	const locale = context.query.locale || 'en';
	let { products } = await apiQuery(GetProducts, { locale });

	if (!products) return { notFound: true }

	// for (let i = 0; i < 5; i++) { products = products.concat(products)} //TEst large catalogue

	return {
		props: {
			products
		}
	}
}
