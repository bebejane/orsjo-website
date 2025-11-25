import s from './page.module.scss';
import { AllPressDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components';
import { Metadata } from 'next';

export default async function PressPage({ params }: PageProps<'/[locale]/about/press'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { allPresses } = await apiQuery(AllPressDocument, { all: true });

	return (
		<Section className={s.press} top={true} name='Introduction'>
			<h1>Press</h1>
			{allPresses.map(({ title, url }, idx) => (
				<a key={idx} href={url}>
					{title}
				</a>
			))}
		</Section>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Press',
	};
}
