import withRevalidate from '/lib/dato/webhook/withRevalidate'

export default withRevalidate(async (record, req, res) => {

  const { api_key: apiKey } = record.model;
  const { slug }  = record
  const paths = []

  switch (apiKey) {
    case 'product':
      paths.push(`/products/${slug}`)
      paths.push(`/products`)
      paths.push(`/professionals/downloads`)
      paths.push(`/support/manuals`)
      break;
    case 'designer':
      paths.push(`/designers/${slug}`)
      break;
    case 'project':
      paths.push(`/professionals/${slug}`)
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
    case 'faq':
      paths.push(`/support/faq`)
      break;
    case 'faq_start':
      paths.push(`/support/faq`)
      break;
    case 'faq_category':
      paths.push(`/support/faq`)
      break;
    case 'contact': case 'staff': case 'showroom': case 'reseller': case 'distributor':
      paths.push(`/contact`)
      break;
    default:
      break;
  }

  if (!paths.length)
    throw 'Nothing to revalidate';

  console.log('revalidating paths', paths)
  for (let i = 0; i < paths.length; i++){
    console.log('revalidate', paths[i])
    await res.revalidate(paths[i])
  }
  console.log('revalidating done!')

})
