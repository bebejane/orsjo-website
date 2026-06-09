import { apiQuery } from 'next-dato-utils/api';
import { Block, Section } from '@/components';
import { StartDocument } from '@/graphql';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
<<<<<<< HEAD
=======
import { DraftMode } from 'next-dato-utils/components';

export const dynamic = 'force-static';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export default async function Home({ params }: PageProps<'/[locale]'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);
<<<<<<< HEAD
	const { start } = await apiQuery(StartDocument);

=======

	const { start, draftUrl } = await apiQuery(StartDocument);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	if (!start) return notFound();

	return (
		<>
			{start?.content.map((block, idx) => (
				<Block key={idx} data={block} first={idx === 0} />
			))}
<<<<<<< HEAD
=======
			<DraftMode url={draftUrl} path='/' />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}
