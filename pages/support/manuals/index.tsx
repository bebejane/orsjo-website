import styles from './index.module.scss'
import { GetAllManuals } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';

export type ManualsProps = {  }

export default function Manuals({  }: ManualsProps) {

	return (
		<section className={styles.jobs}>
			<h1>Manuals</h1>
		</section>
	)
}

Manuals.layout = { layout:'normal', color:"#E5E5E5", menu:'normal'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});