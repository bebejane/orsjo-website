import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { useStore, shallow } from '/lib/store';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLayout } from '/lib/context/layout'
import { useEffect, useState } from 'react'

export type SidebarProps = {title:string}

export default function Sidebar({title} : SidebarProps) {

	const { menu, sidebar } = useLayout()
	const router = useRouter()
	const [currentSection, invertSidebar, searchProducts, setSearchProducts] = useStore((state) => [state.currentSection, state.invertSidebar, state.searchProducts, state.setSearchProducts], shallow);
	const sections = useStore((state) => state.sections)
	const isInverted = menu === 'inverted' || invertSidebar
	const isProductsPage = router.pathname.toLowerCase() === '/products'
	const isProductPage = router.pathname.startsWith('/products/')
	const isProjectPage = router.pathname.startsWith('/professionals/projects/')
	const [searchFocus, setSearchFocus] = useState(false);
	const resetSearch = (e) => setSearchProducts('')

	useEffect(()=>{ setSearchProducts('')}, [router.asPath])

	if(!sections.length || !sidebar) return null
	
	return (
		<aside id="sidebar" className={cn(styles.sidebar, isInverted && styles.inverted)}>
			<h3>{title}</h3>
			<nav>
				<ul>
					{sections.map((section, idx) => 
						<li key={idx}>
							<Link scroll={false} href={`#${section.id}`}>
								<a className={cn(section.id === currentSection && styles.active)}>
									{section.title}
								</a>
							</Link>
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
				{isProductPage &&<Link scroll={false} href="/products">All Products</Link>}
				{isProjectPage &&<Link scroll={false} href="/professionals/projects/">All Projects</Link>}
			</div>
		</aside>
	)
}