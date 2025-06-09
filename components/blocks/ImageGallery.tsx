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
							imgClassName={s.image}
							data={image.responsiveImage}
							objectFit='cover'
							intersectionMargin={`0px 0px 2000px 0px`}
						/>
					)}
				</figure>
			))}
		</div>
	);
}
