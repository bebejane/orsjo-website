import styles from './SiteSearch.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { buildClient } from '@datocms/cma-client-browser';
import { useEffect, useState } from 'react';
import { ProductThumbnail, DesignerThumbnail, NewsThumbnail } from '/components';
import { useDebouncedValue, useRaf } from 'rooks';
import useStore from '/lib/store';
import { useRouter } from 'next/router';

export type SearchResultCategory = {
	[key: string] : any
}

const client = buildClient({ apiToken: process.env.NEXT_PUBLIC_SITESEARCH_API_TOKEN });

export default function SiteSearch({show, onClose}){
	
	const [query, setQuery] = useState<string | undefined>()
	const [debouncedQuery, setQueryImmediate] = useDebouncedValue(query, 200);
	const [error, setError] = useState()
	const [loading, setLoading] = useState(false)
	const [result, setResult] = useState<SearchResultCategory | undefined>()
	const router = useRouter()
	const setShowSiteSearch = useStore((state) => state.setShowSiteSearch)
	

	const noResults = result !== undefined && Object.keys(result).length === 0 && !loading

	useEffect(()=>{
		if(!debouncedQuery) return
		setResult({})
		fetch(`/api/search?q=${debouncedQuery}`).then(async (res) => {
			const cats = await res.json()
			console.log(cats)
			setResult(cats)
		})
		.catch(err => setError(err))
		.finally(()=> setLoading(false))

	}, [debouncedQuery, setLoading, setError])

	useEffect(()=>{
		if(query) return setLoading(true)
		
		setQueryImmediate(undefined)
		setResult(undefined)
	}, [query, setQueryImmediate])

	useEffect(()=>{
		setShowSiteSearch(false)
	}, [router.asPath])

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
			</div>
			<div className={styles.results}>
				{result && Object.keys(result).map(model => {
					const items = result[model]
					return (
						<>
							<h1>{model}</h1>
							<ul>
								{items.map((item, idx)=>
									model === 'products' ? 
										<li><ProductThumbnail product={item} theme="light" className={styles.thumb}/></li>
								: model === 'designers' ? 
										<li><DesignerThumbnail designer={item} theme="light" className={styles.thumb}/></li>
								: model === 'news' ? 
										<li><NewsThumbnail news={item} theme="light" className={styles.thumb}/></li>
								: model === 'faqs' ? 
										<li className={styles.full}>
											<strong>{(item as FaqRecord).question}</strong><br/>
											{(item as FaqRecord).answer}<br/>
										</li>
								:
									null
								)}
							</ul>
						</>
					)
				})}
				{(noResults || loading || error) &&
					<div className={styles.status}>
						{noResults && <span>no matches for {`"${query}"`}</span>}
						{loading && <span><img className={styles.spinner} src={'/images/logo.svg'}/></span>}
						{error && <span>Error: {error}</span>}
					</div>
				}
			</div>
			<button className={styles.close} onClick={()=>onClose()}>×</button>
		</div>
	)
}
