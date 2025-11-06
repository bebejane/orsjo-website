'use client';

import { useContext, createContext } from 'react';
import { findMenuItem, Menu, MenuItem } from '@/lib/menu';

export type UsePageProps = {
	title: string | undefined;
	layout: 'normal' | 'full';
	inverted: boolean;
	color: string;
	sidebar: boolean;
	footerLine: boolean;
};

export type PageProviderProps = {
	children: React.ReactNode;
	pathname: string;
	country: string;
	menu: Menu;
};

const initialState: UsePageProps = {
	title: undefined,
	layout: 'normal',
	inverted: false,
	color: 'white',
	sidebar: true,
	footerLine: false,
};

export const PageContext = createContext(initialState);

export const PageProvider = ({ children, pathname, country, menu }: PageProviderProps) => {
	const item = findMenuItem(pathname, menu);
	if (!item) console.error('Invalid page (PageProvider): ' + pathname);

	const state = !item
		? initialState
		: ({
				...initialState,
				title: item.title,
				layout: item.layout,
				inverted: item.inverted,
				color: item.color,
				sidebar: item.sidebar,
				footerLine: item.footerLine,
			} as UsePageProps);

	return <PageContext.Provider value={state}>{children}</PageContext.Provider>;
};

export const usePage = (): UsePageProps => useContext(PageContext);
