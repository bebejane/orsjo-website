import styles from './FullwidthImage.module.scss'
import React from 'react'
import { Image } from 'react-datocms'
import type { BlockProps } from './'

export type FullwidthImageProps = BlockProps & { data: FullwidthImageRecord }

export default function FullwidthImage({ data: { image }, onClick, first }: FullwidthImageProps) {

	return (
		<div onClick={() => onClick(image.id)} data-image-zoom={image.id}>
			<Image
				className={styles.image}
				data={image?.responsiveImage}
				priority={first}
			/>
		</div>
	)
}