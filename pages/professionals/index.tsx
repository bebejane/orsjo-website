import styles from './index.module.scss'
import { GetProjectStart, GetAllProjects, GetAllProjectTypes } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import { sectionId } from '/lib/utils';
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';

export type ProfessionalProps = { projects: Project[], projectStart:ProjectStart, projectTypes: ProjectType[] }

export default function Professionals({ projects, projectStart, projectTypes }: ProfessionalProps) {
	
	console.log(projectStart, projects)

	return (
		<div className={styles.designers}>
			<h1>{projectStart.title}</h1>
			<Markdown className={styles.intro}>
				{projectStart.intro}
			</Markdown>
			{projectTypes.map((type, idx) => 
				<section key={idx} {...sectionId(type.title)}>
					{type.title}
				</section>
			)}
		</div>
	)
}

Professionals.layout = { layout:'normal', color:"#A7A7A7", menu:'inverted'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetProjectStart, GetAllProjects, GetAllProjectTypes] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});