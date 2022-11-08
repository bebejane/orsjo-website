import styles from './bespoke.module.scss'
import { BespokeDocument } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import Link from 'next/link'
import { Image } from 'react-datocms'
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { useScrollInfo } from 'dato-nextjs-utils/hooks';
import { PageProps } from '/lib/context/page';
import { ProjectThumbnail, Section, TextReveal } from '/components';
import { recordImages } from '/lib/utils'
import { shallow, useStore } from 'lib/store';
import { useEffect, useState } from 'react';
import cn from 'classnames'

export type BespokeProps = { bespoke: BespokeRecord }

export default function Bespoke({ bespoke }: BespokeProps) {

	const [setGallery, setGalleryId] = useStore((state) => [state.setGallery, state.setGalleryId], shallow)
	const { scrolledPosition, viewportHeight } = useScrollInfo()
	const [imageStyle, setImageStyle] = useState({opacity:0.2, filter:'grayscale(1)'})

	useEffect(() => {
		setGallery({ images: recordImages(bespoke) })
	}, [bespoke, setGallery])

	
	const viewportScrollRatio = 1 - ((viewportHeight - (scrolledPosition)) / viewportHeight)
	
	useEffect(()=>{
		setImageStyle({
			opacity: Math.min(0.2 + ((viewportScrollRatio || 0) *4), 1),
			filter: `grayscale(${Math.max((1-(viewportScrollRatio*4)), 0)})`
		})
	}, [viewportScrollRatio, setImageStyle])
	
	return (
		<>
			<Section className={styles.bespoke} type={'full'}>
				<Image
					data={bespoke.image.responsiveImage}
					layout='fill'
					objectFit='cover'
					className={styles.image}
					style={imageStyle}
				/>
				<h1>
					<TextReveal>
						Custom made lighting
					</TextReveal>
				</h1>
			</Section>
			<Section name="Intro" className={styles.intro} type="margin" bgColor={'--gray'}>
				<h1>{bespoke.title}</h1>
				<Markdown className={styles.text}>
					{bespoke.intro}
				</Markdown>
			</Section>
			<Section className={styles.projects} type="margin" bgColor={'--gray'}>
				{bespoke.examples.map(({ project, summary }, idx) => {
					return (
						<div className={styles.project} key={idx}>
							<div className={styles.image} onClick={() => setGalleryId((project.secondaryImage || project.image).id)}>
								<Image className={styles.big} data={project.secondaryImage?.responsiveImage || project.image.responsiveImage} />
							</div>
							<div className={styles.description}>
								<Markdown className={cn(styles.text, "large")}>{summary}</Markdown>
								<ProjectThumbnail project={project} theme="mid" className={styles.thumbnail} />
							</div>
						</div>
					)
				})}
			</Section>
			<Section name="Outro" className={styles.outro} type="full" bgColor={'--gray'}>
				<div className={styles.innerWrap}>
					<Markdown className={styles.text}>
						{bespoke.outro}
					</Markdown>
				</div>
			</Section>
			<Section name="More" className={styles.more} type="full" bgColor={'--gray'} bottom={true}>
				<div className={styles.innerWrap}>
					<Link href="/professionals/projects" passHref={true}>
						<button>
							Show more commercial projects
						</button>
					</Link>
				</div>
			</Section>

		</>
	)
}

Bespoke.page = { layout: 'full', color: "--gray", menu: 'inverted', sidebar: false } as PageProps

export const getStaticProps = withGlobalProps({ queries: [BespokeDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});