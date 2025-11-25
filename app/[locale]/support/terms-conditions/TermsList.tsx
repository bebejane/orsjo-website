'use client';

import s from './TermsList.module.scss';
import cn from 'classnames';
import { Section } from '@/components';
import { StructuredContent } from 'next-dato-utils/components';
import { useState, useEffect } from 'react';

export type TermsByCategory = {
	[key: string]: {
		id: string;
		title: string;
		items: TermsStartQuery['allTerms'];
	};
};

export type Props = {
	terms: TermsStartQuery['allTerms'];
};

export default function TermsList({ terms }: Props) {
	const [list, setList] = useState<{ [key: string]: boolean }>({});

	useEffect(() => {
		if (location.hash) setList({ ...list, [location.hash.replace('#', '')]: true });
	}, [setList]);

	const termsByCategory: TermsByCategory = {};

	terms.forEach((f) => {
		if (!termsByCategory[f.category.id])
			termsByCategory[f.category?.id] = {
				id: f.category?.id,
				title: f.category?.title,
				items: [],
			};
		termsByCategory[f.category?.id].items.push(f);
	});

	return (
		<>
			{Object.keys(termsByCategory)
				.map((k) => termsByCategory[k])
				.map(({ items, title }, i) => {
					return (
						<Section className={s.terms} name={title} key={i}>
							<h1 className={s.category}>{title}</h1>
							<ul>
								{items.map(({ id, text, title }, idx) => (
									<li
										id={id}
										key={idx}
										className={cn(list[id] && s.selected)}
										onClick={() => setList((l) => ({ ...l, [id]: l[id] ? false : true }))}
									>
										<div className={s.header}>
											<h2 className={s.title}>{title}</h2>
											<div className={s.indicator}>{list[id] ? '-' : '+'}</div>
										</div>
										<StructuredContent className={cn(s.text, 'medium')} content={text} />
									</li>
								))}
							</ul>
						</Section>
					);
				})}
		</>
	);
}
