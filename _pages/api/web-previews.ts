import { withWebPreviewsEdge } from 'next-dato-utils/hoc';

export const config = {
  runtime: 'edge'
}

export default withWebPreviewsEdge(async ({ item, itemType }) => {

  let path = null;
  const { slug } = item.attributes
  const { api_key } = itemType.attributes

  switch (api_key) {
    case 'start':
      path = '/'
      break;
    case 'product':
      path = `/products/${slug}`
      break;
    case 'product_start':
      path = `/products`
      break;
    case 'designer':
      path = `/designers/${slug}`
      break;
    case 'project':
      path = `/professionals/projects/${slug}`
      break;
    case 'project_start':
    case 'project_type':
      path = `/professionals/projects`
      break;
    case 'bespoke':
      path = `/professionals/bespoke`
      break;
    case 'color_material': case 'color_material_intro': case 'color_material_type':
      path = `/professionals/colors-and-materials`
      break;
    case 'about':
      path = `/about`
      break;
    case 'sustainability':
      path = `/about/sustainability`
      break;
    case 'news':
      path = `/about/news/${slug}`
      break;
    case 'job':
      path = `/about/jobs`
      break;
    case 'faq': case 'faq_start': case 'faq_category':
      path = `/support/faq`
      break;
    case 'contact': case 'staff': case 'showroom': case 'reseller': case 'distributor': case 'country':
      path = `/contact`
      break;
    case 'downloads_start':
    case 'catalogue':
      path = `/professionals/downloads`
      break;
    case 'manual':
      path = `/support/manuals`
      break;
    case 'factory_visit':
      path = `/professionals/factory-visit`
      break;
    default:
      break;
  }

  return path
})