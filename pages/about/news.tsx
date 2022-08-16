import styles from './news.module.scss'
import { GetAllNewsDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { format } from 'date-fns'
import { Section } from '/components'

export type NewsProps = { news: NewsRecord[] }

export default function News({ news }: NewsProps) {

	return (
		<>
			<Section name="Header" top={true}>
				<h1 className="bottomMargin topMargin white">News</h1>
			</Section>
			{news.map(({ title, image, link, linkText, text, createdAt, id }, idx) =>
				<Section
					className={styles.newsItem}
					type={'margin'}
					name={format(new Date(createdAt), 'MMM do, yyyy')}
					key={idx}
				>
					<div className={styles.date}>
						<span className="medium">{format(new Date(createdAt), 'MMM do, yyyy')}</span>
					</div>
					<div className={styles.post}>
						<h1 className="copper">{title}</h1>
						{image && <Image data={image.responsiveImage} className={styles.image} />}
						<Markdown className={styles.text}>{text}</Markdown>
					</div>
				</Section>
			)}
			<Section className={styles.more}>
				<button>Load more +</button>
			</Section>

		</>
	)
}

News.layout = { layout: 'full', color: "--black", menu: 'inverted', sidebar: false } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAllNewsDocument], model:'news' }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});