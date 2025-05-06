'use client';

import s from './Sidebar.module.scss';
import cn from 'classnames';
import { useStore, useShallow } from '@/lib/store';
import { useRouter, usePathname } from 'next/navigation';
import { usePage } from '@/lib/context/page';
import { useEffect, useState, useCallback, useRef } from 'react';
import { ArrowLink } from '@/components';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { styleVariables } from '@/lib/utils';
import { useWindowSize } from 'rooks';

export type SidebarProps = { title: string; show: boolean };

const getPageType = (pathname: string) => {
	const p = pathname.toLowerCase();
	return p === '/products'
		? 'products'
		: p.startsWith('/products/')
			? 'product'
			: p.startsWith('/professionals/projects/')
				? 'project'
				: undefined;
};

export default function Sidebar({ show }: SidebarProps) {
	const { menu, layout, color, title } = usePage();
	const router = useRouter();
	const path = usePathname();
	const pathname = path.includes('#') ? path.substring(0, path.indexOf('#')) : path;
	const [currentSection, setCurrentSection, invertSidebar, searchProducts, setSearchProducts] =
		useStore(
			useShallow((state) => [
				state.currentSection,
				state.setCurrentSection,
				state.invertSidebar,
				state.searchProducts,
				state.setSearchProducts,
			])
		);
	const [setInvertMenu] = useStore(useShallow((state) => [state.setInvertMenu]));
	const [inverted, setInverted] = useState(menu === 'inverted' || invertSidebar);
	const [sections, setSections] = useState<{ title: string | undefined; id: string }[]>([]);
	const [pageType, setPageType] = useState<string | undefined>(getPageType(pathname));
	const [open, setOpen] = useState(false);
	const [searchFocus, setSearchFocus] = useState(false);
	const [maxHeight, setMaxHeight] = useState<string | undefined>();
	const { scrolledPosition, documentHeight, isScrolling } = useScrollInfo();
	const { innerWidth } = useWindowSize();
	const backRef = useRef(null);

	const resetSearch = useCallback(() => {
		setSearchProducts('');
	}, [setSearchProducts]);

	const handleClick = (e: any) => setOpen(false);

	const updateSections = () => {
		const items = document.querySelectorAll<HTMLElement>('section[data-section-id]');
		const sections = items.length
			? Array.from(items).map((s) => ({ title: s.dataset.sectionTitle, id: s.id }))
			: [];
		setSections(sections);
	};

	useEffect(() => {
		setTimeout(() => updateSections(), 0);
		setTimeout(() => updateSections(), 300);
	}, [path]);

	useEffect(() => {
		if (isScrolling) return;
		// Highlight nav section on scroll\
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-section-id]'));

		if (!sections.length) return;

		const calcPos = (el: HTMLElement) =>
			Math.abs(
				scrolledPosition - el.offsetTop + parseInt(getComputedStyle(el, null).scrollMarginTop)
			) + el.offsetTop;
		const { id } = sections.sort((a, b) => (calcPos(a) > calcPos(b) ? 1 : -1))[0];

		setCurrentSection(id);
	}, [
		isScrolling,
		scrolledPosition,
		documentHeight,
		setCurrentSection,
		setInverted,
		setInvertMenu,
		layout,
		menu,
	]);

	useEffect(() => {
		if (!currentSection) return;

		const isDesktop = innerWidth > parseInt(styleVariables.tablet as string);
		const section = document.getElementById(currentSection);
		const header = document.getElementById('sidebar-header');

		if (!section || !header || !isDesktop) return;

		const bg = getComputedStyle(section, null).backgroundColor;
		const fg = getComputedStyle(header, null).color;

		if (menu === 'inverted' && bg === fg) setInverted(false);
		else setInverted(menu === 'inverted');
	}, [currentSection, setInverted, menu, innerWidth]);

	useEffect(() => {
		if (pageType) return;
		const footer = document.getElementById('footer');
		setMaxHeight(`calc(100vh - ${footer?.clientHeight}px`);
	}, [pageType, setMaxHeight]);

	useEffect(() => {
		setTimeout(() => resetSearch(), 100);
	}, [path, resetSearch]);

	if (!show) return null;

	return (
		<aside
			id='sidebar'
			key={path}
			className={cn(s.sidebar, inverted && s.inverted, pageType === 'products' && s.short)}
			style={{ backgroundColor: color, maxHeight }}
		>
			<h3 id='sidebar-header' className={cn(open && s.open)} onClick={() => setOpen(!open)}>
				{title}
				<span className={cn(s.arrow, open && s.open)}>›</span>
			</h3>
			<nav className={cn(open && s.open)}>
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
					<li className={cn(s.search, pageType === 'products' && s.show)}>
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

			<div className={cn(s.footer, 'medium')}>
				{pageType === 'product' && (
					<span onClick={() => router.push('/products')} ref={backRef}>
						<ArrowLink reversed={true} hoverRef={backRef}>
							All Products
						</ArrowLink>
					</span>
				)}
				{pageType === 'project' && (
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
