import styles from './DesktopMenu.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect, MouseEvent} from 'react'
import { useStore, shallow } from '/lib/store'
import { useLayout } from '/lib/context/layout'
import { useOutsideClick, useWindowSize } from 'rooks'
import useScrollInfo from '/lib/hooks/useScrollInfo'
import { siteSearch } from '/lib/utils'
import type { Menu } from '/lib/menu'

export type DesktopMenuProps = {items : Menu}

export default function DesktopMenu({items} : DesktopMenuProps){
	
	const ref = useRef();
	const router = useRouter()
	const [showMenu, setShowMenu, invertMenu] = useStore((state) => [state.showMenu, state.setShowMenu, state.invertMenu], shallow);
	const [transitioning] = useStore((state)=> [state.transitioning])
	const [selected, setSelected] = useState(undefined)
	const [menuMargin, setMenuMargin] = useState({position:0, padding:0})
	const [hovering, setHovering] = useState(undefined)
	const [showSearch, setShowSearch] = useState(false)
	const { layout, menu, color } = useLayout()
	const { innerWidth } = useWindowSize()
	const { isPageBottom, isPageTop, isScrolledUp, scrolledPosition } = useScrollInfo()
	const isInverted = (menu === 'inverted' || invertMenu)

	const resetSelected = () => {
		if(transitioning) return
		setSelected(undefined)
		setHovering(undefined)
	}

	useEffect(()=>{ // Hide menu if was closed on scroll
		!showMenu && resetSelected() 
	}, [showMenu]) 
	useEffect(()=>{ // Hide menu if was closed on scroll
		setSelected(hovering)
	}, [hovering]) 

  useEffect(() => { // Toggle menu bar on scroll
		setShowMenu((isScrolledUp && !isPageBottom) || isPageTop)
	}, [scrolledPosition, isPageBottom, isPageTop, isScrolledUp, setShowMenu]);

	useEffect(()=>{ // Re set margin on window resize
		if(!selected) return
		
		const el = document.querySelector<HTMLLIElement>(`li[data-slug="${selected}"]`)
		const nav = document.querySelectorAll<HTMLLIElement>(`li[data-slug]`)
		const idx = parseInt(el.dataset.index);
		const left = idx > 0 ? nav[idx-1] : undefined
		
		const bl = left?.getBoundingClientRect()
		const elPad = parseInt(getComputedStyle(el, null).getPropertyValue("padding-left"))
		const blPad = parseInt(getComputedStyle(left, null).getPropertyValue("padding-right"))
		const lm = (bl.left+bl.width-blPad-10)
		const rm = el.getBoundingClientRect().left;
		
		const position =  bl ? (lm + ((rm-lm)/2)) : el.getBoundingClientRect().x + elPad
		const padding = (el.getBoundingClientRect().x - position)
		
		setMenuMargin({position, padding})

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
			<Link scroll={false} href={'/'}>
				<a className={cn(styles.logo, isInverted && styles.inverted)}>
					<img id={'logo'} src={'/images/logo.svg'}/>
				</a>
			</Link>
			<nav id={'menu'} ref={ref} className={menuStyles}>
				<ul className={styles.nav} >
					{items.map(({label, slug, index}, idx) => {
						const arrowStyle = cn(styles.arrow, slug === hovering && styles.hover, slug === selected && styles.active)
						return(
							<li 
								data-slug={slug}
								data-index={idx}
								key={idx} 
								onClick={(e)=> !index && handleSelected(e)}
								onMouseEnter={()=>!index && setHovering(slug)}
								onMouseLeave={()=>!index && !showMenu && setHovering(undefined)}
								className={cn(router.pathname.startsWith(`${slug}`) && styles.selected)}
							>	
								{index === true ? // Direct links
									<Link scroll={false} href={slug}>
										{label}
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
				className={cn(styles.sub, selected && showMenu && styles.show)} 
				style={{width:`calc(100% - ${menuMargin.position}px)`, backgroundColor: color}}
				onMouseLeave={resetSelected}
			>
				<div 
					className={cn(styles.subPad, styles[menu])} 
					style={{ backgroundColor: color, paddingLeft:`${menuMargin.padding}px`, }}
				>
					<nav>
						<ul className={cn(sub?.length > 10 && styles.columns)}>
							{sub?.map(({label, slug}, idx)=>
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
					<Link scroll={false} href={process.env.NODE_ENV === 'development' ?  attributes.url.replace('https://orsjo.vercel.app', '') : attributes.url}>
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


