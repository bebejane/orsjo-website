import styles from './index.module.scss'
//import { GetAllAbouts } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'

type AboutProps = {  }

export default function About({  }: AboutProps) {

	return (
		<div className={styles.about}>
			<h1>About</h1>
			
		</div>
	)
}

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});