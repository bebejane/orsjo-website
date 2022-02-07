import styles from './index.module.scss'
import { apiQuery } from "/lib/dato/api";
import { withGlobalProps } from "/lib/utils";
import { GetProducts, GetPricelist } from "/graphql"

export default function Home(props){
	const { products, pricelist } = props
	
	return (
		<div className={styles.container}>
			<h1>Products</h1>
			<ul>
				{products.map(({id, title, pdfFile}) => 
					<li>{title} 
					- <a href={`${process.env.DATOCMS_WEBHOOK_ENDPOINT}/product/${id}`}>generate pdf</a> 
					- <a href={`/catalogue/${id}`}>html page</a> 
					- {pdfFile && <a href={pdfFile.url}>dato pdf</a>}
				</li>
				)}
			</ul>
			
			<h1>Price list</h1>
			<ul>
				<li><a href={`${process.env.DATOCMS_WEBHOOK_ENDPOINT}/catalogue`}>generate pdf pricelist</a> <br/></li>
				<li><a href={`/catalogue`}>pricelist html page</a></li>
				{pricelist.pdfFile && <li><a href={pricelist.pdfFile.url}>dato pricelist pdf</a></li>}
			</ul>
		</div>
	)
}

export const getStaticProps = withGlobalProps( async ({props, revalidate }) => {
	const { products, pricelist } = await apiQuery([GetProducts, GetPricelist])

	return { 
		props:{
			...props,
			products,
			pricelist
		},
		revalidate
	};
});