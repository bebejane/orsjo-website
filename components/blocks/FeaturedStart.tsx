import "swiper/css";
import styles from './FeaturedStart.module.scss'
import cn from 'classnames'
import { sectionId } from '/lib/utils'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { ProductThumbnail, ArrowButton } from '/components'
import Link from 'next/link'
import { useRef, useState } from "react";
import { useLayout } from "/lib/context/layout";

export type ImageGalleryProps = { data: FeaturedRecord }

export default function FeaturedStart({ data: { headline, items: products, id } }: ImageGalleryProps) {
	
	const { layout, menu } = useLayout()
	const swiperRef = useRef<Swiper | null>(null)
	const [index, setIndex] = useState(0)
	
	const handleNext = () => {
		if(swiperRef.current)
			swiperRef.current.isEnd ? swiperRef.current.slideTo(0) : swiperRef.current.slideNext()
	}

	const slidesPerView = 4;
	const isShortSlide = products.length <= slidesPerView
	
	return (
		<section className={cn(styles.featuredStart, styles[menu])} {...sectionId(headline)}>
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
					{products.map((product, idx) =>
						<SwiperSlide key={`${id}-idx`}>
							<ProductThumbnail key={idx} product={product} inverted={true}/>
						</SwiperSlide>
					)}
				</SwiperReact>
				<div className={cn(styles.fade, isShortSlide && styles.hide)}></div>
				<ArrowButton 
					className={styles.arrow} 
					onClick={()=> swiperRef.current.slideNext()} 
					inverted={true}
				/>
			</div>
		</section>
	)
}