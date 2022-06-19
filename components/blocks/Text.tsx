import styles from './Text.module.scss'
import React from 'react'
import Markdown from '/lib/dato/components/Markdown'

type TextBlockProps = { data: TextRecord }

export default function Text({ data: { text } }: TextBlockProps) {

	return (
		<section className={styles.text}>
			<Markdown>
				{text}
			</Markdown>
		</section>

	)
}