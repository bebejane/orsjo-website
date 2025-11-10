import s from './TwoColumnImage.module.scss';
import React from 'react';
import { Image } from 'react-datocms';
import { CustomMade } from '@/components';
import type { BlockProps } from '../layout/Block';

type TwoColumnImageBlockProps = { data: TwoColumnImageRecord; onClick: BlockProps['onClick'] };

export default function TwoColumnImage({ data: { firstImage, lastImage }, onClick }: TwoColumnImageBlockProps) {
	return (
		<div className={s.twoColumnImage}>
			<figure onClick={() => onClick?.(firstImage.id)} data-image-zoom={firstImage.id}>
				{firstImage.responsiveImage && (
					<Image data={firstImage.responsiveImage} className={s.image} intersectionMargin={`0px 0px 200% 0px`} />
				)}
				<CustomMade show={firstImage.customData?.custom} />
			</figure>
			<figure onClick={() => onClick?.(lastImage.id)} data-image-zoom={lastImage.id}>
				{lastImage.responsiveImage && (
					<Image data={lastImage.responsiveImage} className={s.image} intersectionMargin={`0px 0px 200% 0px`} />
				)}
				<CustomMade show={lastImage.customData?.custom} />
			</figure>
		</div>
	);
}
