import styles from './index.module.scss'
import { withGlobalProps } from "/lib/hoc";

export default function Home(props : any) {
	return (
		<div>
			Content
		</div>
	)
}

export const getStaticProps = withGlobalProps({}, async ({props, revalidate } : any) => {
	
	return {
		props,
		revalidate
	};
});