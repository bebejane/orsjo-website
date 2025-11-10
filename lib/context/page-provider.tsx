'use client';

import { useContext, createContext } from 'react';
import { findMenuItem, Menu, MenuItem, MenuSection } from '@/lib/menu';

export type UsePageProps = MenuItem;

export type PageProviderProps = {
	children: React.ReactNode;
	pathname: string;
	country: string;
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

export const PageProvider = ({ children, pathname, country, menu }: PageProviderProps) => {
	const item = findMenuItem(pathname, menu);
	//if (!item) console.warn(`Invalid page (PageProvider): ${pathname}`);
	const state = !item ? initialState : item;
	return <PageContext.Provider value={state}>{children}</PageContext.Provider>;
};

export const usePage = (): UsePageProps => useContext(PageContext);
