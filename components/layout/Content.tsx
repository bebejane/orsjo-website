import React, { useEffect, useState, useRef } from 'react'
import styles from './Content.module.scss'
import cn from 'classnames'
import { useStore, shallow } from '/lib/store'
import { useRouter } from 'next/router'
import useScrollInfo from '/lib/hooks/useScrollInfo'
import { useLayout } from '/lib/context/layout'


export type ContentProps = { children: React.ReactNode }

export default function Content({ children}: ContentProps) {

	const { layout } = useLayout()
	const router = useRouter()
	const [setCurrentSection, setInvertSidebar, setInvertMenu, setSections, setShowMenu] = useStore((state) => [state.setCurrentSection, state.setInvertSidebar, state.setInvertMenu, state.setSections, state.setShowMenu], shallow);
	const { isPageBottom, isPageTop, isScrolledUp, scrolledPosition, documentHeight } = useScrollInfo()

	useEffect(()=>{
		const sections = document.querySelectorAll<HTMLElement>('section[data-section-id]')
		setSections(sections.length ? Array.from(sections).map((s)  => ({title:s.title, id:s.id})) : [])
	}, [router.asPath, setSections])

	useEffect(()=>{ // Highlight nav section on scroll

		const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
		const sidebar = document.getElementById('sidebar')
		const menu = document.getElementById('menu')
		
		if(!sections.length || !sidebar || !menu) return

		const sidebarBottomOffset = sidebar.getBoundingClientRect().bottom
		const menuBottomOffset = menu.getBoundingClientRect().bottom
		const {id} = sections.sort((a, b) => Math.abs(scrolledPosition - a.offsetTop) > Math.abs(scrolledPosition - b.offsetTop) ? 1 : -1)[0]

		let invertSidebar = false;
		for (let i = 0; i < sections.length; i++) {
			const s = sections[i];
			const isIntersecting = (scrolledPosition > (s.offsetTop - sidebarBottomOffset + (sidebar.clientHeight))) && scrolledPosition < (s.offsetTop - sidebarBottomOffset + s.clientHeight)
			if(s.dataset.dark && isIntersecting && s.id === id){
				invertSidebar = true
				break;
			}
		}

		setCurrentSection(id)
		setInvertMenu(invertSidebar)
		setInvertSidebar(invertSidebar)

	}, [scrolledPosition, documentHeight, setCurrentSection, setInvertSidebar, setInvertMenu])

	useEffect(()=>{ //Highlight nav section on scroll
		const sections = document.querySelectorAll<HTMLElement>('section[id]')
		const sidebar = document.getElementById('sidebar')

		if(!sections.length || !sidebar) return
		const sidebarBottomOffset = sidebar.getBoundingClientRect().bottom
	}, [scrolledPosition, documentHeight, setCurrentSection])

	useEffect(() => { // Toggle menu bar on scroll
		setShowMenu((isScrolledUp && !isPageBottom) || isPageTop)
	}, [scrolledPosition, isPageBottom, isPageTop, isScrolledUp, setShowMenu]);
	console.log(layout)
	return (
		<main id="content" className={styles.content} data-type={layout}>
			{children}
		</main>
	)
}