import styles from './index.module.scss';
import withGlobalProps from '/lib/withGlobalProps';
import Link from 'next/link';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { useApiQuery } from 'dato-nextjs-utils/hooks';
import { AllNewsDocument } from '/graphql';
import { Image } from 'react-datocms';
import { PageProps } from '/lib/context/page';
import { format } from 'date-fns';
import { Section } from '/components';

export type NewsProps = { allNews: NewsRecord[]; pagination: CollectionMetadata };

const pageSize = 5;

export default function News({ allNews, pagination }: NewsProps) {
	const { data, loading, error, nextPage, page } = useApiQuery<{ allNews: NewsRecord[] }>(AllNewsDocument, {
		initialData: { allNews, pagination },
		variables: { first: 1 },
		pageSize,
	});

	return (
		<>
			<Section name='Header' top={true}>
				<h1 className='bottomMargin topMargin white'>News</h1>
			</Section>
			{data.allNews?.map(({ title, image, link, linkText, text, createdAt, id, slug }, idx) => (
				<Section
					className={styles.newsItem}
					type={'margin'}
					name={format(new Date(createdAt), 'MMM do, yyyy')}
					id={slug}
					key={idx}
				>
					<div className={styles.date}>
						<span className='medium'>{format(new Date(createdAt), 'MMM do, yyyy')}</span>
					</div>
					<div className={styles.post}>
						<Link href={`/about/news/${slug}`}>
							<h1 className='copper'>{title}</h1>
						</Link>
						{image && <Image data={image.responsiveImage} className={styles.image} />}
						<Markdown className={styles.text}>{text}</Markdown>
					</div>
				</Section>
			))}

			{!page?.end && (
				<Section className={styles.more} bottom={true}>
					<button onClick={nextPage}>{!loading ? 'Load more +' : '···'}</button>
					{error && <div className={styles.error}>Error: {typeof error === 'string' ? error : error.message}</div>}
				</Section>
			)}
		</>
	);
}

News.page = {
	title: 'News',
	layout: 'full',
	color: '--black',
	menu: 'inverted',
	sidebar: false,
	footerLine: true,
} as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [AllNewsDocument], variables: { first: pageSize } },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);
