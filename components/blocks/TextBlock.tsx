import styles from './TextBlock.module.scss'
import React from 'react'
import Markdown from '/lib/dato/components/Markdown'

type TextBlockProps = { data: TextRecord }

export default function TextBlock({ data: { text } }: TextBlockProps) {

	return (
		<section className={styles.text}>
			<Markdown>
				{text}
			</Markdown>
		</section>

	)
}