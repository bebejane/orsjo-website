'use client';

import s from './MenuDesktop.module.scss';
import cn from 'classnames';
import Link from '@/components/nav/Link';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useStore, useShallow } from '@/lib/store';
import { usePage } from '@/lib/context/page';
import { useWindowSize } from 'rooks';
import { useScrollInfo } from 'next-dato-utils/hooks';
import type { Menu } from '@/lib/menu';
import { waitForElement } from '@/lib/utils';
import { Logo } from '@/components';
import { usePathname } from 'next/navigation';
import { MdOutlineShoppingBag } from 'react-icons/md';

export type MenuDesktopProps = {
	items: Menu;
	localization: LocalizationQuery['localization'];
	onShowSiteSearch: Function;
};

export default function MenuDesktop({ items, onShowSiteSearch, localization }: MenuDesktopProps) {
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
		showSiteSearch,
		showCart,
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
			state.showSiteSearch,
			state.showCart,
			state.setShowCart,
		])
	);

	const [selected, setSelected] = useState<string | null>(null);
	const [hashChanging, setHashChanging] = useState(false);
	const [menuMargin, setMenuMargin] = useState({ position: 0, padding: 0 });
	const { layout, menu, color } = usePage();
	const { innerWidth } = useWindowSize();
	const { isPageBottom, isPageTop, isScrolledUp, scrolledPosition } = useScrollInfo();
	const isInverted = menu === 'inverted' || invertMenu || showMenuMobile;

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
		const handleHashChangeStart = async (url) => {
			const id = url.split('#')[1];
			const el = await waitForElement(id, 400);
			if (!(el ? el.getBoundingClientRect().top + window.scrollY : false)) return; // If element is at page top, ignore.

			setHashChanging(true);
			setTimeout(() => {
				setHashChanging(false);
				setTimeout(() => setShowMenu(false), 0);
			}, 1000);
		};
		document.addEventListener('hashchange', handleHashChangeStart);
		return () => document.removeEventListener('hashChangeStart', handleHashChangeStart);
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
		isInverted && s.inverted
	);

	const sub = selected ? items.find((i) => i.slug === selected)?.sub : [];

	if (!items) return null;

	return (
		<>
			<Logo inverted={isInverted} />
			<nav id={'menu'} ref={ref} className={menuStyles}>
				<ul className={s.nav}>
					{items.map(({ label, slug, index }, idx) => (
						<li
							data-slug={slug}
							data-index={idx}
							key={idx}
							onMouseEnter={() => setSelected(!index ? slug : null)}
							onMouseLeave={() => !index && !showMenu && setSelected(null)}
							className={cn(pathname.startsWith(`${slug}`) && s.selected)}
						>
							{index === true ? ( // Direct links
								<Link href={slug}>{label}</Link>
							) : (
								<>{label}</>
							)}
							{!index && <span className={cn(s.arrow, slug == selected && s.active)}>›</span>}
						</li>
					))}
					<li className={s.searchIcon} onClick={() => onShowSiteSearch()}>
						<img src={'/images/search.svg'} />
					</li>
					<li className={s.cart} onClick={() => setShowCart(true)}>
						<MdOutlineShoppingBag size={16} />
					</li>
				</ul>
			</nav>

			<div
				className={cn(s.sub, showSubMenu && s.show)}
				style={{ width: `calc(100% - ${menuMargin.position}px)`, backgroundColor: `var(${color})` }}
				onMouseLeave={resetSelected}
			>
				<div
					className={cn(s.subPad, s[menu])}
					style={{ backgroundColor: `var(${color})`, paddingLeft: `${menuMargin.padding}px` }}
				>
					<nav>
						<ul className={cn(sub && sub.length > 10 && s.columns)}>
							{sub?.map(({ label, slug }, idx) => (
								<li key={idx} className={cn(slug === pathname && s.active)}>
									<Link href={slug} onClick={() => setShowSubMenu(false)}>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}
