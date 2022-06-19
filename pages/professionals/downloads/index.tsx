import styles from './index.module.scss'
import {  GetAllProducts } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { useState } from 'react';

export type DownloadsProps = { products: ProductRecord[] }

export default function Downloads({ products }: DownloadsProps) {
	
	const [list, setList] = useState({})

	return (
		<section className={styles.downloads}>
			<h1>Downloadcenter</h1>
			<Markdown>
				Looking for BIM-files? Need a CAD-file for a mock-up? Lightfiles? 
				Product sheets too? No worries, we got you covered.
			</Markdown>
			<table>
				<tbody>
					<tr>
						<th>Image</th>
						<th>Product</th>
						<th>Type</th>
						<th></th>
					</tr>
					{products.map(({image, title, categories, bimLink, pdfFile, mountingInstructions, lightFile}, idx) => {
						return (
							<>
								<tr key={idx} className={list[idx] ? styles.active : undefined} onClick={()=> setList({...list, [idx]: list[idx] ? false: true})}>
									<td>
										<Image data={image.responsiveImage}  className={styles.image} />
									</td>
									<td>
										{title}
									</td>
									<td>
										{categories.map(c => c.name).join(', ')}
									</td>
									<td className={styles.toggle}>{list[idx] ? '-' : '+'}</td>
								</tr>
								{list[idx] &&
									<tr className={list[idx] ? styles.active : undefined}>
										<td></td>
										<td colSpan={2} className={styles.content}>
											<div className={styles.list}>
												{pdfFile &&
													<div className={styles.item}>
														<div className={styles.icon}>PDF</div>
														<h3 className={styles.title}>
															<a href={pdfFile.url} download>Productsheet (SE)</a>
														</h3>
													</div>
												}
												{pdfFile &&
													<div className={styles.item}>
														<div className={styles.icon}>PDF</div>
														<h3 className={styles.title}>
															<a href={pdfFile?.url} download>Productsheet (EN)</a>
														</h3>
													</div>
												}
												{mountingInstructions && 
													<div className={styles.item}>
														<div className={styles.icon}>PDF</div>
														<h3 className={styles.title}>
															<a href={mountingInstructions.url} download>Mounting instructions</a>
														</h3>
													</div>
												}
												{bimLink &&
													<div className={styles.item}>
														<div className={styles.icon}>BIM</div>
														<h3 className={styles.title}>
															<a href={bimLink} download>Productsheet (SE)</a>
														</h3>
													</div>
												}
												<div className={styles.item}>
													<div className={styles.icon}>CAD</div>
													<h3 className={styles.title}>CAD file, size S</h3>
												</div>
											</div>
										</td>
										<td></td>
									</tr>
								}
							</>
						)}
					)}
				</tbody>
			</table>
		</section>
	)
}

Downloads.layout = { layout:'normal', color:"#E5E5E5", menu:'inverted'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAllProducts] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});