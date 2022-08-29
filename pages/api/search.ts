import type { NextApiRequest, NextApiResponse } from 'next'
import { buildClient } from '@datocms/cma-client-node';

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  
  const q = req.query.q
  const client = buildClient({ apiToken: process.env.NEXT_PUBLIC_SITESEARCH_API_TOKEN });
  const itemTypes = await client.itemTypes.list();
  
  const records = (await client.items.list({
    filter: {
      type: itemTypes.map(m => m.api_key).join(','),
      query: q,
    },
    nested:'true',
    locale: 'en',
    order_by: '_rank_DESC',
  })).map((record) => ({
    ...record,
    api_key: itemTypes.find((t) => t.id === record.item_type.id).api_key,
    api_name: itemTypes.find((t) => t.id === record.item_type.id).name,
  }))
  
  res.json(records)
}
