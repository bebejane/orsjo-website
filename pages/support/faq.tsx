import styles from './index.module.scss'
import { GetAllFaqsDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components'

export type FaqsProps = { faqs: FaqRecord[] }

export default function Faqs({ faqs }: FaqsProps) {

	return (
		<Section className={styles.faq} top={true}>
			<h1>Faq</h1>
			{faqs.map(({ question, answer, category: { title } }) =>
				<>
					<span>{question}</span>
					<Markdown>{answer}</Markdown>
				</>
			)}
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