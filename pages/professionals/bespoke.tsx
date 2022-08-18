import styles from './bespoke.module.scss'
import {  BespokeDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { FullWidthImage, Text, TwoColumnImage, ImageGallery, Section } from '/components';
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
				<h1>{bespoke.title}</h1>
				<Markdown className={styles.intro}>
					{bespoke.intro}
				</Markdown>
			</Section>
			<Section className={styles.projects} type="margin" bgColor={'--gray'}>
				{bespoke.examples.map(({project, summary}, idx) => {
					return (
						<>
							<Markdown>{summary}</Markdown>
							{project.gallery.map((block, idx) => {
								switch (block.__typename) {
									case 'FullwidthImageRecord':
										return <FullWidthImage data={block} onClick={setGalleryIndex}/>
									case 'TextRecord':
										return <Text data={block}/>
									case 'TwoColumnImageRecord':
										return <TwoColumnImage data={block} onClick={setGalleryIndex}/>
									case 'ImageGalleryRecord':
										return <ImageGallery data={block} onClick={setGalleryIndex}/>
									default:
										return null
								}
							})}
						</>
					)
				})}
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