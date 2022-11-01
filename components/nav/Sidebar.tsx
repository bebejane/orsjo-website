import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { useStore, shallow } from '/lib/store';
import { useRouter } from 'next/router';
import { usePage } from '/lib/context/page'
import { useEffect, useState, useCallback, useRef } from 'react'
import { ArrowLink, AnchorLink } from '/components'
import { useScrollInfo } from 'dato-nextjs-utils/hooks'
import { remToPx, styleVariables } from '/lib/utils';
import { useWindowSize } from 'rooks';

export type SidebarProps = {title: string}

export default function Sidebar({title} : SidebarProps) {

	const { menu, layout, color } = usePage()
	const router = useRouter()
	const [currentSection, setCurrentSection, invertSidebar, searchProducts, setSearchProducts] = useStore((state) => [state.currentSection, state.setCurrentSection, state.invertSidebar, state.searchProducts, state.setSearchProducts], shallow);
	const [setInvertSidebar, setInvertMenu] = useStore((state) => [state.setInvertSidebar, state.setInvertMenu], shallow);
	const [inverted, setInverted] = useState(menu === 'inverted' || invertSidebar)
	const [sections, setSections] = useState([])
	const [open, setOpen] = useState(false)
	const [searchFocus, setSearchFocus] = useState(false);
	const [maxHeight, setMaxHeight] = useState<string | undefined>()
	const {scrolledPosition, documentHeight } = useScrollInfo()
	const { innerWidth } = useWindowSize()
	const backRef = useRef()

	const pathname = router.asPath.includes('#') ? router.asPath.substring(0, router.asPath.indexOf('#')) : router.asPath
	const isProductsPage = router.pathname.toLowerCase() === '/products'
	const isProductPage = router.pathname.startsWith('/products/')
	const isProjectPage = router.pathname.startsWith('/professionals/projects/')
	
	const resetSearch = useCallback(() => {setSearchProducts('')},[setSearchProducts]);

	const handleClick = (e) => {
		router.replace(e.target.getAttribute('href'), {hash:e.target.getAttribute('href')})
		setOpen(false);
	}
	
	useEffect(()=>{ 
		const items = document.querySelectorAll<HTMLElement>('section[data-section-id]')
		const sections = items.length ? Array.from(items).map((s)  => ({title:s.dataset.sectionTitle, id:s.id})) : []
		setSections(sections)
	}, [])

	useEffect(()=>{ // Highlight nav section on scroll\
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-section-id]'))
		
		if(!sections.length) 
			return

		const calcPos = (el : HTMLElement) => Math.abs(scrolledPosition - el.offsetTop + parseInt(getComputedStyle(el, null).scrollMarginTop)) + el.offsetTop 
		const { id } = sections.sort((a, b) => calcPos(a) > calcPos(b) ? 1 : -1)[0]
		
		setCurrentSection(id)

	}, [scrolledPosition, documentHeight, setCurrentSection, setInverted, setInvertMenu, layout, menu])
	
	useEffect(()=>{
		
		const isDesktop = innerWidth > styleVariables.tablet
		const section = document.getElementById(currentSection)
		const header = document.getElementById('sidebar-header')

		if(!section || !header || !isDesktop) 
			return

		const bg = getComputedStyle(section, null).backgroundColor
		const fg = getComputedStyle(header, null).color

		if(menu === 'inverted' && bg === fg)	
			setInverted(false)
		else
			setInverted(menu === 'inverted')

	}, [currentSection, setInverted, menu, styleVariables, innerWidth])

	useEffect(()=>{ 
		const footer = document.getElementById('footer')
		if(!isProductPage && !isProjectPage && !isProductsPage)
			setMaxHeight(`calc(100vh - ${footer.clientHeight}px`);
	}, [isProductPage, isProjectPage, isProductsPage])

	useEffect(()=>{ setTimeout(()=>resetSearch(), 100)}, [router.asPath, resetSearch])
	
	
	return (
		<aside 
			id="sidebar" 
			className={cn(styles.sidebar, inverted && styles.inverted, !isProductsPage && styles.short)}
			style={{backgroundColor:color, maxHeight}}
		>
			<h3 id="sidebar-header" className={cn(open && styles.open)} onClick={()=>setOpen(!open)}>
				{title}
				<span className={cn(styles.arrow, open && styles.open)}>›</span>
			</h3>
			<nav className={cn(open && styles.open)}>
				<ul>
					{sections?.map((section, idx) => 
						<li key={idx}>
							<AnchorLink 
								href={`${pathname}#${section.id}`}
								data-section-id={section.id}
								className={cn(section.id === currentSection && styles.active)}
								onClick={handleClick}
							>
								{section.title}
							</AnchorLink>
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
				{isProductPage && 
					<span onClick={()=> router.push("/products")} ref={backRef}>
						<ArrowLink reversed={true} hoverRef={backRef}>All Products</ArrowLink>
					</span>
				}
				{isProjectPage && 
					<span onClick={()=> router.push("/professionals/projects")} ref={backRef}>
						<ArrowLink reversed={true} hoverRef={backRef}>All Projects</ArrowLink>
					</span>
				}
			</div>
			
		</aside>
	)
}