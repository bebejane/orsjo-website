import styles from './SiteSearch.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useState, useEffect} from 'react'
import { useSiteSearch } from 'react-datocms'
import { buildClient } from '@datocms/cma-client-browser';

const client = buildClient({ apiToken: process.env.NEXT_PUBLIC_SITESEARCH_API_TOKEN });

export default function SiteSearch({show, onClose}){
	
	const [query, setQuery] = useState('')
	const { state, error, data } = useSiteSearch({
		client,
		buildTriggerId: '18902',
		initialState: { locale: 'en' },
		resultsPerPage: 20,
	});
	
	useEffect(()=>{ state.setQuery(query)}, [query])
	
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
				<button className={styles.close} onClick={()=>onClose()}>×</button>
			</div>
			<div className={styles.results}>
				{data?.pageResults.map(({title, url, bodyExcerpt}, idx) => 
					<div key={idx}>
						<h2 onClick={onClose}>
							<Link 
								scroll={false}
                
								href={process.env.NODE_ENV === 'development' ?  url?.replace('https://orsjo.vercel.app', '') : url}
							>
								{title}
							</Link>
						</h2>
						<p>
							{bodyExcerpt}
						</p>
					</div>
				)}
			</div>
			<div className={styles.status}>
				{data?.pageResults.length === 0 && query && 
					<span>no matches for {`"${query}"`}</span> 
				}
				{!data && !error && <span>...</span>}
				{error && <span>Error: {error}</span>}
			</div>
		</div>
	)
}