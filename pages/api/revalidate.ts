import type { NextApiRequest, NextApiResponse } from 'next'
import { buildClient } from '@datocms/cma-client-node';

export const basicAuth = (req: NextApiRequest) => {
  
  const basicAuth = req.headers.authorization
  if (!basicAuth) 
    return true;
    
  const auth = basicAuth.split(' ')[1]
  const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
  return user === process.env.BASIC_AUTH_USER && pwd === process.env.BASIC_AUTH_PASSWORD
}

const modelToPath = {
  start: ['/']

}

const getPathsFromPayload = async (payload: any) => {
  const record = await getRecordFromPayload(payload)
  const { api_key : apiKey } = record.model;
  let slugs = []
  
  switch (apiKey) {
    case 'product':
        slugs.push(`/products/${record.slug}`)
        slugs.push(`/products`)
        slugs.push(`/professionals/downloads`)
        slugs.push(`/support/manuals`)
      break;
    case 'designer':
      slugs.push(`/designers/${record.slug}`)
      break;
    case 'project':
      slugs.push(`/professionals/${record.slug}`)
      slugs.push(`/professionals`)
      break;
    case 'bespoke':
      slugs.push(`/professionals/bespoke`)
      break;
    case 'color_material':
      slugs.push(`/professionals/colors-and-materials`)
      break;
    case 'about':
      slugs.push(`/about/about-us`)
      break;
    case 'sustainability':
      slugs.push(`/about/sustainability`)
      break;
    case 'press':
      slugs.push(`/about/press`)
      break;
    case 'news':
      slugs.push(`/about/news`)
      slugs.push(`/`)
      break;
    case 'job':
      slugs.push(`/about/jobs`)
      break;
    case 'faq':
      slugs.push(`/support/faq`)
      break;
    case 'faq_start':
      slugs.push(`/support/faq`)
      break;
    case 'faq_category':
      slugs.push(`/support/faq`)
      break;
    case 'contact': case 'staff': case 'showroom': case 'reseller': case 'distributor':
      slugs.push(`/contact`)
      break;
    default:
      break;
  }

  if(modelToPath[apiKey])
    slugs = slugs.concat(modelToPath[apiKey])

  return slugs.filter(el => el);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (!basicAuth(req))
    return res.status(401).send('Access denied')

  res.json({ revalidated: true })

  try {

    const payload = req.body?.entity;

    if (!payload)
      throw 'Payload is empty'

    const paths = await getPathsFromPayload(payload)

    if (!paths.length)
      throw 'Nothing to revalidate';

    console.log('revalidating paths', paths)
    await Promise.all(paths.map(path => res.revalidate(path)))
    console.log('revalidating done!')
  } catch (err: any) {
    console.error(err)
  }
}

const getRecordFromPayload = async (payload: any) : Promise<any> => {

  const modelId = payload?.relationships?.item_type?.data?.id

  if (!modelId) throw 'Model id not found in payload!'
  console.log('lookup modelId', modelId)
  const client = buildClient({ apiToken: process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN })
  const model = (await client.itemTypes.list()).filter(m => m.id === modelId)[0]
  const record = (await client.items.list({ filter: { type: model.api_key, fields: { id: { eq: payload.id } } } }))[0]
  
  if (!record)
    throw `No record found with modelId: ${modelId}`

  return { ...record, model }
}

