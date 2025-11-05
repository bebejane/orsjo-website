'use client';

import s from './ProjectHeader.module.scss';
import { Image } from 'react-datocms';
import { Section, TextReveal } from '@/components';
import { dedupeImages, styleVariables } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useStore, useShallow } from '@/lib/store';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { useMediaQuery } from 'usehooks-ts';

export type BespokeThumbnailRecord = Pick<BespokeRecord, 'thumbnail' | 'secondaryThumbnail'>;

export type ProjectProps = {
	project: ProjectQuery['project'];
	bespokeThumbnail: BespokeThumbnailQuery['bespokeThumbnail'];
};

export default function ProjectHeader({ project, bespokeThumbnail }: ProjectProps) {
	const [setGallery, setGalleryId] = useStore(
		useShallow((state) => [state.setGallery, state.setGalleryId])
	);
	const { scrolledPosition, viewportHeight } = useScrollInfo();
	const [imageStyle, setImageStyle] = useState({});
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);
	const viewportScrollRatio = 1 - (viewportHeight - scrolledPosition) / viewportHeight;

	useEffect(() => {
		setGallery({ images: galleryImages(project as ProjectRecord) });
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
				<h1 className={s.title}>
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
	project.gallery.forEach((el) =>
		Object.keys(el).forEach((k) => el[k].responsiveImage && images.push(el[k]))
	);
	return dedupeImages(images);
};
