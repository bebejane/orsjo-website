import styles from './sustainability.module.scss'
import { GetSustainabilityDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components'

export type SustainabilityProps = {  sustainability: SustainabilityRecord}

export default function Sustainability({ sustainability }: SustainabilityProps) {
	const { title } = sustainability
	return (
		<Section className={styles.sustainability} top={true}>
			<h1>{title}</h1>
		</Section>
	)
}

Sustainability.layout = { layout:'normal', color:"--lightgrey", menu:'normal'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetSustainabilityDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});