import { apiQuery } from './dato/api';
import { GetProductCategories, GetAllDesigners } from '/graphql';
import { sectionId } from './utils';
import type { DocumentNode } from 'graphql/language/ast';

export type MenuItem = {
  type: string,
  label: string,
  slug: string,
  sub?: MenuItem[],
  index?:boolean
}

export type Menu = MenuItem[]

export type MenuQuery = {
  designers: DesignerRecord[],
  productCategories: ProductCategoryRecord[]
}

const base: Menu = [
  { type: 'product', label: 'Products', slug: '/products', sub: [], index:true},
  { type: 'designer', label: 'Designers', slug: '/designers', sub: [] },
  {
    type: 'professional', label: 'Professionals', slug: '/professionals', sub: [
      { type: 'professional', label: 'Projects', slug: '/professionals/projects' },
      { type: 'professional', label: 'Bespoke', slug: '/professionals/bespoke' },
      { type: 'professional', label: 'Downloads', slug: '/professionals/downloads' },
      { type: 'professional', label: 'Factory Visit', slug: '/professionals/factory-visit' }
    ]
  },
  {
    type: 'about', label: 'About', slug: '/about', sub: [
      { type: 'about', label: 'About', slug: '/about' },
      { type: 'about', label: 'Sustainability', slug: '/about/sustainability' },
      { type: 'about', label: 'Press', slug: '/about/press' },
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
    type: 'contact', label: 'Contact', slug: '/contact', index:true, sub: [
      { type: 'contact', label: 'Information', slug: '/contact#information' },
      { type: 'contact', label: 'Staff', slug: '/contact#staff' },
      { type: 'contact', label: 'Showrooms', slug: '/contact#showrooms' },
      { type: 'contact', label: 'Suppliers', slug: '/contact#agentsdistributors' },
      { type: 'contact', label: 'Retailers', slug: '/contact#retailers' },
    ]
  },
]

export const generate = async () => {

  const queries: DocumentNode[] = [GetProductCategories, GetAllDesigners];
  const { designers, productCategories } = await apiQuery(queries) as MenuQuery

  const menu = base.map(item => {
    let sub: MenuItem[];
    switch (item.type) {
      case 'product':
        sub = productCategories.map(el => ({
          type: item.type,
          label: el.name,
          slug: `/products#${sectionId(el.name).id}`
        }))
        break;
      case 'designer':
        sub = designers.map(el => ({
          type: item.type,
          label: el.name,
          slug: `/designers/${el.slug}`
        }))
        break;

      default:
        break;
    }
    return { ...item, sub: sub ? sub : item.sub }
  })
  return menu
}




