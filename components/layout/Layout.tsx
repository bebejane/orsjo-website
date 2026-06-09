import s from './Layout.module.scss';
<<<<<<< HEAD
import { Sidebar, Footer, FullscreenGallery, MenuDesktop, MenuMobile, CookieConsent, Underlay } from '@/components';
import { PageProvider } from '@/lib/context/page-provider';
import { type MenuItem } from '@/lib/menu';
import Cart from '@/components/shopify/Cart';
=======
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
import Cart from '@/components/common/Cart';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import PageTransition from '@/components/layout/PageTransition';

export type LayoutProps = {
	children: React.ReactNode;
	menu: MenuItem[];
<<<<<<< HEAD
	localization: LocalizationQuery['localization'];
	shipping: ShippingQuery['shipping'];
};

export default function Layout({ children, menu, localization, shipping }: LayoutProps) {
=======
	markets: MarketType[];
	marketId: string;
	shipping: ShippingQuery['shipping'];
};

export default function Layout({ children, menu, markets, shipping, marketId }: LayoutProps) {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	return (
		<>
			<PageProvider menu={menu}>
				<div id='layout' className={s.layout}>
					<Sidebar />
					<main id='content' className={s.content}>
						<article>{children}</article>
					</main>
<<<<<<< HEAD
					<MenuDesktop menu={menu} localization={localization} />
					<MenuMobile menu={menu} localization={localization} />
					<Underlay />
					<FullscreenGallery />
				</div>
				<Cart localization={localization} shipping={shipping} />
=======
					<MenuDesktop menu={menu} markets={markets} />
					<MenuMobile menu={menu} markets={markets} />
					<Underlay />
					<FullscreenGallery />
				</div>
				<Cart markets={markets} shipping={shipping} marketId={marketId} />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
				<Footer menu={menu} />
				<CookieConsent />
				<PageTransition />
			</PageProvider>
		</>
	);
}
