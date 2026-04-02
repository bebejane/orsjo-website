import s from './page.module.scss';
import { FactoryVisitDocument } from '@/graphql';
import { DraftMode, Markdown } from 'next-dato-utils/components';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/[locale]/layout';

export default async function FactoryVisit({
	params,
}: PageProps<'/[locale]/professionals/factory-visit'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { factoryVisit, draftUrl } = await apiQuery(FactoryVisitDocument);

	if (!factoryVisit) notFound();

	return (
		<>
			<Section className={s.downloads} top={true}>
				<h1>{factoryVisit.title}</h1>
				<Markdown content={factoryVisit.intro} />
			</Section>
			<DraftMode url={draftUrl} path='/professionals/factory-visit' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Factory Visit',
		description: 'Factory Visit at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/professionals/factory-visit`,
	});
}
