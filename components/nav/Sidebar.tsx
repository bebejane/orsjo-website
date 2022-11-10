import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { useStore, shallow } from '/lib/store';
import { useRouter } from 'next/router';
import { usePage } from '/lib/context/page'
import { useEffect, useState, useCallback, useRef } from 'react'
import { ArrowLink, AnchorLink } from '/components'
import { useScrollInfo } from 'dato-nextjs-utils/hooks'
import { styleVariables } from '/lib/utils';
import { useWindowSize } from 'rooks';

export type SidebarProps = { title: string, show: boolean }

const getPageType = (pathname) => {
	const p = pathname.toLowerCase();
	return p === '/products' ? 'products' : p.startsWith('/products/') ? 'product' : p.startsWith('/professionals/projects/') ? 'project' : undefined
}

export default function Sidebar({ title, show }: SidebarProps) {

	const { menu, layout, color } = usePage()
	const router = useRouter()
	const pathname = router.asPath.includes('#') ? router.asPath.substring(0, router.asPath.indexOf('#')) : router.asPath
	const [currentSection, setCurrentSection, invertSidebar, searchProducts, setSearchProducts] = useStore((state) => [state.currentSection, state.setCurrentSection, state.invertSidebar, state.searchProducts, state.setSearchProducts], shallow);
	const [setInvertSidebar, setInvertMenu] = useStore((state) => [state.setInvertSidebar, state.setInvertMenu], shallow);
	const [inverted, setInverted] = useState(menu === 'inverted' || invertSidebar)
	const [sections, setSections] = useState([])
	const [pageType, setPageType] = useState<string | undefined>(getPageType(router.pathname))
	const [open, setOpen] = useState(false)
	const [searchFocus, setSearchFocus] = useState(false);
	const [maxHeight, setMaxHeight] = useState<string | undefined>()
	const { scrolledPosition, documentHeight } = useScrollInfo()
	const { innerWidth } = useWindowSize()
	const backRef = useRef()

	const resetSearch = useCallback(() => { setSearchProducts('') }, [setSearchProducts]);
	const handleClick = (e) => setOpen(false);

	useEffect(() => {
		const items = document.querySelectorAll<HTMLElement>('section[data-section-id]')
		const sections = items.length ? Array.from(items).map((s) => ({ title: s.dataset.sectionTitle, id: s.id })) : []
		setSections(sections)
	}, [])

	useEffect(() => { // Highlight nav section on scroll\
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-section-id]'))

		if (!sections.length)
			return

		const calcPos = (el: HTMLElement) => Math.abs(scrolledPosition - el.offsetTop + parseInt(getComputedStyle(el, null).scrollMarginTop)) + el.offsetTop
		const { id } = sections.sort((a, b) => calcPos(a) > calcPos(b) ? 1 : -1)[0]

		setCurrentSection(id)

	}, [scrolledPosition, documentHeight, setCurrentSection, setInverted, setInvertMenu, layout, menu])

	useEffect(() => {

		const isDesktop = innerWidth > styleVariables.tablet
		const section = document.getElementById(currentSection)
		const header = document.getElementById('sidebar-header')

		if (!section || !header || !isDesktop)
			return

		const bg = getComputedStyle(section, null).backgroundColor
		const fg = getComputedStyle(header, null).color

		if (menu === 'inverted' && bg === fg)
			setInverted(false)
		else
			setInverted(menu === 'inverted')

	}, [currentSection, setInverted, menu, innerWidth])

	useEffect(() => {
		if (pageType) return
		const footer = document.getElementById('footer')
		setMaxHeight(`calc(100vh - ${footer?.clientHeight}px`);
	}, [pageType, setMaxHeight])

	useEffect(() => { setTimeout(() => resetSearch(), 100) }, [router.asPath, resetSearch])

	if (!show) return null

	return (
		<aside
			id="sidebar"
			className={cn(styles.sidebar, inverted && styles.inverted, pageType === 'products' && styles.short)}
			style={{ backgroundColor: color, maxHeight }}
		>
			<h3 id="sidebar-header" className={cn(open && styles.open)} onClick={() => setOpen(!open)}>
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
					<li className={cn(styles.search, pageType === 'products' && styles.show)}>
						<input
							type="text"
							placeholder='Search'
							value={searchProducts || ''}
							onChange={(e) => setSearchProducts(e.target.value)}
							onFocus={() => setSearchFocus(true)}
							onBlur={() => setTimeout(() => setSearchFocus(false), 100)}
						/>
						<button
							onClick={resetSearch}
							className={cn(styles.close, searchFocus && styles.show)}
						>
							×
						</button>
					</li>
				</ul>
			</nav>

			<div className={cn(styles.footer, 'medium')}>
				{pageType === 'product' &&
					<span onClick={() => router.push("/products")} ref={backRef}>
						<ArrowLink reversed={true} hoverRef={backRef}>All Products</ArrowLink>
					</span>
				}
				{pageType === 'project' &&
					<span onClick={() => router.push("/professionals/projects")} ref={backRef}>
						<ArrowLink reversed={true} hoverRef={backRef}>All Projects</ArrowLink>
					</span>
				}
			</div>

		</aside>
	)
}