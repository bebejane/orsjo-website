import { withRevalidate } from 'dato-nextjs-utils/hoc'

export default withRevalidate(async (record, revalidate) => {
  
  const { api_key: apiKey } = record.model;
  const { slug }  = record
  const paths = []

  switch (apiKey) {
    case 'start':
      paths.push(`/`)
      break;
    case 'product':
      paths.push(`/products/${slug}`)
      paths.push(`/products`)
      paths.push(`/professionals/downloads`)
      paths.push(`/support/manuals`)
      break;
    case 'designer':
      paths.push(`/designers/${slug}`)
      break;
    case 'project_start':
      paths.push(`/professionals/projects`)
      break;
    case 'project':
      paths.push(`/professionals/projects/${slug}`)
      paths.push(`/professionals`)
      break;
    case 'bespoke':
      paths.push(`/professionals/bespoke`)
      break;
    case 'color_material':
      paths.push(`/professionals/colors-and-materials`)
      break;
    case 'about':
      paths.push(`/about/about-us`)
      break;
    case 'sustainability':
      paths.push(`/about/sustainability`)
      break;
    case 'press':
      paths.push(`/about/press`)
      break;
    case 'news':
      paths.push(`/about/news`)
      paths.push(`/`)
      break;
    case 'job':
      paths.push(`/about/jobs`)
      break;
    case 'faq': case 'faq_start': case 'faq_category':
      paths.push(`/support/faq`)
      break;
    case 'contact': case 'staff': case 'showroom': case 'reseller': case 'distributor':
      paths.push(`/contact`)
      break;
    default:
      break;
  }
  revalidate(paths)
})