import s from './page.module.scss';
import { AllColorsAndMaterialsDocument } from '@/graphql';
import { DraftMode, Markdown } from 'next-dato-utils/components';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import ColorsAndMaterialsList from './ColorsMaterialsList';
import { Metadata } from 'next';

export default async function ColorsAndMaterials({
	params,
}: PageProps<'/[locale]/professionals/colors-and-materials'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { allColorMaterialTypes, allColorMaterials, colorMaterialIntro, draftUrl } = await apiQuery(
		AllColorsAndMaterialsDocument,
		{ all: true },
	);

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
			<DraftMode url={draftUrl} path='/professionals/colors-and-materials' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Colors & Materials',
	};
}
