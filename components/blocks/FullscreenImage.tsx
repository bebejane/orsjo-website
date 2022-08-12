import styles from './FullscreenImage.module.scss'
import React from 'react'
import { Image } from 'react-datocms'
import Link from 'next/link'

type LayoutProps = { data: FullscreenImageRecord }

export default function FullscreenImage({ data: { image, headline, linkRecord, subHeadline }, data }: LayoutProps) {
	
	const slugBase = linkRecord.__typename === 'DesignerRecord' ? '/designers' : '/products'
	
	return (
		<Link href={`${slugBase}/${linkRecord.slug}`}>
			<a className={styles.fullScreenImage}>
				<Image 
					className={styles.image} 
					data={image?.responsiveImage} 
					layout="fill" 
					objectFit="cover"
				/>
				<div className={styles.headline}>
					<span>{subHeadline}</span>
					<h1>{headline}</h1>
					<span>View Product <img src="/images/arrow.svg" className={styles.arrow}/></span>
				</div>
			</a>
		</Link>
	)
}