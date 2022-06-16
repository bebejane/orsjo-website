import styles from './Products.module.scss'
import { withGlobalProps } from "/lib/hoc";

export default function Home(props : any) {
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