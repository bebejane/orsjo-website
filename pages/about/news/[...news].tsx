import styles from './[...news].module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { AllNewsDocument, NewsDocument } from '/graphql'
import { apiQuery } from 'dato-nextjs-utils/api'
import { Image } from 'react-datocms'
import { PageProps } from '/lib/context/page'
import { Section } from '/components'
import Link from 'next/link';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import format from 'date-fns/format';

export type NewsProps = { news: NewsRecord };

export default function News({ news: { image, title, createdAt, text } }: NewsProps) {

	return (
		<>
			<Section top={true}>
				<h1 className="bottomMargin topMargin white">News</h1>
			</Section>
			<Section className={styles.news} type={'margin'}>
				<div className={styles.date}>
					<p className="medium">{format(new Date(createdAt), 'MMM do, yyyy')}</p>
				</div>
				<div className={styles.content}>
					<h1 className="copper">{title}</h1>
					{image &&
						<figure className={styles.image}>
							<Image data={image.responsiveImage} />
						</figure>
					}
					<Markdown>{text}</Markdown>
				</div>
			</Section>
			<Section className={styles.more} bottom={true}>
				<Link href={'/about/news'}>
					<a>
						<button>View all news</button>
					</a>
				</Link>
			</Section>
		</>
	)
}

News.page = { layout: 'normal', color: '--black', menu: 'inverted', sidebar: false, footerLine: true } as PageProps

export async function getStaticPaths(context) {
	const { news } = await apiQuery(AllNewsDocument)
	const paths = news.map(({ slug }) => ({ params: { news: [slug] } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({}, async ({ props, context, revalidate }) => {

	const { news } = await apiQuery(NewsDocument, { variables: { slug: context.params.news[0] } })

	if (!news)
		return { notFound: true }

	return {
		props: {
			...props,
			news
		},
		revalidate
	};
});