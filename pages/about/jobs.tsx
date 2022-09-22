import styles from './jobs.module.scss'
import { AllJobsDocument } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageProps } from '/lib/context/page';
import { Section } from '/components'

export type JobsProps = { jobs: JobRecord[] }

export default function Jobs({ jobs }: JobsProps) {
	
	return (
		<>
			<Section className={styles.jobs} top={true}>
				<h1>Jobs</h1>
			</Section>

			{jobs.map(({ id, title, summary, text }, idx) =>
				<Section key={id} className={styles.jobs} name={title}>	
					<h2>{title}</h2>
					<Markdown className={styles.summary}>{summary}</Markdown>
					<Markdown className={styles.text}>{text}</Markdown>
				</Section>	
			)}

			{jobs.length === 0 &&
				<Section className={styles.jobs}>
					<p className={styles.nojobs}>
						We don&apos;t have any job offers at the moment
					</p>
				</Section>
			}
		</>
	)
}

Jobs.page = { layout: 'normal', color:"--black", menu: 'inverted', footerLine:true } as PageProps

export const getStaticProps = withGlobalProps({ queries: [AllJobsDocument], model:'job' }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});