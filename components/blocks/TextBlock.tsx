import styles from './TextBlock.module.scss'
import React from 'react'
import Markdown from '/lib/dato/components/Markdown'

type TextBlockProps = {data:Text}

export default function TextBlock({data:{text}} : TextBlockProps) {
	
	return (
		<Markdown>
			{text}
		</Markdown>
	)
}