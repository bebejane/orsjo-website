import React, { useEffect, useState, useRef } from 'react'
import styles from './Content.module.scss'
import useStore from '/lib/store'
import shallow from 'zustand/shallow'
import { useRouter } from 'next/router'
import useScrollInfo from '/lib/hooks/useScrollInfo'

export type ContentProps = {children:React.ReactNode}

export default function Content({children} : ContentProps) {

	const router = useRouter()
	const [setCurrentSection, setSections] = useStore((state) => [state.setCurrentSection, state.setSections], shallow);
	const { isScrolling } = useScrollInfo()
	const scrollRef = useRef(false)

	useEffect(()=>{ scrollRef.current = isScrolling},[isScrolling])

	useEffect(()=>{

		setCurrentSection(undefined)

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				const section = entry.target.id
				//console.log(section, entry.isIntersecting, entry.intersectionRatio)
				if(entry.isIntersecting && entry.intersectionRatio > 0 )
					setCurrentSection(section)
			});
		}, {
			threshold: 0
		});

		const sections = document.querySelectorAll('section[id]')
		if(sections.length) {
			sections.forEach((section) => observer.observe(section));
			setSections(Array.from(sections).map((s)  => s.title || s.id))
		} 
		else {
			setSections([])
		}

		return () => { observer.disconnect() }

	}, [router.asPath])

	return (
		<main id="content" className={styles.content}>
      {children}
    </main>
	)
}