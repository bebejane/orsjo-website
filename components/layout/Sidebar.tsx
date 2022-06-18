import styles from './Sidebar.module.scss'
import cn from 'classnames'
import useStore from '/lib/store';
import Link from 'next/link';
import { sectionId } from '/lib/utils'
import { useRouter } from 'next/router';
import { useLayout } from '/lib/context/layout'

export type SidebarProps = {}

export default function Sidebar({} : SidebarProps) {

	const { layout, menu } = useLayout()
	const router = useRouter()
	const currentSection = useStore((state) => state.currentSection);
	const sections = useStore((state) => state.sections)
	const subHeader = router.pathname.substring(1).substring(0, router.pathname.indexOf('/', 1) === -1 ? router.pathname.length :  router.asPath.indexOf('/', 1)) || 'Home'
	
	return (
		<aside className={cn(styles.sidebar, styles[layout], styles[menu])}>
			<h3>{subHeader}</h3>
			<nav>
				<ul>
					{sections.map((section, idx) => 
						<li key={idx}>
							<Link href={`#${sectionId(section).id}`}>
								<a className={cn(sectionId(section).id === currentSection && styles.active)}>
									{section}
								</a>
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</aside>
	)
}