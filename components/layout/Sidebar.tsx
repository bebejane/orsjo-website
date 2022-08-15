import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { useStore, shallow } from '/lib/store';
import Link from 'next/link';
import { sectionId } from '/lib/utils'
import { useRouter } from 'next/router';
import { useLayout } from '/lib/context/layout'

export type SidebarProps = {}

export default function Sidebar({} : SidebarProps) {

	const { menu, sidebar } = useLayout()
	const router = useRouter()
	const [currentSection, invertSidebar, searchProducts, setSearchProducts] = useStore((state) => [state.currentSection, state.invertSidebar, state.searchProducts, state.setSearchProducts], shallow);
	const sections = useStore((state) => state.sections)
	const isInverted = menu === 'inverted' || invertSidebar
	const subHeader = router.asPath.substring(router.asPath.lastIndexOf('/')+1, router.asPath.indexOf('#') > -1 ? router.asPath.indexOf('#') : undefined) || 'Home'
	const isProductsPage = router.pathname.toLowerCase() === '/products'

	if(!sections.length || !sidebar) return null
	
	return (
		<aside id="sidebar" className={cn(styles.sidebar, isInverted && styles.inverted)}>
			<h3>{subHeader}</h3>
			<nav>
				<ul>
					{sections.map((section, idx) => 
						<li key={idx}>
							<Link href={`#${section.id}`}>
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
							/>
						</li>
					}
				</ul>
			</nav>
		</aside>
	)
}