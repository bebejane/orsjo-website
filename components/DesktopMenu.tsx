import styles from './DesktopMenu.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect, MouseEvent} from 'react'
import { useStore, shallow } from '/lib/store'
import { useLayout } from '/lib/context/layout'
import { useOutsideClick, useWindowSize } from 'rooks'
import { siteSearch } from '/lib/utils'
import type { Menu } from '/lib/menu'

export type DesktopMenuProps = {items : Menu}

export default function DesktopMenu({items} : DesktopMenuProps){
	
	const ref = useRef();
	const router = useRouter()
	const [showMenu, invertMenu] = useStore((state) => [state.showMenu,state.invertMenu], shallow);
	const [selected, setSelected] = useState(undefined)
	const [menuMargin, setMenuMargin] = useState(0)
	const [hovering, setHovering] = useState(undefined)
	const [showSearch, setShowSearch] = useState(false)
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
		const sel = selected === slug ? undefined : slug
		setSelected(sel)
	}
	
	const menuStyles = cn(styles.desktopMenu, selected && styles.open, !showMenu && styles.hide, styles[layout], (menu === 'inverted' || invertMenu) && styles.inverted)
	const sub = selected ? items.find(i => i.slug === selected).sub : []
	
	return (
		<>
			<Link href={'/'}>
				<a className={cn(styles.logo, (menu === 'inverted' || invertMenu) && styles.inverted)}>
					<img id={'logo'} src={'/images/logo.svg'}/>
				</a>
			</Link>
			<nav id={'menu'} className={menuStyles}>
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
								className={cn(router.pathname.startsWith(`${slug}`) && styles.selected)}
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
						<li className={styles.searchIcon} onClick={()=>setShowSearch(true)}>
							<img src={'/images/search.svg'}/>
						</li>
				</ul>
			</nav>
			
			<div 
				ref={ref}
				className={cn(styles.sub, selected && showMenu && styles.show)} 
				style={{width:`calc(100% - ${menuMargin}px)`, backgroundColor: color}}
			>
				<div className={cn(styles.subPad, styles[menu])} style={{ backgroundColor: color}}>
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
			<Search show={showSearch} setShowSearch={setShowSearch}/>
		</>
	)
}

export type SearchResult = {
	q: string,
	data : [{
		attributes:{
			title:string,
			url: string,
			highlight:{
				body: string[]
			}
		}
	}]
}

const Search = ({show, setShowSearch}) => {
	
	const [query, setQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | undefined>()
	const [results, setResults] = useState()
	const noMatches = results?.data?.length === 0

	useEffect(()=>{
		setResults(undefined)
		if(!query) return 
		setLoading(true)
		siteSearch(query)
		.then((res : SearchResult) => {
			//const dedupe = {}
			//res = res.map((el) => )
			setResults(res)
		})
		.catch(err => {
			setError(err.toString())
			setResults(undefined)
		})
		.finally(() => setLoading(false))
			
	}, [query, setResults])	

	if(!show) return null
	
	return (
		<div className={styles.search}>
			<div className={styles.query}>
				<input 
					autoFocus={true} 
					placeholder="Search..." 
					type="text" 
					value={query} 
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className={styles.close} onClick={()=>setShowSearch(false)}>×</button>
			</div>
			<div className={styles.results}>
			{results?.data?.map(({attributes}, idx) => 
				<div key={idx}>
					<h2>
					<Link href={process.env.NODE_ENV === 'development' ?  attributes.url.replace('https://orsjo.vercel.app', '') : attributes.url}>
						{attributes.title}
					</Link>
					</h2>
					<p>
						{attributes.highlight.body.map(line => 
							<>{line}</>
						)}
					</p>
				</div>
			)}
			{loading && <span>...</span>}
			{noMatches && <span>no matches for "{query}"</span> }
			{error && <span>Error: {error}</span>}
			</div>
		</div>
	)
}


