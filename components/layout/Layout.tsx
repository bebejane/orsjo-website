import s from './Layout.module.scss';
import { Sidebar, Footer, FullscreenGallery, MenuDesktop, MenuMobile, CookieConsent, Underlay } from '@/components';
import { PageProvider } from '@/lib/context/page-provider';
import { type MenuItem } from '@/lib/menu';
import Cart from '@/components/shopify/Cart';
import PageTransition from '@/components/layout/PageTransition';

export type LayoutProps = {
	children: React.ReactNode;
	menu: MenuItem[];
	localization: LocalizationQuery['localization'];
	shipping: ShippingQuery['shipping'];
};

export default function Layout({ children, menu, localization, shipping }: LayoutProps) {
	return (
		<>
			<PageProvider menu={menu}>
				<div id='layout' className={s.layout}>
					<Sidebar />
					<main id='content' className={s.content}>
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
