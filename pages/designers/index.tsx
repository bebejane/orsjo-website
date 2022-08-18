import styles from './index.module.scss'
import { AllDesignersDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'

export type DesignerProps = { designers: DesignerRecord[] }

export default function Designer({ designers }: DesignerProps) {
//	console.log(designers)
	return (
		<div className={styles.designers}>
			<h1>Designers</h1>
			<ul>
				{designers.map((designer, idx) => 
					<Link scroll={false} key={idx} href={`/designers/${designer.slug}`}><a><li>{designer.name}</li></a></Link>
				)}
			</ul>
		</div>
	)
}

export const getStaticProps = withGlobalProps({ queries: [AllDesignersDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});