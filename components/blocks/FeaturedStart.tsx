import "swiper/css";
import styles from './FeaturedStart.module.scss'
import cn from 'classnames'
import { sectionId } from '/lib/utils'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { ProductThumbnail, ProjectThumbnail, ArrowButton } from '/components'
import Link from 'next/link'
import { useRef, useState } from "react";
import { useLayout } from "/lib/context/layout";

export type ImageGalleryProps = { data: FeaturedRecord, fadeColor?: number[] }

export default function FeaturedStart({ data: { headline, items, id }, fadeColor = [0,0,0] }: ImageGalleryProps) {

	const { menu } = useLayout()
	const swiperRef = useRef<Swiper | null>(null)
	const [index, setIndex] = useState(0)

	const handleNext = () => {
		if (swiperRef.current)
			swiperRef.current.isEnd ? swiperRef.current.slideTo(0) : swiperRef.current.slideNext()
	}

	const slidesPerView = 4;
	const isShortSlide = items.length <= slidesPerView
	
	return (
		<div className={cn(styles.featuredStart, styles[menu])}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h1 className={styles.headline}>
						{headline}
					</h1>
				</div>
				<div className={styles.gallery} >
					<SwiperReact
						id={`${id}-swiper-wrap`}
						loop={true}
						slidesPerView={4}
						spaceBetween={20}
						initialSlide={index}
						onSlideChange={({ realIndex }) => setIndex(realIndex)}
						onSwiper={(swiper) => swiperRef.current = swiper}
					>
						{items.map((p, idx) =>
							<SwiperSlide key={`${id}-idx`} className={styles.slide}>
								{p.__typename === 'ProductRecord' ?
									<ProductThumbnail 
										key={idx}
										product={p} 
										theme="dark"
									/>
								:
									<ProjectThumbnail
										key={idx}
										project={p} 
										theme="dark"
									/>
								}
							</SwiperSlide>
						)}
					</SwiperReact>
					<div 
						className={cn(styles.fade, isShortSlide && styles.hide)}
						style={{
							background: `linear-gradient(-90deg, rgba(${fadeColor.join(',')},1) 0%, rgba(${fadeColor.join(',')},0) 100%, rgba(${fadeColor.join(',')},1) 100%)`
						}}
						></div>
					<ArrowButton
						className={styles.arrow}
						onClick={() => swiperRef.current.slideNext()}
						inverted={true}
						hide={isShortSlide}
					/>
				</div>
			</div>
		</div>
	)
}