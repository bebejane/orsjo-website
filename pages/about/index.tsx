import styles from './index.module.scss'
import { AboutDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import type {  PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components'

export type AboutProps = {  about: AboutRecord}

export default function About({ about }: AboutProps) {
	
	return (
		<Section className={styles.about} top={true} type="full">
			<h1>{about.title}</h1>
			<Markdown className={styles.intro}>
				{about.intro}
			</Markdown>
			{about.sections.map(({text, image, video}) => 
				<>
					<Markdown className={styles.text}>
						{text}
					</Markdown>
					{image && 
						<Image data={image.responsiveImage} className={styles.image}/>
					}
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