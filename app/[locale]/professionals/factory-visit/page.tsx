import s from './page.module.scss';
import { FactoryVisitDocument } from '@/graphql';
<<<<<<< HEAD
import { Markdown } from 'next-dato-utils/components';
=======
import { DraftMode, Markdown } from 'next-dato-utils/components';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
<<<<<<< HEAD

export default async function FactoryVisit({ params }: PageProps<'/[locale]/professionals/factory-visit'>) {
=======
import { buildMetadata } from '@/app/[locale]/layout';

export default async function FactoryVisit({
	params,
}: PageProps<'/[locale]/professionals/factory-visit'>) {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const { factoryVisit } = await apiQuery(FactoryVisitDocument);
=======
	const { factoryVisit, draftUrl } = await apiQuery(FactoryVisitDocument);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

	if (!factoryVisit) notFound();

	return (
<<<<<<< HEAD
		<Section className={s.downloads} top={true}>
			<h1>{factoryVisit.title}</h1>
			<Markdown content={factoryVisit.intro} />
		</Section>
=======
		<>
			<Section className={s.downloads} top={true}>
				<h1>{factoryVisit.title}</h1>
				<Markdown content={factoryVisit.intro} />
			</Section>
			<DraftMode url={draftUrl} path='/professionals/factory-visit' />
		</>
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	);
}

export async function generateMetadata(): Promise<Metadata> {
<<<<<<< HEAD
	return {
		title: 'Factory Visit',
	};
=======
	return buildMetadata({
		title: 'Factory Visit',
		description: 'Factory Visit at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/professionals/factory-visit`,
	});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
}
