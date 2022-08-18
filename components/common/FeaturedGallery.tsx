import "swiper/css";
import styles from './FeaturedGallery.module.scss'
import cn from 'classnames'
import { sectionId } from '/lib/utils'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { Thumbnail,ProductThumbnail, ProjectThumbnail, ArrowButton } from '/components'
import { useRef, useState } from "react";
import { useLayout } from "/lib/context/layout";

export type FeaturedGalleryProps = { 
	products?: ProductRecord[], 
	projects?: ProjectRecord[], 
	headline?: string, 
	id: string, 
	bgColor?: string,
	theme: 'dark' | 'light',
	fadeColor?: number[]
}

export default function FeaturedGallery({ headline, products, projects, id, bgColor, theme, fadeColor = [255,255,255] } : FeaturedGalleryProps ) {
	
	const {  menu } = useLayout()
	const swiperRef = useRef<Swiper | null>(null)
	const [index, setIndex] = useState(0)
	const isProjects = projects != undefined

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
		<div className={cn(styles.featuredGallery, styles[menu])}>
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
					{products?.map((p, idx) =>
						<SwiperSlide key={`${id}-idx`} className={styles.slide}>
							<ProductThumbnail 
								key={idx}
								product={p} 
								theme={theme}
							/>
						</SwiperSlide>
					)}

					{projects?.map((p, idx) =>
						<SwiperSlide key={`${id}-idx`} className={styles.slide}>
							<ProjectThumbnail 
								key={idx}
								project={p} 
								theme={theme}
							/>
						</SwiperSlide>
					)}
				</SwiperReact>
				<div 
					className={cn(styles.fade, isShortSlide && styles.hide)}
					style={{
						background: `linear-gradient(-90deg, rgba(${fadeColor.join(',')},1) 0%, rgba(${fadeColor.join(',')},0) 100%, rgba(${fadeColor.join(',')},1) 100%)`
					}}
				></div>
			</div>
		</div>
	)
}