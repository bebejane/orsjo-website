import styles from './sustainability.module.scss'
import { GetSustainabilityDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';

export type SustainabilityProps = {  sustainability: SustainabilityRecord}

export default function Sustainability({ sustainability }: SustainabilityProps) {
	const { title } = sustainability
	return (
		<section className={styles.sustainability}>
			<h1>{title}</h1>
		
		</section>
	)
}

Sustainability.layout = { layout:'normal', color:"--lightgrey", menu:'normal'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetSustainabilityDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});