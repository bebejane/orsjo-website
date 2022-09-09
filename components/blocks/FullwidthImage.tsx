import styles from './FullwidthImage.module.scss'
import React from 'react'
import { Image } from 'react-datocms'

export type FullwidthImageProps = { data: FullwidthImageRecord, onClick:Function }

export default function FullwidthImage({ data: { image }, data, onClick }: FullwidthImageProps) {

	return (
		<div onClick={()=>onClick(image.id)}>
			<Image className={styles.image} data={image?.responsiveImage}/>
		</div>
	)
}