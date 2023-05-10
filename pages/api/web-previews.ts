import { withWebPreviews } from 'dato-nextjs-utils/hoc';

export default withWebPreviews(async ({ item, itemType }) => {

  let path = null;
  const { slug } = item
  const { api_key } = itemType.attributes

  switch (api_key) {
    case 'start':
      path = '/'
      break;
    case 'product':
      path = `/products/${slug}`
      break;
    case 'designer':
      path = `/designers/${slug}`
      break;
    case 'project':
      path = `/professionals/projects/${slug}`
      break;
    case 'project_start':
      path = `/professionals/projects`
      break;
    case 'bespoke':
      path = `/professionals/bespoke`
      break;
    case 'color_material': case 'color_material_intro': case 'color_material_type':
      path = `/professionals/colors-and-materials`
      break;
    case 'about':
      path = `/about/about-us`
      break;
    case 'sustainability':
      path = `/about/sustainability`
      break;
    case 'press':
      path = `/about/press`
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
    case 'contact': case 'staff': case 'showroom': case 'reseller': case 'distributor':
      path = `/contact`
      break;
    default:
      break;
  }

  return path
})