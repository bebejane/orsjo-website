import styles from './DesktopMenu.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect, MouseEvent} from 'react'
import { useStore, shallow } from '/lib/store'
import { useLayout } from '/lib/context/layout'
import { useOutsideClick, useWindowSize } from 'rooks'
import { MenuProps } from './'

export default function DesktopMenu({items} : MenuProps){
	
	const ref = useRef();
	const router = useRouter()
	const [showMenu] = useStore((state) => [state.showMenu], shallow);
	const [selected, setSelected] = useState(undefined)
	const [menuMargin, setMenuMargin] = useState(0)
	const [hovering, setHovering] = useState(undefined)
	const { layout, menu } = useLayout()
	const { innerWidth } = useWindowSize()
	
  //useOutsideClick(ref, ()=> setSelected(undefined));

	useEffect(()=>{ // Re set margin on window resize
		if(!selected) return
		const el = document.querySelector<HTMLLIElement>(`li[data-slug="${selected}"]`)
		setMenuMargin(el.offsetLeft)
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
	
	const menuStyles = cn(styles.desktopMenu, selected && styles.open, !showMenu && styles.hide, styles[layout], styles[menu])
	const sub = selected ? items.find(i => i.slug === selected).sub : []

	return (
		<>
			<nav id={'menu'} className={menuStyles}>
				<Link href={'/'}>
					<a className={styles.logo}>
						<img id={'logo'}  src={'/images/logo.svg'}/>
					</a>
				</Link>
				<ul className={styles.nav}>
					{items.map(({label, slug}, idx) => {
						const arrowStyle = cn(styles.arrow, slug === hovering && styles.hover, slug === selected && styles.active)
						return(
							<li 
								data-slug={slug}
								key={idx} 
								onClick={handleSelected}
								onMouseEnter={()=>setHovering(slug)}
								onMouseLeave={()=>setHovering(undefined)}
							>
								{label} <span className={arrowStyle}>›</span>
							</li>
						)})}
				</ul>
			</nav>
			<div 
				ref={ref}
				className={cn(styles.sub, selected && showMenu && styles.show)} 
				style={{width:`calc(100vw - ${menuMargin}px)`}}
			>
				<nav>
					<ul>
						{sub?.map(({label, slug, type}, idx)=>
							<Link key={idx} href={slug}>
								<a>
									<li>{label}</li>
								</a>
							</Link>
						)}
					</ul>
				</nav>
			</div>
		</>
	)
}



