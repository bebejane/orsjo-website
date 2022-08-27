import React, { useEffect, useState, useRef } from 'react'
import styles from './Content.module.scss'
import { useLayout } from '/lib/context/layout'

export type ContentProps = { children: React.ReactNode }

export default function Content({ children}: ContentProps) {

	const { layout } = useLayout()
	
	return (
		<main id="content" className={styles.content} data-type={layout}>
			<article>
				{children}
			</article>
		</main>
	)
}