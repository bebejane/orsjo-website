import s from './page.module.scss';
import withGlobalProps from '@/lib/withGlobalProps';
import { AllNewsDocument, NewsDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { Image } from 'react-datocms';
import { PageProps } from '@/lib/context/page';
import { Section } from '@/components';
import Link from 'next/link';
import { Markdown } from 'next-dato-utils/components';
import { DatoSEO } from 'next-dato-utils/components';
import format from 'date-fns/format';

export type NewsProps = { news: NewsRecord };

export default function News({ news: { image, title, createdAt, text, _seoMetaTags } }: NewsProps) {
	return (
		<>
			<DatoSEO title={title} description={text} seo={_seoMetaTags} />
			<Section className={s.news} type={'margin'} top={true}>
				<div className={s.date}>
					<p className='medium'>{format(new Date(createdAt), 'MMM do, yyyy')}</p>
				</div>
				<div className={s.content}>
					<h1 className='copper'>{title}</h1>
					{image && (
						<figure className={s.image}>
							<Image data={image.responsiveImage} />
						</figure>
					)}
					<Markdown>{text}</Markdown>
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

News.page = {
	layout: 'full',
	color: '--black',
	menu: 'inverted',
	sidebar: false,
	footerLine: true,
} as PageProps;

export async function getStaticPaths(context) {
	const { news } = await apiQuery(AllNewsDocument);
	const paths = news.map(({ slug }) => ({ params: { news: slug } }));
	return {
		paths,
		fallback: 'blocking',
	};
}

export const getStaticProps = withGlobalProps({}, async ({ props, context, revalidate }) => {
	const { news } = await apiQuery(NewsDocument, {
		variables: { slug: context.params.news },
		preview: context.preview,
	});

	if (!news) return { notFound: true, revalidate };

	return {
		props: {
			...props,
			news,
			pageTitle: news.title,
		},
		revalidate,
	};
});
