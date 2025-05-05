import s from './jobs.module.scss';
import { AllJobsDocument } from '@/graphql';
import withGlobalProps from '@/lib/withGlobalProps';
import { Markdown } from 'next-dato-utils/components';
import { PageProps } from '@/lib/context/page';
import { Section } from '@/components';

export type JobsProps = { jobs: JobRecord[] };

export default function Jobs({ jobs }: JobsProps) {
	return (
		<>
			<Section className={s.jobs} top={true}>
				<h1 className='topMargin'>Jobs</h1>
			</Section>

			{jobs.map(({ id, title, summary, text }, idx) => (
				<Section key={id} className={s.jobs} name={title} bottom={idx === jobs.length - 1}>
					<h1 className='copper'>{title}</h1>
					<Markdown className={s.summary}>{summary}</Markdown>
					<Markdown className={s.text}>{text}</Markdown>
				</Section>
			))}

			{jobs.length === 0 && (
				<Section className={s.jobs} bottom={true}>
					<p className={s.nojobs}>We don&apos;t have any job offers at the moment.</p>
				</Section>
			)}
		</>
	);
}

Jobs.page = {
	title: 'Jobs',
	layout: 'normal',
	color: '--black',
	menu: 'inverted',
	footerLine: true,
} as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [AllJobsDocument], model: 'job' },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);
