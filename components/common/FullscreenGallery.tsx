'use client';

import 'swiper/css';
import s from './FullscreenGallery.module.scss';
import cn from 'classnames';
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { Image } from 'react-datocms';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Loader } from '@/components';
import useStore, { useShallow } from '@/lib/store';

<<<<<<< HEAD
export default function Gallery() {
=======
export default function FullscreenGallery() {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	const [gallery, setGallery] = useStore(useShallow((state) => [state.gallery, state.setGallery]));
	const swiperRef = useRef<SwiperType | null>(null);
	const [realIndex, setRealIndex] = useState(0);
	const [title, setTitle] = useState<string | null>(null);
	const [loaded, setLoaded] = useState<{ [key: string]: boolean }>({});
	const [initLoaded, setInitLoaded] = useState(false);
	const { images, index = -1, padImagesWithTitle } = gallery ?? {};
<<<<<<< HEAD
	const show = gallery?.index !== undefined && index > -1;
	const isSingleSlide = images?.length === 1;
	const isHidden = !images || !show;

	function handleClose() {
		setGallery({ images: [], index: -1 });
=======
	const show = gallery && gallery?.index !== null && gallery.index > -1;
	const isSingleSlide = images?.length === 1;
	const isHidden = !images || !show || gallery?.index === null;

	function handleClose() {
		setGallery({ images: gallery?.images ?? [], index: null });
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	}

	useEffect(() => {
		if (images) setTitle(images[realIndex]?.title ?? null);
	}, [realIndex, images, setTitle]);

	useEffect(() => {
<<<<<<< HEAD
		setRealIndex(index);
=======
		setRealIndex(index ?? 0);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	}, [index]);

	useEffect(() => {
		const handleKeys = (e: KeyboardEvent) => {
			const key = e.key;
			if (isHidden) return;
			if (key === 'ArrowRight') swiperRef?.current?.slideNext();
			if (key === 'ArrowLeft') swiperRef?.current?.slidePrev();
			if (key === 'Escape') handleClose();
		};
		document.addEventListener('keydown', handleKeys);
		return () => document.removeEventListener('keydown', handleKeys);
	}, [isHidden]);

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
					loop={images.length > 1}
					spaceBetween={500}
					simulateTouch={!isSingleSlide}
					slidesPerView={1}
<<<<<<< HEAD
					initialSlide={index}
=======
					initialSlide={index ?? 0}
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
					onSlideChange={({ realIndex }) => setRealIndex(realIndex)}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					onTouchEnd={() => {}}
				>
					{images.map((image, idx) => (
<<<<<<< HEAD
						<SwiperSlide key={idx} className={cn(s.slide, padImagesWithTitle && image.title && s.padded)}>
=======
						<SwiperSlide
							key={idx}
							className={cn(s.slide, padImagesWithTitle && image.title && s.padded)}
						>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
							{image.responsiveImage ? (
								<Image
									imgClassName={s.image}
									data={image.responsiveImage}
									usePlaceholder={false}
									priority={true}
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
			<div className={s.close} onClick={handleClose}>
				×
			</div>
		</div>
	);
}
