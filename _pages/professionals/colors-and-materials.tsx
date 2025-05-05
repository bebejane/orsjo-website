import s from './colors-and-materials.module.scss';
import { AllColorsAndMaterialsDocument } from '@/graphql';
import withGlobalProps from '@/lib/withGlobalProps';
import { Markdown } from 'next-dato-utils/components';
import { PageProps } from '@/lib/context/page';
import { Thumbnail, Section } from '@/components';
import { useStore, useShallow } from '@/lib/store';
import { useEffect } from 'react';

type ColorMaterialRecordWithThumb = ColorMaterialRecord & { thumb: FileField };
type ColorsAndMaterialsProps = {
	colorMaterials: ColorMaterialRecordWithThumb[];
	colorMaterialTypes: ColorMaterialTypeRecord[];
	colorMaterialIntro: ColorMaterialIntroRecord;
};

export default function ColorsAndMaterials({
	colorMaterials,
	colorMaterialTypes,
	colorMaterialIntro: { intro },
}: ColorsAndMaterialsProps) {
	const [setGallery, setGalleryId] = useStore(
		(state) => [state.setGallery, state.setGalleryId],
		shallow
	);
	const images = colorMaterials.map(({ image, description }) => ({ ...image, title: description }));

	useEffect(() => images && setGallery({ images }), [images, setGallery]);

	return (
		<>
			<Section className={s.introduction} top={true}>
				<h1 className='topMargin'>Colors & Materials</h1>
				<Markdown className={s.intro}>{intro}</Markdown>
			</Section>
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
										image={thumb}
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

ColorsAndMaterials.page = {
	title: 'Colors & materials',
	layout: 'normal',
	color: '--gray',
	menu: 'inverted',
} as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [AllColorsAndMaterialsDocument] },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);
