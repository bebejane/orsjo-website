'use client';

import 'swiper/css';
import s from './FeaturedGallery.module.scss';
import { styleVariables } from '@/lib/utils';
import cn from 'classnames';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import type { Swiper } from 'swiper';
import {
	ProfessionalThumbnail,
	DesignerThumbnail,
	ProductThumbnail,
	ProjectThumbnail,
	Thumbnail,
	ArrowButton,
} from '@/components';
import { useEffect, useRef, useState } from 'react';
import { usePage } from '@/lib/context/page-provider';
import { useMediaQuery } from 'usehooks-ts';

export type ProductRecordWithGeinsData = ProductRecord & { geins?: ProductType };

export type FeaturedGalleryProps = {
	products?: ProductRecord[];
	projects?: ProjectRecord[];
	designers?: DesignerRecord[];
	items: ProductRecordWithGeinsData[] | ProjectRecord[] | DesignerRecord[] | ProductRecord[];
	shopifyItems?: Product[];
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
	inverted: _inverted = false,
	showMarkAsNew = true,
}: FeaturedGalleryProps) {
	const { inverted } = usePage();
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
	console.log(items);
	return (
		<div className={cn(s.featuredGallery, (inverted || _inverted) && s.inverted)}>
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
					}}
					freeMode={{
						enabled: true,
						momentum: true,
						sticky: false,
					}}
					simulateTouch={!isShortSlide}
					slidesPerView={'auto'}
					spaceBetween={spaceBetween}
					initialSlide={index}
					className={cn(s.swiper, isShortSlide && s.short)}
					onSlideChange={({ realIndex }) => setIndex(realIndex)}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					onTouchEnd={() => {}}
				>
					{items?.map((item: any, idx: number) => (
						<SwiperSlide key={`${id}-${idx}`} className={cn(s.slide)}>
							{item.__typename === 'ProductRecord' ? (
								<ProductThumbnail
									key={idx}
									product={item as ProductRecord}
									theme={theme}
									showMarkAsNew={showMarkAsNew}
									geinsVariant={item.geins}
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
							) : item.__typename === 'ProfessionalRecord' ? (
								<ProfessionalThumbnail
									key={idx}
									professional={item as ProjectRecord}
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
						background: `linear-gradient(-90deg, 
						color-mix(in srgb, var(${fadeColor}) 100%, transparent) 0%, 
						color-mix(in srgb, var(${fadeColor}) 0%, transparent) 100%, 
						color-mix(in srgb, var(${fadeColor}) 100%, transparent) 100%
					`,
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
