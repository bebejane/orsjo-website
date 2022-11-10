import styles from './Layout.module.scss'
import React, { useEffect } from 'react'
import { Content, Sidebar, Footer, Gallery, SiteSearch, MenuDesktop, MenuMobile, Grid, CookieConsent } from '/components'
import { usePage } from '/lib/context/page'
import type { MenuItem } from '/lib/menu'
import { useStore, shallow } from '/lib/store'
import { useState } from 'react'
import { buildMenu } from '/lib/menu'

export type LayoutProps = { children: React.ReactNode, menu: MenuItem[], title: string }

export default function Layout({ children, menu: menuFromProps, title }: LayoutProps) {

	const { color, layout, sidebar } = usePage()
	const [gallery, setGallery, showSiteSearch, setShowSiteSearch] = useStore((state) => [state.gallery, state.setGallery, state.showSiteSearch, state.setShowSiteSearch], shallow)
	const [menu, setMenu] = useState(menuFromProps)

	useEffect(() => { // Refresh menu on load.
		buildMenu().then(res => setMenu(res)).catch(err => console.error(err))
	}, [])

	return (
		<>
			<div className={styles.layout} style={{ backgroundColor: color || undefined }}>
				<MenuDesktop items={menu} onShowSiteSearch={() => setShowSiteSearch(true)} />
				<MenuMobile items={menu} />
				<SiteSearch show={showSiteSearch} onClose={() => setShowSiteSearch(false)} />
				<Sidebar title={title} show={layout !== 'full' && sidebar} />
				<Content>
					{children}
				</Content>
				<Gallery
					show={gallery?.index > -1}
					images={gallery?.images}
					index={gallery?.index}
					padImagesWithTitle={gallery?.padImagesWithTitle}
					onClose={() => setGallery({ ...gallery, index: -1 })}
				/>
			</div>
			<Footer menu={menu} />
			<CookieConsent />
			<Grid />
		</>
	)
}