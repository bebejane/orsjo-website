'use client';

import s from './page.module.scss';
import cn from 'classnames';
import { Image } from 'react-datocms';
import React, { useState, useEffect, useRef } from 'react';
import { Section, Icon } from '@/components';
import { productDownloads, ProductRecordWithPdfFiles } from '@/lib/utils';
import { useMediaQuery } from 'usehooks-ts';
import { styleVariables } from '@/lib/utils';

export type DownloadsListProps = {
	products: AllProductDownloadsQuery['allProducts'];
};

export default function Downloads({ products }: DownloadsListProps) {
	const [search, setSearch] = useState<string>('');
	const [results, setResults] = useState<AllProductDownloadsQuery['allProducts']>(products);
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);
	const [list, setList] = useState({});
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (!search || !products) return setResults(products);

		const res = products.filter(({ title }) =>
			title.toLowerCase().startsWith(search.toLowerCase())
		);
		setResults(res);
	}, [search, products, setResults]);

	useEffect(() => {
		ref.current?.focus();
	}, [ref]);

	return (
		<Section className={s.related} name='Product Files'>
			<h1 className='white topMargin'>Product related files</h1>
			<div className={s.search}>
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
				<div className={s.noMatches}>No match for &quot;{search}&quot;...</div>
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

						{(results ?? products).map(({ id, image, title, categories }, idx) => {
							const files = productDownloads(
								(results ?? products)[idx] as ProductRecordWithPdfFiles
							);
							return (
								<React.Fragment key={idx}>
									<tr
										key={`${id}-${idx}`}
										className={list[idx] ? s.active : undefined}
										onClick={() => setList({ ...list, [idx]: list[idx] ? false : true })}
									>
										<td>
											{image.responsiveImage && (
												<Image data={image.responsiveImage} className={s.image} />
											)}
										</td>
										<td>
											<h2 className='noMargin'>{title}</h2>
										</td>
										<td>
											<span className='medium'>
												{categories.map((c, idx) => c.name).join(', ')}
											</span>
										</td>
										<td className={s.toggle}>{list[idx] ? '–' : '+'}</td>
									</tr>
									{list[idx] && (
										<tr key={`${id}-${idx}-l`} className={list[idx] ? s.active : undefined}>
											<td></td>
											<td colSpan={2} className={s.content}>
												<div className={s.list}>
													{files.map(({ type, label, href }, idx) => (
														<React.Fragment key={`${id}-file-${idx}`}>
															<div key={`f-${idx}`} className={s.item}>
																<a href={href} target='_new'>
																	<Icon type={type} label={label} />
																</a>
															</div>
															{idx % 2 === 1 && (
																<hr key={`hr-${idx}`} className={cn(isMobile && s.hide)} />
															)}
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
	);
}
