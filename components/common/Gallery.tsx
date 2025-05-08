'use client';

import 'swiper/css';
import s from './Gallery.module.scss';
import cn from 'classnames';
import React from 'react';
import { Image } from 'react-datocms';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Loader } from '@/components';

export type GalleryProps = {
	images: FileField[];
	onClose: (event?: React.MouseEvent) => void;
	index: number;
	show: boolean;
	padImagesWithTitle?: boolean;
};

export default function Gallery({
	images,
	onClose,
	index = 0,
	show,
	padImagesWithTitle = false,
}: GalleryProps) {
	const swiperRef = useRef<SwiperType | null>(null);
	const [realIndex, setRealIndex] = useState(0);
	const [title, setTitle] = useState<string | null>(null);
	const [loaded, setLoaded] = useState<any>({});
	const [initLoaded, setInitLoaded] = useState(false);
	const isSingleSlide = images?.length === 1;
	const isHidden = !images || !show;

	useEffect(() => {
		if (images) setTitle(images[realIndex]?.title ?? null);
	}, [realIndex, images, setTitle]);

	useEffect(() => {
		setRealIndex(index);
	}, [index]);

	useEffect(() => {
		// handle  keys
		const handleKeys = ({ key }) => {
			if (isHidden) return;
			if (key === 'ArrowRight') swiperRef?.current?.slideNext();
			if (key === 'ArrowLeft') swiperRef?.current?.slidePrev();
			if (key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleKeys);
		return () => document.removeEventListener('keydown', handleKeys);
	}, [onClose, isHidden]);

	useEffect(() => {
		setTimeout(() => setInitLoaded(true), 300);
	}, [initLoaded]); // Delay loader

	if (isHidden) return null;

	return (
		<div className={cn(s.gallery, images.length <= 1 && s.noArrows, isSingleSlide && s.noArrows)}>
			<div className={s.back} onClick={() => swiperRef.current?.slidePrev()}>
				<img src='/images/arrow-light.svg' className={s.arrow} />
			</div>
			<div className={s.images} onClick={() => !isSingleSlide && swiperRef?.current?.slideNext()}>
				<Swiper
					id={`main-gallery`}
					loop={true}
					spaceBetween={500}
					simulateTouch={!isSingleSlide}
					slidesPerView={1}
					initialSlide={index}
					onSlideChange={({ realIndex }) => setRealIndex(realIndex)}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
				>
					{images.map((image, idx) => (
						<SwiperSlide
							key={idx}
							className={cn(s.slide, padImagesWithTitle && image.title && s.padded)}
						>
							{image.responsiveImage ? (
								<Image
									imgClassName={s.image}
									data={image.responsiveImage}
									usePlaceholder={false}
									onLoad={() => setLoaded((prevState) => ({ ...prevState, [image.id]: true }))}
								/>
							) : (
								<div className={s.svg}>
									<img
										src={image.url}
										className={s.image}
										onLoad={() => setLoaded((prevState) => ({ ...prevState, [image.id]: true }))}
									/>
								</div>
							)}
							{!loaded[image.id] && initLoaded && (
								<div className={s.loading}>
									<Loader invert={true} />
								</div>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={s.forward} onClick={() => swiperRef.current?.slideNext()}>
				<img src='/images/arrow-light.svg' className={s.arrow} />
			</div>
			<div className={s.caption}>{title && <p className='medium'>{title}</p>}</div>
			<div className={s.close} onClick={onClose}>
				×
			</div>
		</div>
	);
}
