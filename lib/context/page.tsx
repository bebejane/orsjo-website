'use client';

import { useContext, createContext } from 'react';

export type UsePageProps = {
	title: string | undefined;
	layout: 'normal' | 'full';
	menu: 'normal' | 'inverted';
	color: string;
	sidebar: boolean;
	footerLine?: boolean;
};

const initialState: UsePageProps = {
	title: undefined,
	layout: 'normal',
	menu: 'normal',
	color: '--white',
	sidebar: true,
	footerLine: false,
};

export const getPageAttributes = (pathname: string, country: string): UsePageProps => {
	const rootPath = pathname.split('/')[1];

	switch (rootPath) {
		case 'products':
			return {
				title: 'Products',
				layout: 'normal',
				menu: 'normal',
				color: '--white',
				sidebar: true,
			};
		case 'designers':
			return {
				title: 'Designers',
				layout: 'full',
				menu: 'inverted',
				color: '--green',
				sidebar: false,
			};
		case 'professionals':
			if (pathname.includes('bespoke'))
				return {
					title: 'Bespoke',
					layout: 'normal',
					menu: 'inverted',
					color: '--gray',
					sidebar: false,
				};
			return {
				title: 'Professionals',
				layout: 'normal',
				menu: 'inverted',
				color: '--gray',
				sidebar: true,
			};
		case 'about':
			if (pathname.includes('jobs'))
				return {
					title: 'Jobs',
					layout: 'normal',
					menu: 'inverted',
					color: '--black',
					sidebar: true,
				};
			if (pathname.includes('news'))
				return {
					title: 'News',
					layout: 'full',
					menu: 'inverted',
					color: '--black',
					sidebar: true,
					footerLine: true,
				};
			return {
				title: 'About',
				layout: 'full',
				menu: 'inverted',
				color: '--black',
				sidebar: false,
				footerLine: true,
			};
		case 'contact':
			return {
				title: 'Contact',
				layout: 'normal',
				menu: 'normal',
				color: '--beige',
				sidebar: true,
				footerLine: true,
			};
		case 'support':
			return {
				title: 'Support',
				layout: 'normal',
				menu: 'inverted',
				color: '--copper',
				sidebar: true,
			};
		default:
			return { title: 'Home', layout: 'full', color: '--black', menu: 'inverted', sidebar: false };
	}
};

export const PageContext = createContext(initialState);

export type PageProviderProps = {
	children: React.ReactNode;
	pathname: string;
	country: string;
};

export const PageProvider = ({ children, pathname, country }: PageProviderProps) => {
	const value = getPageAttributes(pathname, country);
	return (
		<PageContext.Provider value={{ ...initialState, ...value, color: value.color }}>{children}</PageContext.Provider>
	);
};

export const usePage = (): UsePageProps => {
	return useContext(PageContext);
};
