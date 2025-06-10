'use client';

import 'swiper/css';
import s from './FeaturedGallery.module.scss';
import { styleVariables } from '@/lib/utils';
import cn from 'classnames';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import type { Swiper } from 'swiper';
import { DesignerThumbnail, ProductThumbnail, ProjectThumbnail, Thumbnail, ArrowButton } from '@/components';
import { useEffect, useRef, useState } from 'react';
import { usePage } from '@/lib/context/page';
import { useMediaQuery } from 'usehooks-ts';

export type FeaturedGalleryProps = {
	products?: ProductRecord[];
	projects?: ProjectRecord[];
	designers?: DesignerRecord[];
	items: ProductRecord[] | ProjectRecord[] | DesignerRecord[];
	headline?: string;
	id: string;
	bgColor?: string;
	theme: 'dark' | 'light' | 'mid';
	arrowAlign?: 'top' | 'middle';
	inverted?: boolean;
	fadeColor?: string;
	showMarkAsNew?: boolean;
};

export default function FeaturedGallery({
	headline,
	items,
	id,
	theme,
	fadeColor = '--white',
	arrowAlign = 'top',
	inverted = false,
	showMarkAsNew = true,
}: FeaturedGalleryProps) {
	const { menu } = usePage();
	const swiperRef = useRef<Swiper | null>(null);
	const [index, setIndex] = useState(0);
	const [isShortSlide, setIsShortSlide] = useState(false);
	const [spaceBetween, setSpaceBetween] = useState(0);
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);
	const numSlides = items.length;

	useEffect(() => {
		const slidesPerView = isMobile ? 2 : 4;
		setIsShortSlide(numSlides <= slidesPerView);
	}, [isMobile, numSlides]);

	return (
		<div className={cn(s.featuredGallery, s[menu])}>
			{headline && arrowAlign === 'top' && (
				<div className={s.header}>
					<h1 className={s.headline}>{headline}</h1>
					<ArrowButton
						className={cn(s.next)}
						inverted={inverted}
						hide={isShortSlide}
						onClick={() => swiperRef.current?.slideNext()}
					/>
				</div>
			)}
			<div className={s.gallery}>
				<SwiperReact
					modules={[Mousewheel]}
					id={`${id}-swiper-wrap`}
					loop={!isShortSlide}
					noSwiping={false}
					direction={'horizontal'}
					mousewheel={{
						forceToAxis: true,
						releaseOnEdges: true,
						invert: false,
						sensitivity: 1,
						//thresholdDelta: 5,
						//thresholdTime: 100,
					}}
					simulateTouch={!isShortSlide}
					slidesPerView={'auto'}
					spaceBetween={spaceBetween}
					initialSlide={index}
					className={cn(s.swiper, isShortSlide && s.short)}
					onSlideChange={({ realIndex }) => setIndex(realIndex)}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
				>
					{items?.map((item: any, idx: number) => (
						<SwiperSlide
							key={`${id}-${idx}`}
							className={cn(s.slide)}
						>
							{item.__typename === 'ProductRecord' ? (
								<ProductThumbnail
									key={idx}
									product={item as ProductRecord}
									theme={theme}
									showMarkAsNew={showMarkAsNew}
									lazyload={false}
									className={s.thumbnail}
								/>
							) : item.__typename === 'ProjectRecord' ? (
								<ProjectThumbnail
									key={idx}
									project={item as ProjectRecord}
									theme={theme}
									showMarkAsNew={showMarkAsNew}
									lazyload={false}
									className={s.thumbnail}
								/>
							) : item.__typename === 'DesignerRecord' ? (
								<DesignerThumbnail
									key={idx}
									designer={item as DesignerRecord}
									theme={theme}
									showMarkAsNew={showMarkAsNew}
									lazyload={false}
									className={s.thumbnail}
								/>
							) : item.title && item.image ? (
								<Thumbnail
									key={idx}
									slug={item.slug}
									title={item.title}
									image={item.image}
									imageHover={item.environmentImage}
									theme={theme}
									lazyload={false}
									objectFit={'cover'}
									showMarkAsNew={showMarkAsNew}
									className={s.thumbnail}
								/>
							) : null}
						</SwiperSlide>
					))}
				</SwiperReact>
				<div
					className={cn(s.fade, isShortSlide && s.hide)}
					style={{
						background: `linear-gradient(-90deg, rgba(var(${fadeColor}),1) 0%, rgba(var(${fadeColor}),0) 100%, rgba(var(${fadeColor}),1) 100%)`,
					}}
				></div>
				{arrowAlign === 'middle' && !isShortSlide && (
					<div className={s.arrowMiddle}>
						<ArrowButton
							className={cn(s.next)}
							hide={isShortSlide}
							inverted={inverted}
							onClick={() => swiperRef.current?.slideNext()}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
