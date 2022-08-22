import styles from './index.module.scss'
import { AboutDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import type {  PageLayoutProps } from '/lib/context/layout';
import { Section, VideoPlayer } from '/components'

export type AboutProps = {  about: AboutRecord}

export default function About({ about : {title, image, intro, sections} }: AboutProps) {
	
	return (
		<>
			<Section className={styles.about} type="full">
				<div className={styles.hero}>
					<Image 
						data={image.responsiveImage} 
						className={styles.heroImage}
						objectFit="cover"
					/>
					<h1>{title}</h1>
				</div>
			</Section>
			<Section className={styles.intro} type="margin">
				<Markdown className={styles.text}>
					{intro}
				</Markdown>
			</Section>
			<Section className={styles.blocks} type="full">
				{sections.map(({text, image, video}, idx) =>
					<div className={styles.block} key={idx}>
						<div className={styles.left}>
							<Markdown className={styles.text}>
								{text}
							</Markdown>
						</div>
						<div className={styles.right}>
							{image ? 
								<Image data={image.responsiveImage} className={styles.image}/>
							: video ?
								<VideoPlayer
									className={styles.video}
									data={image}
								/>
							: 
								null 
							}
						</div>
					</div>
				)}
			</Section>
		</>
	)
}

About.layout = { layout:'full', color:"--black", menu: 'inverted'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [AboutDocument], model:'about' }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});