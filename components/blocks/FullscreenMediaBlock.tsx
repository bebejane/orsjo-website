import styles from './FullscreenMediaBlock.module.scss'
import React, { useRef } from 'react'
import { Image } from 'react-datocms'
import Link from 'next/link'
import { VideoPlayer, ArrowLink } from '/components'

export type LayoutProps = { data: FullscreenMediaBlockRecord }

export default function FullscreenMediaBlock({ data: { media, headline, linkRecord, subHeadline }, data }: LayoutProps) {

	const slugBase = linkRecord.__typename === 'DesignerRecord' ? '/designers' : '/products'
	const ref = useRef()

	return (
		<Link scroll={false} href={`${slugBase}/${linkRecord.slug}`}>
			<a className={styles.fullScreenImage} ref={ref}>
				<div className={styles.fade}></div>
				{!media.mimeType.includes('video') ?
					<Image
						className={styles.image}
						data={media?.responsiveImage}
						layout="fill"
						objectFit="cover"
					/>
					:
					<VideoPlayer data={media} />
				}
				<div className={styles.wrapper}>
					<div className={styles.headline}>
						<span className="medium">{subHeadline}</span>
						<h1 className="start">{headline}</h1>
						<ArrowLink hoverRef={ref} inverted={true}>View Product</ArrowLink>
					</div>
				</div>
			</a>
		</Link>
	)
}