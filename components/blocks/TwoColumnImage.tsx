import s from './TwoColumnImage.module.scss';
import React from 'react';
import { Image } from 'react-datocms';
import { CustomMade } from '@/components';
import type { BlockProps } from '../layout/Block';

type TwoColumnImageBlockProps = { data: TwoColumnImageRecord; onClick: BlockProps['onClick'] };

<<<<<<< HEAD
export default function TwoColumnImage({ data: { firstImage, lastImage }, onClick }: TwoColumnImageBlockProps) {
	return (
		<div className={s.twoColumnImage}>
			<figure onClick={() => onClick?.(firstImage.id)} data-image-zoom={firstImage.id}>
				{firstImage.responsiveImage && (
					<Image data={firstImage.responsiveImage} className={s.image} intersectionMargin={`0px 0px 200% 0px`} />
=======
export default function TwoColumnImage({
	data: { firstImage, lastImage },
	onClick,
}: TwoColumnImageBlockProps) {
	return (
		<div className={s.twoColumnImage} data-datocms-content-link-source={firstImage.url}>
			<figure onClick={() => onClick?.(firstImage.id)} data-image-zoom={firstImage.id}>
				{firstImage.responsiveImage && (
					<Image
						data={firstImage.responsiveImage}
						className={s.image}
						intersectionMargin={`0px 0px 200% 0px`}
					/>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
				)}
				<CustomMade show={firstImage.customData?.custom} />
			</figure>
			<figure onClick={() => onClick?.(lastImage.id)} data-image-zoom={lastImage.id}>
				{lastImage.responsiveImage && (
<<<<<<< HEAD
					<Image data={lastImage.responsiveImage} className={s.image} intersectionMargin={`0px 0px 200% 0px`} />
=======
					<Image
						data={lastImage.responsiveImage}
						className={s.image}
						intersectionMargin={`0px 0px 200% 0px`}
					/>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
				)}
				<CustomMade show={lastImage.customData?.custom} />
			</figure>
		</div>
	);
}
