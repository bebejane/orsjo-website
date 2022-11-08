import styles from './NewsItem.module.scss'
import React from 'react'
import Link from 'next/link'
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { ArrowLink } from '/components'
import { useRef } from 'react'

export type NewsItemProps = { data: NewsItemRecord }

export default function NewsItem({ data: { news } }: NewsItemProps) {
	const { title, text, link, linkText, slug } = news
	const ref = useRef()

	return (
		<section className={styles.news}>
			<Link scroll={false} href={`/about/news/${slug}`}>
				<a className="medium white" ref={ref}>
					<h1>News</h1>
					<span className={styles.text}>
						<h1 className={styles.title}>{title}</h1>
						<div className="large">
							<Markdown sentances={1}>{text}</Markdown>
						</div>
						<div className={styles.more}>
							<ArrowLink hoverRef={ref} inverted={true}>Read more</ArrowLink>
						</div>
					</span>
				</a>
			</Link>
		</section>

	)
}