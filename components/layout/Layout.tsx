import s from './Layout.module.scss';
import {
	Sidebar,
	Footer,
	FullscreenGallery,
	MenuDesktop,
	MenuMobile,
	CookieConsent,
	Underlay,
} from '@/components';
import { PageProvider } from '@/lib/context/page-provider';
import { type MenuItem } from '@/lib/menu';
import type { Market } from '@/lib/geins/utils';
import Cart from '@/components/shopify/Cart';
import PageTransition from '@/components/layout/PageTransition';

export type LayoutProps = {
	children: React.ReactNode;
	menu: MenuItem[];
	markets: Market[];
	shipping: ShippingQuery['shipping'];
};

export default function Layout({ children, menu, markets, shipping }: LayoutProps) {
	return (
		<>
			<PageProvider menu={menu}>
				<div id='layout' className={s.layout}>
					<Sidebar />
					<main id='content' className={s.content}>
						<article>{children}</article>
					</main>
					<MenuDesktop menu={menu} />
					<MenuMobile menu={menu} />
					<Underlay />
					<FullscreenGallery />
				</div>
				{/* <Cart localization={localization} shipping={shipping} /> */}
				<Footer menu={menu} />
				<CookieConsent />
				<PageTransition />
			</PageProvider>
		</>
	);
}
