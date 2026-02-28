import { apiQuery } from 'next-dato-utils/api';
import { Block, Section } from '@/components';
import { StartDocument } from '@/graphql';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { DraftMode } from 'next-dato-utils/components';

export default async function Home({ params }: PageProps<'/[locale]'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { start, draftUrl } = await apiQuery(StartDocument);
	if (!start) return notFound();

	return (
		<>
			{start?.content.map((block, idx) => (
				<Block key={idx} data={block} first={idx === 0} />
			))}
			<DraftMode url={draftUrl} path='/' />
		</>
	);
}
