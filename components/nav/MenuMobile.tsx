import styles from './MenuMobile.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'
import { usePage } from '/lib/context/page'
import { useStore, shallow } from '/lib/store'
import { Twirl as Hamburger } from "hamburger-react";
import { SiteSearch } from '/components'
import type { Menu } from '/lib/menu'
import social from '/lib/social'

export type MenuMobileProps = { items: Menu }

export default function MenuMobile({ items }: MenuMobileProps) {

	const router = useRouter()
	const { menu } = usePage()
	const searchRef = useRef<HTMLInputElement>()
	const [query, setQuery] = useState<string>('');
	const [searchInput, setSearchInput] = useState<string>('');
	const [showSearch, setShowSearch] = useState(false);
	const [selected, setSelected] = useState(undefined)
	const [showMenuMobile, setShowMenuMobile, transitioning] = useStore((state) => [state.showMenuMobile, state.setShowMenuMobile, state.transitioning], shallow)
	const sub = items.find((item) => item.type === selected?.type)?.sub
	const subHeader = selected ? items.find(i => i.type === selected?.type).label : null

	const handleSubmitSearch = (e: React.FormEvent) => {
		e.preventDefault();
		searchRef.current?.blur();
	}

	const handleSearch = (e?: React.FormEvent) => {
		e?.preventDefault()
		setQuery('');
		setQuery(searchInput)
	}

	const closeSearch = () => {
		setShowSearch(false)
		setQuery(undefined)
	}

	const handleClose = () => {
		setSelected(undefined)
		setShowMenuMobile(false)
	}

	useEffect(() => {
		router.events.on("hashChangeStart", handleClose);

		return () => router.events.off("hashChangeStart", handleClose)
	}, [router.events]);

	useEffect(() => {
		setShowSearch(!!query)
	}, [query])

	useEffect(() => {
		!transitioning && handleClose()
	}, [transitioning])

	useEffect(() => {
		if (!showMenuMobile)
			return
		items.filter(({ index, type }) => index || selected?.type === type).forEach(({ slug }) => router.prefetch(slug))
	}, [showMenuMobile, items, router, selected])

	useEffect(() => {
		if (showMenuMobile && router.asPath !== '/') {
			const item = items.find(({ slug, index }) => router.asPath.startsWith(slug))
			setSelected(item)
		}
	}, [showMenuMobile, router, setSelected, items])

	return (
		<>
			<div className={styles.hamburger}>
				<Hamburger
					toggled={showMenuMobile}
					duration={0.5}
					onToggle={setShowMenuMobile}
					color={menu === 'inverted' || showMenuMobile ? "#fff" : "#000"}
					label={"Menu"}
					size={24}
				/>
			</div>
			<nav className={cn(styles.mobileMenu, showMenuMobile ? styles.open : styles.hide)}>
				<nav className={styles.main}>
					<ul className={styles.nav}>
						{items.map((item, idx) =>
							<li
								data-slug={item.slug}
								key={idx}
								className={cn(selected?.slug === item.slug && styles.active)}
								onClick={() => item.index ? router.push(item.slug) : setSelected(selected?.type === item.type ? undefined : item)}
							>
								{item.label}
							</li>
						)}
					</ul>
				</nav>
				<div className={styles.footer}>
					<div className={styles.search}>
						<img src={'/images/search.svg'} />
						<form onSubmit={handleSubmitSearch}>
							<input
								ref={searchRef}
								type="text"
								placeholder='Search'
								value={searchInput}
								onBlur={() => searchInput && handleSearch()}
								onChange={(e) => setSearchInput(e.target.value)}
							/>
							<input type="submit" style={{ visibility: 'hidden', position: 'absolute' }} />
						</form>
					</div>
					<div className={styles.social}>
						{social.map(({ name, icon, url }, idx) =>
							<a key={idx} href={url}><img src={icon} alt={name} /></a>
						)}
					</div>
				</div>

			</nav>
			<nav className={cn(styles.sub, (!selected || selected?.index) && styles.hide)}>
				<div className={styles.subHeader}>
					<p className={cn(styles.title)}>{subHeader}</p>
					<span className={styles.back} onClick={() => setSelected(undefined)}>❮</span>
				</div>
				<ul>
					{sub?.map(({ label, slug, type, isHash }, idx) =>
						<a onClick={() => router.push(slug)} key={idx}>
							<li className={cn(slug === router.asPath && styles.active)}>
								{label}
							</li>
						</a>
					)}
				</ul>
			</nav>
			<SiteSearch
				show={showSearch}
				query={query}
				onClose={closeSearch}
			/>
		</>
	)
}
