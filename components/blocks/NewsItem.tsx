'use client';

import s from './NewsItem.module.scss';
import React from 'react';
import Link from 'next/link';
import { Markdown } from 'next-dato-utils/components';
import { ArrowLink } from '@/components';
import { useRef } from 'react';

export type NewsItemProps = { data: NewsItemRecord };

export default function NewsItem({ data: { news } }: NewsItemProps) {
	const { title, text, link, linkText, slug } = news;
	const ref = useRef(null);

	return (
		<section className={s.news}>
			<Link
				scroll={false}
				href={`/about/news/${slug}`}
				className='medium white'
				ref={ref}
				passHref={true}
			>
				<h1>News</h1>
				<span className={s.text}>
					<h1 className={s.title}>{title}</h1>
					<div className='large'>
						<Markdown sentances={1} content={text} />
					</div>
					<div className={s.more}>
						<ArrowLink hoverRef={ref} inverted={true}>
							Read more
						</ArrowLink>
					</div>
				</span>
			</Link>
		</section>
	);
}
