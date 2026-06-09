import s from './page.module.scss';
import { CancelPurchaseDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components';
import { Metadata } from 'next';
import { DraftMode, Markdown } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
import CancelPurchaseForm from './CancelPurchaseForm';

export default async function CancelPurchase({
	params,
}: PageProps<'/[locale]/support/cancel-purchase'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { cancelPurchase, draftUrl } = await apiQuery(CancelPurchaseDocument);
	if (!cancelPurchase) notFound();

	return (
		<>
			<Section className={s.intro} top={true} id='cancel-purchase'>
				<h1 className='topMargin'>{cancelPurchase.title}</h1>
				<Markdown content={cancelPurchase.intro} />
				<CancelPurchaseForm eMailText={cancelPurchase.eMailText} />
			</Section>

			<DraftMode url={draftUrl} path='/support/cancel-purchase' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Cancel Purchase',
		description: 'Cancel Purchase',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/support/cancel-purchase`,
	});
}
