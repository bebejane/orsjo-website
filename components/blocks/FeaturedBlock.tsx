import styles from './FeaturedBlock.module.scss'
import React from 'react'
import { Image } from 'react-datocms'
import { ProductThumbnail } from '/components'

type ImageGalleryBlockProps = { data: Featured }

export default function FeaturedBlock({ data: { headline, items : products } }: ImageGalleryBlockProps) {
	
	return (
		<section className={styles.featured}>
			<div className={styles.header}>
				<h3 className={styles.headline}>
					{headline}
				</h3>
				<div className={styles.next}>
					›
				</div>
			</div>
			<div className={styles.gallery}>
				{products.map((product, idx) => 
					<ProductThumbnail key={idx} product={product}/>
				)}	
			</div>
		</section>
	)
}