import s from './page.module.scss';
import { AllProductManualsDocument, ManualsIntroDocument } from '@/graphql';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import ManualList from '@/app/[locale]/support/manuals/ManualList';
import { Metadata } from 'next';
<<<<<<< HEAD
=======
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export type ManualsProps = {
	products: ProductRecord[];
	manual: ManualRecord;
};

export default async function Manuals({ params }: PageProps<'/[locale]/support/manuals'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const [{ manual }, { allProducts }] = await Promise.all([
=======
	const [{ manual, draftUrl }, { allProducts, draftUrl: productsDraftUrl }] = await Promise.all([
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
<<<<<<< HEAD
			<ManualList products={allProducts.filter(({ mountingInstructions }) => mountingInstructions)} />
=======
			<div className={s.list}>
				<ManualList
					products={allProducts.filter(({ mountingInstructions }) => mountingInstructions)}
				/>
			</div>
			<DraftMode url={[draftUrl, productsDraftUrl]} path='/support/manuals' />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
<<<<<<< HEAD
	return {
		title: 'Manuals',
	};
=======
	return buildMetadata({
		title: 'Manuals',
		description: 'Manuals at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/support/manuals`,
	});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
}
