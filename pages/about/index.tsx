import styles from './index.module.scss'
import { GetAbout } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import type {  PageLayoutProps } from '/lib/context/layout';

export type AboutProps = {  about: AboutRecord}

export default function About({ about }: AboutProps) {
	
	return (
		<section className={styles.about}>
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
		</section>
	)
}

About.layout = { layout:'normal', color:"#E5E5E5", menu:'inverted'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAbout] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});