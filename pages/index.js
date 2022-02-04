import styles from './index.module.scss'
import { apiQuery } from "/lib/dato/api";
import { withGlobalProps } from "/lib/utils";
import { GetProducts } from "/graphql"

export default function Home(props){
	console.log(props)
	const { products } = props
	return (
		<div className={styles.container}>
			Products
			<ul>
				{products.map(p => 
					<li>{p.title} - <a href={`/api/catalogue/${p.id}`}>pdf</a> - <a href={`/catalogue/${p.id}`}>page</a></li>
				)}
			</ul>
		</div>
	)
}

export const getStaticProps = withGlobalProps( async ({props, revalidate }) => {
	const { products } = await apiQuery(GetProducts)

	return { 
		props:{
			...props,
			products
		},
		revalidate
	};
});