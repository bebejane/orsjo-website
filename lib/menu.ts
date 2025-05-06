import { sectionId } from './utils';
import { sortSwedish } from './utils';
import { apiQuery } from 'next-dato-utils/api';
import { MenuDocument } from "@/graphql";

export type Menu = MenuItem[]

export type MenuItem = {
  type: string,
  label: string,
  slug: string,
  isHash?: boolean,
  sub?: MenuItem[],
  index?: boolean
}

const base: Menu = [
  { type: 'product', label: 'Products', slug: '/products', sub: [], index: true },
  { type: 'designer', label: 'Designers', slug: '/designers', sub: [] },
  {
    type: 'professional', label: 'Professionals', slug: '/professionals', sub: [
      { type: 'professional', label: 'Projects', slug: '/professionals/projects' },
      { type: 'professional', label: 'Bespoke', slug: '/professionals/bespoke' },
      { type: 'professional', label: 'Downloads', slug: '/professionals/downloads' },
      { type: 'professional', label: 'Colors & Materials', slug: '/professionals/colors-and-materials' },
      //{ type: 'professional', label: 'Factory Visit', slug: '/professionals/factory-visit' }
    ]
  },
  {
    type: 'about', label: 'About', slug: '/about', sub: [
      { type: 'about', label: 'About Us', slug: '/about' },
      { type: 'about', label: 'Sustainability', slug: '/about/sustainability' },
      //{ type: 'about', label: 'Press', slug: '/about/press' },
      { type: 'about', label: 'News', slug: '/about/news' },
      { type: 'about', label: 'Jobs', slug: '/about/jobs' }
    ]
  },
  {
    type: 'support', label: 'Support', slug: '/support', sub: [
      { type: 'support', label: 'FAQ', slug: '/support/faq' },
      { type: 'support', label: 'Manuals', slug: '/support/manuals' }
    ]
  },
  {
    type: 'contact', label: 'Contact', slug: '/contact', index: true, sub: [
      { type: 'contact', label: 'Information', slug: '/contact#information' },
      { type: 'contact', label: 'People', slug: '/contact#people' },
      { type: 'contact', label: 'Showrooms', slug: '/contact#showrooms' },
      { type: 'contact', label: 'Agents & Distributors', slug: '/contact#agentsdistributors' },
      { type: 'contact', label: 'Retailers', slug: '/contact#retailers' },
    ]
  },
]

export const buildMenu = async () => {

  const { allDesigners, allProductCategories, allProducts } = await apiQuery<MenuQuery, MenuQueryVariables>(MenuDocument, { all: true });

  const menu = base.map(item => {
    let sub: MenuItem[] | null = null;
    switch (item.type) {
      case 'product':
        sub = allProductCategories.map(el => ({
          type: item.type,
          label: el.namePlural ?? null,
          slug: `/products#${sectionId(el.namePlural ?? undefined).id}`,
          isHash: true
        })) as MenuItem[]
        break;
      case 'designer':
        sub = sortSwedish<MenuQuery['allDesigners'][0]>(allDesigners, 'name').filter(({ id }) => allProducts.find((p) => p.designer?.id === id)).map(el => ({
          type: item.type,
          label: el.name,
          slug: `/designers/${el.slug}`
        })) as MenuItem[]
        break;
    }

    return { ...item, sub: sub ? sub : item.sub }
  })

  return menu
}