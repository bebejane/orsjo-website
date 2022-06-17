import styles from './index.module.scss'
//import { GetAllSupports } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'

type SupportProps = { designers: Support[] }

export default function Support({ designers }: SupportProps) {
//	console.log(designers)
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