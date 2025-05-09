'use client';

import s from './Layout.module.scss';
import {
	Content,
	Sidebar,
	Footer,
	Gallery,
	SiteSearch,
	MenuDesktop,
	MenuMobile,
	CookieConsent,
	Underlay,
} from '@/components';
import { PageProvider, getPageAttributes } from '@/lib/context/page';
import type { MenuItem } from '@/lib/menu';
import { useStore, useShallow } from '@/lib/store';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export type LayoutProps = { children: React.ReactNode; menu: MenuItem[] };

export default function Layout({ children, menu: menuFromProps }: LayoutProps) {
	const pathname = usePathname();
	const { color, layout, sidebar, title } = getPageAttributes(pathname);
	const [menu, setMenu] = useState(menuFromProps);
	const [gallery, setGallery, showSiteSearch, setShowSiteSearch] = useStore(
		useShallow((state) => [
			state.gallery,
			state.setGallery,
			state.showSiteSearch,
			state.setShowSiteSearch,
		])
	);

	return (
		<>
			<PageProvider pathname={pathname}>
				<div className={s.layout} style={{ backgroundColor: `var(${color})` }}>
					<MenuDesktop items={menu} onShowSiteSearch={() => setShowSiteSearch(true)} />
					<MenuMobile items={menu} />
					<Underlay />
					<SiteSearch show={showSiteSearch} onClose={() => setShowSiteSearch(false)} />
					<Sidebar key={pathname} title={title} show={layout !== 'full' && sidebar} />
					<Content>{children}</Content>
					<Gallery
						show={gallery?.index !== undefined && gallery.index > -1}
						images={gallery?.images ?? []}
						index={gallery?.index ?? 0}
						padImagesWithTitle={gallery?.padImagesWithTitle}
						//@ts-ignore
						onClose={() => setGallery((g) => ({ ...g, index: -1 }))}
					/>
				</div>
				<Footer menu={menu} />
				<CookieConsent />
				<div id='page-transition' />
				<div id='page-fade-transition' />
			</PageProvider>
		</>
	);
}
