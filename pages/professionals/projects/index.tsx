import styles from './index.module.scss'
import { GetProjectStartDocument, GetAllProjectsDocument, GetAllProjectTypesDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { Thumbnail, Section } from '/components';

export type ProfessionalProps = { projects: ProjectRecord[], projectStart: ProjectStartRecord, projectTypes: ProjectTypeRecord[] }

export default function Professionals({ projects, projectStart, projectTypes }: ProfessionalProps) {

	//console.log(projectStart, projects)

	return (
		<>
			<Section className={styles.intro} top={true}>
				<h1 className="topMargin">{projectStart.title}</h1>
				<Markdown className={styles.intro}>
					{projectStart.intro}
				</Markdown>
			</Section>
			{projectTypes.map(({ title, id }, idx) => {
				return (
					<Section name={title} className={styles.projects} key={idx} >
						<h1>{title}</h1>
						{projects.filter(({ projectType }) => projectType.id === id).map(({ title, location, image, slug }, idx) =>
							<Thumbnail
								key={idx}
								title={title}
								subtitle={location}
								image={image}
								className={styles.project}
								slug={`/professionals/projects/${slug}`}
							/>
						)}
					</Section>
				)
			})}
		</>
	)
}

Professionals.layout = { layout: 'normal', color: "--gray", menu: 'inverted' } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetProjectStartDocument, GetAllProjectsDocument, GetAllProjectTypesDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});