import s from './page.module.scss';
import { FactoryVisitDocument } from '@/graphql';
import { Markdown } from 'next-dato-utils/components';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

export default async function FactoryVisit({ params }: PageProps<'/[locale]/professionals/factory-visit'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { factoryVisit } = await apiQuery(FactoryVisitDocument);

	if (!factoryVisit) notFound();

	return (
		<Section className={s.downloads} top={true}>
			<h1>{factoryVisit.title}</h1>
			<Markdown content={factoryVisit.intro} />
		</Section>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Factory Visit',
	};
}
