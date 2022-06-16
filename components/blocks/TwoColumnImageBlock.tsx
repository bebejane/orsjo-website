import styles from './TwoColumnImageBlock.module.scss'
import React from 'react'
import { Image } from 'react-datocms'

type TwoColumnImageBlockProps = {data:TwoColumnImage}

export default function TwoColumnImageBlock({data : { firstImage, lastImage}} : TwoColumnImageBlockProps) {
	
	return (
		<div className={styles.twoColumnImage}>
			<Image data={firstImage.responsiveImage}/>
			<Image data={lastImage.responsiveImage}/>
		</div>
	)
}