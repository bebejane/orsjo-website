import styles from './index.module.scss'
import { apiQuery } from "/lib/dato/api";
import { withGlobalProps } from "/lib/utils";
import { GetProducts } from "/graphql"

export default function Home(props){
	const { products } = props
	return (
		<div className={styles.container}>
			<p>Products</p>
			<ul>
				{products.map(({id, title, pdfFile}) => 
					<li>{title} - <a href={`/api/catalogue/product/${id}`}>generate pdf</a> - <a href={`/catalogue/${id}`}>html page</a> - <a href={pdfFile.url}>dato pdf</a></li>
				)}
			</ul>
			
			<p>Price list</p>
			<a href={`/api/catalogue`}>generate pdf pricelist</a> <br/>
			<a href={`/catalogue`}>pricelist html page</a><br/>
			
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