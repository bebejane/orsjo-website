import styles from './bespoke.module.scss'
import {  GetBespokeDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { FullWidthImage, Text, TwoColumnImage, ImageGallery, Section } from '/components';

export type BespokeProps = { bespoke:BespokeRecord }

export default function Bespoke({ bespoke }: BespokeProps) {
	
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
										return <FullWidthImage data={block} />
									case 'TextRecord':
										return <Text data={block} />
									case 'TwoColumnImageRecord':
										return <TwoColumnImage data={block} />
									case 'ImageGalleryRecord':
										return <ImageGallery data={block} />
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

export const getStaticProps = withGlobalProps({ queries: [GetBespokeDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});