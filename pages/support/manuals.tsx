import styles from './manuals.module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import cn from 'classnames'
import { AllProductManualsDocument, ManualsIntroDocument } from '/graphql';
import { PageProps } from '/lib/context/page';
import { Section, Icon } from '/components'
import { useEffect, useState, useRef } from 'react'

export type ManualsProps = {
	products: ProductRecord[]
	manual: ManualRecord
}

export default function Manuals({ products, manual }: ManualsProps) {

	const [search, setSeatch] = useState<string>();
	const [results, setResults] = useState<ProductRecord[]>(products);
	const ref = useRef<HTMLInputElement>()

	useEffect(() => {
		if (!search || !products) return setResults(products)
		const res = products.filter(({ title }) => title?.toLowerCase().startsWith(search.toLowerCase()))
		setResults(res)
	}, [search, products, setResults])


	useEffect(() => { typeof ref.current !== 'undefined' && ref.current.focus() }, [ref])

	return (
		<>
			<Section name="Introduction" className={styles.intro} top={true}>
				<h1 className="topMargin">{manual.title}</h1>
				<p>{manual.intro}</p>
			</Section>
			<Section className={styles.manuals} bottom={true}>
				<div className={styles.search}>
					<img src={'/images/search.svg'} />
					<input
						ref={ref}
						id="search"
						type="text"
						value={search}
						onChange={({ target }) => setSeatch(target.value)}
					/>
				</div>

				<ul className={styles.result}>
					{results?.map(({ title, categories, mountingInstructions: file }, idx) =>
						<li key={idx}>
							<a
								key={idx}
								href={file?.url ? `${file?.url}` : undefined}
								className={cn(!file && styles.disabled)}
								target="_new"
							>
								<Icon
									type="pdf"
									label={`${title} ${categories[0].name} - Assembly Instructions`}
									disabled={file?.url === undefined}
								/>
							</a>
						</li>
					)}
				</ul>
			</Section>
		</>
	)
}

Manuals.page = { title: 'Manuals', layout: 'normal', color: '--copper', menu: 'inverted' } as PageProps

export const getStaticProps = withGlobalProps({ queries: [AllProductManualsDocument, ManualsIntroDocument] }, async ({ props, revalidate }: any) => {

	return {
		props: {
			...props,
			products: props.products.filter(({ mountingInstructions }) => mountingInstructions)
		},
		revalidate
	};
});