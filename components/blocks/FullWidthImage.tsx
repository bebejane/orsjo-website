import styles from './FullWidthImage.module.scss'
import React from 'react'
import { Image } from 'react-datocms'

type LayoutProps = { data: FullwidthImageRecord }

export default function FullWidthImageBlock({ data: { image }, data }: LayoutProps) {

	return (
		<Image className={styles.image} data={image?.responsiveImage} />
	)
}