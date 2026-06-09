import s from './page.module.scss';
import { TermsStartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components';
import TermList from '@/app/[locale]/support/terms-conditions/TermsList';
import { Metadata } from 'next';
<<<<<<< HEAD
=======
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export default async function Terms({ params }: PageProps<'/[locale]/support/terms-conditions'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const { allTerms, termStart } = await apiQuery(TermsStartDocument);
=======
	const { allTerms, termStart, draftUrl } = await apiQuery(TermsStartDocument);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	if (!allTerms || !termStart) return notFound();

	return (
		<>
			<Section className={s.intro} top={true}>
				<h1 className='topMargin'>{termStart.title}</h1>
				<p>{termStart.intro}</p>
			</Section>
			<TermList terms={allTerms} />
<<<<<<< HEAD
=======
			<DraftMode url={draftUrl} path='/support/terms-conditions' />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
<<<<<<< HEAD
	return {
		title: 'Terms & Conditions',
	};
=======
	return buildMetadata({
		title: 'Terms & Conditions',
		description: 'Terms & Conditions at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/support/terms-conditions`,
	});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
}
