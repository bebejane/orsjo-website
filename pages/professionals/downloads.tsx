import styles from './downloads.module.scss'
import { GetAllProductsDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { useState } from 'react';
import { Section } from '/components'

export type DownloadsProps = { products: ProductRecord[] }

export default function Downloads({ products }: DownloadsProps) {

	const [list, setList] = useState({})

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
				<table>
					<tbody>
						<tr>
							<th><span className="small">Image</span></th>
							<th><span className="small">Product</span></th>
							<th><span className="small">Type</span></th>
							<th></th>
						</tr>
						{products.map(({ image, title, categories, bimLink, pdfFile, mountingInstructions, lightFile }, idx) => {
							return (
								<>
									<tr key={idx} className={list[idx] ? styles.active : undefined} onClick={() => setList({ ...list, [idx]: list[idx] ? false : true })}>
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
										<tr className={list[idx] ? styles.active : undefined}>
											<td></td>
											<td colSpan={2} className={styles.content}>
												<div className={styles.list}>
													{pdfFile &&
														<div className={styles.item}>
															<div className={styles.icon}><span className="small">PDF</span></div>
															<a href={pdfFile.url} download><span className="small">Productsheet (SE)</span></a>
														</div>
													}
													{pdfFile &&
														<div className={styles.item}>
															<div className={styles.icon}><span className="small">PDF</span></div>
															<a href={pdfFile?.url} download><span className="small">Productsheet (EN)</span></a>
														</div>
													}
													{mountingInstructions &&
														<div className={styles.item}>
															<div className={styles.icon}><span className="small">PDF</span></div>
															<a href={mountingInstructions.url} download><span className="small">Mounting instructions</span></a>
														</div>
													}
													{bimLink &&
														<div className={styles.item}>
															<div className={styles.icon}><span className="small">BIM</span></div>
															<a href={bimLink} download><span className="small">BIM files</span></a>
														</div>
													}
													<div className={styles.item}>
														<div className={styles.icon}><span className="small">CAD</span></div>
														<span className="small">CAD file, size S</span>
													</div>
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
		</>
	)
}

Downloads.layout = { layout: 'normal', color: "--gray", menu: 'inverted' } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAllProductsDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});