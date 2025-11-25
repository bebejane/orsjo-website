'use client';

import s from './BespokeHeader.module.scss';
import { Image } from 'react-datocms';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { Section, TextReveal } from '@/components';
import { recordImages, styleVariables } from '@/lib/utils';
import { useShallow, useStore } from '@/lib/store';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export type BespokeProps = { bespoke: BespokeQuery['bespoke'] };

export default function BespokeHeader({ bespoke }: BespokeProps) {
	const [setGallery, setGalleryId] = useStore(useShallow((state) => [state.setGallery, state.setGalleryId]));
	const { scrolledPosition, viewportHeight } = useScrollInfo();
	const [imageStyle, setImageStyle] = useState({ opacity: 0.2, filter: 'grayscale(1)' });
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);

	useEffect(() => {
		setGallery({ images: recordImages(bespoke) });
	}, [bespoke, setGallery]);

	const viewportScrollRatio = 1 - (viewportHeight - scrolledPosition) / viewportHeight;

	useEffect(() => {
		setImageStyle({
			opacity: Math.min(0.2 + (viewportScrollRatio || 0) * 4, 1),
			filter: `grayscale(${Math.max(1 - viewportScrollRatio * 4, 0)})`,
		});
	}, [viewportScrollRatio, setImageStyle]);

	if (!bespoke) return null;

	return (
		<Section className={s.bespoke} type={'full'}>
			{bespoke.image.responsiveImage && (
				<Image
					data={bespoke.image.responsiveImage}
					objectFit='cover'
					layout='fill'
					imgClassName={s.image}
					style={!isMobile ? imageStyle : undefined}
				/>
			)}
			<h1>
				<TextReveal block={true}>Custom-Made Lighting</TextReveal>
			</h1>
		</Section>
	);
}
