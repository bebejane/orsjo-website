import s from './page.module.scss';
import { AllJobsDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { DraftMode, Markdown } from 'next-dato-utils/components';
import { Section } from '@/components';
import { Metadata } from 'next';

export default async function Jobs({ params }: PageProps<'/[locale]/about/jobs'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { allJobs, draftUrl } = await apiQuery(AllJobsDocument, { all: true });

	return (
		<>
			<Section className={s.jobs} top={true}>
				<h1 className='topMargin'>Jobs</h1>
			</Section>

			{allJobs.map(({ id, title, summary, text }, idx) => (
				<Section key={id} className={s.jobs} name={title} bottom={idx === allJobs.length - 1}>
					<h1 className='copper'>{title}</h1>
					<Markdown className={s.summary} content={summary} />
					<div data-datocms-content-link-source={text}>
						<Markdown className={s.text} content={text} />
					</div>
				</Section>
			))}

			{allJobs.length === 0 && (
				<Section className={s.jobs} bottom={true}>
					<p className={s.nojobs}>We don&apos;t have any job offers at the moment.</p>
				</Section>
			)}
			<DraftMode url={draftUrl} path='/about/jobs' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Jobs',
	};
}
