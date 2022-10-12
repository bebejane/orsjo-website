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

const getRecordFromPayload = async (payload: any) : Promise<any> => {

  const modelId = payload?.relationships?.item_type?.data?.id

  if (!modelId) 
    throw 'Model id not found in payload!'
  
  const client = buildClient({ apiToken: process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN })
  const model = (await client.itemTypes.list()).filter(m => m.id === modelId)[0]
  const record = (await client.items.list({ filter: { type: model.api_key, fields: { id: { eq: payload.id } } } }))[0]
  
  

  if (!record)
    throw `No record found with modelId: ${modelId}`

  console.log('revalidate', modelId, model.api_key)
  return { ...record, model }
}


const revalidate = (callback: (record:any, req: NextApiRequest, res: NextApiResponse) => void) : (req: NextApiRequest, res: NextApiResponse) => void => {

  return async (req: NextApiRequest, res: NextApiResponse) => {

    if (!basicAuth(req))
      return res.status(401).send('Access denied')

    res.json({ revalidated: true })

    const payload = req.body?.entity;

    if (!payload)
      throw 'Payload is empty'

    const record = await getRecordFromPayload(payload)
    callback(record, req, res)
  }
}

export default revalidate;


