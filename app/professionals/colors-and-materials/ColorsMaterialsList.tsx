'use client';

import s from './ColorsMaterialsList.module.scss';
import { Thumbnail, Section } from '@/components';
import { useStore, useShallow } from '@/lib/store';
import { useEffect } from 'react';

type ColorsAndMaterialsListProps = {
	colorMaterials: AllColorsAndMaterialsQuery['allColorMaterials'];
	colorMaterialTypes: AllColorsAndMaterialsQuery['allColorMaterialTypes'];
};

export default function ColorsAndMaterialsList({
	colorMaterials,
	colorMaterialTypes,
}: ColorsAndMaterialsListProps) {
	const [setGallery, setGalleryId] = useStore(
		useShallow((state) => [state.setGallery, state.setGalleryId])
	);
	const images = colorMaterials.map(({ image, description }) => ({
		...image,
		title: description,
	})) as FileField[];

	useEffect(() => images && setGallery({ images }), [images, setGallery]);

	return (
		<>
			{colorMaterialTypes
				.filter(({ id }) => colorMaterials.find(({ category }) => category.id === id))
				.map(({ id, categoryPlural }, idx) => {
					return (
						<Section name={categoryPlural} className={s.materials} key={idx}>
							<h1>{categoryPlural}</h1>
							{colorMaterials
								.filter(({ category }) => category.id === id)
								.map(({ thumb, description }, idx) => (
									<Thumbnail
										onClick={() => setGalleryId(thumb.id)}
										title={description}
										image={thumb as FileField}
										key={`t-${idx}`}
										theme='mid'
										type='material'
										className={s.material}
									/>
								))}
						</Section>
					);
				})}
		</>
	);
}
