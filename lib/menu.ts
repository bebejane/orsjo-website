import { sortSwedish } from 'next-dato-utils/utils';
import { apiQuery } from 'next-dato-utils/api';
import { MenuDocument } from '@/graphql';
import { sectionId } from '@/lib/utils';

export type MenuColor = 'white' | 'black' | 'green' | 'gray' | 'copper' | 'beige';
export type Menu = MenuItem[];
export type MenuItem = {
	type: 'home' | 'product' | 'designer' | 'professional' | 'about' | 'support' | 'contact';
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
		type: 'home',
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
		type: 'product',
		title: 'Products',
		slug: '/products',
		layout: 'normal',
		inverted: false,
		footerLine: false,
		sidebar: true,
		color: 'white',
		sub: [],
		index: true,
	},
	{
		type: 'designer',
		title: 'Designers',
		slug: '/designers',
		layout: 'full',
		inverted: true,
		footerLine: false,
		sidebar: false,
		color: 'green',
		sub: [],
	},
	{
		type: 'professional',
		title: 'Professionals',
		slug: '/professionals',
		layout: 'normal',
		inverted: false,
		footerLine: false,
		sidebar: true,
		color: 'gray',
		sub: [
			{
				type: 'professional',
				title: 'Projects',
				slug: '/professionals/projects',
				layout: 'normal',
				inverted: true,
				footerLine: false,
				sidebar: true,
				color: 'gray',
			},
			{
				type: 'professional',
				title: 'Bespoke',
				slug: '/professionals/bespoke',
				layout: 'full',
				inverted: true,
				footerLine: false,
				sidebar: false,
				color: 'gray',
			},
			{
				type: 'professional',
				title: 'Downloads',
				slug: '/professionals/downloads',
				layout: 'normal',
				inverted: true,
				footerLine: false,
				sidebar: true,
				color: 'gray',
			},
			{
				type: 'professional',
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
		type: 'about',
		title: 'About',
		slug: '/about',
		layout: 'full',
		inverted: true,
		color: 'black',
		sidebar: false,
		footerLine: true,
		sub: [
			{
				type: 'about',
				title: 'About Us',
				slug: '/about',
				layout: 'full',
				inverted: true,
				color: 'black',
				sidebar: false,
				footerLine: true,
			},
			{
				type: 'about',
				title: 'Sustainability',
				slug: '/about/sustainability',
				layout: 'full',
				inverted: true,
				color: 'black',
				sidebar: false,
				footerLine: true,
			},
			{
				type: 'about',
				title: 'News',
				slug: '/about/news',
				layout: 'full',
				inverted: true,
				color: 'black',
				sidebar: true,
				footerLine: true,
			},
			{
				type: 'about',
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
		type: 'support',
		title: 'Support',
		slug: '/support',
		layout: 'normal',
		inverted: true,
		color: 'copper',
		sidebar: true,
		footerLine: false,
		sub: [
			{
				type: 'support',
				title: 'FAQ',
				slug: '/support/faq',
				layout: 'normal',
				inverted: true,
				color: 'copper',
				sidebar: true,
				footerLine: false,
			},
			{
				type: 'support',
				title: 'Manuals',
				slug: '/support/manuals',
				layout: 'normal',
				inverted: true,
				color: 'copper',
				sidebar: true,
				footerLine: false,
			},
			{
				type: 'support',
				title: 'Terms & Conditions',
				slug: '/support/terms-conditions',
				layout: 'normal',
				inverted: true,
				color: 'copper',
				sidebar: true,
				footerLine: false,
			},
		],
	},
	{
		type: 'contact',
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
				type: 'contact',
				title: 'Information',
				slug: '/contact#information',
				layout: 'normal',
				inverted: true,
				color: 'beige',
				sidebar: true,
				footerLine: false,
			},
			{
				type: 'contact',
				title: 'People',
				slug: '/contact#people',
				layout: 'normal',
				inverted: true,
				color: 'beige',
				sidebar: true,
				footerLine: false,
			},
			{
				type: 'contact',
				title: 'Showrooms',
				slug: '/contact#showrooms',
				layout: 'normal',
				inverted: true,
				color: 'beige',
				sidebar: true,
				footerLine: false,
			},
			{
				type: 'contact',
				title: 'Agents & Distributors',
				slug: '/contact#agentsdistributors',
				layout: 'normal',
				inverted: true,
				color: 'beige',
				sidebar: true,
				footerLine: false,
			},
			{
				type: 'contact',
				title: 'Retailers',
				slug: '/contact#retailers',
				layout: 'normal',
				inverted: true,
				color: 'beige',
				sidebar: true,
				footerLine: false,
			},
			{
				type: 'contact',
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
	const { allDesigners, allProductCategories, allProducts } = await apiQuery(MenuDocument, { all: true });

	const footerMaxLength = 8;

	const menu = base.map((item) => {
		let sub: MenuItem[] | null = null;
		let footerSub: MenuItem[] | null = null;
		switch (item.type) {
			case 'product':
				sub = allProducts.map(({ title, slug }) => ({
					type: item.type,
					title,
					slug: `/products/${slug}`,
					inverted: false,
					footerLine: false,
					sidebar: true,
					color: 'white',
				})) as MenuItem[];

				footerSub = allProductCategories.map(({ id, name }) => ({
					...item,
					title: name as string,
					slug: `/products#${sectionId(name as string).id}`,
				}));

				break;
			case 'designer':
				sub = sortSwedish<MenuQuery['allDesigners'][0]>(allDesigners, 'name')
					.filter(({ id }) => allProducts.find((p) => p.designer?.id === id))
					.map((el) => ({
						type: item.type,
						title: el.name,
						slug: `/designers/${el.slug}`,
						layout: 'full',
						inverted: true,
						footerLine: false,
						sidebar: false,
						color: 'green',
					})) as MenuItem[];

				footerSub = structuredClone(sub)
					.sort(() => (Math.random() > 0.5 ? 1 : -1))
					.slice(0, footerMaxLength);
				break;
		}
		return { ...item, sub: sub ? sub : item.sub, footerSub };
	});

	return menu as Menu;
};

export const findMenuItem = (pathname: string, menu: Menu): MenuItem | null => {
	const item = menu
		.map((m) => [m, ...(m.sub ? m.sub : [])])
		.flat()
		.reduce((acc: MenuItem | null, item: MenuItem): MenuItem | null => {
			if (acc) return acc;
			if (item.slug === pathname) return item;
			return null;
		}, null);

	return item;
};
