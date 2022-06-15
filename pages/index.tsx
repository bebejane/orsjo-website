import styles from './index.module.scss'
import { GetStaticProps } from 'next'
import { withGlobalProps } from "/lib/hoc";

export default function Home(props : any) {
	const { siteName } = props
	
	return (
		<div className={styles.container}>
			Örsjö
		</div>
	)
}

export const getStaticProps = withGlobalProps({}, async ({props, revalidate } : any) => {
	
	return {
		props,
		revalidate
	};
});