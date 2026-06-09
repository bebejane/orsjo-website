'use client';

import { Block, Section } from '@/components';
import { useStore, useShallow } from '@/lib/store';
<<<<<<< HEAD
=======
import { dedupeImages, recordImages } from '@/lib/utils';
import { set } from 'date-fns';
import { useMemo } from 'react';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export type ProjectGalleryProps = {
	project: ProjectQuery['project'];
};

export default function ProjectGallery({ project }: ProjectGalleryProps) {
<<<<<<< HEAD
	const [setGalleryId] = useStore(useShallow((state) => [state.setGalleryId]));
=======
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

>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
