'use client';

import s from './Layout.module.scss';
import React, { useEffect } from 'react';
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
import { PageProps, PageProvider, usePage } from '@/lib/context/page';
import type { MenuItem } from '@/lib/menu';
import { useStore, useShallow } from '@/lib/store';
import { useState } from 'react';
import { buildMenu } from '@/lib/menu';

export type LayoutProps = { children: React.ReactNode; menu: MenuItem[] };

export default function Layout({ children, menu: menuFromProps }: LayoutProps) {
	const title = 'no title';
	//const page = { layout: 'full', color: '--black', menu: 'inverted', sidebar: false } as PageProps;
	const page = {
		title: 'Products',
		layout: 'normal',
		menu: 'normal',
		color: '--white',
		sidebar: true,
	} as PageProps;

	const { color, layout, sidebar } = page; //usePage();
	const [gallery, setGallery, showSiteSearch, setShowSiteSearch] = useStore(
		useShallow((state) => [
			state.gallery,
			state.setGallery,
			state.showSiteSearch,
			state.setShowSiteSearch,
		])
	);
	const [menu, setMenu] = useState(menuFromProps);

	return (
		<PageProvider value={page}>
			<div className={s.layout} style={{ backgroundColor: color || undefined }}>
				<MenuDesktop items={menu} onShowSiteSearch={() => setShowSiteSearch(true)} />
				<MenuMobile items={menu} />
				<Underlay />
				<SiteSearch show={showSiteSearch} onClose={() => setShowSiteSearch(false)} />
				<Sidebar title={title} show={layout !== 'full' && sidebar} />
				<Content>{children}</Content>
				{/* <Gallery
					show={gallery?.index > -1}
					images={gallery?.images}
					index={gallery?.index}
					padImagesWithTitle={gallery?.padImagesWithTitle}
					onClose={() => setGallery({ ...gallery, index: -1 })}
				/>
				*/}
			</div>
			<Footer menu={menu} />
			<CookieConsent />
		</PageProvider>
	);
}
