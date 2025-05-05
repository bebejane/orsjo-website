import s from './TwoColumnImage.module.scss';
import React from 'react';
import { Image } from 'react-datocms';
import { CustomMade } from '@/components';

type TwoColumnImageBlockProps = { data: TwoColumnImageRecord; onClick: Function };

export default function TwoColumnImage({
	data: { firstImage, lastImage },
	onClick,
}: TwoColumnImageBlockProps) {
	return (
		<div className={s.twoColumnImage}>
			<figure onClick={() => onClick(firstImage.id)} data-image-zoom={firstImage.id}>
				<Image data={firstImage.responsiveImage} className={s.image} />
				<CustomMade show={firstImage.customData?.custom} />
			</figure>
			<figure onClick={() => onClick(lastImage.id)} data-image-zoom={lastImage.id}>
				<Image data={lastImage.responsiveImage} className={s.image} />
				<CustomMade show={lastImage.customData?.custom} />
			</figure>
		</div>
	);
}
