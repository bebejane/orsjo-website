'use client';

import s from './MenuMobile.module.scss';
import cn from 'classnames';
import React, { useState, useEffect, useRef } from 'react';
import { usePage } from '@/lib/context/page';
import { useStore, useShallow } from '@/lib/store';
import { Twirl as Hamburger } from 'hamburger-react';
import { SiteSearch } from '@/components';
import type { Menu } from '@/lib/menu';
import social from '@/lib/social';
import { usePathname, useRouter } from 'next/navigation';

export type MenuMobileProps = { items: Menu };

export default function MenuMobile({ items }: MenuMobileProps) {
	const router = useRouter();
	const pathname = usePathname();
	const { menu } = usePage();
	const searchRef = useRef<HTMLInputElement>(null);
	const [query, setQuery] = useState<string>('');
	const [showSearch, setShowSearch] = useState(false);
	const [selected, setSelected] = useState(undefined);
	const [showMenuMobile, setShowMenuMobile, transitioning] = useStore(
		useShallow((state) => [state.showMenuMobile, state.setShowMenuMobile, state.transitioning])
	);
	const sub = items.find((item) => item.type === selected?.type)?.sub;
	const subHeader = selected ? items.find((i) => i.type === selected?.type).label : null;

	const handleSubmitSearch = (e: React.FormEvent) => {
		e.preventDefault();
		searchRef.current?.blur();
	};

	const closeSearch = () => {
		setShowSearch(false);
		setQuery(undefined);
	};

	const handleClose = () => {
		setSelected(undefined);
		setShowMenuMobile(false);
	};

	/*
	useEffect(() => {
		router.events.on('hashChangeStart', handleClose);

		return () => router.events.off('hashChangeStart', handleClose);
	}, [router.events]);
*/
	useEffect(() => {
		setShowSearch(!!query);
	}, [query]);

	useEffect(() => {
		!transitioning && handleClose();
	}, [transitioning]);

	useEffect(() => {
		if (!showMenuMobile) return;
		items
			.filter(({ index, type }) => index || selected?.type === type)
			.forEach(({ slug }) => router.prefetch(slug));
	}, [showMenuMobile, items, router, selected]);

	useEffect(() => {
		if (showMenuMobile && pathname !== '/') {
			const item = items.find(({ slug, index }) => pathname.startsWith(slug));
			setSelected(item);
		}
	}, [showMenuMobile, router, setSelected, items]);

	if (!items) return null;

	return (
		<>
			<div className={s.hamburger}>
				<Hamburger
					toggled={showMenuMobile}
					duration={0.5}
					onToggle={setShowMenuMobile}
					color={menu === 'inverted' || showMenuMobile ? '#fff' : '#000'}
					label={'Menu'}
					size={24}
				/>
			</div>
			<nav className={cn(s.mobileMenu, showMenuMobile ? s.open : s.hide)}>
				<nav className={s.main}>
					<ul className={s.nav}>
						{items.map((item, idx) => (
							<li
								data-slug={item.slug}
								key={idx}
								className={cn(selected?.slug === item.slug && s.active)}
								onClick={() =>
									item.index
										? router.push(item.slug)
										: setSelected(selected?.type === item.type ? undefined : item)
								}
							>
								{item.label}
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
					<span className={s.back} onClick={() => setSelected(undefined)}>
						❮
					</span>
				</div>
				<ul>
					{sub?.map(({ label, slug, type, isHash }, idx) => (
						<a onClick={() => router.push(slug)} key={idx}>
							<li className={cn(slug === pathname && s.active)}>{label}</li>
						</a>
					))}
				</ul>
			</nav>
			<SiteSearch
				show={showSearch}
				query={query}
				onChange={(q) => (searchRef.current.value = q || '')}
				onClose={closeSearch}
			/>
		</>
	);
}
