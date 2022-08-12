import styles from './MobileMenu.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect} from 'react'
import { useLayout } from '/lib/context/layout'
import { Twirl as Hamburger } from "hamburger-react";
import type { Menu } from '/lib/menu'

export type MobileMenuProps = {items : Menu}

export default function MobileMenu({items} : MobileMenuProps){

	const router = useRouter()
	const {layout, menu} = useLayout()
	const [open, setOpen] = useState(false)
	const [selected, setSelected] = useState(undefined)
	const sub = items.find((item)=> item.type === selected)?.sub
	const subHeader = selected ? items.find(i => i.type === selected).label : null

	useEffect(()=>{
		setSelected(undefined)
		setOpen(false)
	}, [router.asPath])

	return (
		<nav className={cn(styles.mobileMenu, open && styles.open)}>
			<div className={styles.navbar}>
				<Link href={'/'}>
					<a>
						<img 
							id={'logo-mobile'} 
							className={cn(styles.logo, (open || (open || menu == 'inverted')) && styles.inverted)} 
							src={'/images/logo.svg'}
						/>
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
			</div>
			<nav className={cn(styles.main, !open && styles.hide)}>
				<ul className={styles.nav}>
					{items.map(({label, slug, type}, idx) => 
						<li 
								data-slug={slug}
								key={idx} 
								className={cn(selected && selected !== type && styles.inactive)}
								onClick={()=> setSelected(selected === type ? undefined : type)}
							>
								{label}
						</li>
					)}
				</ul>
			</nav>
			<nav className={cn(styles.sub, !selected && styles.hide)}>
				<header>
					<h2 className={styles.subHeader}>{subHeader}</h2>
					<span className={styles.back} onClick={()=>setSelected(undefined)}>❮</span>
				</header>
				<ul>
					{sub?.map(({label, slug, type}, idx)=>
						<Link key={idx} href={slug}>
							<a>
								<li className={cn(slug === router.asPath && styles.active)}>
									{label}
								</li>
							</a>
						</Link>
					)}
				</ul>
			</nav>
		</nav>
	)
}
