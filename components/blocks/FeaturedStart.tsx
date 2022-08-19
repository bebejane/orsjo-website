import "swiper/css";
import styles from './FeaturedStart.module.scss'
import cn from 'classnames'
import { sectionId } from '/lib/utils'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { ProductThumbnail, ProjectThumbnail, ArrowButton, FeaturedGallery } from '/components'
import Link from 'next/link'
import { useRef, useState } from "react";
import { useLayout } from "/lib/context/layout";

export type ImageGalleryProps = { data: FeaturedRecord, fadeColor?: number[] }

export default function FeaturedStart({ data: { headline, items, id }, fadeColor = [0,0,0] }: ImageGalleryProps) {

	const { menu } = useLayout()
	const [index, setIndex] = useState(0)

	const isProducts = items[0].__typename === 'ProductRecord'
	
	return (
		<div className={cn(styles.featuredStart, styles[menu])}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h1 className={styles.headline}>
						{headline}
					</h1>
				</div>
				<div className={styles.gallery}>
					<FeaturedGallery 
						id={id} 
						arrowAlign="middle" 
						inverted={true} 
						theme="dark" 
						fadeColor="--black"
						products={isProducts ? items as ProductRecord[]: undefined} 
						projects={!isProducts ? items as ProjectRecord[]: undefined}
					/>
				</div>
			</div>
		</div>
	)
}