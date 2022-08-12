import styles from './index.module.scss'
import {GetAllFaqsDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';

export type FaqsProps = { faqs: FaqRecord[]}

export default function Faqs({ faqs }: FaqsProps) {

	return (
		<section className={styles.faq}>
			<h1>Faq</h1>
			{faqs.map(({question, answer, category: {title}})=>
				<>
					<span>{question}</span>
					<Markdown>{answer}</Markdown>
				</>
			)}
		</section>
	)
}

Faqs.layout = { layout:'normal', color:"#E5E5E5", menu:'normal'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAllFaqsDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});