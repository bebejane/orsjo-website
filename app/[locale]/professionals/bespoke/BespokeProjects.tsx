'use client';

import s from './BespokeProjects.module.scss';
import cn from 'classnames';
import { Image } from 'react-datocms';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { ProjectThumbnail, Section } from '@/components';
import { recordImages } from '@/lib/utils';
import { useShallow, useStore } from '@/lib/store';
import { useEffect, useState } from 'react';
import { Markdown } from 'next-dato-utils/components';

export type BespokeProps = { bespoke: BespokeQuery['bespoke'] };

export default function BespokeHeader({ bespoke }: BespokeProps) {
	const [setGallery, setGalleryId] = useStore(useShallow((state) => [state.setGallery, state.setGalleryId]));
	const { scrolledPosition, viewportHeight } = useScrollInfo();

	useEffect(() => {
		setGallery({ images: recordImages(bespoke) });
	}, [bespoke, setGallery]);

	if (!bespoke) return null;

	return (
		<Section className={s.projects} type='margin' bgColor={'--gray'}>
			{bespoke.examples.map(({ project, summary }, idx) => {
				if (!project) return null;
				const image = project.secondaryImage ?? project.image;
				if (!image?.responsiveImage) return null;
				return (
					<div className={s.project} key={idx}>
						<div className={s.image} onClick={() => setGalleryId((project.secondaryImage || project.image).id)}>
							<Image className={s.big} data={image.responsiveImage} />
						</div>
						<div className={s.description}>
							<Markdown className={cn(s.text, 'large')} content={summary} />
							<ProjectThumbnail project={project as ProjectRecord} theme='mid' className={s.thumbnail} />
						</div>
					</div>
				);
			})}
		</Section>
	);
}
