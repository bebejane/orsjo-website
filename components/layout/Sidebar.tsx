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
	const [currentSection, invertSidebar] = useStore((state) => [state.currentSection, state.invertSidebar], shallow);
	const sections = useStore((state) => state.sections)
	const subHeader = router.pathname.substring(1).substring(0, router.pathname.indexOf('/', 1) === -1 ? router.pathname.length :  router.asPath.indexOf('/', 1)) || 'Home'
	const isInverted = menu === 'inverted' || invertSidebar
	
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
					<li className={styles.search}>
						<input type="text" placeholder='Search'/>
					</li>
				</ul>
			</nav>
		</aside>
	)
}