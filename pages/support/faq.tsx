import styles from './faq.module.scss'
import { GetAllFaqsDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import cn from 'classnames'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components'
import { useState } from 'react';

export type FaqsProps = { faqs: FaqRecord[] }

export default function Faqs({ faqs }: FaqsProps) {
	
	const [list, setList] = useState({})

	return (
		<Section className={styles.faq} top={true}>
			<h1>Faq</h1>
			<ul>
				{faqs.map(({ question, answer, category: { title } }, idx) =>
					<li key={idx} className={cn(list[idx] && styles.selected)} onClick={()=> setList({...list, [idx]: list[idx] ? false : true})}>
						<div className={styles.header}>
							<h2 className={styles.question}>{question}</h2>	
							<div className={styles.indicator}>+</div>
						</div>
						<Markdown className={styles.answer}>{answer}</Markdown>
					</li>
				)}
			</ul>
		</Section>
	)
}

Faqs.layout = { layout: 'normal', color: '--copper', menu: 'inverted' } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAllFaqsDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});