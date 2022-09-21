import styles from './downloads.module.scss'
import { AllProductDownloadsDocument, AllCataloguesDocument } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { useState, useEffect, useRef } from 'react';
import { Section, Icon } from '/components'
import { productDownloads, ProductRecordWithPdfFiles } from '/lib/utils';

export type DownloadsProps = { products: ProductRecord[], catalogues: CatalogueRecord[] }

export default function Downloads({ products, catalogues }: DownloadsProps) {

	const [search, setSeatch] = useState<string>();
	const [results, setResults] = useState<ProductRecord[]>(products);
	const [list, setList] = useState({})
	const ref = useRef<HTMLInputElement>()

	useEffect(() => {
		if (!search || !products) return setResults(products)
		const res = products.filter(({ title }) => title.toLowerCase().startsWith(search.toLowerCase()))
		setResults(res)
	}, [search, products, setResults])

	useEffect(()=>{ ref.current.focus() }, [ ref])

	return (
		<>
			<Section className={styles.intro} top={true}>
				<h1 className="white topMargin">Download center</h1>
				<div className={styles.intro}>
					<Markdown>
						Looking for BIM-files? Need a CAD-file for a mock-up? Lightfiles?
						Product sheets too? No worries, we got you covered.
					</Markdown>
				</div>
			</Section>
			<Section className={styles.related} name="Product Files">
				<h1 className="white topMargin">Product related files</h1>
				<div className={styles.search}>
					<img src={'/images/search.svg'} />
					<input
						ref={ref}
						id="search"
						type="text"
						value={search}
						autoFocus={true}
						onChange={({ target }) => setSeatch(target.value)}
					/>
				</div>
				<table>
					<tbody>
						<tr>
							<th><span className="small">Image</span></th>
							<th><span className="small">Product</span></th>
							<th><span className="small">Type</span></th>
							<th></th>
						</tr>
						{(results || products).map(({ id, image, title, categories }, idx) => {
							const files = productDownloads(products[idx] as ProductRecordWithPdfFiles)
							return (
								<>
									<tr
										key={idx}
										className={list[idx] ? styles.active : undefined}
										onClick={() => setList({ ...list, [idx]: list[idx] ? false : true })}
									>
										<td>
											<Image data={image.responsiveImage} className={styles.image} />
										</td>
										<td>
											<h2 className="noMargin">{title}</h2>
										</td>
										<td>
											<span className="medium">
												{categories.map(c => c.name).join(', ')}
											</span>
										</td>
										<td className={styles.toggle}>{list[idx] ? '–' : '+'}</td>
									</tr>
									{list[idx] &&
										<tr key={`l-${idx}`} className={list[idx] ? styles.active : undefined}>
											<td></td>
											<td colSpan={2} className={styles.content}>
												<div className={styles.list}>
													{files.map(({ type, label, href }, idx) =>
														<>
															<div key={`f-${idx}`} className={styles.item}>
																<a href={href} download>
																	<Icon type={type} label={label} />
																</a>
															</div>
															{idx % 2 === 1 && <hr key={`hr-${idx}`} />}
														</>
													)}
												</div>
											</td>
											<td></td>
										</tr>
									}
								</>
							)
						}
						)}
					</tbody>
				</table>
			</Section>
			<Section className={styles.related} name="Catalogues" bottom={true}>
				<h1 className="white topMargin">Catalogues</h1>
				<table>
					<tbody>
						<tr>
							<th><span className="small">Image</span></th>
							<th><span className="small">Title</span></th>
							
							<th></th>
						</tr>
						{catalogues.map(({id, title, thumbnail, pdf}) =>
							<tr key={id}>
								<td>
									<Image data={thumbnail.responsiveImage} className={styles.image} />
								</td>
								<td>
									<a href={`${pdf.url}?dl=${title}.pdf`}>
										<Icon type={'pdf'} label={title} />
									</a>
								</td>
								<td></td>
							</tr>
						)}
					</tbody>
				</table>
			</Section>
		</>
	)
}

Downloads.layout = { layout: 'normal', color: "--gray", menu: 'inverted' } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [AllProductDownloadsDocument, AllCataloguesDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});