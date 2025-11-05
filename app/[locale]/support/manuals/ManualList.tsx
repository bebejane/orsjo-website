'use client';

import s from './ManualList.module.scss';
import cn from 'classnames';
import { Section, Icon } from '@/components';
import { useEffect, useState, useRef } from 'react';

export type ManualsProps = {
	products: AllProductManualsQuery['allProducts'];
};

export default function ManualList({ products }: ManualsProps) {
	const [search, setSeatch] = useState<string>();
	const [results, setResults] = useState<AllProductManualsQuery['allProducts']>(products);
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (!search || !products) return setResults(products);
		const res = products.filter(({ title }) =>
			title?.toLowerCase().startsWith(search.toLowerCase())
		);
		setResults(res);
	}, [search, products, setResults]);

	useEffect(() => {
		typeof ref.current !== 'undefined' && ref.current?.focus();
	}, [ref]);

	return (
		<Section className={s.manuals} bottom={true}>
			<div className={s.search}>
				<img src={'/images/search.svg'} />
				<input
					ref={ref}
					id='search'
					type='text'
					value={search}
					onChange={({ target }) => setSeatch(target.value)}
				/>
			</div>

			<ul className={s.result}>
				{results?.map(({ title, categories, mountingInstructions: file }, idx) => (
					<li key={idx}>
						<a
							key={idx}
							href={file?.url ? `${file?.url}` : undefined}
							className={cn(!file && s.disabled)}
							target='_new'
						>
							<Icon
								type='pdf'
								label={`${title} ${categories[0].name} - Assembly Instructions`}
								disabled={file?.url === undefined}
							/>
						</a>
					</li>
				))}
			</ul>
		</Section>
	);
}
