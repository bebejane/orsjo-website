import styles from './index.module.scss'
//import { AllSupports } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'

type SupportProps = {}

export default function Support({ }: SupportProps) {

	return (
		<div className={styles.designers}>
			<h1>Support</h1>
		</div>
	)
}

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});