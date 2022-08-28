import styles from './faq.module.scss'
import { FaqStartDocument } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import cn from 'classnames'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components'
import { useState } from 'react';

export type FaqsProps = { faqs: FaqRecord[], faqStart: FaqStartRecord }

export default function Faqs({ faqs, faqStart }: FaqsProps) {

	const [list, setList] = useState({})
	const categories = {}

	faqs.forEach(f => {
		if (!categories[f.category.id])
			categories[f.category.id] = { id: f.category.id, title: f.category.title, items: [] }
		categories[f.category.id].items.push(f)
	})
	
	return (
		<>
			<Section className={styles.intro} top={true}>
				<h1 className="topMargin">{faqStart.title}</h1>
				<p>{faqStart.intro}</p>
			</Section>
			{Object.keys(categories).map(k => categories[k]).map(({ items, title }, i) => {
				return (
					<Section className={styles.faq} name={title} key={i}>
						<h1 className={styles.category}>{title}</h1>
						<ul>
							{items.map(({ question, answer, id }, idx) =>
								<li key={idx} className={cn(list[id] && styles.selected)} onClick={() => setList({ ...list, [id]: list[id] ? false : true })}>
									<div className={styles.header}>
										<h2 className={styles.question}>{question}</h2>
										<div className={styles.indicator}>+</div>
									</div>
									<Markdown className={cn(styles.answer, "medium")}>{answer}</Markdown>
								</li>
							)}
						</ul>
					</Section>
				)
			})}
		</>
	)
}

Faqs.layout = { layout: 'normal', color: '--copper', menu: 'inverted' } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [FaqStartDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});