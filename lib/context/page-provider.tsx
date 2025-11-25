'use client';

import { useContext, createContext, useEffect } from 'react';
import { findMenuItem, Menu, MenuItem, MenuSection } from '@/lib/menu';
import { usePathname } from '@/i18n/routing';

export type UsePageProps = MenuItem;

export type PageProviderProps = {
	children: React.ReactNode;
	menu: Menu;
};

const initialState: MenuItem = {
	section: 'home',
	parent: undefined,
	title: 'Home',
	layout: 'full',
	inverted: false,
	color: 'white',
	sidebar: false,
	slug: '/',
	footerLine: false,
};

export const PageContext = createContext(initialState);

function handlePageChange(page: MenuItem) {
	console.log('set page');
	document.getElementById('layout')?.style.setProperty('background-color', `var(--${page.color})`);
	document.getElementById('content')?.setAttribute('data-type', page.layout);
}

export const PageProvider = ({ children, menu }: PageProviderProps) => {
	const pathname = usePathname();
	const item = findMenuItem(pathname, menu);
	const state = !item ? initialState : item;

	useEffect(() => {
		handlePageChange(state);
	}, [pathname]);

	return <PageContext.Provider value={state}>{children}</PageContext.Provider>;
};

export const usePage = (): UsePageProps => useContext(PageContext);
