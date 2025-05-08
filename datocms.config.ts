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
    'start': async (record, locale) => [`/`],
    'product': async ({ slug }, locale) => [`/products/${slug}`, `/professionals/downloads`, `/support/manuals`, `/products`, `/`],
    'product_start': async ({ id }, locale) => ['/products'],
    'project_type': async ({ id }, locale) => ['/professionals/projects'],
    'project': async ({ slug }, locale) => [`/professionals/projects/${slug}`, `/professionals/projects`, `/`],
    'bespoke': async ({ id }, locale) => ['/professionals/bespoke'],
    'color_material': async ({ id }, locale) => ['/professionals/colors-and-materials'],
    'color_material_intro': async ({ id }, locale) => ['/professionals/colors-and-materials'],
    'color_material_type': async ({ id }, locale) => ['/professionals/colors-and-materials'],
    'manual': async ({ id }, locale) => ['/support/manuals'],
    'about': async ({ id }, locale) => ['/about'],
    'sustainability': async ({ id }, locale) => ['/about/sustainability'],
    'news': async ({ slug }, locale) => [`/about/news/${slug}`, `/`],
    'job': async ({ id }, locale) => ['/about/jobs'],
    'faq': async ({ id }, locale) => ['/support/faq'],
    'faq_start': async ({ id }, locale) => ['/support/faq'],
    'faq_category': async ({ id }, locale) => ['/support/faq'],
    'contact': async ({ id }, locale) => ['/contact'],
    'staff': async ({ id }, locale) => [`/contact`],
    'showroom': async ({ id }, locale) => ['/contact'],
    'reseller': async ({ id }, locale) => ['/contact'],
    'distributor': async ({ id }, locale) => ['/contact'],
    'downloads_start': async ({ id }, locale) => ['/professionals/downloads'],
    'catalogue': async ({ id }, locale) => ['/professionals/downloads'],
    'factory_visit': async ({ id }, locale) => ['/professionals/factory-visit'],
    'country': async ({ id }, locale) => ['/contact'],
    'designer': async ({ slug }, locale) => [`/designers/${slug}`],
    'project_start': async ({ id }, locale) => ['/professionals/projects'],
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
  },
  sitemap: async () => {
    return []
  }
} satisfies DatoCmsConfig


async function productReferences(itemId: string) {
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