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
  const { apiKey } = record.model;
  let slugs = []
  
  switch (apiKey) {
    case 'product':
        slugs.push(`/products/${record.slug}`)
        slugs.push(`/products`)
        slugs.push(`/professionals/downloads`)
        

      break;
    case 'designer':
      slugs.push(`/designers/${record.slug}`)
    break;
    case 'project':
      slugs.push(`/professionals/${record.slug}`)
      slugs.push(`/professionals`)
    case 'bespoke':
      slugs.push(`/professionals/bespoke`)
    case '':
      slugs.push(`/professionals/bespoke`)
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

    const paths = await getPathsFromPayload(payload, record)

    if (!paths.length)
      throw new Error(`Nothing to revalidate`);

    await Promise.all(paths.map(path => res.revalidate(path)))
    console.log('revalidated', paths)
  } catch (err: any) {
    console.error(err)
    res.status(500).send(`Error revalidating: ${err.message || err}`)
  }
}

const getRecordFromPayload = async (payload: any) => {

  const modelId = payload?.relationships?.item_type?.data?.id

  if (!modelId) throw 'Model id not found in payload!'

  const apiToken = process.env.GRAPHQL_API_TOKEN || process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN || null
  const client = buildClient({ apiToken })
  const model = (await client.itemTypes.list()).filter(m => m.id === modelId)[0]
  const record = (await client.items.list({ filter: { type: model.api_key, fields: { id: { eq: payload.id } } } }))[0]

  if (!record)
    throw `No record found with modelId: ${modelId}`

  return { ...record, model }
}

