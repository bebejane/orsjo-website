import { withRevalidate } from 'dato-nextjs-utils/hoc'
import { buildClient } from '@datocms/cma-client-node';

export const config = {
  maxDuration: 120
}

const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN });

export default withRevalidate(async (record, revalidate) => {

  const { api_key: apiKey } = record.model;
  const { slug, id } = record
  const paths = []

  switch (apiKey) {
    case 'start':
      paths.push(`/`)
      break;
    case 'product':
      paths.push(`/products/${slug}`)
      paths.push(`/professionals/downloads`)
      paths.push(`/support/manuals`)
      paths.push(`/products`)
      paths.push(`/`)
      break;
    case 'product_accessory':
    case 'product_category':
    case 'product_color':
    case 'product_connection':
    case 'product_dimmable':
    case 'product_electrical':
    case 'product_family':
    case 'product_feature':
    case 'product_lightsource':
    case 'product_material':
    case 'product_model_name':
    case 'product_mounting':
    case 'product_socket':
      const products = await client.items.references(id, { version: 'published', limit: 500 })
      if (products.length) {
        paths.push(`/products`)
        paths.push(`/professionals/downloads`)
        paths.push(`/support/manuals`)
        paths.push(`/`)
        paths.push.apply(paths, products.map(product => `/products/${product.slug}`))
      }

      break;
    case 'product_start':
      paths.push(`/products`)
      break;
    case 'designer':
      paths.push(`/designers/${slug}`)
      break;
    case 'project_start':
    case 'project_type':
      paths.push(`/professionals/projects`)
      break;
    case 'project':
      paths.push(`/professionals/projects/${slug}`)
      paths.push(`/professionals/projects`)
      paths.push(`/`)
      break;
    case 'bespoke':
      paths.push(`/professionals/bespoke`)
      break;
    case 'color_material':
    case 'color_material_intro':
    case 'color_material_type':
      paths.push(`/professionals/colors-and-materials`)
      break;
    case 'manual':
      paths.push(`/support/manuals`)
      break;
    case 'about':
      paths.push(`/about`)
      break;
    case 'sustainability':
      paths.push(`/about/sustainability`)
      break;
    case 'news':
      paths.push(`/about/news/${slug}`)
      paths.push(`/`)
      break;
    case 'job':
      paths.push(`/about/jobs`)
      break;
    case 'faq':
    case 'faq_start':
    case 'faq_category':
      paths.push(`/support/faq`)
      break;
    case 'contact':
    case 'staff':
    case 'showroom':
    case 'reseller':
    case 'distributor':
      paths.push(`/contact`)
      break;
    case 'downloads_start':
    case 'catalogue':
      paths.push(`/professionals/downloads`)
      break;
    case 'factory_visit':
      paths.push(`/professionals/factory-visit`)
      break;
    case 'country':
      paths.push(`/contact`)
      break;
    default:
      break;
  }
  await revalidate(paths)
})