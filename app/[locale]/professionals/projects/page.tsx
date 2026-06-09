import s from './page.module.scss';
import { ProjectStartDocument, AllProjectsDocument, AllProjectTypesDocument } from '@/graphql';
<<<<<<< HEAD
import { Markdown } from 'next-dato-utils/components';
=======
import { DraftMode, Markdown } from 'next-dato-utils/components';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { ProjectThumbnail, Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
<<<<<<< HEAD

export default async function Professionals({ params }: PageProps<'/[locale]/professionals/projects'>) {
=======
import { buffer } from 'stream/consumers';
import { buildMetadata } from '@/app/[locale]/layout';

export default async function Professionals({
	params,
}: PageProps<'/[locale]/professionals/projects'>) {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const [{ projectStart }, { allProjects }, { allProjectTypes }] = await Promise.all([
=======
	const [
		{ projectStart, draftUrl },
		{ allProjects, draftUrl: projectsDraftUrl },
		{ allProjectTypes, draftUrl: projectTypesDraftUrl },
	] = await Promise.all([
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		apiQuery(ProjectStartDocument),
		apiQuery(AllProjectsDocument, { all: true }),
		apiQuery(AllProjectTypesDocument, {
			all: true,
		}),
	]);

<<<<<<< HEAD
=======
	const draftUrls: (string | null)[] = [draftUrl, projectsDraftUrl, projectTypesDraftUrl].filter(
		Boolean,
	);

>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
<<<<<<< HEAD
										<ProjectThumbnail key={`t-${idx}`} project={p as ProjectRecord} theme='mid' className={s.project} />
=======
										<ProjectThumbnail
											key={`t-${idx}`}
											project={p as ProjectRecord}
											theme='mid'
											className={s.project}
										/>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
									))}
							</div>
						</Section>
					);
				})}
<<<<<<< HEAD
=======
			<DraftMode url={draftUrls} path='/professionals/projects' />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
<<<<<<< HEAD
	return {
		title: 'Projects',
	};
=======
	return buildMetadata({
		title: 'Projects',
		description: 'Projects at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/professionals/projects`,
	});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
}
