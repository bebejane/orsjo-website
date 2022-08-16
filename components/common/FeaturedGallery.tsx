import "swiper/css";
import styles from './FeaturedGallery.module.scss'
import cn from 'classnames'
import { sectionId } from '/lib/utils'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { Thumbnail, ArrowButton } from '/components'
import { useRef, useState } from "react";
import { useLayout } from "/lib/context/layout";

export type FeaturedGalleryProps = { products?: ProductRecord[], projects: ProjectRecord[], headline?: string, id: string, bgColor?: string }

export default function FeaturedGallery({ headline, products, projects, id, bgColor } : FeaturedGalleryProps ) {
	
	const {  menu } = useLayout()
	const swiperRef = useRef<Swiper | null>(null)
	const [index, setIndex] = useState(0)
	
	const items = (products || projects).map((el) => ({
		image: el.image,
		imageHover: el.environmentImage || el.secondaryImage, 
		slug: `${products ? 'products' : 'projects'}/${el.slug}`,
		title: el.title,
		subtitle: el.designer?.name || el.location
	}))
	
	const handleNext = () => {
		if(swiperRef.current)
			swiperRef.current.isEnd ? swiperRef.current.slideTo(0) : swiperRef.current.slideNext()
	}

	const slidesPerView = 4;
	const isShortSlide = items.length <= slidesPerView
	
	return (
		<section className={cn(styles.featuredGallery, styles[menu])} {...sectionId(headline)}>
			<div className={styles.header}>
				<h1 className={styles.headline}>
					{headline}
				</h1>
				<ArrowButton 
					className={cn(styles.next, isShortSlide && styles.hide)}
					onClick={()=> swiperRef.current?.isEnd ? swiperRef.current?.slideTo(0) : swiperRef.current.slideNext()} 
					reverse={swiperRef.current?.isEnd}
				/>
			</div>
			<div className={styles.gallery} >
				<SwiperReact
					id={`${id}-swiper-wrap`} 
					loop={false}
					slidesPerView={isShortSlide ? items.length : slidesPerView}
					spaceBetween={20}
					initialSlide={index}
					onSlideChange={({ realIndex }) => setIndex(realIndex)}
					onSwiper={(swiper) => swiperRef.current = swiper}
				>
					{items.map((item, idx) =>
						<SwiperSlide key={`${id}-idx`}>
							<Thumbnail key={idx} {...item}/>
						</SwiperSlide>
					)}
				</SwiperReact>
				<div className={cn(styles.fade, isShortSlide && styles.hide)}></div>
			</div>
		</section>
	)
}