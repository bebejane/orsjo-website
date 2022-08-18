import styles from './Layout.module.scss'
import React from 'react'
import { Content, Sidebar, Footer, Gallery} from '/components'
import PageTransition from './PageTransition'
import DesktopMenu from '/components/DesktopMenu'
import MobileMenu from '/components/MobileMenu'
import { useLayout } from '/lib/context/layout'
import type { MenuItem } from '/lib/menu'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '/lib/store'

export type LayoutProps = { children: React.ReactNode, menu: MenuItem[], title: string }

export default function Layout({ children, menu, title }: LayoutProps) {

	const { color } = useLayout()

	const router = useRouter()
	const [gallery, setGallery] = useStore((state) => [state.gallery, state.setGallery])
	
	return (
		<>
			<div className={styles.layout} style={{ backgroundColor: color || undefined }}>
				<DesktopMenu items={menu} key={router.asPath}/>
				<MobileMenu items={menu} />
				<Sidebar title={title}/>
				<Content>
					{children}
				</Content>

				{gallery?.index > -1 &&
					<Gallery
						images={gallery.images}
						index={gallery.index}
						onClose={() => setGallery({...gallery, index:-1})}
					/>
				}
			</div>
			<Footer menu={menu} />
			<PageTransition/>
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