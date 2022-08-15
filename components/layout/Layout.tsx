import styles from './Layout.module.scss'
import React from 'react'
import { Content, Sidebar, Footer } from '/components'
import DesktopMenu from '/components/DesktopMenu'
import MobileMenu from '/components/MobileMenu'
import { useLayout } from '/lib/context/layout'
import type { MenuItem } from '/lib/menu'
import { useState, useEffect } from 'react'

export type LayoutProps = { children: React.ReactNode, menu: MenuItem[] }

export default function Layout({ children, menu }: LayoutProps) {

	const { color } = useLayout()
	const [showGrid, setShowGrid] = useState(true)

	useEffect(()=>{

		const toggleGrid = ({key}) => key === 'g' && setShowGrid(!showGrid) 

		document.addEventListener('keydown', toggleGrid)
		return ()=> document.removeEventListener('keydown', toggleGrid)

	}, [showGrid, setShowGrid])

	return (
		<>
			<div className={styles.layout} style={{ backgroundColor: color ? `var(${color})` : undefined }}>
				<DesktopMenu items={menu} />
				<MobileMenu items={menu} />
				<Sidebar />
				<Content>
					{children}
				</Content>
				<Grid show={showGrid}/>	
			</div>
				
			<Footer menu={menu} />

		</>
	)
}

const Grid = ({show}) => {

	if(!show) return null

	return (
		<div className={styles.grid}>
			<div className={styles.gridWrapper}>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
				<div className={styles.gridItem}></div>
			</div>
		</div>
	)
}