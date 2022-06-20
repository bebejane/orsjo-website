import styles from './press.module.scss'
import { GetAllPress } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';

export type PressProps = { presses: PressRecord[]}

export default function Press({ presses }: PressProps) {

	return (
		<section className={styles.press}>
			<h1>Press</h1>
			{presses.map(({title, url}, idx)=>
				<a key={idx} href={url}>{title}</a>
			)}
		</section>
	)
}

Press.layout = { layout:'normal', color:"#E5E5E5", menu:'normal'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAllPress] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});