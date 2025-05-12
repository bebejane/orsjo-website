'use client';

import s from './SiteSearch.module.scss';
import { styleVariables } from '@/lib/utils';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import {
	ProductThumbnail,
	ProjectThumbnail,
	DesignerThumbnail,
	NewsThumbnail,
	StaffThumbnail,
	Loader,
} from '@/components';
import Link from '@/components/nav/Link';
import { useDebouncedValue, useKey } from 'rooks';
import { useMediaQuery } from 'usehooks-ts';
import { siteSearch, truncateParagraph } from '@/lib/utils';
import { useStore, useShallow } from '@/lib/store';
import Close from '@/public/images/close.svg';
import { usePathname } from 'next/navigation';
import React from 'react';

export type SearchResultCategory = {
	[key: string]: any;
};

type SiteSearchProps = {
	show: boolean;
	onClose?: () => void;
	query?: string;
	onChange?: (query: string | undefined) => void;
};

export default function SiteSearch({
	show,
	onClose,
	query: queryAsProp,
	onChange,
}: SiteSearchProps) {
	const ref = useRef<HTMLInputElement | null>(null);
	const pathname = usePathname();
	const [query, setQuery] = useState<string | undefined>();
	const [inputValue, setInputValue] = useState<string | undefined>('');
	const [debouncedQuery, setQueryImmediate] = useDebouncedValue(inputValue, 350);
	const [setShowSiteSearch, transitioning] = useStore(
		useShallow((state) => [state.setShowSiteSearch, state.transitioning])
	);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState<SearchResultCategory | undefined>();
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);
	const noResults =
		result !== undefined && Object.keys(result).length === 0 && !loading && inputValue;
	const thumbnailTheme = isMobile ? 'dark' : 'light';

	useEffect(() => {
		if (!debouncedQuery) {
			setResult(undefined);
			return setLoading(false);
		}

		setLoading(true);
		setError(undefined);
		setQuery(inputValue);
		siteSearch(inputValue)
			.then(async (cats) => setResult(cats))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, [debouncedQuery, setLoading, setError, inputValue]);

	useEffect(() => {
		if (query) return;

		setQueryImmediate(undefined);
		setResult(undefined);
	}, [query, setQueryImmediate, setResult]);

	useEffect(() => {
		onChange?.(inputValue);
		if (inputValue) return setLoading(true);
		setQueryImmediate(undefined);
	}, [inputValue, setQueryImmediate]);

	useKey('Escape', () => {
		setShowSiteSearch(false);
	});

	useEffect(() => {
		!transitioning && setShowSiteSearch(false);
	}, [transitioning, setShowSiteSearch]);
	useEffect(() => {
		loading && setResult({});
	}, [loading, setResult]);
	useEffect(() => {
		show && ref.current?.focus();
	}, [show, ref]);
	useEffect(() => {
		queryAsProp && setInputValue(queryAsProp);
	}, [queryAsProp]);

	useEffect(() => {
		setShowSiteSearch(false);
	}, [pathname]);

	return (
		<div className={cn(s.search, show && s.show)}>
			<div className={s.query}>
				<input
					ref={ref}
					autoFocus={true}
					placeholder='Search...'
					autoComplete={'off'}
					autoCorrect={'off'}
					type='text'
					value={inputValue}
					className={cn(show && s.show)}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button className={s.close} onClick={onClose}>
					<Close />
				</button>
			</div>

			<div className={s.results}>
				{inputValue &&
					result &&
					Object.keys(result).map((model) => {
						const items = result[model];
						return (
							<React.Fragment key={model}>
								<h1>{model}</h1>
								<ul>
									{items.map((item, idx) =>
										model === 'products' ? (
											<li key={idx}>
												<ProductThumbnail
													product={item}
													theme={thumbnailTheme}
													className={s.thumb}
												/>
											</li>
										) : model === 'designers' ? (
											<li key={idx}>
												<DesignerThumbnail
													designer={item}
													theme={thumbnailTheme}
													className={s.thumb}
												/>
											</li>
										) : model === 'projects' ? (
											<li key={idx}>
												<ProjectThumbnail
													project={item}
													theme={thumbnailTheme}
													className={s.thumb}
												/>
											</li>
										) : model === 'people' ? (
											<li key={idx}>
												<StaffThumbnail staff={item} theme={thumbnailTheme} className={s.thumb} />
											</li>
										) : model === 'news' ? (
											<li key={idx}>
												<NewsThumbnail news={item} theme={thumbnailTheme} className={s.thumb} />
											</li>
										) : model === 'faqs' ? (
											<li key={idx} className={s.full}>
												<Link
													href={`/support/faq#${item.id}`}
													style={{ fontWeight: 'bold' }}
													passHref={true}
												>
													{(item as FaqRecord).question}
												</Link>
												<br />
												{truncateParagraph((item as FaqRecord).answer, 1, false)}
												<br />
											</li>
										) : null
									)}
								</ul>
							</React.Fragment>
						);
					})}
				{(noResults || loading || error) && (
					<div className={s.status}>
						{noResults && <span>no matches for {`"${query}"`}</span>}
						{loading && (
							<span>
								<Loader invert={isMobile} />
							</span>
						)}
						{error && <span>Error: {error}</span>}
					</div>
				)}
			</div>
		</div>
	);
}
