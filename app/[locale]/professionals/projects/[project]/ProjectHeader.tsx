'use client';

import s from './ProjectHeader.module.scss';
import { Image } from 'react-datocms';
import { Section, TextReveal } from '@/components';
import { dedupeImages, styleVariables } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useStore, useShallow } from '@/lib/store';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { useMediaQuery } from 'usehooks-ts';
<<<<<<< HEAD
=======
import cn from 'classnames';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export type BespokeThumbnailRecord = Pick<BespokeRecord, 'thumbnail' | 'secondaryThumbnail'>;

export type ProjectProps = {
	project: ProjectQuery['project'];
	bespokeThumbnail: BespokeThumbnailQuery['bespokeThumbnail'];
};

export default function ProjectHeader({ project, bespokeThumbnail }: ProjectProps) {
<<<<<<< HEAD
	const [setGallery, setGalleryId] = useStore(useShallow((state) => [state.setGallery, state.setGalleryId]));
=======
	const [setGallery, setGalleryId] = useStore(
		useShallow((state) => [state.setGallery, state.setGalleryId]),
	);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	const { scrolledPosition, viewportHeight } = useScrollInfo();
	const [imageStyle, setImageStyle] = useState({});
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);
	const viewportScrollRatio = 1 - (viewportHeight - scrolledPosition) / viewportHeight;

	useEffect(() => {
<<<<<<< HEAD
		setGallery({ images: galleryImages(project as ProjectRecord) });
=======
		setGallery({ images: galleryImages(project as ProjectRecord), index: null });
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	}, [setGallery, project]);

	useEffect(() => {
		setImageStyle({
			opacity: Math.min(0.2 + (viewportScrollRatio || 0) * 4, 1),
			filter: `grayscale(${Math.max(1 - viewportScrollRatio * 4, 0)})`,
		});
	}, [viewportScrollRatio, setImageStyle]);

	if (!project) return null;

	return (
		<Section className={s.intro} name='Presentation' top={true}>
			<div className={s.wrap} onClick={() => setGalleryId(project.image?.id)}>
<<<<<<< HEAD
				<h1 className={s.title}>
=======
				<h1 className={cn('big', s.title)}>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
					<TextReveal block={true}>{project.title}</TextReveal>
				</h1>
				<h1 className={s.location}>
					<TextReveal>{project.location}</TextReveal>
				</h1>
				{project.image?.responsiveImage && (
					<Image
						data={project.image.responsiveImage}
						objectFit='cover'
						style={!isMobile ? imageStyle : undefined}
						className={s.image}
					/>
				)}
			</div>
		</Section>
	);
}

const galleryImages = (project: ProjectRecord): FileField[] => {
	const images = [project.image, project.secondaryImage] as FileField[];
	project.gallery.forEach((image) => {
		Object.keys(image).forEach((k) => {
			const img = (image as { [key: string]: any })[k];
			if (img?.responsiveImage) images.push(img);
		});
	});
	return dedupeImages(images);
};
