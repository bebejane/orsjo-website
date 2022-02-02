import styles from './index.module.scss'
import { withGlobalProps } from "/lib/utils";
import Markdown from '/lib/dato/components/Markdown';
import StructuredContent from '/lib/dato/components/structured-content';

export default function Home(props){
	return (
		<div className={styles.container}>
			Örsjö site
		</div>
	)
}

export const getStaticProps = withGlobalProps( async ({props, revalidate }) => {
	return {
		props,
		revalidate
	};
});