import styles from './downloads.module.scss'
import { AllProductDownloadsDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { useState } from 'react';
import { Section, Icon } from '/components'
import { productDownloads } from '/lib/utils';

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
			<Section className={styles.related} name="Product Files" bottom={true}>
				<h1 className="white topMargin">Product related files</h1>
				<table>
					<tbody>
						<tr>
							<th><span className="small">Image</span></th>
							<th><span className="small">Product</span></th>
							<th><span className="small">Type</span></th>
							<th></th>
						</tr>
						{products.map(({ id, image, title, categories }, idx) => {
							const files = productDownloads(products[idx])

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
													{files.map(({type, label, href}, idx) =>
														<>
															<div key={idx} className={styles.item}>
																<a href={href} download>
																	<Icon type={type} label={label}/>
																</a>
															</div>
															{idx % 2 === 1 && <hr/>}
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
		</>
	)
}

Downloads.layout = { layout: 'normal', color: "--gray", menu: 'inverted' } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [AllProductDownloadsDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});