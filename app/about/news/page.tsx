import s from './page.module.scss';
import Link from 'next/link';
import { Markdown } from 'next-dato-utils/components';
import { useApiQuery } from 'next-dato-utils/hooks';
import { AllNewsDocument } from '@/graphql';
import { Image } from 'react-datocms';
import { PageProps } from '@/lib/context/page';
import { format } from 'date-fns';
import { Section } from '@/components';

export type NewsProps = { news: NewsRecord[]; pagination: CollectionMetadata };

const pageSize = 5;

export default function News({ news, pagination }: NewsProps) {
	const { data, loading, error, nextPage, page } = useApiQuery<{ news: NewsRecord[] }>(
		AllNewsDocument,
		{
			initialData: { news, pagination },
			variables: { first: 1 },
			pageSize,
		}
	);

	return (
		<>
			<Section name='Header' top={true}>
				<h1 className='bottomMargin topMargin white'>News</h1>
			</Section>
			{data.news.map(({ title, image, link, linkText, text, createdAt, id, slug }, idx) => (
				<Section
					className={s.newsItem}
					type={'margin'}
					name={format(new Date(createdAt), 'MMM do, yyyy')}
					id={slug}
					key={idx}
				>
					<div className={s.date}>
						<span className='medium'>{format(new Date(createdAt), 'MMM do, yyyy')}</span>
					</div>
					<div className={s.post}>
						<Link href={`/about/news/${slug}`}>
							<h1 className='copper'>{title}</h1>
						</Link>
						{image && <Image data={image.responsiveImage} className={s.image} />}
						<Markdown className={s.text}>{text}</Markdown>
					</div>
				</Section>
			))}

			{!page?.end && (
				<Section className={s.more} bottom={true}>
					<button onClick={nextPage}>{!loading ? 'Load more +' : '···'}</button>
					{error && (
						<div className={s.error}>
							Error: {typeof error === 'string' ? error : error.message}
						</div>
					)}
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
