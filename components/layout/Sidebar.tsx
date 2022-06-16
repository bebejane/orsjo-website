import styles from './Sidebar.module.scss'
import cn from 'classnames'
import useStore from '/lib/store';
import Link from 'next/link';
import { toSectionId } from '/lib/utils'

export type SidebarProps = {}

export default function Sidebar() {

	const currentSection = useStore((state) => state.currentSection);
	const sections = useStore((state) => state.sections);
	console.log(currentSection)
	return (
		<aside className={styles.sidebar}>
			<h3>Subheader</h3>
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