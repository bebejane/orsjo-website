import s from './index.module.scss';
import { ProjectStartDocument, AllProjectsDocument, AllProjectTypesDocument } from '@/graphql';
import withGlobalProps from '@/lib/withGlobalProps';
import { Markdown } from 'next-dato-utils/components';
import { PageProps } from '@/lib/context/page';
import { ProjectThumbnail, Section } from '@/components';

export type ProfessionalProps = {
	projects: ProjectRecord[];
	projectStart: ProjectStartRecord;
	projectTypes: ProjectTypeRecord[];
};

export default function Professionals({ projects, projectStart, projectTypes }: ProfessionalProps) {
	return (
		<>
			<Section className={s.introduction} top={true}>
				<h1 className='topMargin'>{projectStart.title}</h1>
				<Markdown className={s.intro}>{projectStart.intro}</Markdown>
			</Section>
			{projectTypes
				.filter(({ id }) => projects.find(({ projectType }) => projectType.id === id))
				.map(({ title, titlePlural, id }, idx) => {
					return (
						<Section name={titlePlural} className={s.projects} key={idx}>
							<h1>{titlePlural}</h1>
							<div className={s.wrap}>
								{projects
									.filter(({ projectType }) => projectType.id === id)
									.map((p, idx) => (
										<ProjectThumbnail
											key={`t-${idx}`}
											project={p}
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

Professionals.page = {
	title: 'Projects',
	layout: 'normal',
	color: '--gray',
	menu: 'inverted',
} as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [ProjectStartDocument, AllProjectsDocument, AllProjectTypesDocument] },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);
