'use client';

import { Block, Section } from '@/components';
import { useStore, useShallow } from '@/lib/store';

export type ProjectGalleryProps = {
	project: ProjectQuery['project'];
};

export default function ProjectGallery({ project }: ProjectGalleryProps) {
	const [setGalleryId] = useStore(useShallow((state) => [state.setGalleryId]));
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
