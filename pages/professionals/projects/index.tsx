import styles from './index.module.scss'
import { ProjectStartDocument, AllProjectsDocument, AllProjectTypesDocument } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { ProjectThumbnail, Section } from '/components';

export type ProfessionalProps = { projects: ProjectRecord[], projectStart: ProjectStartRecord, projectTypes: ProjectTypeRecord[] }

export default function Professionals({ projects, projectStart, projectTypes }: ProfessionalProps) {

	return (
		<>
			<Section className={styles.introduction} top={true}>
				<h1 className="topMargin">{projectStart.title}</h1>
				<Markdown className={styles.intro}>
					{projectStart.intro}
				</Markdown>
			</Section>
			{projectTypes.filter(({id}) => projects.find(({projectType}) => projectType.id === id)).map(({ title, id }, idx) => {
				return (
					<Section name={title} className={styles.projects} key={idx} >
						<h1>{title}</h1>
						{projects.filter(({ projectType }) => projectType.id === id).map((p, idx) =>
							<ProjectThumbnail
								key={`t-${idx}`}
								project={p}
								theme='mid'
								className={styles.project}
							/>
						)}
					</Section>
				)
			})}
		</>
	)
}

Professionals.layout = { layout: 'normal', color: "--gray", menu: 'inverted' } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [ProjectStartDocument, AllProjectsDocument, AllProjectTypesDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});