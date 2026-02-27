import s from './page.module.scss';
import { AllProductManualsDocument, ManualsIntroDocument } from '@/graphql';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import ManualList from '@/app/[locale]/support/manuals/ManualList';
import { Metadata } from 'next';

export type ManualsProps = {
	products: ProductRecord[];
	manual: ManualRecord;
};

export default async function Manuals({ params }: PageProps<'/[locale]/support/manuals'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const [{ manual }, { allProducts }] = await Promise.all([
		apiQuery(ManualsIntroDocument),
		apiQuery(AllProductManualsDocument, {
			all: true,
		}),
	]);

	if (!manual) notFound();

	return (
		<>
			<Section name='Manuals' className={s.intro} top={true}>
				<h1 className='topMargin'>{manual.title}</h1>
				<p>{manual.intro}</p>
			</Section>
			<div className={s.list}>
				<ManualList products={allProducts.filter(({ mountingInstructions }) => mountingInstructions)} />
			</div>
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Manuals',
	};
}
