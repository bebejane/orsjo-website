import s from './page.module.scss';
import { AllProductManualsDocument, ManualsIntroDocument } from '@/graphql';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import ManualList from '@/app/[locale]/support/manuals/ManualList';
import { Metadata } from 'next';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';

export type ManualsProps = {
	products: ProductRecord[];
	manual: ManualRecord;
};

export default async function Manuals({ params }: PageProps<'/[locale]/support/manuals'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const [{ manual, draftUrl }, { allProducts, draftUrl: productsDraftUrl }] = await Promise.all([
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
				<ManualList
					products={allProducts.filter(({ mountingInstructions }) => mountingInstructions)}
				/>
			</div>
			<DraftMode url={[draftUrl, productsDraftUrl]} path='/support/manuals' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Manuals',
		description: 'Manuals at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/support/manuals`,
	});
}
