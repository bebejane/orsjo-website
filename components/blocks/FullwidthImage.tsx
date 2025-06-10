import s from './FullwidthImage.module.scss';
import React from 'react';
import { Image } from 'react-datocms';
import { CustomMade } from '@/components';
import type { BlockProps } from './';

export type FullwidthImageProps = BlockProps & { data: FullwidthImageRecord };

export default function FullwidthImage({ data: { image }, onClick, first }: FullwidthImageProps) {
	return (
		<div
			className={s.container}
			onClick={() => onClick?.(image.id)}
			data-image-zoom={image.id}
		>
			<Image
				className={s.image}
				data={image?.responsiveImage}
				priority={first}
				intersectionMargin={`0px 0px 2000px 0px`}
			/>
			<CustomMade show={image.customData?.custom} />
		</div>
	);
}
