import styles from './projects.module.scss'
import { GetProjectStartDocument, GetAllProjectsDocument, GetAllProjectTypesDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import { sectionId } from '/lib/utils';
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { Thumbnail } from '/components';

export type ProfessionalProps = { projects: ProjectRecord[], projectStart:ProjectStartRecord, projectTypes: ProjectTypeRecord[] }

export default function Professionals({ projects, projectStart, projectTypes }: ProfessionalProps) {
	
	//console.log(projectStart, projects)

	return (
		<div className={styles.projects}>
			<h1>{projectStart.title}</h1>
			
			<Markdown className={styles.intro}>
				{projectStart.intro}
			</Markdown>
			
			{projectTypes.map(({title, id}, idx) => {
				return (
					<section key={idx} {...sectionId(title)}>
						{title}
						{projects.filter(({projectType})=> projectType.id ===  id).map(({title, location, image, slug}, idx) => 
							<Thumbnail 
								key={idx} 
								title={title} 
								subtitle={location} 
								image={image}
								className={styles.project}
								slug={`/professionals/projects/${slug}`}
							/>
						)}
					</section>
				)
			})}
		</div>
	)
}

Professionals.layout = { layout:'normal', color:"#A7A7A7", menu:'inverted'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetProjectStartDocument, GetAllProjectsDocument, GetAllProjectTypesDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});