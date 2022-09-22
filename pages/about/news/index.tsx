import styles from './index.module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import Link from 'next/link';
import Markdown from '/lib/dato/components/Markdown';
import useApiQuery from '/lib/dato/hooks/useApiQuery'
import { AllNewsDocument } from '/graphql';
import { Image } from 'react-datocms'
import { PageLayoutProps } from '/lib/context/layout';
import { format } from 'date-fns'
import { Section } from '/components'

export type NewsProps = { news: NewsRecord[], pagination: CollectionMetadata }

const pageSize = 1;

export default function News({ news, pagination }: NewsProps) {
	
	const { data, loading, error, nextPage, page } = useApiQuery<NewsQuery & { news: NewsRecord[]}>(AllNewsDocument, { 
		initialData:{ news, pagination },
		variables:{ first:1 },
		pageSize
	});
	
	return (
		<>
			<Section name="Header" top={true}>
				<h1 className="bottomMargin topMargin white">News</h1>
			</Section>
			{data.news.map(({ title, image, link, linkText, text, createdAt, id, slug }, idx) =>
				<Section
					className={styles.newsItem}
					type={'margin'}
					name={format(new Date(createdAt), 'MMM do, yyyy')}
					id={slug}
					key={idx}
				>
					<div className={styles.date}>
						<span className="medium">{format(new Date(createdAt), 'MMM do, yyyy')}</span>
					</div>
					<div className={styles.post}>
						<Link href={`/about/news/${slug}`}>
							<a>
								<h1 className="copper">{title}</h1>
							</a>
						</Link>
						{image && <Image data={image.responsiveImage} className={styles.image} />}
						<Markdown className={styles.text}>{text}</Markdown>
					</div>
				</Section>
			)}
			
			{!page?.end && 
				<Section className={styles.more} bottom={true}>
					
					<button onClick={nextPage}>{!loading ? 'Load more +' : '···'}</button>
					{error && 
						<div className={styles.error}>
							Error: {typeof error === 'string' ? error : error.message }
						</div>
					}
				</Section>
			}
		</>
	)
}

News.layout = { layout: 'full', color: "--black", menu: 'inverted', sidebar: false, footerLine:true  } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [AllNewsDocument], variables:{first:pageSize, skip:0} }, async ({ props, revalidate }: any) => {
	
	return {
		props,
		revalidate
	};
});