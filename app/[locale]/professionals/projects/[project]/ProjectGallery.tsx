'use client';

import { Block, Section } from '@/components';
import { useStore, useShallow } from '@/lib/store';
import { dedupeImages, recordImages } from '@/lib/utils';
import { set } from 'date-fns';
import { useMemo } from 'react';

export type ProjectGalleryProps = {
	project: ProjectQuery['project'];
};

export default function ProjectGallery({ project }: ProjectGalleryProps) {
	const [setGalleryId, setGallery, gallery] = useStore(
		useShallow((state) => [state.setGalleryId, state.setGallery, state.gallery]),
	);

	const images = useMemo(() => {
		if (!project) return [];
		const images = [project.image] as FileField[];
		project.gallery.forEach((image) => {
			Object.keys(image).forEach((k) => {
				const img = (image as { [key: string]: any })[k];
				if (img?.responsiveImage) images.push(img);
			});
		});

		setGallery({ images: dedupeImages(images), index: 0 });
	}, [project]);

	return (
		<>
			{project?.gallery.map((block, idx) => (
				<Section key={idx}>
					<Block data={block} onClick={setGalleryId} />
				</Section>
			))}
		</>
	);
}
