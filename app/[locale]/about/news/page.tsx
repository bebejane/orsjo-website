import { AllNewsDocument } from '@/graphql';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import NewsList from './NewsList';
import { Metadata } from 'next';
<<<<<<< HEAD
=======
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export default async function News({ params }: PageProps<'/[locale]/about/news'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const { allNews } = await apiQuery(AllNewsDocument, { variables: { first: 5, skip: 0 } });
=======
	const { allNews, draftUrl } = await apiQuery(AllNewsDocument, {
		variables: { first: 5, skip: 0 },
	});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

	return (
		<>
			<Section name='Header' top={true}>
				<h1 className='bottomMargin topMargin white'>News</h1>
			</Section>
			<NewsList allNews={allNews} />
<<<<<<< HEAD
=======
			<DraftMode url={draftUrl} path='/news' />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
<<<<<<< HEAD
	return {
		title: 'News',
	};
=======
	return buildMetadata({
		title: 'News',
		description: 'News at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/about/news`,
	});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
}
