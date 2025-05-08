import { DatoCmsConfig } from 'next-dato-utils/config';
import client from './lib/client';

export default {
  description: 'Örsjo is a digital platform for the Norwegian public sector.',
  name: 'Örsjo',
  url: {
    dev: 'http://localhost:3000',
    public: 'https://orsjo-dev.vercel.app',
  },
  theme: {
    background: '#fff',
    color: '#000',
  },
  routes: {
    'about': async ({ id }, locale) => ['/about'],
    'bespoke': async ({ id }, locale) => ['/professionals/bespoke'],
    'catalogue': async ({ id }, locale) => ['/professionals/downloads'],
    'color_material': async ({ id }, locale) => ['/professionals/colors-and-materials'],
    'color_material_intro': async ({ id }, locale) => ['/professionals/colors-and-materials'],
    'color_material_type': async ({ id }, locale) => ['/professionals/colors-and-materials'],
    'contact': async ({ id }, locale) => ['/contact'],
    'country': async ({ id }, locale) => ['/contact'],
    'designer': async ({ slug }, locale) => [`/designers/${slug}`],
    'distributor': async ({ id }, locale) => ['/contact'],
    'downloads_start': async ({ id }, locale) => ['/professionals/downloads'],
    'factory_visit': async ({ id }, locale) => ['/professionals/factory-visit'],
    'faq': async ({ id }, locale) => ['/support/faq'],
    'faq_category': async ({ id }, locale) => ['/support/faq'],
    'faq_start': async ({ id }, locale) => ['/support/faq'],
    'job': async ({ id }, locale) => ['/about/jobs'],
    'manual': async ({ id }, locale) => ['/support/manuals'],
    'news': async ({ slug }, locale) => [`/about/news/${slug}`, `/`],
    'product': async ({ slug }, locale) => [`/products/${slug}`, `/professionals/downloads`, `/support/manuals`, `/products`, `/`],
    'product_accessory': async ({ id }, locale) => productReferences(id),
    'product_category': async ({ id }, locale) => productReferences(id),
    'product_color': async ({ id }, locale) => productReferences(id),
    'product_connection': async ({ id }, locale) => productReferences(id),
    'product_dimmable': async ({ id }, locale) => productReferences(id),
    'product_electrical': async ({ id }, locale) => productReferences(id),
    'product_family': async ({ id }, locale) => productReferences(id),
    'product_feature': async ({ id }, locale) => productReferences(id),
    'product_lightsource': async ({ id }, locale) => productReferences(id),
    'product_material': async ({ id }, locale) => productReferences(id),
    'product_model_name': async ({ id }, locale) => productReferences(id),
    'product_mounting': async ({ id }, locale) => productReferences(id),
    'product_socket': async ({ id }, locale) => productReferences(id),
    'product_start': async ({ id }, locale) => ['/products'],
    'project': async ({ slug }, locale) => [`/professionals/projects/${slug}`, `/professionals/projects`, `/`],
    'project_start': async ({ id }, locale) => ['/professionals/projects'],
    'project_type': async ({ id }, locale) => ['/professionals/projects'],
    'reseller': async ({ id }, locale) => ['/contact'],
    'showroom': async ({ id }, locale) => ['/contact'],
    'staff': async ({ id }, locale) => [`/contact`],
    'start': async (record, locale) => [`/`],
    'sustainability': async ({ id }, locale) => ['/about/sustainability'],
  },
  sitemap: async () => {
    return []
  }
} satisfies DatoCmsConfig


async function productReferences(itemId: string): Promise<string[]> {
  if (!itemId) throw new Error('Missing reference: itemId')
  const paths: string[] = []
  const products = await client.items.references(itemId, { version: 'published', limit: 500 })
  if (products.length) {
    paths.push(`/products`)
    paths.push(`/professionals/downloads`)
    paths.push(`/support/manuals`)
    paths.push(`/`)
    paths.push.apply(paths, products.map(product => `/products/${product.slug}`))
  }
  return paths
}
