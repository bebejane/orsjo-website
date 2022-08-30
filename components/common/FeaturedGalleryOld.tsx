import "swiper/css";
import styles from './FeaturedGalleryOld.module.scss'
import cn from 'classnames'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { DesignerThumbnail, ProductThumbnail, ProjectThumbnail, ArrowButton } from '/components'
import { useRef, useState } from "react";
import { useLayout } from "/lib/context/layout";
import { useWindowSize } from "rooks";

export type FeaturedGalleryOldProps = { 
	products?: ProductRecord[], 
	projects?: ProjectRecord[], 
	designers?: DesignerRecord[],
	items: ProductRecord[] | ProjectRecord[] | DesignerRecord[]
	headline?: string, 
	id: string, 
	bgColor?: string,
	theme: 'dark' | 'light' | 'mid',
	arrowAlign?: 'top' | 'middle',
	inverted?: boolean,
	fadeColor?: string
}

export default function FeaturedGalleryOld({ 
	headline, 
	items,
	id, 
	theme, 
	fadeColor = '--white',
	arrowAlign = 'top',
	inverted = false
} : FeaturedGalleryOldProps ) {
	
	const { menu } = useLayout()
	const swiperRef = useRef<Swiper | null>(null)
	const [index, setIndex] = useState(0)
	const { innerWidth } = useWindowSize()
	const numSlides = items.length
	const slidesPerView = innerWidth < 768 ? 2 : 4;
	const isShortSlide = numSlides <= slidesPerView
	
	return (
		<div className={cn(styles.featuredGallery, styles[menu])}>
			{headline && arrowAlign === 'top' && 
				<div className={styles.header}>
					<h1 className={styles.headline}>{headline}</h1>
					<ArrowButton 
						className={cn(styles.next, isShortSlide && styles.hide)}
						inverted={inverted}
						onClick={()=>swiperRef.current.slideNext()} 
					/>
				</div>
			}
			<div className={styles.gallery} >
				<SwiperReact
					id={`${id}-swiper-wrap`} 
					loop={!isShortSlide}
					noSwiping={isShortSlide}
					slidesPerView={isShortSlide ? numSlides : slidesPerView}
					spaceBetween={20}
					initialSlide={index}
					onSlideChange={({ realIndex }) => setIndex(realIndex)}
					onSwiper={(swiper) => swiperRef.current = swiper}
				>
					{items?.map((item, idx) =>
						<SwiperSlide key={`${id}-${idx}`} className={styles.slide}>
							{item.__typename === 'ProductRecord' ? 
								<ProductThumbnail 
									key={idx}
									product={item as ProductRecord} 
									theme={theme}
									className={styles.thumbnail}
								/>
							: item.__typename === 'ProjectRecord' ?								
								<ProjectThumbnail 
									key={idx}
									project={item as ProjectRecord} 
									theme={theme}
									className={styles.thumbnail}
								/>
							: item.__typename === 'DesignerRecord' ?
								<DesignerThumbnail 
									key={idx}
									designer={item as DesignerRecord} 
									theme={theme}
									className={styles.thumbnail}
								/>
							: 
								null
							}
						</SwiperSlide>
					)}
				</SwiperReact>
				<div 
					className={cn(styles.fade, isShortSlide && styles.hide)}
					style={{
						background: `linear-gradient(-90deg, rgba(var(${fadeColor}),1) 0%, rgba(var(${fadeColor}),0) 100%, rgba(var(${fadeColor}),1) 100%)`
					}}
				></div>
				{arrowAlign === 'middle' && !isShortSlide &&
					<div className={cn(styles.arrowMiddle)}>
						<ArrowButton 
							className={cn(styles.next, isShortSlide && styles.hide)}
							inverted={inverted}
							onClick={()=>swiperRef.current.slideNext()} 
						/>
					</div>
				}
			</div>
		</div>
	)
}