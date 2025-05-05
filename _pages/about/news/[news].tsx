import styles from './[news].module.scss';
import withGlobalProps from '@/lib/withGlobalProps';
import { AllNewsDocument, NewsDocument } from '@/graphql';
import { apiQuery } from 'dato-nextjs-utils/api';
import { Image } from 'react-datocms';
import { PageProps } from '@/lib/context/page';
import { Section } from '@/components';
import Link from 'next/link';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { DatoSEO } from 'dato-nextjs-utils/components';
import format from 'date-fns/format';

export type NewsProps = { news: NewsRecord };

export default function News({ news: { image, title, createdAt, text, _seoMetaTags } }: NewsProps) {
	return (
		<>
			<DatoSEO title={title} description={text} seo={_seoMetaTags} />
			<Section className={styles.news} type={'margin'} top={true}>
				<div className={styles.date}>
					<p className='medium'>{format(new Date(createdAt), 'MMM do, yyyy')}</p>
				</div>
				<div className={styles.content}>
					<h1 className='copper'>{title}</h1>
					{image && (
						<figure className={styles.image}>
							<Image data={image.responsiveImage} />
						</figure>
					)}
					<Markdown>{text}</Markdown>
				</div>
			</Section>
			<Section className={styles.more} bottom={true}>
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
