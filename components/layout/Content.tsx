import React, { useEffect, useRef } from 'react'
import styles from './Content.module.scss'
import useStore from '/lib/store'
import shallow from 'zustand/shallow'
import { useRouter } from 'next/router'

export type ContentProps = {children:React.ReactNode}

export default function Content({children} : ContentProps) {

	const router = useRouter()
	const [setCurrentSection, setSections] = useStore((state) => [state.setCurrentSection, state.setSections], shallow);
	
	useEffect(()=>{

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				const section = entry.target.dataset.section
				setCurrentSection(entry.intersectionRatio > 0 ? section : undefined)
			});
		});
	
		// Track all sections that have an `data-section` applied
		const sections = document.querySelectorAll('section[data-section]')
		if(!sections.length) 
			return setSections([])

		sections.forEach((section) => observer.observe(section));
		setSections(Array.from(sections).map((s)  => s.dataset.section))
		
	}, [router.asPath])

	return (
		<main id="content" className={styles.content}>
      {children}
    </main>
	)
}