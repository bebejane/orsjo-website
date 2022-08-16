import styles from './manuals.module.scss'
import { withGlobalProps } from "/lib/hoc";
import { Image } from 'react-datocms'
import { GetAllProductsDocument } from '/graphql';
import { PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components'
import { useEffect, useState } from 'react'

export type ManualsProps = {  products: ProductRecord[]}

export default function Manuals({ products }: ManualsProps) {
	console.log(products)
	const[search, setSeatch] = useState();
	const[results, setResults] = useState<ProductRecord>();

	useEffect(()=>{
		if(!search || !products) return setResults(undefined)
		const res = products.filter(({title})=> title.toLowerCase().startsWith(search.toLowerCase()))
		setResults(res)
	}, [search, products, setResults])

	return (
		<Section className={styles.manuals} top={true}>
			<h1>Manuals</h1>
			<p>Search by product name to find assemly instructions for your Örsjö lighting product.</p>
			<input type="text" value={search} onChange={({target}) => setSeatch(target.value)}/>
			<ul className={styles.result}>
				{results?.map((product, idx)=>
					<a href={product.mountingInstructions?.url} key={idx} download>
						<li>
							<div className={styles.fileIcon}>PDF</div>
							<div className={styles.label}>{product.title} {product.categories[0].name}</div>
						</li>
					</a>
				)}
			</ul>
		</Section>
	)
}

Manuals.layout = { layout:'normal', color:'--copper', menu:'normal'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAllProductsDocument] }, async ({ props, revalidate }: any) => {

	return {
		props: {
			...props
		},
		revalidate
	};
});