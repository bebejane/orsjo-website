import s from './page.module.scss';
import { ProjectStartDocument, AllProjectsDocument, AllProjectTypesDocument } from '@/graphql';
import { Markdown } from 'next-dato-utils/components';
import { ProjectThumbnail, Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export default async function Professionals({ params }: PageProps<'/[locale]/professionals/projects'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const [{ projectStart }, { allProjects }, { allProjectTypes }] = await Promise.all([
		apiQuery(ProjectStartDocument),
		apiQuery(AllProjectsDocument, { all: true }),
		apiQuery(AllProjectTypesDocument, {
			all: true,
		}),
	]);

	if (!projectStart) notFound();

	return (
		<>
			<Section className={s.introduction} top={true}>
				<h1 className='topMargin'>{projectStart.title}</h1>
				<Markdown className={s.intro} content={projectStart.intro} />
			</Section>
			{allProjectTypes
				.filter(({ id }) => allProjects.find(({ projectType }) => projectType.id === id))
				.map(({ title, titlePlural, id }, idx) => {
					return (
						<Section name={titlePlural} className={s.projects} key={idx}>
							<h1>{titlePlural}</h1>
							<div className={s.wrap}>
								{allProjects
									.filter(({ projectType }) => projectType.id === id)
									.map((p, idx) => (
										<ProjectThumbnail key={`t-${idx}`} project={p as ProjectRecord} theme='mid' className={s.project} />
									))}
							</div>
						</Section>
					);
				})}
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Projects',
	};
}
