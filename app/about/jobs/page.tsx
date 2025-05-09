import s from './page.module.scss';
import { AllJobsDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { Markdown } from 'next-dato-utils/components';
import { PageProps } from '@/lib/context/page';
import { Section } from '@/components';
import { Metadata } from 'next';

export default async function Jobs() {
	const { jobs } = await apiQuery<AllJobsQuery, AllJobsQueryVariables>(AllJobsDocument);
	if (!jobs) return notFound();

	return (
		<>
			<Section className={s.jobs} top={true}>
				<h1 className='topMargin'>Jobs</h1>
			</Section>

			{jobs.map(({ id, title, summary, text }, idx) => (
				<Section key={id} className={s.jobs} name={title} bottom={idx === jobs.length - 1}>
					<h1 className='copper'>{title}</h1>
					<Markdown className={s.summary} content={summary} />
					<Markdown className={s.text} content={text} />
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

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Jobs',
	};
}
