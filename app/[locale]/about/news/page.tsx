import { AllNewsDocument } from '@/graphql';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import NewsList from './NewsList';
import { Metadata } from 'next';
import { DraftMode } from 'next-dato-utils/components';

export default async function News({ params }: PageProps<'/[locale]/about/news'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { allNews, draftUrl } = await apiQuery(AllNewsDocument, {
		variables: { first: 5, skip: 0 },
	});

	return (
		<>
			<Section name='Header' top={true}>
				<h1 className='bottomMargin topMargin white'>News</h1>
			</Section>
			<NewsList allNews={allNews} />
			<DraftMode url={draftUrl} path='/news' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'News',
	};
}
