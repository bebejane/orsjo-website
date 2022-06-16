import styles from './FullWidthImageBlock.module.scss'
import React from 'react'
import { Image } from 'react-datocms'

type LayoutProps = { data: FullwidthImage }

export default function FullWidthImageBlock({ data: { image }, data }: LayoutProps) {

	return (
		<Image className={styles.image} data={image?.responsiveImage} />
	)
}