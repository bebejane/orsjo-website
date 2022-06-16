import styles from './index.module.scss'
import { GetDesigners } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'

type DesignerProps = { designers: Designer[] }

export default function Designer({ designers }: DesignerProps) {
	
	return (
		<div className={styles.designers}>
			<h1>Designers</h1>
		</div>
	)
}

export const getStaticProps = withGlobalProps({ queries: [GetDesigners] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});