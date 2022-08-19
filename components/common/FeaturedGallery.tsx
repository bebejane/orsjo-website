import "swiper/css";
import styles from './FeaturedGallery.module.scss'
import cn from 'classnames'
import { sectionId } from '/lib/utils'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { DesignerThumbnail, ProductThumbnail, ProjectThumbnail, ArrowButton } from '/components'
import { useRef, useState } from "react";
import { useLayout } from "/lib/context/layout";

export type FeaturedGalleryProps = { 
	products?: ProductRecord[], 
	projects?: ProjectRecord[], 
	designers?: DesignerRecord[], 
	headline?: string, 
	id: string, 
	bgColor?: string,
	theme: 'dark' | 'light',
	fadeColor?: string
}

export default function FeaturedGallery({ headline, products, projects, designers, id, bgColor, theme, fadeColor = '--white2' } : FeaturedGalleryProps ) {
	
	const {  menu } = useLayout()
	const swiperRef = useRef<Swiper | null>(null)
	const [index, setIndex] = useState(0)
	const isProjects = projects != undefined
	const numSlides = (products || projects || designers).length
	
	const handleNext = () => {
		if(swiperRef.current)
			swiperRef.current.isEnd ? swiperRef.current.slideTo(0) : swiperRef.current.slideNext()
	}

	const slidesPerView = 4;
	const isShortSlide = numSlides <= slidesPerView
	
	return (
		<div className={cn(styles.featuredGallery, styles[menu])}>
			<div className={styles.header}>
				<h1 className={styles.headline}>
					{headline}
				</h1>
				<ArrowButton 
					className={cn(styles.next, isShortSlide && styles.hide)}
					onClick={()=>swiperRef.current.slideNext()} 
				/>
			</div>
			<div className={styles.gallery} >
				<SwiperReact
					id={`${id}-swiper-wrap`} 
					loop={true}
					slidesPerView={isShortSlide ? numSlides : slidesPerView}
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
					{designers?.map((d, idx) =>
						<SwiperSlide key={`${id}-idx`} className={styles.slide}>
							<DesignerThumbnail 
								key={idx}
								designer={d} 
								theme={theme}
							/>
						</SwiperSlide>
					)}
				</SwiperReact>
				<div 
					className={cn(styles.fade, isShortSlide && styles.hide)}
					style={{
						background: `linear-gradient(-90deg, rgba(var(${fadeColor}),1) 0%, rgba(var(${fadeColor}),0) 100%, rgba(var(${fadeColor}),1) 100%)`
					}}
				></div>
			</div>
		</div>
	)
}