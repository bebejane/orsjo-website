import s from './page.module.scss';
import { FaqStartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components';
import FaqList from '@/app/[locale]/support/faq/FaqList';
import { Metadata } from 'next';

export default async function Faqs({ params }: PageProps<'/[locale]/support/faq'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { faqs, faqStart } = await apiQuery(FaqStartDocument);
	if (!faqs || !faqStart) return notFound();

	return (
		<>
			<Section className={s.intro} top={true}>
				<h1 className='topMargin'>{faqStart.title}</h1>
				<p>{faqStart.intro}</p>
			</Section>
			<FaqList faqs={faqs} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'FAQ',
	};
}
