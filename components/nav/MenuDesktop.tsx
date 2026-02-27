'use client';

import s from './MenuDesktop.module.scss';
import cn from 'classnames';
import Link from '@/components/nav/Link';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useStore, useShallow } from '@/lib/store';
import { usePage } from '@/lib/context/page-provider';
import { useWindowSize } from 'rooks';
import { useScrollInfo } from 'next-dato-utils/hooks';
import type { Menu } from '@/lib/menu';
import { waitForElement } from '@/lib/utils';
import { Logo, SiteSearch } from '@/components';
import { usePathname } from 'next/navigation';
import useCart from '@/geins/hooks/useCart';
import CountrySelector from '@/components/common/CountrySelector';

export type MenuDesktopProps = {
	menu: Menu;
	markets: MarketType[];
};

export default function MenuDesktop({ menu, markets }: MenuDesktopProps) {
	const ref = useRef(null);
	const pathname = usePathname();
	const [
		showMenu,
		showSubMenu,
		setShowSubMenu,
		showMenuMobile,
		setShowMenu,
		invertMenu,
		transitioning,
		setShowCart,
	] = useStore(
		useShallow((state) => [
			state.showMenu,
			state.showSubMenu,
			state.setShowSubMenu,
			state.showMenuMobile,
			state.setShowMenu,
			state.invertMenu,
			state.transitioning,
			state.setShowCart,
		]),
	);

	const [selected, setSelected] = useState<string | null>(null);
	const [hashChanging, setHashChanging] = useState(false);
	const [menuMargin, setMenuMargin] = useState({ position: 0, padding: 0 });
	const [showSearch, setShowSearch] = useState(false);
	const { layout, inverted, color } = usePage();
	const { innerWidth } = useWindowSize();
	const { isPageBottom, isPageTop, isScrolledUp, scrolledPosition } = useScrollInfo();
	const [cart] = useCart(useShallow((state) => [state.cart]));
	const isInverted = inverted || invertMenu || showMenuMobile;
	const isEmpty = !cart?.items?.length || cart?.items?.length === 0;

	const resetSelected = useCallback(() => {
		if (transitioning) return;
		setSelected(null);
	}, [transitioning]);

	useEffect(() => {
		resetSelected();
	}, [pathname]);
	useEffect(() => {
		// Hide menu if was closed on scroll
		if (!showMenu) resetSelected();
	}, [showMenu, resetSelected]);

	useEffect(() => {
		// Toggle menu bar on scroll
		if (transitioning) return;
		if (hashChanging) return setShowMenu(false);

		setShowMenu((isScrolledUp && !isPageBottom) || isPageTop);
	}, [
		transitioning,
		scrolledPosition,
		isPageBottom,
		isPageTop,
		isScrolledUp,
		setShowMenu,
		hashChanging,
	]);

	useEffect(() => {
		// Hide menu when scrolling to hash
		const handleHashChange = async (e: HashChangeEvent) => {
			const id = e.newURL.split('#')[1];
			const el = await waitForElement(id, 400);
			if (!(el ? el.getBoundingClientRect().top + window.scrollY : false)) return; // If element is at page top, ignore.

			setHashChanging(true);

			setTimeout(() => {
				setHashChanging(false);
				setTimeout(() => setShowMenu(false), 0);
			}, 1000);
		};
		window.addEventListener('hashchange', handleHashChange);
		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	}, [setHashChanging, setShowMenu]);

	useEffect(() => {
		// Re set margin on window resize or selected change
		if (!selected) return;

		const el = document.querySelector<HTMLLIElement>(`li[data-slug="${selected}"]`);
		const nav = document.querySelectorAll<HTMLLIElement>(`li[data-slug]`);
		const idx = parseInt(el?.dataset?.index ?? '1');
		const left = idx > 0 ? nav[idx - 1] : undefined;

		if (!left || !el) return;
		const bl = left?.getBoundingClientRect();
		const elPad = parseInt(getComputedStyle(el, null).getPropertyValue('padding-left'));
		const blPad = parseInt(getComputedStyle(left, null).getPropertyValue('padding-right'));
		const lm = bl.left + bl.width - blPad - 10;
		const rm = el?.getBoundingClientRect().left;

		const position = bl ? lm + (rm - lm) / 2 : el.getBoundingClientRect().x + elPad;
		const padding = el.getBoundingClientRect().x - position;

		setMenuMargin({ position, padding });
	}, [innerWidth, selected]);

	useEffect(() => {
		setShowSubMenu(selected && showMenu ? true : false);
	}, [selected, showMenu, setShowSubMenu]);

	const menuStyles = cn(
		s.desktopMenu,
		selected && s.open,
		!showMenu && s.hide,
		s[layout],
		isInverted && s.inverted,
	);
	const sub = selected ? menu.find((i) => i.slug === selected)?.sub : [];

	if (!menu) return null;

	return (
		<>
			<Logo inverted={isInverted} />
			<nav id={'menu'} ref={ref} className={menuStyles}>
				<ul className={s.nav}>
					{menu.slice(1).map(({ title, slug, index }, idx) => (
						<li
							data-slug={slug}
							data-index={idx}
							key={idx}
							onMouseEnter={() => setSelected(!index ? slug : null)}
							onMouseLeave={() => !index && !showMenu && setSelected(null)}
							className={cn(pathname.startsWith(`${slug}`) && s.selected)}
						>
							{index === true ? ( // Direct links
								<Link href={slug} prefetch={true}>
									{title}
								</Link>
							) : (
								<>{title}</>
							)}
							{!index && <span className={cn(s.arrow, slug == selected && s.active)}>›</span>}
						</li>
					))}
					<li className={s.country}>
						<CountrySelector currency={true} markets={markets} className={s.selector} />
					</li>
					<li className={cn(s.cart, !isEmpty && s.filled)} onClick={() => setShowCart(true)}>
						<img src={`/images/cart${!isEmpty ? '-filled' : ''}.svg`} />
					</li>
					<li className={s.searchIcon} onClick={() => setShowSearch(true)}>
						<img src={'/images/search.svg'} />
					</li>
				</ul>
			</nav>

			<div
				className={cn(s.sub, showSubMenu && s.show)}
				style={{
					width: `calc(100% - ${menuMargin.position}px)`,
					backgroundColor: `var(--${color})`,
				}}
				onMouseLeave={resetSelected}
			>
				<div
					className={cn(s.subPad, isInverted && s.inverted)}
					style={{ backgroundColor: `var(--${color})`, paddingLeft: `${menuMargin.padding}px` }}
				>
					<nav>
						<ul className={cn(sub && sub.length > 10 && s.columns)}>
							{sub?.map(({ title, slug }, idx) => (
								<li key={idx} className={cn(slug === pathname && s.active)}>
									<Link href={slug} onClick={() => setShowSubMenu(false)} prefetch={true}>
										{title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
			<SiteSearch show={showSearch} onClose={() => setShowSearch(false)} />
		</>
	);
}
