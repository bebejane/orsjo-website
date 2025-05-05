'use client';

import styles from './MenuDesktop.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useStore, useShallow } from '@/lib/store';
import { usePage } from '@/lib/context/page';
import { useWindowSize } from 'rooks';
import { useScrollInfo } from 'dato-nextjs-utils/hooks';
import type { Menu } from '@/lib/menu';
import { waitForElement } from '@/lib/utils';
import { Logo } from '@/components';
import { usePathname } from '@node_modules/next/navigation';

export type MenuDesktopProps = { items: Menu; onShowSiteSearch: Function };

export default function MenuDesktop({ items, onShowSiteSearch }: MenuDesktopProps) {
	const ref = useRef(null);
	//const router = useRouter();
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
		])
	);

	const [selected, setSelected] = useState(undefined);
	const [hashChanging, setHashChanging] = useState(false);
	const [menuMargin, setMenuMargin] = useState({ position: 0, padding: 0 });
	const { layout, menu, color } = usePage();
	const { innerWidth } = useWindowSize();
	const { isPageBottom, isPageTop, isScrolledUp, scrolledPosition } = useScrollInfo();
	const isInverted = menu === 'inverted' || invertMenu || showMenuMobile;

	const resetSelected = useCallback(() => {
		if (transitioning) return;
		setSelected(undefined);
	}, [transitioning]);

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

	/*

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
		router.events.on('hashChangeStart', handleHashChangeStart);
		return () => router.events.off('hashChangeStart', handleHashChangeStart);
	}, [router.events, setHashChanging, setShowMenu]);
	*/

	useEffect(() => {
		// Re set margin on window resize or selected change
		if (!selected) return;

		const el = document.querySelector<HTMLLIElement>(`li[data-slug="${selected}"]`);
		const nav = document.querySelectorAll<HTMLLIElement>(`li[data-slug]`);
		const idx = parseInt(el.dataset.index);
		const left = idx > 0 ? nav[idx - 1] : undefined;

		const bl = left?.getBoundingClientRect();
		const elPad = parseInt(getComputedStyle(el, null).getPropertyValue('padding-left'));
		const blPad = parseInt(getComputedStyle(left, null).getPropertyValue('padding-right'));
		const lm = bl.left + bl.width - blPad - 10;
		const rm = el.getBoundingClientRect().left;

		const position = bl ? lm + (rm - lm) / 2 : el.getBoundingClientRect().x + elPad;
		const padding = el.getBoundingClientRect().x - position;

		setMenuMargin({ position, padding });
	}, [innerWidth, selected]);

	useEffect(() => {
		setShowSubMenu(selected && showMenu);
	}, [selected, showMenu, setShowSubMenu]);

	if (!items) return null;

	const menuStyles = cn(
		styles.desktopMenu,
		selected && styles.open,
		!showMenu && styles.hide,
		styles[layout],
		isInverted && styles.inverted
	);
	const sub = selected ? items.find((i) => i.slug === selected).sub : [];

	if (!items) return null;

	return (
		<>
			<Logo inverted={isInverted} />
			<nav id={'menu'} ref={ref} className={menuStyles}>
				<ul className={styles.nav}>
					{items.map(({ label, slug, index }, idx) => (
						<li
							data-slug={slug}
							data-index={idx}
							key={idx}
							onMouseEnter={() => setSelected(!index ? slug : undefined)}
							onMouseLeave={() => !index && !showMenu && setSelected(undefined)}
							className={cn(pathname.startsWith(`${slug}`) && styles.selected)}
						>
							{index === true ? ( // Direct links
								<Link scroll={false} href={slug}>
									{label}
								</Link>
							) : (
								<>{label}</>
							)}
							{!index && (
								<span className={cn(styles.arrow, slug == selected && styles.active)}>›</span>
							)}
						</li>
					))}
					<li className={styles.searchIcon} onClick={() => onShowSiteSearch()}>
						<img src={'/images/search.svg'} />
					</li>
				</ul>
			</nav>

			<div
				className={cn(styles.sub, showSubMenu && styles.show)}
				style={{ width: `calc(100% - ${menuMargin.position}px)`, backgroundColor: color }}
				onMouseLeave={resetSelected}
			>
				<div
					className={cn(styles.subPad, styles[menu])}
					style={{ backgroundColor: color, paddingLeft: `${menuMargin.padding}px` }}
				>
					<nav>
						<ul className={cn(sub?.length > 10 && styles.columns)}>
							{sub?.map(({ label, slug }, idx) => (
								<li key={idx} className={cn(slug === pathname && styles.active)}>
									<Link scroll={false} href={slug}>
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
