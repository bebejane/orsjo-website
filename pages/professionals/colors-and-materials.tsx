import styles from './colors-and-materials.module.scss'
import { AllColorsAndMaterialsDocument } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import Markdown from '/lib/dato/components/Markdown';
import { PageProps } from '/lib/context/page';
import { Thumbnail, Section } from '/components';

type ColorsAndMaterialsProps = { 
	colorMaterials : ColorMaterialRecord[], 
	colorMaterialTypes : ColorMaterialTypeRecord[],
	colorMaterialIntro: ColorMaterialIntroRecord
}

export default function ColorsAndMaterials({  colorMaterials, colorMaterialTypes, colorMaterialIntro:{ intro} }: ColorsAndMaterialsProps) {
	
	
	return (
		<>
			<Section className={styles.introduction} top={true}>
				<h1 className="topMargin">Colors & Materials</h1>
				<Markdown className={styles.intro}>
					{intro}
				</Markdown>
			</Section>
			{colorMaterialTypes.filter(({id}) => colorMaterials.find(({category}) => category.id === id)).map(({ id, categoryPlural }, idx) => {
				return (
					<Section name={categoryPlural} className={styles.materials} key={idx} >
						<h1>{categoryPlural}</h1>
						{colorMaterials.filter(({category}) => category.id === id).map(({image, description}, idx) =>
							<Thumbnail
								slug={'#'}
								title={description}
								image={image}
								key={`t-${idx}`}
								theme='mid'
								type="material"
								className={styles.material}
							/>
						)}
					</Section>
				)
			})}
		</>
	)
}

ColorsAndMaterials.page = { layout: 'normal', color: "--gray", menu: 'inverted' } as PageProps

export const getStaticProps = withGlobalProps({ queries: [AllColorsAndMaterialsDocument] }, async ({ props, revalidate }: any) => {
	
	return {
		props,
		revalidate
	};
});