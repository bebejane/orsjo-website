import styles from './bespoke.module.scss'
import {  BespokeDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { ProjectThumbnail, Section } from '/components';
import { recordImages } from '/lib/utils'
import { useStore } from 'lib/store';
import { useEffect } from 'react';
export type BespokeProps = { bespoke:BespokeRecord }

export default function Bespoke({ bespoke }: BespokeProps) {
	
	const [setGallery, setGalleryIndex] = useStore((state) => [state.setGallery, state.setGalleryIndex])
	useEffect(()=>setGallery({images:recordImages(bespoke)}), [bespoke])

	return (
		<>
			<Section className={styles.bespoke} type={'full'}>
				<Image 
					data={bespoke.image.responsiveImage} 
					layout='fill' 
					objectFit='cover' 
					className={styles.image}
				/>
			</Section>
			<Section name="Intro" className={styles.intro} type="margin" bgColor={'--gray'}>
				<h3>{bespoke.title}</h3>
				<Markdown className={styles.text}>
					{bespoke.intro}
				</Markdown>
			</Section>
			<Section className={styles.projects} type="margin" bgColor={'--gray'}>
				{bespoke.examples.map(({project, summary}, idx) => {
					return (
						<div className={styles.project} key={idx}>
							<div className={styles.image}>
								<Image className={styles.big} data={project.image.responsiveImage}/>
							</div>
							<div className={styles.description}>
								<Markdown className={styles.text}>{summary}</Markdown>
								<ProjectThumbnail project={project} theme="dark" className={styles.thumbnail}/>
							</div>
						</div>
					)
				})}
			</Section>
			<Section name="Outro" className={styles.outro} type="full" bgColor={'--gray'}>
				<Markdown className={styles.text}>
					{bespoke.outro}
				</Markdown>
			</Section>
			<Section name="More" className={styles.more} type="full" bgColor={'--gray'} bottom={true}>
				<Link href="/professionals/projects">
					<button>
						Show more commercial projects
					</button>
				</Link>
			</Section>
			
		</>
	)
}

Bespoke.layout = { layout:'full', color:"--gray", menu:'inverted', sidebar:false} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [BespokeDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});