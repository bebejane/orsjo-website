import styles from './[...project].module.scss'
import { apiQuery } from '/lib/dato/api';
import { ProjectDocument, AllProjectsDocument, AllRelatedProjectsDocument, BespokeThumbnailDocument } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import { Image } from 'react-datocms'
import { PageProps } from '/lib/context/page';
import { Block, Section, FeaturedGallery } from '/components';
import { useEffect } from 'react'
import { useStore } from '/lib/store';
import useScrollInfo from '/lib/hooks/useScrollInfo';
import cn from 'classnames';

type BespokeThumbnailRecord = Pick<BespokeRecord, 'thumbnail'>

export type ProjectProps = { 
	project: ProjectRecord, 
	related: ProjectRecord[], 
	bespokeThumbnail:BespokeThumbnailRecord 
}

const galleryImages = (project: ProjectRecord) : FileField[] => {
	const images = [project.image, project.secondaryImage]
	project.gallery.forEach(el => Object.keys(el).forEach(k => el[k].responsiveImage  && images.push(el[k])))
	return images;
} 

export default function Project({ project, related, bespokeThumbnail }: ProjectProps) {

	const [setGallery, setGalleryId] = useStore((state) => [state.setGallery, state.setGalleryId])
	const { scrolledPosition, viewportHeight } = useScrollInfo()
	const isOtherProject = project.projectType?.title.toLowerCase() === 'other'
	const relatedHeadline  = !isOtherProject ? `Other ${project.projectType.titlePlural}` : 'Related projects'
	const viewportScrollRatio = 1 - ((viewportHeight - (scrolledPosition)) / viewportHeight)
	const opacity = Math.max(0, ((viewportHeight - (scrolledPosition * 8)) / viewportHeight));
	const headerStyle = { opacity}
	const imageStyle = {
		opacity: Math.min(0.2 + (viewportScrollRatio*4), 1),
		filter: `grayscale(${Math.max((1-(viewportScrollRatio*4)), 0)})`
	}
	
	// Add bespoke link to related products if project is bespoke.
	const relatedProducts = project.bespoke ? project.relatedProducts.concat([{
		title: 'Bespoke', 
		image: bespokeThumbnail.thumbnail, 
		slug: '/professionals/bespoke'
	} as ProductRecord]) : project.relatedProducts

	useEffect(() => {
		setGallery({ images: galleryImages(project) })
	}, [setGallery, project])	
	
	console.log(relatedProducts);
	
	return (
		<>
			<Section className={styles.intro} name="Presentation" top={true}>
				<div className={styles.wrap} onClick={()=>setGalleryId(project.image?.id)}>
					<h1 className={styles.title} style={headerStyle}>{project.title}</h1>
					<h1 className={styles.location} style={headerStyle}>{project.location}</h1>
					{project.image &&
						<Image
							data={project.image.responsiveImage}
							objectFit="cover"
							style={imageStyle}
							className={styles.image}
						/>
					}
				</div>
			</Section>
			{project.gallery.map((block, idx) =>
				<Section key={idx}>
					<Block data={block} onClick={setGalleryId} />
				</Section>
			)}
			<Section bottom={true} />
			{relatedProducts.length > 0 &&
				<Section
					className={styles.related}
					name={`Products`}
					bgColor={'--mid-gray'}
				>
					<div className={styles.gallery}>
						<FeaturedGallery
							id="relatedProducts"
							headline={'Products'}
							items={relatedProducts}
							theme="light"
							fadeColor={'--mid-gray'}
						/>
					</div>
				</Section>
			}
			{related.length > 0 &&
				<Section
					className={cn(styles.related, styles.other)}
					name={relatedHeadline}
					bgColor={'--mid-gray'}
				>
					<div className={styles.gallery}>
						<FeaturedGallery
							id="relatedProjects"
							headline={relatedHeadline}
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

	const { project, bespokeThumbnail }: { project: ProjectRecord, bespokeThumbnail: BespokeThumbnailRecord} = await apiQuery([ProjectDocument, BespokeThumbnailDocument], { variables: { slug: context.params.project[0] } })
	const { projects: related }: { projects: ProjectRecord[] } = await apiQuery(AllRelatedProjectsDocument, { variables: { projectType: project.projectType.id } })

	if (!project)
		return { notFound: true }
	
	return {
		props: {
			...props,
			bespokeThumbnail,
			project,
			related: related.filter(p => p.id !== project.id)
		},
		revalidate
	};
});