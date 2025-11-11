'use client';

import s from './Layout.module.scss';
import {
	Sidebar,
	Footer,
	FullscreenGallery,
	SiteSearch,
	MenuDesktop,
	MenuMobile,
	CookieConsent,
	Underlay,
} from '@/components';
import { PageProvider } from '@/lib/context/page-provider';
import { findMenuItem, type MenuItem } from '@/lib/menu';
import { useStore, useShallow } from '@/lib/store';
import { usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import Cart from '@/components/shopify/Cart';
import PageTransition from '@/components/layout/PageTransition';
import { useEffect } from 'react';

export type LayoutProps = {
	children: React.ReactNode;
	menu: MenuItem[];
	localization: LocalizationQuery['localization'];
	shipping: ShippingQuery['shipping'];
};

export default function Layout({ children, menu, localization, shipping }: LayoutProps) {
	const pathname = usePathname();
	const country = useLocale();
	const page = findMenuItem(pathname, menu);
	const [gallery, setGallery, showSiteSearch, setShowSiteSearch, isMounted, setIsMounted] = useStore(
		useShallow((state) => [
			state.gallery,
			state.setGallery,
			state.showSiteSearch,
			state.setShowSiteSearch,
			state.isMounted,
			state.setIsMounted,
		])
	);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	console.log(page?.color, page?.layout);
	return (
		<>
			<PageProvider pathname={pathname} country={country} menu={menu}>
				<div className={s.layout} style={{ backgroundColor: `var(--${page?.color})` }} suppressHydrationWarning>
					<Sidebar key={pathname} />
					<main id='content' className={s.content} data-type={page?.layout}>
						<article>{children}</article>
					</main>
					<MenuDesktop menu={menu} localization={localization} />
					<MenuMobile menu={menu} localization={localization} />
					<Underlay />
					<FullscreenGallery />
				</div>
				<Cart localization={localization} shipping={shipping} />
				<Footer menu={menu} />
				<CookieConsent />
				<PageTransition />
			</PageProvider>
		</>
	);
}
