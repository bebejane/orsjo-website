import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { useStore, shallow } from '/lib/store';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLayout } from '/lib/context/layout'
import { useEffect, useState, useCallback } from 'react'
import useScrollInfo from '/lib/hooks/useScrollInfo';

export type SidebarProps = {title: string}

export default function Sidebar({title} : SidebarProps) {

	const { menu, sidebar, layout } = useLayout()
	const router = useRouter()
	const [currentSection, invertSidebar, searchProducts, setSearchProducts] = useStore((state) => [state.currentSection, state.invertSidebar, state.searchProducts, state.setSearchProducts], shallow);
	const [sections, setSections] = useState([])
	const isInverted = menu === 'inverted' || invertSidebar
	const pathname = router.asPath.includes('#') ? router.asPath.substring(0, router.asPath.indexOf('#')) : router.asPath
	const isProductsPage = router.pathname.toLowerCase() === '/products'
	const isProductPage = router.pathname.startsWith('/products/')
	const isProjectPage = router.pathname.startsWith('/professionals/projects/')
	const [searchFocus, setSearchFocus] = useState(false);
	const [setCurrentSection, setInvertSidebar, setInvertMenu] = useStore((state) => [state.setCurrentSection, state.setInvertSidebar, state.setInvertMenu, state.setSections, state.setShowMenu], shallow);
	const {scrolledPosition, documentHeight } = useScrollInfo()
	
	const resetSearch = useCallback(() => {setSearchProducts('')},[setSearchProducts]);
	
	useEffect(()=>{ 
		console.log('update sections sidebar')
		const items = document.querySelectorAll<HTMLElement>('section[data-section-id]')
		const sections = items.length ? Array.from(items).map((s)  => ({title:s.title, id:s.id})) : []
		setSections(sections)
	}, [])

	useEffect(()=>{ // Highlight nav section on scroll\
		
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-section-id]'))
		const sidebar = document.getElementById('sidebar')
		
		if(!sections.length) return

		const sidebarBottomOffset = sidebar.getBoundingClientRect().bottom
		const sorted = sections.sort((a, b) => Math.abs(scrolledPosition - a.offsetTop) > Math.abs(scrolledPosition - b.offsetTop) ? 1 : -1)
		const { id } = sorted[0]

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
		//setInvertMenu(invertSidebar)
		//setInvertSidebar(invertSidebar)

	}, [scrolledPosition, documentHeight, setCurrentSection, setInvertSidebar, setInvertMenu, layout])
	
	useEffect(()=>{ resetSearch()}, [router.asPath, resetSearch])
	
	return (
		<aside id="sidebar" className={cn(styles.sidebar, isInverted && styles.inverted, !isProductsPage && styles.short)}>
			<h3>{title}</h3>
			<nav>
				<ul>
					{sections?.map((section, idx) => 
						<li key={idx}>
							<a href={`${pathname}#${section.id}`} className={cn(section.id === currentSection && styles.active)}>
								{section.title}
							</a>
						</li>
					)}
					{isProductsPage && 
						<li className={styles.search}>
							<input 
								type="text" 
								placeholder='Search' 
								value={searchProducts} 
								onChange={(e) => setSearchProducts(e.target.value)}
								onFocus={()=> setSearchFocus(true)}
								onBlur={()=> setTimeout(()=>setSearchFocus(false), 100)}
							/>
							<button 
								onClick={resetSearch}
								className={cn(styles.close, searchFocus && styles.show)}
							>
								×
							</button>
						</li>
					}
				</ul>
			</nav>
			
			<div className={cn(styles.footer, 'medium')}>
				{isProductPage && <span onClick={()=> router.push("/products")}>All Products</span>}
				{isProjectPage && <span onClick={()=> router.push("/professionals/projects")}>All Projects</span>}
			</div>
			
		</aside>
	)
}