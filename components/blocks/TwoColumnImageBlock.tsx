import styles from './TwoColumnImageBlock.module.scss'
import React from 'react'
import { Image } from 'react-datocms'

type TwoColumnImageBlockProps = { data: TwoColumnImage }

export default function TwoColumnImageBlock({ data: { firstImage, lastImage } }: TwoColumnImageBlockProps) {

	return (
		<div className={styles.twoColumnImage}>
			<figure>
				<Image data={firstImage.responsiveImage} />
			</figure>
			<figure>
				<Image data={lastImage.responsiveImage} />
			</figure>
		</div>
	)
}