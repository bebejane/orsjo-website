import "swiper/css";
import styles from './FeaturedBlock.module.scss'
import cn from 'classnames'
import { sectionId } from '/lib/utils'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { ProductThumbnail } from '/components'
import Link from 'next/link'
import { useRef, useState } from "react";

export type ImageGalleryBlockProps = { data: Featured }

export default function FeaturedBlock({ data: { headline, items: products, id } }: ImageGalleryBlockProps) {
	
	
	const swiperRef = useRef<Swiper | null>(null)
	const [index, setIndex] = useState(0)

	const handleNext = () => {
		if(swiperRef.current)
			swiperRef.current.isEnd ? swiperRef.current.slideTo(0) : swiperRef.current.slideNext()
	}

	const slidesPerView = 4;
	const isShortSlide = products.length <= slidesPerView
	const arrow = swiperRef.current?.isEnd ? '‹' : '›'
	
	return (
		<section className={styles.featured} {...sectionId(headline)}>
			<div className={styles.header}>
				<h1 className={styles.headline}>
					{headline}
				</h1>
				<button  className={cn(styles.next, isShortSlide && styles.hide)} onClick={handleNext}>{arrow}</button>
			</div>
			<div className={styles.gallery} >
				<SwiperReact
					id={`${id}-swiper-wrap`} 
					loop={false}
					slidesPerView={isShortSlide ? products.length : slidesPerView}
					spaceBetween={20}
					initialSlide={index}
					onSlideChange={({ realIndex }) => setIndex(realIndex)}
					onSwiper={(swiper) => swiperRef.current = swiper}
				>
					{products.map((product, idx) =>
						<SwiperSlide key={`${id}-idx`}>
							<Link href={`/products/${product.slug}`}>
								<a>
									<ProductThumbnail key={idx} product={product} />
								</a>
							</Link>	
						</SwiperSlide>
					)}
				</SwiperReact>
				<div className={cn(styles.fade, isShortSlide && styles.hide)}></div>
			</div>
			
		</section>
	)
}