import styles from './MobileMenu.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'
import { useLayout } from '/lib/context/layout'
import { useStore } from '/lib/store'
import { Twirl as Hamburger } from "hamburger-react";
import type { Menu } from '/lib/menu'

export type MobileMenuProps = { items: Menu }

export default function MobileMenu({ items }: MobileMenuProps) {

	const router = useRouter()
	const { menu } = useLayout()
	const [open, setOpen] = useState(false)
	const [transitioning] = useStore((state) => [state.transitioning])
	const [selected, setSelected] = useState(undefined)
	const sub = items.find((item) => item.type === selected)?.sub
	const subHeader = selected ? items.find(i => i.type === selected).label : null

	useEffect(() => {
		setSelected(undefined)
		//setOpen(false)
	}, [router.asPath])

	return (
		<>
			<Link scroll={false} href={'/'}>
				<a className={cn(styles.logo, (open || (open || menu == 'inverted')) && styles.inverted)}>
					<img id={'logo-mobile'} src={'/images/logo.svg'}/>
				</a>
			</Link>
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
						{items.map(({ label, slug, type }, idx) =>
							<li
								data-slug={slug}
								key={idx}
								className={cn(selected && selected !== type && styles.inactive)}
								onClick={() => setSelected(selected === type ? undefined : type)}
							>
								{label}
							</li>
						)}
					</ul>
				</nav>
				<div className={styles.footer}>
					<div className={styles.search}>
						<img src={'/images/search.svg'}/>
						<input type="text" placeholder='Search'/>
					</div>
					<div className={styles.social}>
						<img src="/images/facebook.svg" />
						<img src="/images/instagram.svg" />
						<img src="/images/linkedin.svg" />
						<img src="/images/pinterest.svg" />
					</div>
				</div>
			</nav>
			<nav className={cn(styles.sub, !selected && !transitioning && styles.hide)}>
				<div className={styles.subHeader}>
					<h1 className={cn(styles.title)}>{subHeader}</h1>
					<span className={styles.back} onClick={() => setSelected(undefined)}>❮</span>
				</div>
				<ul>
					{sub?.map(({ label, slug, type }, idx) =>
						<Link scroll={false} key={idx} href={slug}>
							<a>
								<li className={cn(slug === router.asPath && styles.active)}>
									{label}
								</li>
							</a>
						</Link>
					)}
				</ul>
			</nav>
			
		</>
	)
}
