import styles from './colors-and-materials.module.scss'
//import {  } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import Markdown from '/lib/dato/components/Markdown';
import { PageProps } from '/lib/context/page';
import { Thumbnail, Section } from '/components';

export type ColorsAndMaterialsProps = {  }

export default function ColorsAndMaterials({  }: ColorsAndMaterialsProps) {
	const title = 'Colors & Materials'
	const intro = 'Intro...'
	const projectTypes = []
	const materials = []
	
	return (
		<>
			<Section className={styles.introduction} top={true}>
				<h1 className="topMargin">{title}</h1>
				<Markdown className={styles.intro}>
					{intro}
				</Markdown>
			</Section>
			{projectTypes.filter(({id}) => materials.find(({projectType}) => projectType.id === id)).map(({ title, titlePlural, id }, idx) => {
				return (
					<Section name={titlePlural} className={styles.materials} key={idx} >
						<h1>{titlePlural}</h1>
						{materials.filter(({ projectType }) => projectType.id === id).map((p, idx) =>
							<Thumbnail
								slug={'/'}
								title={''}
								image={null}
								key={`t-${idx}`}
								theme='mid'
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

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});