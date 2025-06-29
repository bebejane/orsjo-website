import styles from './index.module.scss';
import { ProjectStartDocument, AllProjectsDocument, AllProjectTypesDocument } from '/graphql';
import withGlobalProps from '/lib/withGlobalProps';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { PageProps } from '/lib/context/page';
import { ProjectThumbnail, Section } from '/components';

export type ProfessionalProps = {
	allProjects: ProjectRecord[];
	projectStart: ProjectStartRecord;
	allProjectTypes: ProjectTypeRecord[];
};

export default function Professionals({ allProjects, projectStart, allProjectTypes }: ProfessionalProps) {
	return (
		<>
			<Section className={styles.introduction} top={true}>
				<h1 className='topMargin'>{projectStart.title}</h1>
				<Markdown className={styles.intro}>{projectStart.intro}</Markdown>
			</Section>
			{allProjectTypes
				.filter(({ id }) => allProjects.find(({ projectType }) => projectType.id === id))
				.map(({ title, titlePlural, id }, idx) => {
					return (
						<Section name={titlePlural} className={styles.projects} key={idx}>
							<h1>{titlePlural}</h1>
							<div className={styles.wrap}>
								{allProjects
									.filter(({ projectType }) => projectType.id === id)
									.map((p, idx) => (
										<ProjectThumbnail key={`t-${idx}`} project={p} theme='mid' className={styles.project} />
									))}
							</div>
						</Section>
					);
				})}
		</>
	);
}

Professionals.page = { title: 'Projects', layout: 'normal', color: '--gray', menu: 'inverted' } as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [ProjectStartDocument, AllProjectsDocument, AllProjectTypesDocument] },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);
