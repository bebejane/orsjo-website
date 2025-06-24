import styles from './colors-and-materials.module.scss';
import { AllColorsAndMaterialsDocument } from '/graphql';
import withGlobalProps from '/lib/withGlobalProps';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { PageProps } from '/lib/context/page';
import { Thumbnail, Section } from '/components';
import { useStore, shallow } from '/lib/store';
import { useEffect } from 'react';

type ColorMaterialRecordWithThumb = ColorMaterialRecord & { thumb: FileField };
type ColorsAndMaterialsProps = {
	allColorMaterials: ColorMaterialRecordWithThumb[];
	allColorMaterialTypes: ColorMaterialTypeRecord[];
	colorMaterialIntro: ColorMaterialIntroRecord;
};

export default function ColorsAndMaterials({
	allColorMaterials,
	allColorMaterialTypes,
	colorMaterialIntro: { intro },
}: ColorsAndMaterialsProps) {
	const [setGallery, setGalleryId] = useStore((state) => [state.setGallery, state.setGalleryId], shallow);
	const images = allColorMaterials.map(({ image, description }) => ({ ...image, title: description }));

	useEffect(() => images && setGallery({ images }), [images, setGallery]);

	return (
		<>
			<Section className={styles.introduction} top={true}>
				<h1 className='topMargin'>Colors & Materials</h1>
				<Markdown className={styles.intro}>{intro}</Markdown>
			</Section>
			{allColorMaterialTypes
				.filter(({ id }) => allColorMaterials.find(({ category }) => category.id === id))
				.map(({ id, categoryPlural }, idx) => {
					return (
						<Section name={categoryPlural} className={styles.materials} key={idx}>
							<h1>{categoryPlural}</h1>
							{allColorMaterials
								.filter(({ category }) => category.id === id)
								.map(({ thumb, description }, idx) => (
									<Thumbnail
										onClick={() => setGalleryId(thumb.id)}
										title={description}
										image={thumb}
										key={`t-${idx}`}
										theme='mid'
										type='material'
										className={styles.material}
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
