import styles from './Layout.module.scss'
import React from 'react'
import { Content, Sidebar, Footer } from '/components'
import DesktopMenu from '/components/DesktopMenu'
import MobileMenu from '/components/MobileMenu'
import { useLayout } from '/lib/context/layout'
import type { MenuItem } from '/lib/menu'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export type LayoutProps = { children: React.ReactNode, menu: MenuItem[] }

export default function Layout({ children, menu }: LayoutProps) {

	const { color } = useLayout()
	const router = useRouter()
	console.log('render')
	return (
		<>
			<div className={styles.layout} style={{ backgroundColor: color ? `var(${color})` : undefined }}>
				<DesktopMenu items={menu} key={router.asPath}/>
				<MobileMenu items={menu} />
				<Sidebar />
				<Content>
					{children}
				</Content>
				
			</div>
			<Footer menu={menu} />
			<Grid />
		</>
	)
}

const Grid = ({ show }) => {

	const [showGrid, setShowGrid] = useState(false)

	useEffect(() => {
		const toggleGrid = ({ key }) => key === 'g' && setShowGrid(!showGrid)
		document.addEventListener('keydown', toggleGrid)
		return () => document.removeEventListener('keydown', toggleGrid)
	}, [showGrid, setShowGrid])

	
	if (!showGrid) return null

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