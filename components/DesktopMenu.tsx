import styles from './DesktopMenu.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect, MouseEvent} from 'react'
import { useStore, shallow } from '/lib/store'
import { useLayout } from '/lib/context/layout'
import { useOutsideClick, useWindowSize } from 'rooks'
import type { Menu } from '/lib/menu'

export type DesktopMenuProps = {items : Menu}

export default function DesktopMenu({items} : DesktopMenuProps){
	
	const ref = useRef();
	const router = useRouter()
	const [showMenu, invertMenu] = useStore((state) => [state.showMenu,state.invertMenu], shallow);
	const [selected, setSelected] = useState(undefined)
	const [menuMargin, setMenuMargin] = useState(0)
	const [hovering, setHovering] = useState(undefined)
	const { layout, menu, color } = useLayout()
	const { innerWidth } = useWindowSize()
	
  //useOutsideClick(ref, ()=> setSelected(undefined));

	useEffect(()=>{ // Re set margin on window resize
		if(!selected) return
		const el = document.querySelector<HTMLLIElement>(`li[data-slug="${selected}"]`)
		const pad = document.querySelector(`.${styles.subPad}`)
		const padding = parseInt(getComputedStyle(pad, null).getPropertyValue("padding-left"))

		const { x } = el.getBoundingClientRect();
		setMenuMargin(x-padding)
	}, [innerWidth, selected])

	useEffect(()=>{ setSelected(undefined)}, [router.asPath])	// Reset on route change
	
	useEffect(()=>{ !showMenu && setSelected(undefined) }, [showMenu]) // Hide menu if was closed on scroll

	const handleSelected = (e: MouseEvent<HTMLLIElement>) => {
		
		const slug = e.currentTarget.getAttribute('data-slug')
		const el = document.querySelector<HTMLLIElement>(`li[data-slug="${slug}"]`)
		const sel = selected === slug ? undefined : slug
		if(sel) setMenuMargin(el.offsetLeft)
		setSelected(sel)
	}
	
	const menuStyles = cn(styles.desktopMenu, selected && styles.open, !showMenu && styles.hide, styles[layout], (menu === 'inverted' || invertMenu) && styles.inverted)
	const sub = selected ? items.find(i => i.slug === selected).sub : []
	
	return (
		<>
			<nav id={'menu'} className={menuStyles}>
				<Link href={'/'}>
					<a className={styles.logo}>
						<img id={'logo'}  src={'/images/logo.svg'}/>
					</a>
				</Link>
				<ul className={styles.nav} >
					{items.map(({label, slug, index}, idx) => {
						const arrowStyle = cn(styles.arrow, slug === hovering && styles.hover, slug === selected && styles.active)
						return(
							<li 
								data-slug={slug}
								key={idx} 
								onClick={(e)=> !index && handleSelected(e)}
								onMouseEnter={()=>setHovering(slug)}
								onMouseLeave={()=>setHovering(undefined)}
								className={router.pathname.startsWith(`${slug}`) && styles.selected}
							>	
								{index === true ? // Direct links
									<Link href={slug}>
										<a>{label}</a>
									</Link>
								:
									<>{label} <span className={arrowStyle}>›</span></>
								}
							</li>
						)})}
				</ul>
			</nav>
			
			<div 
				ref={ref}
				className={cn(styles.sub, selected && showMenu && styles.show)} 
				style={{width:`calc(100% - ${menuMargin}px)`, backgroundColor: `var(${color})`}}
			>
				<div className={cn(styles.subPad, styles[menu])} style={{ backgroundColor: `var(${color})`}}>
					<nav>
						<ul>
							{sub?.map(({label, slug}, idx)=>
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
				</div>
			</div>
		</>
	)
}



