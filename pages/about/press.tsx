import styles from './press.module.scss'
import { GetAllPressDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components'

export type PressProps = { presses: PressRecord[]}

export default function Press({ presses }: PressProps) {

	return (
		<Section className={styles.press} top={true}>
			<h1>Press</h1>
			{presses.map(({title, url}, idx)=>
				<a key={idx} href={url}>{title}</a>
			)}
		</Section>
	)
}

Press.layout = { layout:'normal', color:"--lightgrey", menu:'normal'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAllPressDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});