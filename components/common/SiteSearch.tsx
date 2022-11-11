import styles from './SiteSearch.module.scss'
import { styleVariables } from '/lib/utils'
import cn from 'classnames'
import { useEffect, useRef, useState } from 'react';
import {
	ProductThumbnail,
	ProjectThumbnail,
	DesignerThumbnail,
	NewsThumbnail,
	StaffThumbnail,
	Loader
} from '/components';
import { AnchorLink } from '/components';
import { useDebouncedValue } from 'rooks';
import { useMediaQuery } from 'usehooks-ts'
import { siteSearch, truncateParagraph } from '/lib/utils'
import { useStore, shallow } from '/lib/store';
import Close from '/public/images/close.svg'

export type SearchResultCategory = {
	[key: string]: any
}

type SiteSearchProps = {
	show: boolean,
	onClose?: () => void,
	query?: string,
}

export default function SiteSearch({ show, onClose, query: queryAsProp }: SiteSearchProps) {

	const ref = useRef<HTMLInputElement>()
	const [query, setQuery] = useState<string | undefined>()
	const [inputValue, setInputValue] = useState<string | undefined>()
	const [debouncedQuery, setQueryImmediate] = useDebouncedValue(inputValue, 350);
	const [setShowSiteSearch, transitioning] = useStore((state) => [state.setShowSiteSearch, state.transitioning], shallow)
	const [error, setError] = useState()
	const [loading, setLoading] = useState(false)
	const [result, setResult] = useState<SearchResultCategory | undefined>()
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`)
	const noResults = result !== undefined && Object.keys(result).length === 0 && !loading && inputValue
	const thumbnailTheme = isMobile ? 'dark' : 'light'

	useEffect(() => {
		if (!debouncedQuery) {
			setResult(undefined)
			return setLoading(false)
		}

		setLoading(true)
		setQuery(inputValue)
		siteSearch(inputValue)
			.then(async (cats) => setResult(cats))
			.catch(err => setError(err))
			.finally(() => setLoading(false))

	}, [debouncedQuery, setLoading, setError, inputValue])


	useEffect(() => {
		if (query) return

		setQueryImmediate(undefined)
		setResult(undefined)

	}, [query, setQueryImmediate, setResult])

	useEffect(() => {
		if (inputValue) return setLoading(true)
		setQueryImmediate(undefined)
	}, [inputValue, setQueryImmediate])

	useEffect(() => { !transitioning && setShowSiteSearch(false) }, [transitioning, setShowSiteSearch])
	useEffect(() => { loading && setResult({}) }, [loading, setResult])
	useEffect(() => { show && ref.current.focus() }, [show, ref])
	useEffect(() => { queryAsProp && setInputValue(queryAsProp) }, [queryAsProp])

	return (
		<div className={cn(styles.search, show && styles.show)}>
			<div className={styles.query}>
				<input
					ref={ref}
					autoFocus={true}
					placeholder="Search..."
					autoComplete={'off'}
					autoCorrect={'off'}
					type="text"
					value={inputValue}
					className={cn(show && styles.show)}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button className={styles.close} onClick={onClose}>
					<Close />
				</button>
			</div>

			<div className={styles.results}>
				{inputValue && result && Object.keys(result).map(model => {
					const items = result[model]
					return (
						<>
							<h1>{model}</h1>
							<ul>
								{items.map((item, idx) =>
									model === 'products' ?
										<li><ProductThumbnail product={item} theme={thumbnailTheme} className={styles.thumb} /></li>
										: model === 'designers' ?
											<li><DesignerThumbnail designer={item} theme={thumbnailTheme} className={styles.thumb} /></li>
											: model === 'projects' ?
												<li><ProjectThumbnail project={item} theme={thumbnailTheme} className={styles.thumb} /></li>
												: model === 'staffs' ?
													<li><StaffThumbnail staff={item} theme={thumbnailTheme} className={styles.thumb} /></li>
													: model === 'news' ?
														<li><NewsThumbnail news={item} theme={thumbnailTheme} className={styles.thumb} /></li>
														: model === 'faqs' ?
															<li className={styles.full}>
																<AnchorLink href={`/support/faq#${item.id}`} style={{ fontWeight: 'bold' }}>
																	{(item as FaqRecord).question}
																</AnchorLink>
																<br />
																{truncateParagraph((item as FaqRecord).answer, 1, false)}<br />
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
						{loading && <span><Loader invert={isMobile} /></span>}
						{error && <span>Error: {error}</span>}
					</div>
				}
			</div>
		</div>
	)
}
