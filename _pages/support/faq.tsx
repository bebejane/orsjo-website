import styles from './faq.module.scss';
import { FaqStartDocument } from '@/graphql';
import withGlobalProps from '@/lib/withGlobalProps';
import cn from 'classnames';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { PageProps } from '@/lib/context/page';
import { Section } from '@/components';
import { useState, useEffect } from 'react';

export type FaqsByCategory = {
	[key: string]: {
		id: string;
		title: string;
		items: FaqRecord[];
	};
};

export type FaqsProps = {
	faqs: FaqRecord[];
	faqStart: FaqStartRecord;
	faqsByCategory: FaqsByCategory;
};

export default function Faqs({ faqs, faqStart, faqsByCategory }: FaqsProps) {
	const [list, setList] = useState<{ [key: string]: boolean }>({});

	useEffect(() => {
		if (location.hash) setList({ ...list, [location.hash.replace('#', '')]: true });
	}, [setList]);

	return (
		<>
			<Section className={styles.intro} top={true}>
				<h1 className='topMargin'>{faqStart.title}</h1>
				<p>{faqStart.intro}</p>
			</Section>
			{Object.keys(faqsByCategory)
				.map((k) => faqsByCategory[k])
				.map(({ items, title }, i) => {
					return (
						<Section className={styles.faq} name={title} key={i}>
							<h1 className={styles.category}>{title}</h1>
							<ul>
								{items.map(({ question, answer, id }, idx) => (
									<li
										id={id}
										key={idx}
										className={cn(list[id] && styles.selected)}
										onClick={() => setList({ ...list, [id]: list[id] ? false : true })}
									>
										<div className={styles.header}>
											<h2 className={styles.question}>{question}</h2>
											<div className={styles.indicator}>{list[id] ? '-' : '+'}</div>
										</div>
										<Markdown className={cn(styles.answer, 'medium')}>{answer}</Markdown>
									</li>
								))}
							</ul>
						</Section>
					);
				})}
		</>
	);
}

Faqs.page = { title: 'FAQ', layout: 'normal', color: '--copper', menu: 'inverted' } as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [FaqStartDocument] },
	async ({ props, revalidate }: any) => {
		const faqsByCategory: FaqsByCategory = {};
		const faqs = props.faqs as FaqRecord[];

		faqs.forEach((f) => {
			if (!faqsByCategory[f.category.id])
				faqsByCategory[f.category?.id] = {
					id: f.category?.id,
					title: f.category?.title,
					items: [],
				};
			faqsByCategory[f.category?.id].items.push(f);
		});

		return {
			props: {
				...props,
				faqsByCategory,
			},
			revalidate,
		};
	}
);
