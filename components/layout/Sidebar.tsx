import styles from './Sidebar.module.scss'
import cn from 'classnames'
import useStore from '/lib/store';

export type SidebarProps = {}

export default function Sidebar() {

	const currentSection = useStore((state) => state.currentSection);
	const sections = useStore((state) => state.sections);
	
	return (
		<aside className={styles.sidebar}>
			<h3>Subheader</h3>
			<nav>
				<ul>
					{sections.map((section, idx) => 
						<li key={idx} className={cn(section === currentSection && styles.active)}>
							{section}
						</li>
					)}
				</ul>
			</nav>
		</aside>
	)
}