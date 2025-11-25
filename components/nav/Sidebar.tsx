'use client';

import s from './Sidebar.module.scss';
import cn from 'classnames';
import { useStore, useShallow } from '@/lib/store';
import { useRouter, usePathname } from '@/i18n/routing';
import { usePage } from '@/lib/context/page-provider';
import { useEffect, useState, useCallback, useRef } from 'react';
import { ArrowLink } from '@/components';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { styleVariables } from '@/lib/utils';
import { useWindowSize } from 'rooks';

export default function Sidebar() {
	const { inverted: _inverted, layout, color, title, sidebar, section, parent } = usePage();
	const router = useRouter();
	const path = usePathname();
	const pathname = path.includes('#') ? path.substring(0, path.indexOf('#')) : path;
	const backRef = useRef(null);
	const [currentSection, setCurrentSection, invertSidebar, searchProducts, setSearchProducts] = useStore(
		useShallow((state) => [
			state.currentSection,
			state.setCurrentSection,
			state.invertSidebar,
			state.searchProducts,
			state.setSearchProducts,
		])
	);
	const [setInvertMenu] = useStore(useShallow((state) => [state.setInvertMenu]));
	const [inverted, setInverted] = useState(_inverted || invertSidebar);
	const [sections, setSections] = useState<{ title: string | undefined; id: string }[]>([]);
	const [open, setOpen] = useState(false);
	const [searchFocus, setSearchFocus] = useState(false);
	const [maxHeight, setMaxHeight] = useState<string | undefined>();
	const { scrolledPosition, documentHeight, isScrolling } = useScrollInfo();
	const { innerWidth } = useWindowSize();

	const isProductsPage = section === 'product' && !parent;
	const isProductPage = parent === 'product';
	const isProjectPage = parent === 'project';

	const resetSearch = useCallback(() => {
		setSearchProducts('');
	}, [setSearchProducts]);

	const handleClick = (e: any) => setOpen(false);

	const updateSections = () => {
		const items = document.querySelectorAll<HTMLElement>('section[data-section-id]');
		const sections = items.length ? Array.from(items).map((s) => ({ title: s.dataset.sectionTitle, id: s.id })) : [];
		setSections(sections);
	};

	useEffect(() => {
		setTimeout(() => updateSections(), 0);
		setTimeout(() => updateSections(), 300);
	}, [path]);

	useEffect(() => {
		if (isScrolling) return;
		// Highlight nav section on scroll
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-section-id]'));

		if (!sections.length) return;

		const calcPos = (el: HTMLElement) =>
			Math.abs(scrolledPosition - el.offsetTop + parseInt(getComputedStyle(el, null).scrollMarginTop)) + el.offsetTop;

		const { id } = sections.sort((a, b) => (calcPos(a) > calcPos(b) ? 1 : -1))[0];

		setCurrentSection(id);
	}, [isScrolling, scrolledPosition, documentHeight, setCurrentSection, setInverted, setInvertMenu, layout, _inverted]);

	useEffect(() => {
		if (!currentSection || !innerWidth) return;

		const isDesktop = innerWidth > parseInt(styleVariables.tablet as string);
		const section = document.getElementById(currentSection);
		const header = document.getElementById('sidebar-header');

		if (!section || !header || !isDesktop) return;

		const bg = getComputedStyle(section, null).backgroundColor;
		const fg = getComputedStyle(header, null).color;

		if (_inverted && bg === fg) setInverted(false);
		else setInverted(_inverted);
	}, [currentSection, setInverted, _inverted, innerWidth]);

	useEffect(() => {
		if (section) return;
		const footer = document.getElementById('footer');
		setMaxHeight(`calc(100vh - ${footer?.clientHeight}px`);
	}, [section, setMaxHeight]);

	useEffect(() => {
		setTimeout(() => resetSearch(), 100);
	}, [path, resetSearch]);

	if (!sidebar) return null;

	return (
		<aside
			id='sidebar'
			key={path}
			className={cn(s.sidebar, inverted && s.inverted, isProductsPage && s.short)}
			style={{ backgroundColor: `var(--${color})`, maxHeight }}
		>
			<h3 id='sidebar-header' className={cn(open && s.open)} onClick={() => setOpen(!open)}>
				{title}
				<span className={cn(s.arrow, open && s.open)}>›</span>
			</h3>
			<nav className={cn(open && s.open)} style={{ backgroundColor: `var(--${color})` }}>
				<ul>
					{sections?.map((section, idx) => (
						<li key={idx}>
							<a
								href={`${pathname}#${section.id}`}
								data-section-id={section.id}
								className={cn(section.id === currentSection && s.active)}
								onClick={(e) => {
									handleClick(e);
									setCurrentSection(section.id);
								}}
							>
								{section.title}
							</a>
						</li>
					))}
					<li className={cn(s.search, isProductsPage && s.show)}>
						<input
							type='text'
							placeholder='Search'
							value={searchProducts || ''}
							onChange={(e) => setSearchProducts(e.target.value)}
							onFocus={() => setSearchFocus(true)}
							onBlur={() => setTimeout(() => setSearchFocus(false), 100)}
						/>
						<button onClick={resetSearch} className={cn(s.close, searchFocus && s.show)}>
							×
						</button>
					</li>
				</ul>
			</nav>

			<div className={cn(s.footer, isProductPage && s.product, 'medium')}>
				{isProductPage && (
					<span onClick={() => router.push('/products')} ref={backRef}>
						<ArrowLink reversed={true} hoverRef={backRef}>
							All Products
						</ArrowLink>
					</span>
				)}
				{isProjectPage && (
					<span onClick={() => router.push('/professionals/projects')} ref={backRef}>
						<ArrowLink reversed={true} hoverRef={backRef}>
							All Projects
						</ArrowLink>
					</span>
				)}
			</div>
		</aside>
	);
}
