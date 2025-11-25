import { sortSwedish } from 'next-dato-utils/utils';
import { apiQuery } from 'next-dato-utils/api';
import { MenuDocument } from '@/graphql';
import { sectionId } from '@/lib/utils';

export type MenuSection =
	| 'home'
	| 'product'
	| 'designer'
	| 'professional'
	| 'about'
	| 'support'
	| 'contact'
	| 'project';
export type MenuColor = 'white' | 'black' | 'green' | 'gray' | 'copper' | 'beige';
export type Menu = MenuItem[];
export type MenuItem = {
	section?: MenuSection;
	parent?: MenuSection;
	title: string;
	slug: string;
	layout: 'normal' | 'full';
	sidebar: boolean;
	inverted: boolean;
	color: MenuColor;
	footerLine?: boolean;
	isHash?: boolean;
	index?: boolean;
	modal?: boolean;
	sub?: MenuItem[];
	footerSub?: MenuItem[];
};

const base: Menu = [
	{
		section: 'home',
		title: 'Home',
		slug: '/',
		layout: 'full',
		inverted: true,
		footerLine: false,
		sidebar: false,
		color: 'black',
		index: true,
	},
	{
		section: 'product',
		title: 'Products',
		slug: '/products',
		layout: 'normal',
		inverted: false,
		footerLine: false,
		sidebar: true,
		color: 'white',
		index: true,
	},
	{
		section: 'designer',
		title: 'Designers',
		slug: '/designers',
		layout: 'full',
		inverted: true,
		footerLine: false,
		sidebar: false,
		color: 'green',
	},
	{
		section: 'professional',
		title: 'Professionals',
		slug: '/professionals',
		layout: 'normal',
		inverted: false,
		footerLine: false,
		sidebar: true,
		color: 'gray',
		sub: [
			{
				section: 'project',
				parent: 'professional',
				title: 'Projects',
				slug: '/professionals/projects',
				layout: 'normal',
				inverted: true,
				footerLine: false,
				sidebar: true,
				color: 'gray',
			},
			{
				parent: 'professional',
				title: 'Bespoke',
				slug: '/professionals/bespoke',
				layout: 'full',
				inverted: true,
				footerLine: false,
				sidebar: false,
				color: 'gray',
			},
			{
				parent: 'professional',
				title: 'Downloads',
				slug: '/professionals/downloads',
				layout: 'normal',
				inverted: true,
				footerLine: false,
				sidebar: true,
				color: 'gray',
			},
			{
				parent: 'professional',
				title: 'Colors & Materials',
				slug: '/professionals/colors-and-materials',
				layout: 'normal',
				inverted: true,
				footerLine: false,
				sidebar: true,
				color: 'gray',
			},
		],
	},
	{
		section: 'about',
		title: 'About',
		slug: '/about',
		layout: 'full',
		inverted: true,
		color: 'black',
		sidebar: false,
		footerLine: true,
		sub: [
			{
				parent: 'about',
				title: 'About Us',
				slug: '/about',
				layout: 'full',
				inverted: true,
				color: 'black',
				sidebar: false,
				footerLine: true,
			},
			{
				parent: 'about',
				title: 'Sustainability',
				slug: '/about/sustainability',
				layout: 'full',
				inverted: true,
				color: 'black',
				sidebar: false,
				footerLine: true,
			},
			{
				parent: 'about',
				title: 'News',
				slug: '/about/news',
				layout: 'full',
				inverted: true,
				color: 'black',
				sidebar: false,
				footerLine: true,
			},
			{
				parent: 'about',
				title: 'Jobs',
				slug: '/about/jobs',
				layout: 'normal',
				inverted: true,
				color: 'black',
				sidebar: true,
				footerLine: false,
			},
		],
	},
	{
		section: 'support',
		title: 'Support',
		slug: '/support',
		layout: 'normal',
		inverted: true,
		color: 'copper',
		sidebar: true,
		footerLine: false,
		sub: [
			{
				parent: 'support',
				title: 'FAQ',
				slug: '/support/faq',
				layout: 'normal',
				inverted: true,
				color: 'copper',
				sidebar: true,
				footerLine: false,
			},
			{
				parent: 'support',
				title: 'Manuals',
				slug: '/support/manuals',
				layout: 'normal',
				inverted: true,
				color: 'copper',
				sidebar: true,
				footerLine: false,
			},
			{
				parent: 'support',
				title: 'Terms & Conditions',
				slug: '/support/terms-conditions',
				layout: 'normal',
				inverted: true,
				color: 'copper',
				sidebar: true,
				footerLine: false,
			},
			{
				parent: 'support',
				title: 'Privacy Policy',
				slug: '/support/privacy-policy',
				layout: 'normal',
				inverted: true,
				color: 'copper',
				sidebar: true,
				footerLine: false,
			},
		],
	},
	{
		section: 'contact',
		title: 'Contact',
		slug: '/contact',
		layout: 'normal',
		inverted: true,
		color: 'beige',
		sidebar: true,
		footerLine: false,
		index: true,
		sub: [
			{
				parent: 'contact',
				title: 'Information',
				slug: '/contact#information',
				layout: 'normal',
				inverted: true,
				color: 'beige',
				sidebar: true,
				footerLine: false,
			},
			{
				parent: 'contact',
				title: 'People',
				slug: '/contact#people',
				layout: 'normal',
				inverted: true,
				color: 'beige',
				sidebar: true,
				footerLine: false,
			},
			{
				parent: 'contact',
				title: 'Showrooms',
				slug: '/contact#showrooms',
				layout: 'normal',
				inverted: true,
				color: 'beige',
				sidebar: true,
				footerLine: false,
			},
			{
				parent: 'contact',
				title: 'Agents & Distributors',
				slug: '/contact#agentsdistributors',
				layout: 'normal',
				inverted: true,
				color: 'beige',
				sidebar: true,
				footerLine: false,
			},
			{
				parent: 'contact',
				title: 'Retailers',
				slug: '/contact#retailers',
				layout: 'normal',
				inverted: true,
				color: 'beige',
				sidebar: true,
				footerLine: false,
			},
			{
				parent: 'contact',
				title: 'Contact Us',
				slug: '/contact/message-us',
				layout: 'normal',
				inverted: true,
				color: 'beige',
				sidebar: false,
				footerLine: false,
				modal: true,
			},
		],
	},
];

export const buildMenu = async () => {
	const { allDesigners, allProductCategories, allProducts, allProjects } = await apiQuery(MenuDocument, { all: true });

	const footerMaxLength = 8;

	function transformMenuItem(item: MenuItem): MenuItem {
		let sub: MenuItem[] | undefined = undefined;
		let footerSub: MenuItem[] | undefined = undefined;

		switch (item.section) {
			case 'product':
				sub = allProducts.map(({ title, slug }) => ({
					parent: 'product',
					title,
					slug: `/products/${slug}`,
					inverted: false,
					footerLine: false,
					sidebar: true,
					color: 'white',
				})) as MenuItem[];

				footerSub = allProductCategories.map(({ id, name, namePlural }) => ({
					...item,
					section: undefined,
					parent: 'product',
					title: namePlural as string,
					slug: `/products#${sectionId(namePlural as string).id}`,
				})) as MenuItem[];

				break;
			case 'designer':
				sub = sortSwedish<MenuQuery['allDesigners'][0]>(allDesigners, 'name')
					.filter(({ id }) => allProducts.find((p) => p.designer?.id === id))
					.map((el) => ({
						parent: 'designer',
						title: el.name,
						slug: `/designers/${el.slug}`,
						layout: 'full',
						inverted: true,
						footerLine: false,
						sidebar: false,
						color: 'green',
					})) as MenuItem[];

				footerSub = structuredClone(sub ?? [])
					.sort(() => (Math.random() > 0.5 ? 1 : -1))
					.slice(0, footerMaxLength);
				break;
			case 'professional':
				sub = item.sub?.map((s) => transformMenuItem(s));
				break;
			case 'project':
				sub = allProjects.map(({ title, slug }) => ({
					parent: 'project',
					title,
					slug: `/professionals/projects/${slug}`,
					layout: 'normal',
					inverted: false,
					footerLine: false,
					sidebar: true,
					color: 'gray',
				}));
				break;
		}

		return {
			...item,
			sub: sub ? sub?.map((s) => transformMenuItem(s)) : item.sub,
			footerSub,
		} as MenuItem;
	}

	const menu = base.map((item) => transformMenuItem(item)) as Menu;

	return menu;
};

export const findMenuItem = (pathname: string, menu: MenuItem[]): MenuItem | null => {
	function flattenMenu(items: MenuItem[]): MenuItem[] {
		return items.map((m) => [m, ...(m.sub ? flattenMenu(m.sub) : [])]).flat();
	}

	const item = flattenMenu(menu).reduce((acc: MenuItem | null, item: MenuItem | null) => {
		if (acc) return acc;
		if (item?.slug === pathname) return item;
		return null;
	}, null);

	return item;
};
