import s from './page.module.scss';
import { TermsStartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components';
import TermList from '@/app/[locale]/support/terms-conditions/TermsList';
import { Metadata } from 'next';
import { DraftMode } from 'next-dato-utils/components';

export default async function Terms({ params }: PageProps<'/[locale]/support/terms-conditions'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { allTerms, termStart, draftUrl } = await apiQuery(TermsStartDocument);
	if (!allTerms || !termStart) return notFound();

	return (
		<>
			<Section className={s.intro} top={true}>
				<h1 className='topMargin'>{termStart.title}</h1>
				<p>{termStart.intro}</p>
			</Section>
			<TermList terms={allTerms} />
			<DraftMode url={draftUrl} path='/support/terms-conditions' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Terms & Conditions',
	};
}
