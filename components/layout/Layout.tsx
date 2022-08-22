import styles from './Layout.module.scss'
import React from 'react'
import { Content, Sidebar, Footer, Gallery} from '/components'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import { useLayout } from '/lib/context/layout'
import type { MenuItem } from '/lib/menu'
import { useState, useEffect } from 'react'
import { useStore } from '/lib/store'

export type LayoutProps = { children: React.ReactNode, menu: MenuItem[], title: string }

export default function Layout({ children, menu, title }: LayoutProps) {

	const { color, layout } = useLayout()
	const [gallery, setGallery, product] = useStore((state) => [state.gallery, state.setGallery, state.product])
	
	return (
		<>
			<div className={styles.layout} style={{ backgroundColor: color || undefined }}>	
				<DesktopMenu items={menu}/>
				<MobileMenu items={menu}/>
				{layout !== 'full' && <Sidebar title={title}/>}
				<Content>
					{children}
				</Content>
				<Gallery
					show={gallery?.index > -1}
					images={gallery?.images}
					index={gallery?.index}
					onClose={() => setGallery({...gallery, index:-1})}
				/>
			</div>
			<Footer menu={menu} />
			<Grid />
		</>
	)
}

const Grid = () => {

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