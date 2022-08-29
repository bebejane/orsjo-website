import styles from './[...news].module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { AllNewsDocument, NewsDocument } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { Image } from 'react-datocms'
import { PageLayoutProps } from '/lib/context/layout'
import { Section } from '/components'
import Markdown from '/lib/dato/components/Markdown';
import format from 'date-fns/format';

export type NewsProps = { news: NewsRecord };

export default function News({ news }: NewsProps) {

	return (
		<>
			<Section type="full" className={styles.image}>
				<Image data={news.image.responsiveImage} layout={'fill'} objectFit={'cover'} />
			</Section>
			<Section type="margin" className={styles.news}>
				<h1>{news.title}</h1>
				<h3>{format(new Date(news.createdAt), 'MMM do, yyyy')}</h3>
				<p>
					<Markdown>{news.text}</Markdown>
				</p>
			</Section>
		</>
	)
}

News.layout = { layout: 'full', color: '--black', menu: 'inverted' } as PageLayoutProps

export async function getStaticPaths(context) {
	const { news } = await apiQuery(AllNewsDocument)
	const paths = news.map(({ slug }) => ({ params: { news: [slug] } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({ }, async ({ props, context, revalidate }) => {

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