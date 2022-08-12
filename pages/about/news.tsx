import styles from './news.module.scss'
import { GetAllNewsDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { sectionId } from '/lib/utils';
import {format } from 'date-fns'

export type NewsProps = { news: NewsRecord[] }

export default function News({ news }: NewsProps) {

	return (
		<div className={styles.news}>
			<h1>News</h1>
			{news.map(({title, image, link, linkText, text, createdAt, id}, idx) =>
				<section key={idx} className={styles.newsItem} {...sectionId(format(new Date(createdAt), 'MMM do, yyyy'),id)}>
					<h1>{title}</h1>
					{image && <Image data={image.responsiveImage}/>}
					<Markdown className={styles.text}>{text}</Markdown>
				</section>
			)}
			<button className={styles.lodeMore}>Load mmore</button>
		</div>
	)
}

News.layout = { layout:'normal', color:"--lightblack", menu: 'inverted'} as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetAllNewsDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});