import styles from './index.module.scss'
//import { GetAllContacts } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'

type ContactProps = {  }

export default function Contact({  }: ContactProps) {

	return (
		<div className={styles.contact}>
			<h1>Contact</h1>
			
		</div>
	)
}

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});