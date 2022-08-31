import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { useStore, shallow } from '/lib/store';
import { useRouter } from 'next/router';
import { useLayout } from '/lib/context/layout'
import { useEffect, useState, useCallback } from 'react'
import useScrollInfo from '/lib/hooks/useScrollInfo';

export type SidebarProps = {title: string}

export default function Sidebar({title} : SidebarProps) {

	const { menu, layout, color } = useLayout()
	const router = useRouter()
	const [currentSection, setCurrentSection, invertSidebar, searchProducts, setSearchProducts] = useStore((state) => [state.currentSection, state.setCurrentSection, state.invertSidebar, state.searchProducts, state.setSearchProducts], shallow);
	const [setInvertSidebar, setInvertMenu] = useStore((state) => [state.setInvertSidebar, state.setInvertMenu], shallow);
	const [sections, setSections] = useState([])
	const [open, setOpen] = useState(false)
	const {scrolledPosition, documentHeight } = useScrollInfo()

	const isInverted = menu === 'inverted' || invertSidebar
	const pathname = router.asPath.includes('#') ? router.asPath.substring(0, router.asPath.indexOf('#')) : router.asPath
	const isProductsPage = router.pathname.toLowerCase() === '/products'
	const isProductPage = router.pathname.startsWith('/products/')
	const isProjectPage = router.pathname.startsWith('/professionals/projects/')
	const [searchFocus, setSearchFocus] = useState(false);
	
	const resetSearch = useCallback(() => {setSearchProducts('')},[setSearchProducts]);

	const handleClick = (e) => {
		e.preventDefault()
		router.push(e.target.getAttribute('href'))
		setOpen(false);
	}
	
	useEffect(()=>{ 
		const items = document.querySelectorAll<HTMLElement>('section[data-section-id]')
		const sections = items.length ? Array.from(items).map((s)  => ({title:s.title, id:s.id})) : []
		setSections(sections)
	}, [])

	useEffect(()=>{ // Highlight nav section on scroll\
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-section-id]'))
		
		if(!sections.length) 
			return

		const sorted = sections.sort((a, b) => Math.abs(scrolledPosition - a.offsetTop) > Math.abs(scrolledPosition - b.offsetTop) ? 1 : -1)
		const { id } = sorted[0]
		setCurrentSection(id)

	}, [scrolledPosition, documentHeight, setCurrentSection, setInvertSidebar, setInvertMenu, layout])
	
	useEffect(()=>{ resetSearch()}, [router.asPath, resetSearch])
	
	return (
		<aside 
			id="sidebar" 
			className={cn(styles.sidebar, isInverted && styles.inverted, !isProductsPage && styles.short)}
			style={{backgroundColor:color}}
		>
			<h3 className={cn(open && styles.open)} onClick={()=>setOpen(!open)}>
				{title}
				<span className={cn(styles.arrow, open && styles.open)}>›</span>
			</h3>
			<nav className={cn(open && styles.open)}>
				<ul>
					{sections?.map((section, idx) => 
						<li key={idx}>
							<a 
								href={`${pathname}#${section.id}`} 
								data-section-id={section.id}
								className={cn(section.id === currentSection && styles.active)}
								onClick={handleClick}
							>
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