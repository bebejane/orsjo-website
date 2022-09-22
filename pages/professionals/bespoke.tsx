import styles from './bespoke.module.scss'
import { BespokeDocument } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageProps } from '/lib/context/page';
import { ProjectThumbnail, Section } from '/components';
import { recordImages } from '/lib/utils'
import { useStore } from 'lib/store';
import { useEffect } from 'react';
import cn from 'classnames'

export type BespokeProps = { bespoke: BespokeRecord }

export default function Bespoke({ bespoke }: BespokeProps) {

	const [setGallery, setGalleryId] = useStore((state) => [state.setGallery, state.setGalleryId])
	useEffect(() => setGallery({ images: recordImages(bespoke) }), [bespoke, setGallery])

	return (
		<>
			<Section className={styles.bespoke} type={'full'}>
				<Image
					data={bespoke.image.responsiveImage}
					layout='fill'
					objectFit='cover'
					className={styles.image}
				/>
				<h1>Custom made lighting</h1>
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