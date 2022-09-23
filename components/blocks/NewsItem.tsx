import styles from './NewsItem.module.scss'
import React from 'react'
import Link from 'next/link'
import Markdown from '/lib/dato/components/Markdown'
export type NewsItemProps = { data: NewsItemRecord }

export default function NewsItem({ data: { news } }: NewsItemProps) {
	const { title, text, link, linkText, slug } = news

	return (
		<section className={styles.news}>
			<h1>News</h1>

			<span className={styles.text}>
				<h1>{title}</h1>
				<div className="large">
					<Markdown sentances={1}>{text}</Markdown>
				</div>
				<div className={styles.more}>
					<Link scroll={false} href={`/about/news/${slug}`}>
						<a className="medium white">
							Read more <img src="/images/arrow.svg" className={styles.arrow} />
						</a>
					</Link>
				</div>
			</span>
		</section>

	)
}