import s from './page.module.scss';
import { FaqStartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components';
import FaqList from '@/app/[locale]/support/faq/FaqList';
import { Metadata } from 'next';
<<<<<<< HEAD
=======
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export default async function Faqs({ params }: PageProps<'/[locale]/support/faq'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const { faqs, faqStart } = await apiQuery(FaqStartDocument);
=======
	const { faqs, faqStart, draftUrl } = await apiQuery(FaqStartDocument);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	if (!faqs || !faqStart) return notFound();

	return (
		<>
			<Section className={s.intro} top={true}>
				<h1 className='topMargin'>{faqStart.title}</h1>
				<p>{faqStart.intro}</p>
			</Section>
			<FaqList faqs={faqs} />
<<<<<<< HEAD
=======
			<DraftMode url={draftUrl} path='/support/faq' />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
<<<<<<< HEAD
	return {
		title: 'FAQ',
	};
=======
	return buildMetadata({
		title: 'FAQ',
		description: 'FAQ at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/support/faq`,
	});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
}
