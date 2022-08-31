import styles from './[...project].module.scss'
import { apiQuery } from '/lib/dato/api';
import { ProjectDocument, AllProjectsDocument, AllRelatedProjectsDocument } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import { Image } from 'react-datocms'
import { PageLayoutProps } from '/lib/context/layout';
import {  Block, Section, FeaturedGallery} from '/components';
import { useEffect } from 'react'
import { useStore } from '/lib/store';
import { recordImages } from '/lib/utils'
import useScrollInfo from '/lib/hooks/useScrollInfo';

export type ProjectProps = { project: ProjectRecord, related: ProjectRecord[] }

export default function Project({ project, related }: ProjectProps) {

	const [setGallery, setGalleryIndex] = useStore((state) => [state.setGallery, state.setGalleryIndex])
	const { scrolledPosition, viewportHeight } = useScrollInfo()
	const viewportScrollRatio = 1 - ((viewportHeight - (scrolledPosition)) / viewportHeight)
	const opacity = Math.max(0, ((viewportHeight - (scrolledPosition * 4)) / viewportHeight));
	const headerStyle = { opacity }
	const imageStyle = {
		opacity: 0.2 + viewportScrollRatio,
		filter: `grayscale(${1 - (viewportScrollRatio * 4)})`
	}
	
	useEffect(() => setGallery({ images: recordImages(project) }), [setGallery, project])

	//console.log(imageStyle, viewportScrollRatio)
	return (
		<>
			<Section className={styles.intro} name="Introduction" top={true}>
				<div className={styles.wrap}>
					<h1 className={styles.title} style={headerStyle}>{project.title}</h1>
					<h1 className={styles.location} style={headerStyle}>{project.location}</h1>
					<Image
						data={project.image.responsiveImage}
						objectFit="contain"
						style={imageStyle}
						className={styles.image}
					/>
				</div>
			</Section>
			{project.gallery.map((block, idx) => 
				<Section key={idx}>
					<Block data={block} onClick={setGalleryIndex}/>
				</Section>
			)}
			<Section bottom={true} />
			{related.length > 0 &&
				<Section
					className={styles.related}
					name={`Other ${project.projectType.title}s`}
					type="margin"
					bgColor={'--mid-gray'}
				>
					<h1>{`Other ${project.projectType.title}s`}</h1>
					<div className={styles.gallery}>
						<FeaturedGallery
							items={related}
							id="relatedProjects"
							theme="dark"
							fadeColor={'--mid-gray'}
						/>
					</div>
				</Section>
			}
		</>
	)
}

Project.layout = { layout: 'normal', color: "--gray", menu: 'inverted' } as PageLayoutProps

export async function getStaticPaths(context) {
	const { projects } = await apiQuery(AllProjectsDocument, {})
	const paths = projects.map(({ slug }) => ({ params: { project: [slug] } }))

	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({}, async ({ props, context, revalidate }) => {

	const { project }: { project: ProjectRecord } = await apiQuery(ProjectDocument, { variables: { slug: context.params.project[0] } })
	const { projects: related }: { projects: ProjectRecord[] } = await apiQuery(AllRelatedProjectsDocument, { variables: { projectType: project.projectType.id } })

	if (!project)
		return { notFound: true }

	return {
		props: {
			...props,
			project,
			related: related.filter(p => p.id !== project.id)
		},
		revalidate
	};
});