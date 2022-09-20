import styles from './SiteSearch.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { ProductThumbnail, ProjectThumbnail, DesignerThumbnail, NewsThumbnail, StaffThumbnail } from '/components';
import { useDebouncedValue, useRaf } from 'rooks';
import useStore from '/lib/store';
import { useRouter } from 'next/router';
import { siteSearch } from '/lib/utils'

export type SearchResultCategory = {
	[key: string] : any
}

export default function SiteSearch({show, onClose}){
	
	const [query, setQuery] = useState<string | undefined>()
	const [inputValue, setInputValue] = useState<string | undefined>()
	const [debouncedQuery, setQueryImmediate] = useDebouncedValue(inputValue, 350);
	const [error, setError] = useState()
	const [loading, setLoading] = useState(false)
	const [result, setResult] = useState<SearchResultCategory | undefined>()
	const router = useRouter()
	const setShowSiteSearch = useStore((state) => state.setShowSiteSearch)
	const noResults = result !== undefined && Object.keys(result).length === 0 && !loading && inputValue

	const handleSubmit = () => {
		setLoading(true)
		setQuery(inputValue)
		siteSearch(inputValue).then(async (cats) => {
			setResult(cats)
		})
		.catch(err => setError(err))
		.finally(()=> setLoading(false))
	}
	
	useEffect(()=>{
		if(!debouncedQuery) {

			return setResult({})
		}
		
		handleSubmit()

	}, [debouncedQuery, setLoading, setError])


	useEffect(()=>{
		if(query) return
		
		setQueryImmediate(undefined)
		setResult(undefined)
	}, [query, setQueryImmediate, setResult])
	
	
	useEffect(()=> loading && setResult({}), [loading, setResult])
	useEffect(()=>{ setShowSiteSearch(false) }, [router.asPath])

	if(!show) return null
	
	return (
		<div className={styles.search}>
			<div className={styles.query}>
				<input 
					autoFocus={true}
					placeholder="Search..."
					autoComplete={'off'}
					autoCorrect={'off'}
					id="search-downloads"
					type="text" 
					value={inputValue} 
					onChange={(e) => setInputValue(e.target.value)}
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
								: model === 'projects' ? 
										<li><ProjectThumbnail project={item} theme="light" className={styles.thumb}/></li>
								: model === 'staffs' ? 
										<li><StaffThumbnail staff={item} theme="light" className={styles.thumb}/></li>
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
