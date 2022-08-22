import styles from './FullscreenMedia.module.scss'
import React from 'react'
import { Image } from 'react-datocms'
import Link from 'next/link'
import { VideoPlayer } from '/components'

export type LayoutProps = { data:  FullscreenMediaBlockRecord }

export default function FullscreenMedia({ data: { media, headline, linkRecord, subHeadline }, data }: LayoutProps) {

	const slugBase = linkRecord.__typename === 'DesignerRecord' ? '/designers' : '/products'

	return (
		<Link scroll={false} href={`${slugBase}/${linkRecord.slug}`}>
			<a className={styles.fullScreenImage}>
				{!media.video ? 
					<Image
						className={styles.image}
						data={media?.responsiveImage}
						layout="fill"
						objectFit="cover"
					/>
				:
					<VideoPlayer data={media}/>
				}
				<div className={styles.wrapper}>
					<div className={styles.headline}>
						<span className="medium">{subHeadline}</span>
						<h1 className="start">{headline}</h1>
						<span className="medium">View Product <img src="/images/arrow.svg" className={styles.arrow} /></span>
					</div>
				</div>
			</a>
		</Link>
	)
}