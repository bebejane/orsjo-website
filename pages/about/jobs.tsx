import styles from './jobs.module.scss'
import { GetAllJobsDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components'

export type JobsProps = { jobs: JobRecord[] }

export default function Jobs({ jobs }: JobsProps) {

	return (
		<Section className={styles.jobs} top={true}>
			<h1>Jobs</h1>
			{jobs.map(({ title, summary, text }) =>
				<>
					<h1>{title}</h1>
					<Markdown>{summary}</Markdown>
					<Markdown>{text}</Markdown>
				</>
			)}
		</Section>
	)
}

Jobs.layout = { layout: 'normal', color:"--black", menu: 'inverted' } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAllJobsDocument], model:'job' }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});