import styles from './manuals.module.scss'
import { withGlobalProps } from "/lib/hoc";
import cn from 'classnames'
import { GetAllProductsDocument } from '/graphql';
import { PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components'
import { useEffect, useState } from 'react'

export type ManualsProps = {  products: ProductRecord[]}

export default function Manuals({ products }: ManualsProps) {

	const[search, setSeatch] = useState<string>();
	const[results, setResults] = useState<ProductRecord[]>();

	useEffect(()=>{
		if(!search || !products) return setResults(undefined)
		const res = products.filter(({title})=> title.toLowerCase().startsWith(search.toLowerCase()))
		setResults(res)
	}, [search, products, setResults])

	useEffect(()=>{document.getElementById('search').focus()},[])

	return (
		<Section className={styles.manuals} top={true}>
			<h1>Manuals</h1>
			<p>Search by product name to find assemly instructions for your Örsjö lighting product.</p>
			<div className={styles.search}>
				<img src={'/images/search.svg'}/>
				<input 
					id="search"
					type="text" 
					value={search} 
					onChange={({target}) => setSeatch(target.value)}
					autoFocus={true}
				/>
			</div>
			
			<ul className={styles.result}>
				{results?.map(({title, categories, mountingInstructions : file}, idx)=>
					<li key={idx}>
						<a 
							key={idx} 
							href={file?.url ? `${file?.url}?dl=${title} ${categories[0].name}, Assembly Instructions.pdf` : undefined} 
							className={cn(!file && styles.disabled)} 
							download={true}
						>
							<div className={styles.fileIcon}>PDF</div>
							<div className={styles.label}>{title} {categories[0].name}, Assembly Instructions.pdf</div>
							<div className={styles.arrow}>→</div>
						</a>
					</li>
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