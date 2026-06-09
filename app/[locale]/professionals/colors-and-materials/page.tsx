import s from './page.module.scss';
import { AllColorsAndMaterialsDocument } from '@/graphql';
<<<<<<< HEAD
import { Markdown } from 'next-dato-utils/components';
=======
import { DraftMode, Markdown } from 'next-dato-utils/components';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import ColorsAndMaterialsList from './ColorsMaterialsList';
import { Metadata } from 'next';
<<<<<<< HEAD
=======
import { buildMetadata } from '@/app/[locale]/layout';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export default async function ColorsAndMaterials({
	params,
}: PageProps<'/[locale]/professionals/colors-and-materials'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const { allColorMaterialTypes, allColorMaterials, colorMaterialIntro } = await apiQuery(
		AllColorsAndMaterialsDocument,
		{ all: true }
=======
	const { allColorMaterialTypes, allColorMaterials, colorMaterialIntro, draftUrl } = await apiQuery(
		AllColorsAndMaterialsDocument,
		{ all: true },
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	);

	if (!colorMaterialIntro) notFound();
	const { intro } = colorMaterialIntro;
	return (
		<>
			<Section className={s.introduction} top={true}>
				<h1 className='topMargin'>Colors & Materials</h1>
				<Markdown className={s.intro} content={intro} />
			</Section>
<<<<<<< HEAD
			<ColorsAndMaterialsList colorMaterials={allColorMaterials} colorMaterialTypes={allColorMaterialTypes} />
=======
			<ColorsAndMaterialsList
				colorMaterials={allColorMaterials}
				colorMaterialTypes={allColorMaterialTypes}
			/>
			<DraftMode url={draftUrl} path='/professionals/colors-and-materials' />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
<<<<<<< HEAD
	return {
		title: 'Colors & Materials',
	};
=======
	return buildMetadata({
		title: 'Colors & Materials',
		description: 'Colors & Materials at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/professionals/colors-and-materials`,
	});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
}
