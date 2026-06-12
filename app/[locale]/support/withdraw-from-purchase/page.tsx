import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components';
import { Metadata } from 'next';
import { DraftMode, Markdown } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
import WithdrawFromPurchaseForm from './WithdrawFromPurchaseForm';
import { WithdrawFromPurchaseDocument } from '@/graphql';

export default async function WithdrawFromPurchase({
	params,
}: PageProps<'/[locale]/support/withdraw-from-purchase'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { withdrawFromPurchase, draftUrl } = await apiQuery(WithdrawFromPurchaseDocument);
	if (!withdrawFromPurchase) notFound();

	return (
		<>
			<Section className={s.intro} top={true} id='cancel-purchase'>
				<h1 className='topMargin'>{withdrawFromPurchase.title}</h1>
				<Markdown content={withdrawFromPurchase.intro} />
				<WithdrawFromPurchaseForm eMailText={withdrawFromPurchase.eMailText} />
			</Section>

			<DraftMode url={draftUrl} path='/support/withdraw-from-purchase' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Withdraw From Purchase',
		description: 'Withdraw From Purchase',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/support/withdraw-from-purchase`,
	});
}
