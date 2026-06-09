import s from './page.module.scss';

import { AllNewsDocument, NewsDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { Image } from 'react-datocms';
import { Section } from '@/components';
import Link from '@/components/nav/Link';
<<<<<<< HEAD
import { Markdown } from 'next-dato-utils/components';
=======
import { DraftMode, Markdown } from 'next-dato-utils/components';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { format } from 'date-fns';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
<<<<<<< HEAD
import { buildMetadata } from '@/app/layout';
=======
import { buildMetadata } from '@/app/[locale]/layout';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export default async function NewsPage({ params }: PageProps<'/[locale]/about/news/[news]'>) {
	const { locale, news: slug } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const { news } = await apiQuery(NewsDocument, {
=======
	const { news, draftUrl } = await apiQuery(NewsDocument, {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		variables: { slug },
	});
	if (!news) return notFound();

	const { image, title, createdAt, text } = news;

	return (
		<>
			<Section className={s.news} type={'margin'} top={true}>
				<div className={s.date}>
					<p className='medium'>{format(new Date(createdAt), 'MMM do, yyyy')}</p>
				</div>
				<div className={s.content}>
					<h1 className='copper'>{title}</h1>
					{image?.responsiveImage && (
						<figure className={s.image}>
							<Image data={image.responsiveImage} />
						</figure>
					)}
					<Markdown content={text} />
				</div>
			</Section>
			<Section className={s.more} bottom={true}>
				<Link href={'/about/news'} passHref={true}>
					<button>View all news</button>
				</Link>
			</Section>
<<<<<<< HEAD
=======
			<DraftMode url={draftUrl} path={`/about/news/${slug}`} />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}
export async function generateStaticParams() {
	const { allNews } = await apiQuery(AllNewsDocument, { all: true });
	const paths = allNews.map(({ slug }) => ({ news: slug }));
	return paths;
}

<<<<<<< HEAD
export async function generateMetadata({ params }: PageProps<'/[locale]/about/news/[news]'>): Promise<Metadata> {
=======
export async function generateMetadata({
	params,
}: PageProps<'/[locale]/about/news/[news]'>): Promise<Metadata> {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	const { news: slug } = await params;
	const { news } = await apiQuery(NewsDocument, {
		variables: { slug },
	});
	if (!news) return notFound();
	const { title, image, text } = news;
	return await buildMetadata({
		title,
		description: text,
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/about/news/${slug}`,
		image: image as FileField,
	});
}
