'use client';

import s from './FaqList.module.scss';
import cn from 'classnames';
import { Markdown } from 'next-dato-utils/components';
import { Section } from '@/components';
import { useState, useEffect } from 'react';

export type FaqsByCategory = {
	[key: string]: {
		id: string;
		title: string;
		items: FaqStartQuery['faqs'];
	};
};

export type Props = {
	faqs: FaqStartQuery['faqs'];
};

export default function FaqList({ faqs }: Props) {
	const [list, setList] = useState<{ [key: string]: boolean }>({});

	useEffect(() => {
		if (location.hash) setList({ ...list, [location.hash.replace('#', '')]: true });
	}, [setList]);

	const faqsByCategory: FaqsByCategory = {};

	faqs.forEach((f) => {
		if (!faqsByCategory[f.category.id])
			faqsByCategory[f.category?.id] = {
				id: f.category?.id,
				title: f.category?.title,
				items: [],
			};
		faqsByCategory[f.category?.id].items.push(f);
	});

	return (
		<>
			{Object.keys(faqsByCategory)
				.map((k) => faqsByCategory[k])
				.map(({ items, title }, i) => {
					return (
						<Section className={s.faq} name={title} key={i}>
							<h1 className={s.category}>{title}</h1>
							<ul>
								{items.map(({ question, answer, id }, idx) => (
									<li
										id={id}
										key={idx}
										className={cn(list[id] && s.selected)}
										onClick={() => setList({ ...list, [id]: list[id] ? false : true })}
									>
										<div className={s.header}>
											<h2 className={s.question}>{question}</h2>
											<div className={s.indicator}>{list[id] ? '-' : '+'}</div>
										</div>
										<Markdown className={cn(s.answer, 'medium')} content={answer} />
									</li>
								))}
							</ul>
						</Section>
					);
				})}
		</>
	);
}
