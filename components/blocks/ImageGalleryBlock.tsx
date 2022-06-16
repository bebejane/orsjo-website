import styles from './ImageGalleryBlock.module.scss'
import React from 'react'
import { Image } from 'react-datocms'

type ImageGalleryBlockProps = { data: ImageGallery }

export default function ImageGalleryBlock({ data: { gallery } }: ImageGalleryBlockProps) {

	return (
		<div className={styles.imageGallery}>
			{gallery.map(({ responsiveImage }, idx) =>
				<figure key={idx}>
					<Image
						data={responsiveImage}
						className={styles.image}
					/>
				</figure>
			)}
		</div>
	)
}