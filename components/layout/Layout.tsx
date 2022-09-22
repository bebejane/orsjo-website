import styles from './Layout.module.scss'
import React from 'react'
import { Content, Sidebar, Footer, Gallery, SiteSearch} from '/components'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import { usePage } from '/lib/context/page'
import type { MenuItem } from '/lib/menu'
import { useState, useEffect } from 'react'
import { useStore, shallow } from '/lib/store'

export type LayoutProps = { children: React.ReactNode, menu: MenuItem[], title: string }

export default function Layout({ children, menu, title }: LayoutProps) {

	const { color, layout } = usePage()
	const [gallery, setGallery, showSiteSearch, setShowSiteSearch] = useStore((state) => [state.gallery, state.setGallery, state.showSiteSearch, state.setShowSiteSearch], shallow)
	
	return (
		<>
			<div className={styles.layout} style={{ backgroundColor: color || undefined }}>	
				<MenuDesktop items={menu} onShowSiteSearch={()=>setShowSiteSearch(true)}/>
				<MenuMobile items={menu}/>
				<SiteSearch show={showSiteSearch} onClose={()=>setShowSiteSearch(false)}/>
				{layout !== 'full' && 
					<Sidebar title={title}/>
				}
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
		const toggleGrid = ({ key, target }) => target.tagName !== 'INPUT' && key === 'g' && setShowGrid(!showGrid)
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