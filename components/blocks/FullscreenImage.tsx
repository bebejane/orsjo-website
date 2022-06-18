import styles from './FullscreenImage.module.scss'
import React from 'react'
import { Image } from 'react-datocms'

type LayoutProps = { data: FullscreenImageRecord }

export default function FullscreenImage({ data: { image }, data }: LayoutProps) {
	
	return (
		<figure className={styles.fullScreenImage}>
			<Image className={styles.image} data={image?.responsiveImage} layout="fill" objectFit="cover"/>
		</figure>
	)
}