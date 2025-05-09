import s from './page.module.scss';
import { AllColorsAndMaterialsDocument } from '@/graphql';
import { Markdown } from 'next-dato-utils/components';
import { PageProps } from '@/lib/context/page';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import ColorsAndMaterialsList from './ColorsMaterialsList';
import { Metadata } from 'next';

export default async function ColorsAndMaterials() {
	const { allColorMaterialTypes, allColorMaterials, colorMaterialIntro } = await apiQuery<
		AllColorsAndMaterialsQuery,
		AllColorsAndMaterialsQueryVariables
	>(AllColorsAndMaterialsDocument);

	if (!colorMaterialIntro) notFound();
	const { intro } = colorMaterialIntro;
	return (
		<>
			<Section className={s.introduction} top={true}>
				<h1 className='topMargin'>Colors & Materials</h1>
				<Markdown className={s.intro} content={intro} />
			</Section>
			<ColorsAndMaterialsList
				colorMaterials={allColorMaterials}
				colorMaterialTypes={allColorMaterialTypes}
			/>
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Colors & Materials',
	};
}
