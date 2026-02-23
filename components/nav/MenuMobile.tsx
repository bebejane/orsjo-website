'use client';

import s from './MenuMobile.module.scss';
import cn from 'classnames';
import React, { useState, useEffect, useRef } from 'react';
import { usePage } from '@/lib/context/page-provider';
import { useStore, useShallow } from '@/lib/store';
import { Twirl as Hamburger } from 'hamburger-react';
import { SiteSearch } from '@/components';
import type { MenuItem } from '@/lib/menu';
import social from '@/lib/social';
import { usePathname, useRouter } from 'next/navigation';
import Link from '@/components/nav/Link';
import { useCart } from '@/lib/shopify';

export type MenuMobileProps = {
	menu: MenuItem[];
	markets: MarketType[];
};

export default function MenuMobile({ menu, markets }: MenuMobileProps) {
	const router = useRouter();
	const pathname = usePathname();

	const { inverted } = usePage();
	const searchRef = useRef<HTMLInputElement>(null);
	const [query, setQuery] = useState<string | null>(null);
	const [showSearch, setShowSearch] = useState(false);
	const [selected, setSelected] = useState<MenuItem | null>(null);
	const [cart] = useCart(useShallow((state) => [state.cart]));
	const [showMenuMobile, setShowMenuMobile, transitioning, setShowCart, isMounted] = useStore(
		useShallow((state) => [
			state.showMenuMobile,
			state.setShowMenuMobile,
			state.transitioning,
			state.setShowCart,
			state.isMounted,
		]),
	);

	const sub = menu.find((item) => item.section === selected?.section)?.sub;
	const subHeader = selected ? menu.find((i) => i.section === selected?.section)?.title : null;

	const handleSubmitSearch = (e: React.FormEvent) => {
		e.preventDefault();
		searchRef.current?.blur();
	};

	const closeSearch = () => {
		setShowSearch(false);
		setQuery(null);
	};

	const handleClose = () => {
		setSelected(null);
		setShowMenuMobile(false);
	};

	useEffect(() => {
		handleClose();
		window.addEventListener('hashchange', handleClose);
		return () => window.removeEventListener('hashchange', handleClose);
	}, [pathname]);

	useEffect(() => {
		setShowSearch(!!query);
	}, [query]);

	useEffect(() => {
		!transitioning && handleClose();
	}, [transitioning]);

	useEffect(() => {
		if (!showMenuMobile) return;
		menu
			.filter(({ index, section }) => index || selected?.section === section)
			.forEach(({ slug }) => router.prefetch(slug));
	}, [showMenuMobile, menu, router, selected]);

	useEffect(() => {
		if (showMenuMobile && pathname !== '/') {
			const item = menu.find(({ slug, index }) => pathname.startsWith(slug));
			setSelected(item ?? null);
		}
	}, [showMenuMobile, router, setSelected, menu]);

	if (!menu) return null;

	return (
		<>
			<div className={s.hamburger}>
				<Hamburger
					toggled={showMenuMobile}
					duration={0.5}
					onToggle={setShowMenuMobile}
					color={inverted || showMenuMobile ? '#fff' : '#000'}
					label={'Menu'}
					size={24}
				/>
			</div>
			<div
				className={cn(
					s.cart,
					cart?.totalQuantity && s.filled,
					(showMenuMobile || inverted) && s.invert,
				)}
				onClick={() => setShowCart(true)}
			>
				<img src={`/images/cart${cart?.totalQuantity ? '-filled' : ''}.svg`} />
			</div>
			<nav className={cn(s.mobileMenu, showMenuMobile ? s.open : s.hide)}>
				<nav className={s.main}>
					<ul className={s.nav}>
						{menu.slice(1).map((item, idx) => (
							<li
								data-slug={item.slug}
								key={idx}
								className={cn(selected?.slug === item.slug && s.active)}
							>
								{item.index ? (
									<Link href={item.slug}>{item.title}</Link>
								) : (
									<span
										onClick={() => setSelected(selected?.section === item.section ? null : item)}
									>
										{item.title}
									</span>
								)}
							</li>
						))}
					</ul>
				</nav>
				<div className={s.footer}>
					<div className={s.search}>
						<img src={'/images/search.svg'} />
						<form onSubmit={handleSubmitSearch}>
							<input
								ref={searchRef}
								type='text'
								placeholder='Search'
								aria-label='Search'
								onFocus={() => setShowSearch(true)}
							/>
							<input type='submit' style={{ visibility: 'hidden', position: 'absolute' }} />
						</form>
					</div>
					<div className={s.social}>
						{social.map(({ name, icon, url }, idx) => (
							<a key={idx} href={url}>
								<img src={icon} alt={name} />
							</a>
						))}
					</div>
				</div>
			</nav>
			<nav className={cn(s.sub, (!selected || selected?.index) && s.hide)}>
				<div className={s.subHeader}>
					<p className={cn(s.title)}>{subHeader}</p>
					<span className={s.back} onClick={() => setSelected(null)}>
						❮
					</span>
				</div>
				<ul>
					{sub?.map(({ title, slug }, idx) => (
						<li className={cn(slug === pathname && s.active)} key={idx}>
							<Link href={slug}>{title}</Link>
						</li>
					))}
				</ul>
			</nav>
			<SiteSearch
				show={showSearch}
				query={query ?? undefined}
				onChange={(q) => searchRef.current && (searchRef.current.value = q || '')}
				onClose={closeSearch}
			/>
		</>
	);
}
