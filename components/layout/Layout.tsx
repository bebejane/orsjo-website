'use client';

import s from './Layout.module.scss';
import { Sidebar, Footer, Gallery, SiteSearch, MenuDesktop, MenuMobile, CookieConsent, Underlay } from '@/components';
import { PageProvider } from '@/lib/context/page';
import { findMenuItem, type MenuItem } from '@/lib/menu';
import { useStore, useShallow } from '@/lib/store';
import { usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import Cart from '@/components/shopify/Cart';
import PageTransition from '@/components/layout/PageTransition';

export type LayoutProps = {
	children: React.ReactNode;
	menu: MenuItem[];
	localization: LocalizationQuery['localization'];
};

export default function Layout({ children, menu, localization }: LayoutProps) {
	const pathname = usePathname();
	const country = useLocale();
	const page = findMenuItem(pathname, menu);
	const [gallery, setGallery, showSiteSearch, setShowSiteSearch] = useStore(
		useShallow((state) => [state.gallery, state.setGallery, state.showSiteSearch, state.setShowSiteSearch])
	);

	return (
		<>
			<PageProvider pathname={pathname} country={country} menu={menu}>
				<div className={s.layout} style={{ backgroundColor: `var(--${page?.color})` }}>
					<Sidebar key={pathname} />
					<main id='content' className={s.content} data-type={page?.layout}>
						<article>{children}</article>
					</main>
					<MenuDesktop menu={menu} onShowSiteSearch={() => setShowSiteSearch(true)} localization={localization} />
					<MenuMobile menu={menu} localization={localization} />
					<Underlay />
					<SiteSearch show={showSiteSearch} onClose={() => setShowSiteSearch(false)} />
					<Gallery
						show={gallery?.index !== undefined && gallery.index > -1}
						images={gallery?.images ?? []}
						index={gallery?.index ?? 0}
						padImagesWithTitle={gallery?.padImagesWithTitle}
						onClose={() => gallery && setGallery({ ...gallery, index: -1 })}
					/>
				</div>
				<Cart localization={localization} />
				<Footer menu={menu} />
				<CookieConsent />
				<PageTransition />
			</PageProvider>
		</>
	);
}
