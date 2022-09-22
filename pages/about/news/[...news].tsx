import styles from './[...news].module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { AllNewsDocument, NewsDocument } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { Image } from 'react-datocms'
import { PageProps } from '/lib/context/page'
import { Section } from '/components'
import Markdown from '/lib/dato/components/Markdown';
import format from 'date-fns/format';

export type NewsProps = { news: NewsRecord };

export default function News({ news: {image, title, createdAt, text} }: NewsProps) {

	return (
		<>
			{image &&
				<Section className={styles.image} top={true}>
					<Image data={image.responsiveImage} layout={'fill'} objectFit={'cover'} />
				</Section>
			}
			<Section  className={styles.news} top={image == undefined}>
				<h1 className="copper">{title}</h1>
				<h3>{format(new Date(createdAt), 'MMM do, yyyy')}</h3>
				<p>
					<Markdown>{text}</Markdown>
				</p>
			</Section>
		</>
	)
}

News.page = { layout: 'normal', color: '--black', menu: 'inverted', footerLine: true  } as PageProps

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