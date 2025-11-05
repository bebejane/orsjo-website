import { apiQuery } from 'next-dato-utils/api';
import { Block, Section } from '@/components';
import { StartDocument } from '@/graphql';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({ params }: PageProps<'/[locale]'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { start } = await apiQuery(StartDocument);
	return (
		<>
			{start?.content.map((block, idx) => (
				<Section key={idx} type='full'>
					<Block data={block} first={idx === 0} />
				</Section>
			))}
		</>
	);
}
