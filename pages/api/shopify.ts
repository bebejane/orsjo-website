import { buildClient } from '@datocms/cma-client-node'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req : NextApiRequest, res: NextApiResponse) {
  
  try{
  
    const client = buildClient({apiToken:process.env.DATOCMS_CMS_TOKEN})
    const product = req.body
    
    const record = (await client.items.list({
      filter:{
        type:'product', 
        fields: {
          shopify_id: {eq: product.admin_graphql_api_id}
        }
      }
    }))[0]
    
    if(!record)
      return res.status(500).json({success:false, error:'record not found'})

    await client.items.update(record.id, {shopify_data:JSON.stringify(product)})
    
    return res.status(200).json({success:true})

  } catch(err){
    return res.status(500).json({success:false, error:err.toString()})
  }

}