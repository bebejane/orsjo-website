import styles from './[...project].module.scss'
import { apiQuery } from '/lib/dato/api';
import { ProjectDocument, AllProjectsDocument, AllRelatedProjectsDocument } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import { Image } from 'react-datocms'
import { PageProps } from '/lib/context/page';
import { Block, Section, FeaturedGallery } from '/components';
import { useEffect } from 'react'
import { useStore } from '/lib/store';
import { recordImages } from '/lib/utils'
import useScrollInfo from '/lib/hooks/useScrollInfo';
import cn from 'classnames';

export type ProjectProps = { project: ProjectRecord, related: ProjectRecord[] }

export default function Project({ project, related }: ProjectProps) {

	const [setGallery, setGalleryId] = useStore((state) => [state.setGallery, state.setGalleryId])
	const { scrolledPosition, viewportHeight } = useScrollInfo()
	const viewportScrollRatio = 1 - ((viewportHeight - (scrolledPosition)) / viewportHeight)
	const opacity = Math.max(0, ((viewportHeight - (scrolledPosition * 4)) / viewportHeight));
	const headerStyle = { opacity }
	const imageStyle = {
		opacity: 0.2 + viewportScrollRatio,
		filter: `grayscale(${1 - (viewportScrollRatio * 4)})`
	}

	useEffect(() => setGallery({ images: recordImages(project) }), [setGallery, project])	

	return (
		<>
			<Section className={styles.intro} name="Presentation" top={true}>
				<div className={styles.wrap}>
					<h1 className={styles.title} style={headerStyle}>{project.title}</h1>
					<h1 className={styles.location} style={headerStyle}>{project.location}</h1>
					<Image
						data={project.image.responsiveImage}
						objectFit="cover"
						style={imageStyle}
						className={styles.image}
					/>
				</div>
			</Section>
			{project.gallery.map((block, idx) =>
				<Section key={idx}>
					<Block data={block} onClick={setGalleryId} />
				</Section>
			)}
			<Section bottom={true} />
			{project.relatedProducts.length > 0 &&
				<Section
					className={styles.related}
					name={`Products`}
					bgColor={'--mid-gray'}
				>
					<div className={styles.gallery}>
						<FeaturedGallery
							id="relatedProducts"
							headline={'Products'}
							items={project.relatedProducts}
							theme="light"
							fadeColor={'--mid-gray'}
						/>
					</div>
				</Section>
			}
			{related.length > 0 &&
				<Section
					className={cn(styles.related, styles.other)}
					name={`Other ${project.projectType.titlePlural}`}
					bgColor={'--mid-gray'}
				>
					<div className={styles.gallery}>
						<FeaturedGallery
							id="relatedProjects"
							headline={`Other ${project.projectType.title}s`}
							items={related}
							theme="light"
							fadeColor={'--mid-gray'}
						/>
					</div>
				</Section>
			}
		</>
	)
}

Project.page = { layout: 'normal', color: "--gray", menu: 'inverted' } as PageProps

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