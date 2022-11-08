import styles from './MenuMobile.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect, FormEventHandler, useRef } from 'react'
import { usePage } from '/lib/context/page'
import { useStore, shallow } from '/lib/store'
import { Twirl as Hamburger } from "hamburger-react";
import { SiteSearch } from '/components'
import type { Menu } from '/lib/menu'
import social from '/lib/social'
import { useWindowSize } from 'rooks'

export type MenuMobileProps = { items: Menu }

export default function MenuMobile({ items }: MenuMobileProps) {

	const router = useRouter()
	const { menu } = usePage()
	const [open, setOpen] = useState(false)
	const searchRef = useRef<HTMLInputElement>()
	const [query, setQuery] = useState<string>('');
	const [searchInput, setSearchInput] = useState<string>('');

	const [showSearch, setShowSearch] = useState(false);
	const [selected, setSelected] = useState(undefined)
	const [transitioning] = useStore((state) => [state.transitioning], shallow)
	const sub = items.find((item) => item.type === selected)?.sub
	const subHeader = selected ? items.find(i => i.type === selected).label : null

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
		setOpen(false)
	}

	useEffect(() => {
		router.events.on("hashChangeStart", handleClose);
		return () => router.events.off("hashChangeStart", handleClose)
	}, [router.events]);

	useEffect(() => { setShowSearch(!!query) }, [query])
	useEffect(() => { !transitioning && handleClose() }, [transitioning])

	return (
		<>
			<div className={styles.hamburger}>
				<Hamburger
					toggled={open}
					duration={0.5}
					onToggle={setOpen}
					color={menu === 'inverted' || open ? "#fff" : "#000"}
					label={"Menu"}
					size={24}
				/>
			</div>
			<nav className={cn(styles.mobileMenu, open ? styles.open : styles.hide)}>
				<nav className={styles.main}>
					<ul className={styles.nav}>
						{items.map(({ label, slug, type, index }, idx) =>
							<li
								data-slug={slug}
								key={idx}
								className={cn(selected && selected !== type && styles.inactive)}
								onClick={() => index ? router.push(slug) : setSelected(selected === type ? undefined : type)}
							>
								{label}
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
			<nav className={cn(styles.sub, !selected && styles.hide)}>
				<div className={styles.subHeader}>
					<h1 className={cn(styles.title)}>{subHeader}</h1>
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
