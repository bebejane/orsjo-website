import styles from './TwoColumnImage.module.scss'
import React from 'react'
import { Image } from 'react-datocms'

type TwoColumnImageBlockProps = { data: TwoColumnImageRecord }

export default function TwoColumnImage({ data: { firstImage, lastImage } }: TwoColumnImageBlockProps) {

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