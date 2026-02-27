import s from './ImageGallery.module.scss';
import cn from 'classnames';
import React from 'react';
import { Image } from 'react-datocms';
import type { BlockProps } from '../layout/Block';

type ImageGalleryBlockProps = { data: ImageGalleryRecord; onClick: BlockProps['onClick'] };

export default function ImageGallery({ data: { gallery }, onClick }: ImageGalleryBlockProps) {
	return (
		<div className={cn(s.imageGallery)}>
			{gallery.map((image, idx) => (
				<figure
					key={idx}
					onClick={() => onClick?.(image.id)}
					data-image-zoom={gallery.length >= 4 ? 'small' : 'medium'}
				>
					{image.responsiveImage && (
						<Image
							imgClassName={s.image}
							data={image.responsiveImage}
							objectFit='contain'
							intersectionMargin={`0px 0px 200% 0px`}
						/>
					)}
				</figure>
			))}
		</div>
	);
}
