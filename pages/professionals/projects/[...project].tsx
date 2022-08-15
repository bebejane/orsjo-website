import styles from './[...project].module.scss'
import { apiQuery } from '/lib/dato/api';
import { GetProjectDocument, GetAllProjectsDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { useLayout } from '/lib/context/layout';
import { FullWidthImage, Text, TwoColumnImage, ImageGallery, Section } from '/components';

export type ProjectProps = { project: ProjectRecord }

export default function Project({ project }: ProjectProps) {
	
	const { color } = useLayout()
	const handleClick = (id) => {
		console.log(id);	
	}

	return (
		<>
			<Section className={styles.intro} name="Introduction" top={true}>
				<div className={styles.wrap}>
					<h1 className={styles.title}>{project.title}</h1>
					<h1 className={styles.location}>{project.location}</h1>
					<Image data={project.image.responsiveImage} objectFit="contain" className={styles.image}/>
				</div>
			</Section>
			{project.gallery.map((block, idx) => {
				switch (block.__typename) {
					case 'FullwidthImageRecord':
						return <Section><FullWidthImage data={block} onClick={handleClick}/></Section>
					case 'TextRecord':
						return <Section><Text data={block}/></Section>
					case 'TwoColumnImageRecord':
						return <Section><TwoColumnImage data={block} onClick={handleClick}/></Section>
					case 'ImageGalleryRecord':
						return <Section><ImageGallery data={block} onClick={handleClick}/></Section>
					default:
						return null
				}
			})}
		</>
	)
}

Project.layout = { layout: 'normal', color: "--gray", menu: 'inverted' } as PageLayoutProps

export async function getStaticPaths(context) {
	const { projects } = await apiQuery(GetAllProjectsDocument, {})
	const paths = projects.map(({ slug }) => ({ params: { project: [slug] } }))
	
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({ model: 'product' }, async ({ props, context, revalidate }) => {

	const { project } : { project: ProjectRecord } = await apiQuery(GetProjectDocument, { variables: { slug: context.params.project[0] } })

	if (!project)
		return { notFound: true }

	return {
		props: {
			...props,
			project
		},
		revalidate
	};
});