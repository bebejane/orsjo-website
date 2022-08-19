import styles from './index.module.scss'
import { AboutDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import type {  PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components'

export type AboutProps = {  about: AboutRecord}

export default function About({ about : {title, image, intro, sections} }: AboutProps) {
	
	return (
		<Section className={styles.about} type="full">
			<div className={styles.hero}>
				<Image 
					data={image.responsiveImage} 
					className={styles.heroImage}
					objectFit="cover"
				/>
				<h1>{title}</h1>
			</div>
			<Markdown className={styles.intro}>
				{intro}
			</Markdown>
			{sections.map(({text, image, video}) => 
				<>
					{image && 
						<Image data={image.responsiveImage} className={styles.image}/>
					}
					<Markdown className={styles.text}>
						{text}
					</Markdown>
					{video && 
						<video
							className={styles.video}
							playsInline
							muted
							loop={true}
							src={video.url}
							autoPlay={true}
							disablePictureInPicture={true}
							poster={video.video?.thumbnailUrl}
						/>
					}
				</>
			)}
		</Section>
	)
}

About.layout = { layout:'full', color:"--black", menu: 'inverted'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [AboutDocument], model:'about' }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});