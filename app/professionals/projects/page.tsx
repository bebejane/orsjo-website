import s from './page.module.scss';
import { ProjectStartDocument, AllProjectsDocument, AllProjectTypesDocument } from '@/graphql';
import { Markdown } from 'next-dato-utils/components';
import { PageProps } from '@/lib/context/page';
import { ProjectThumbnail, Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export default async function Professionals() {
	const [{ projectStart }, { allProjects }, { allProjectTypes }] = await Promise.all([
		apiQuery<ProjectStartQuery, ProjectStartQueryVariables>(ProjectStartDocument),
		apiQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, { all: true }),
		apiQuery<AllProjectTypesQuery, AllProjectTypesQueryVariables>(AllProjectTypesDocument, {
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
										<ProjectThumbnail
											key={`t-${idx}`}
											project={p as ProjectRecord}
											theme='mid'
											className={s.project}
										/>
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
