'use client';

import s from './NewsList.module.scss';
import Link from '@/components/nav/Link';
import { Markdown } from 'next-dato-utils/components';
import { useApiQuery } from 'next-dato-utils/hooks';
import { AllNewsDocument } from '@/graphql';
import { Image } from 'react-datocms';
import { format } from 'date-fns';
import { Section } from '@/components';

const pageSize = 5;

export type Props = { allNews: AllNewsQuery['allNews'] };

export default function NewsList({ allNews }: Props) {
	const { data, loading, error, nextPage, page } = useApiQuery<AllNewsQuery, AllNewsQueryVariables>(
		AllNewsDocument,
		{
			initialData: { allNews },
			variables: { first: 1 },
			pageSize,
		}
	);

	return (
		<>
			{data.allNews.map(({ id, title, image, text, createdAt, slug }, idx) => (
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
							{image?.responsiveImage && <Image data={image.responsiveImage} className={s.image} />}
						</Link>
						<Markdown className={s.text} content={text} />
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
