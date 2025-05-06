import s from './page.module.scss';
import { AllNewsDocument, NewsDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { Image } from 'react-datocms';
import { PageProps } from '@/lib/context/page';
import { Section } from '@/components';
import Link from 'next/link';
import { Markdown } from 'next-dato-utils/components';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';

export type NewsProps = { params: Promise<{ news: string }> };

export default async function NewsPage({ params }: NewsProps) {
	const { news: slug } = await params;
	const { news } = await apiQuery<NewsQuery, NewsQueryVariables>(NewsDocument, {
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
		</>
	);
}

NewsPage.page = {
	layout: 'full',
	color: '--black',
	menu: 'inverted',
	sidebar: false,
	footerLine: true,
} as PageProps;

export async function generateStaticParams() {
	const { allNews } = await apiQuery<AllNewsQuery, AllNewsQueryVariables>(AllNewsDocument);
	const paths = allNews.map(({ slug }) => ({ news: slug }));
	return paths;
}
