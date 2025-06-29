import styles from './downloads.module.scss';
import cn from 'classnames';
import { AllProductDownloadsDocument, AllCataloguesDocument, DownloadsStartDocument } from '/graphql';
import withGlobalProps from '/lib/withGlobalProps';
import { Image } from 'react-datocms';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { PageProps } from '/lib/context/page';
import React, { useState, useEffect, useRef } from 'react';
import { Section, Icon } from '/components';
import { productDownloads, ProductRecordWithPdfFiles } from '/lib/utils';
import { useMediaQuery } from 'usehooks-ts';
import { styleVariables } from '/lib/utils';

export type DownloadsProps = {
	allProducts: ProductRecord[];
	allCatalogues: CatalogueRecord[];
	downloadsStart: DownloadsStartRecord;
};

export default function Downloads({ allProducts, allCatalogues, downloadsStart }: DownloadsProps) {
	const [search, setSearch] = useState<string>('');
	const [results, setResults] = useState<ProductRecord[]>(allProducts);
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);
	const [list, setList] = useState({});
	const ref = useRef<HTMLInputElement>();

	useEffect(() => {
		if (!search || !allProducts) return setResults(allProducts);

		const res = allProducts.filter(({ title }) => title.toLowerCase().startsWith(search.toLowerCase()));
		setResults(res);
	}, [search, allProducts, setResults]);

	useEffect(() => {
		ref.current.focus();
	}, [ref]);

	return (
		<>
			<Section className={styles.intro} top={true}>
				<h1 className='white topMargin'>{downloadsStart.title}</h1>
				<div className={styles.intro}>
					<Markdown>{downloadsStart.intro}</Markdown>
				</div>
			</Section>
			<Section className={styles.related} name='Product Files'>
				<h1 className='white topMargin'>Product related files</h1>
				<div className={styles.search}>
					<img src={'/images/search.svg'} />
					<input
						ref={ref}
						id='search'
						type='text'
						value={search}
						autoFocus={true}
						onChange={({ target }) => setSearch(target.value)}
					/>
				</div>
				{results && results.length === 0 ? (
					<div className={styles.noMatches}>No match for &quot;{search}&quot;...</div>
				) : (
					<table>
						<tbody>
							<tr>
								<th>
									<span className='small'>Image</span>
								</th>
								<th>
									<span className='small'>Product</span>
								</th>
								<th>
									<span className='small'>Type</span>
								</th>
								<th></th>
							</tr>

							{(results ?? allProducts).map(({ id, image, title, categories }, idx) => {
								const files = productDownloads((results ?? allProducts)[idx] as ProductRecordWithPdfFiles);
								return (
									<React.Fragment key={idx}>
										<tr
											key={`${id}-${idx}`}
											className={list[idx] ? styles.active : undefined}
											onClick={() => setList({ ...list, [idx]: list[idx] ? false : true })}
										>
											<td>
												<Image data={image.responsiveImage} className={styles.image} />
											</td>
											<td>
												<h2 className='noMargin'>{title}</h2>
											</td>
											<td>
												<span className='medium'>{categories.map((c, idx) => c.name).join(', ')}</span>
											</td>
											<td className={styles.toggle}>{list[idx] ? '–' : '+'}</td>
										</tr>
										{list[idx] && (
											<tr key={`${id}-${idx}-l`} className={list[idx] ? styles.active : undefined}>
												<td></td>
												<td colSpan={2} className={styles.content}>
													<div className={styles.list}>
														{files.map(({ type, label, href }, idx) => (
															<React.Fragment key={`${id}-file-${idx}`}>
																<div key={`f-${idx}`} className={styles.item}>
																	<a href={href} target='_new'>
																		<Icon type={type} label={label} />
																	</a>
																</div>
																{idx % 2 === 1 && <hr key={`hr-${idx}`} className={cn(isMobile && styles.hide)} />}
															</React.Fragment>
														))}
													</div>
												</td>
												<td></td>
											</tr>
										)}
									</React.Fragment>
								);
							})}
						</tbody>
					</table>
				)}
			</Section>
			<Section className={styles.related} name='Catalogues' bottom={true}>
				<h1 className='white topMargin'>Catalogues</h1>
				<table>
					<tbody>
						<tr>
							<th>
								<span className='small'>Image</span>
							</th>
							<th>
								<span className='small'>Title</span>
							</th>
							<th></th>
						</tr>
						{allCatalogues.map(({ id, title, thumbnail, pdf }) => (
							<tr key={id}>
								<td>
									<Image data={thumbnail.responsiveImage} className={styles.image} />
								</td>
								<td>
									<a href={`${pdf.url}?dl=${title}.pdf`} download target='_new'>
										<Icon label={title} />
									</a>
								</td>
								<td></td>
							</tr>
						))}
					</tbody>
				</table>
			</Section>
		</>
	);
}

Downloads.page = { title: 'Downloads', layout: 'normal', color: '--gray', menu: 'inverted' } as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [AllProductDownloadsDocument, AllCataloguesDocument, DownloadsStartDocument] },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);
