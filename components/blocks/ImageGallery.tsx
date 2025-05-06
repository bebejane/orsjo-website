'use client';

import s from './ImageGallery.module.scss';
import React from 'react';
import { Image } from 'react-datocms';

type ImageGalleryBlockProps = { data: ImageGalleryRecord; onClick: Function };

export default function ImageGallery({ data: { gallery }, onClick }: ImageGalleryBlockProps) {
	return (
		<div className={s.imageGallery}>
			{gallery.map((image, idx) => (
				<figure
					key={idx}
					onClick={() => onClick(image.id)}
					data-image-zoom={gallery.length >= 4 ? 'small' : 'medium'}
				>
					{image.responsiveImage && (
						<Image
							className={s.image}
							data={image.responsiveImage}
							layout='fill'
							objectFit='cover'
						/>
					)}
				</figure>
			))}
		</div>
	);
}
