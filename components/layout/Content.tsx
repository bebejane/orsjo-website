import React, { useEffect, useState, useRef } from 'react'
import styles from './Content.module.scss'
import useStore from '/lib/store'
import shallow from 'zustand/shallow'
import { useRouter } from 'next/router'
import useScrollInfo from '/lib/hooks/useScrollInfo'

export type ContentProps = { children: React.ReactNode }

export default function Content({ children }: ContentProps) {

	const router = useRouter()
	const [setCurrentSection, setSections] = useStore((state) => [state.setCurrentSection, state.setSections], shallow);
	const { scrolledPosition, documentHeight } = useScrollInfo()

	useEffect(()=>{
		const sections = document.querySelectorAll('section[id]')
		setSections(sections.length ? Array.from(sections).map((s)  => s.title || s.id) : [])
	}, [router.asPath])

	useEffect(()=>{
		const sections = document.querySelectorAll('section[id]')
		if(!sections.length) return
		const section = (Array.from(sections) as HTMLElement[]).sort((a, b) => Math.abs(scrolledPosition - a.offsetTop) > Math.abs(scrolledPosition - b.offsetTop) ? 1 : -1)[0]
		setCurrentSection(section.id)
	}, [scrolledPosition, documentHeight, setCurrentSection])

	return (
		<main id="content" className={styles.content}>
			{children}
		</main>
	)
}