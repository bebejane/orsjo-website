import styles from './Sidebar.module.scss'
import cn from 'classnames'
import useStore from '/lib/store';
import Link from 'next/link';
import { toSectionId } from '/lib/utils'
import { useRouter } from 'next/router';

export type SidebarProps = {}

export default function Sidebar() {

	const router = useRouter()
	const currentSection = useStore((state) => state.currentSection);
	const sections = useStore((state) => state.sections)
	const subHeader = router.pathname.substring(1).substring(0, router.pathname.indexOf('/', 1) === -1 ? router.pathname.length :  router.asPath.indexOf('/', 1)) || 'Home'
	
	return (
		<aside className={styles.sidebar}>
			<h3>{subHeader}</h3>
			<nav>
				<ul>
					{sections.map((section, idx) => 
						<Link key={idx} href={`#${toSectionId(section)}`}>
							<a>
								<li className={cn(toSectionId(section) === currentSection && styles.active)}>
									{section}
								</li>
							</a>
						</Link>
					)}
				</ul>
			</nav>
		</aside>
	)
}