import styles from './index.module.scss'
import { GetAllJobs } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';

export type JobsProps = {  jobs: JobRecord[]}

export default function Jobs({ jobs }: JobsProps) {

	return (
		<section className={styles.jobs}>
			<h1>Jobs</h1>
			{jobs.map(({title, summary, text})=>
				<>
					<h1>{title}</h1>
					<Markdown>{summary}</Markdown>
					<Markdown>{text}</Markdown>
				</>
			)}
		</section>
	)
}

Jobs.layout = { layout:'normal', color:"#E5E5E5", menu:'normal'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAllJobs] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});