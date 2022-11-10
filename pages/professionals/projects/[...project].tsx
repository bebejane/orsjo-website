import styles from './[...project].module.scss'
import cn from 'classnames';
import withGlobalProps from "/lib/withGlobalProps";
import { apiQuery } from 'dato-nextjs-utils/api';
import { DatoSEO } from 'dato-nextjs-utils/components';
import { ProjectDocument, AllProjectsDocument, AllRelatedProjectsDocument, BespokeThumbnailDocument } from '/graphql';
import { Image } from 'react-datocms'
import { PageProps } from '/lib/context/page';
import { Block, Section, FeaturedGallery, TextReveal } from '/components';
import { dedupeImages, styleVariables } from '/lib/utils';
import { useEffect, useState } from 'react'
import { useStore, shallow } from '/lib/store';
import { useScrollInfo } from 'dato-nextjs-utils/hooks'
import { useMediaQuery } from 'usehooks-ts'

export type BespokeThumbnailRecord = Pick<BespokeRecord, 'thumbnail' | 'secondaryThumbnail'>

export type ProjectProps = {
	project: ProjectRecord,
	relatedProjects: ProjectRecord[],
	bespokeThumbnail: BespokeThumbnailRecord
}

const galleryImages = (project: ProjectRecord): FileField[] => {
	const images = [project.image, project.secondaryImage]
	project.gallery.forEach(el => Object.keys(el).forEach(k => el[k].responsiveImage && images.push(el[k])))
	return dedupeImages(images);
}

export default function Project({ project, relatedProjects, bespokeThumbnail }: ProjectProps) {

	const [setGallery, setGalleryId] = useStore((state) => [state.setGallery, state.setGalleryId], shallow)
	const { scrolledPosition, viewportHeight } = useScrollInfo()
	const [imageStyle, setImageStyle] = useState({})
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`)
	const isOtherProject = project.projectType?.title.toLowerCase() === 'other'
	const relatedHeadline = !isOtherProject ? `Other ${project.projectType.titlePlural.toLowerCase()}` : 'Related projects'
	const viewportScrollRatio = 1 - ((viewportHeight - (scrolledPosition)) / viewportHeight)

	// Add bespoke link to related products if project is bespoke.
	const relatedProducts = project.bespoke ? project.relatedProducts.concat([{
		title: 'Bespoke',
		image: bespokeThumbnail.thumbnail,
		environmentImage: bespokeThumbnail.secondaryThumbnail,
		slug: '/professionals/bespoke'
	} as ProductRecord]) : project.relatedProducts

	useEffect(() => {
		setGallery({ images: galleryImages(project) })
	}, [setGallery, project])

	useEffect(() => {
		setImageStyle({
			opacity: Math.min(0.2 + ((viewportScrollRatio || 0) * 4), 1),
			filter: `grayscale(${Math.max((1 - (viewportScrollRatio * 4)), 0)})`
		})
	}, [viewportScrollRatio, setImageStyle])

	return (
		<>
			<DatoSEO title={project.title} seo={project._seoMetaTags} />
			<Section className={styles.intro} name="Presentation" top={true}>
				<div className={styles.wrap} onClick={() => setGalleryId(project.image?.id)}>
					<h1 className={styles.title}>
						<TextReveal block={true}>
							{project.title}
						</TextReveal>
					</h1>
					<h1 className={styles.location}>
						<TextReveal>
							{project.location}
						</TextReveal>
					</h1>
					{project.image &&
						<Image
							data={project.image.responsiveImage}
							objectFit="cover"
							style={!isMobile ? imageStyle : undefined}
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
					name={'Related'}
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
			{relatedProjects.length > 0 &&
				<Section
					className={cn(styles.related, styles.other)}
					name={'Related'}
					disableSidebar={relatedProducts.length > 0}
					bgColor={'--mid-gray'}
				>
					<div className={styles.gallery}>
						<FeaturedGallery
							id="relatedProjects"
							headline={relatedHeadline}
							items={relatedProjects}
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

	const { project, bespokeThumbnail }: { project: ProjectRecord, bespokeThumbnail: BespokeThumbnailRecord } = await apiQuery([ProjectDocument, BespokeThumbnailDocument], { variables: { slug: context.params.project[0] } })
	const { projects }: { projects: ProjectRecord[] } = await apiQuery(AllRelatedProjectsDocument, { variables: { projectType: project.projectType.id } })
	const relatedProjects = projects.filter(p => p.id !== project.id).sort((a, b) => Math.random() > 0.5 ? 1 : -1)

	if (!project)
		return { notFound: true }

	return {
		props: {
			...props,
			bespokeThumbnail,
			project,
			relatedProjects,
			pageTitle: project.title
		},
		revalidate
	};
});