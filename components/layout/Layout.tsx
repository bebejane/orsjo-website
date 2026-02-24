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
import type { Market } from '@/geins/utils';
import Cart from '@/components/geins/Cart';
import PageTransition from '@/components/layout/PageTransition';

export type LayoutProps = {
	children: React.ReactNode;
	menu: MenuItem[];
	markets: MarketType[];
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
					<MenuDesktop menu={menu} markets={markets} />
					<MenuMobile menu={menu} markets={markets} />
					<Underlay />
					<FullscreenGallery />
				</div>
				<Cart markets={markets} shipping={shipping} />
				<Footer menu={menu} />
				<CookieConsent />
				<PageTransition />
			</PageProvider>
		</>
	);
}
