import styles from './MenuDesktop.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect, useCallback, MouseEvent } from 'react'
import { useStore, shallow } from '/lib/store'
import { usePage } from '/lib/context/page'
import { useWindowSize } from 'rooks'
import useScrollInfo from '/lib/hooks/useScrollInfo'
import type { Menu } from '/lib/menu'

export type MenuDesktopProps = { items: Menu, onShowSiteSearch: Function }

export default function MenuDesktop({ items, onShowSiteSearch }: MenuDesktopProps) {

	const ref = useRef();
	const router = useRouter()
	const [showMenu, setShowMenu, invertMenu] = useStore((state) => [state.showMenu, state.setShowMenu, state.invertMenu], shallow);
	const [transitioning] = useStore((state) => [state.transitioning])
	const [selected, setSelected] = useState(undefined)
	const [menuMargin, setMenuMargin] = useState({ position: 0, padding: 0 })
	const { layout, menu, color } = usePage()
	const { innerWidth } = useWindowSize()
	const { isPageBottom, isPageTop, isScrolledUp, scrolledPosition } = useScrollInfo()
	const isInverted = (menu === 'inverted' || invertMenu)

	const resetSelected = useCallback(() => {
		if (transitioning) return
		setSelected(undefined)
	}, [transitioning])

	useEffect(() => { // Hide menu if was closed on scroll
		!showMenu && resetSelected()
	}, [showMenu, resetSelected])

	useEffect(() => { // Toggle menu bar on scroll
		setShowMenu((isScrolledUp && !isPageBottom) || isPageTop)
	}, [scrolledPosition, isPageBottom, isPageTop, isScrolledUp, setShowMenu]);

	useEffect(() => { // Re set margin on window resize
		if (!selected) return

		const el = document.querySelector<HTMLLIElement>(`li[data-slug="${selected}"]`)
		const nav = document.querySelectorAll<HTMLLIElement>(`li[data-slug]`)
		const idx = parseInt(el.dataset.index);
		const left = idx > 0 ? nav[idx - 1] : undefined

		const bl = left?.getBoundingClientRect()
		const elPad = parseInt(getComputedStyle(el, null).getPropertyValue("padding-left"))
		const blPad = parseInt(getComputedStyle(left, null).getPropertyValue("padding-right"))
		const lm = (bl.left + bl.width - blPad - 10)
		const rm = el.getBoundingClientRect().left;

		const position = bl ? (lm + ((rm - lm) / 2)) : el.getBoundingClientRect().x + elPad
		const padding = (el.getBoundingClientRect().x - position)

		setMenuMargin({ position, padding })

	}, [innerWidth, selected])

	const handleSelected = (e: MouseEvent<HTMLLIElement>) => {
		const slug = e.currentTarget.getAttribute('data-slug')
		const sel = selected === slug ? undefined : slug
		setSelected(sel)
	}

	const menuStyles = cn(styles.desktopMenu, selected && styles.open, !showMenu && !transitioning && styles.hide, styles[layout], isInverted && styles.inverted)
	const sub = selected ? items.find(i => i.slug === selected).sub : []
	
	return (
		<>
			<Link scroll={false} href="/">
				<a className={cn(styles.logo, isInverted && styles.inverted)}>
					<figure>
						<img id="logo" src={'/images/logo.svg'} />
					</figure>
				</a>
			</Link>
			<nav id={'menu'} ref={ref} className={menuStyles}>
				<ul className={styles.nav} >
					{items.map(({ label, slug, index }, idx) => {
						const arrowStyle = cn(styles.arrow, slug === selected && styles.hover, slug === selected && styles.active)
						return (
							<li
								data-slug={slug}
								data-index={idx}
								key={idx}
								onMouseEnter={() => setSelected(!index ? slug : undefined)}
								onMouseLeave={() => !index && !showMenu && setSelected(undefined)}
								className={cn(router.pathname.startsWith(`${slug}`) && styles.selected)}
							>
								{index === true ? // Direct links
									<Link scroll={false} href={slug}>
										{label}
									</Link>
								:
									<>{label}</>
								}
							</li>
						)
					})}
					<li className={styles.searchIcon} onClick={() => onShowSiteSearch()}>
						<img src={'/images/search.svg'} />
					</li>
				</ul>
			</nav>

			<div
				className={cn(styles.sub, selected && showMenu && styles.show)}
				style={{ width: `calc(100% - ${menuMargin.position}px)`, backgroundColor: color }}	
			>
				<div
					className={cn(styles.subPad, styles[menu])}
					style={{ backgroundColor: color, paddingLeft: `${menuMargin.padding}px`, }}
					onMouseLeave={resetSelected}
				>
					<nav>
						<ul className={cn(sub?.length > 10 && styles.columns)}>
							{sub?.map(({ label, slug }, idx) =>
								<li key={idx} className={cn(slug === router.asPath && styles.active)}>
									<Link scroll={false} href={slug}>
										{label}
									</Link>
								</li>
							)}
						</ul>
					</nav>
				</div>
			</div>

		</>
	)
}
