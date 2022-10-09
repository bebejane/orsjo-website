import { buildClient } from '@datocms/cma-client-node'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req : NextApiRequest, res: NextApiResponse) {
  
  const client = buildClient({apiToken:process.env.DATOCMS_CMS_TOKEN})
  const product = req.body
  console.log(product)
  
  const record = await client.items.list({
    filter:{
      type:'product', 
      fields: {
        shopify_id: product.admin_graphql_api_id
      }
    }
  })
  console.log(record)
  if(!record)
    return res.status(500).json({success:false, error:'record not found'})

  await client.items.update(record.id, {shopify_data:product})
  
  return res.status(200).json({success:true})

}