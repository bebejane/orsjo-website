import s from './page.module.scss';
import { AllPressDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components';
import { Metadata } from 'next';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';

export default async function PressPage({ params }: PageProps<'/[locale]/about/press'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { allPresses, draftUrl } = await apiQuery(AllPressDocument, { all: true });

	return (
		<>
			<Section className={s.press} top={true} name='Introduction'>
				<h1>Press</h1>
				{allPresses.map(({ title, url }, idx) => (
					<a key={idx} href={url}>
						{title}
					</a>
				))}
			</Section>
			<DraftMode url={draftUrl} path='/about/press' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Press',
		description: 'Press at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/about/press`,
	});
}
