import React from 'react'
import styles from './Sidebar.module.scss'

type SidebarProps = {}

export default function Sidebar() {

	return (
		<aside className={styles.sidebar}>
			<h3>Subheader</h3>
			<nav>
				<ul>
					<li>Menu item 1</li>
					<li>Menu item 2</li>
					<li>Menu item 3</li>
					<li>Menu item 4</li>
				</ul>
			</nav>
		</aside>
	)
}