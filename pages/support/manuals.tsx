import styles from './manuals.module.scss'
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components'

export type ManualsProps = {  }

export default function Manuals({  }: ManualsProps) {

	return (
		<Section className={styles.jobs} top={true}>
			<h1>Manuals</h1>
		</Section>
	)
}

Manuals.layout = { layout:'normal', color:"#E5E5E5", menu:'normal'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});