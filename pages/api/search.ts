import type { NextApiRequest, NextApiResponse } from 'next'
import { buildClient } from '@datocms/cma-client-node';
import { apiQuery } from '/lib/dato/api';
import { SiteSearchDocument } from '/graphql';

export type SearchResult = {
  _model:string,
  _modelName:string,
  title: string,
  slug: string,
  description : string,
  data:any
}

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  
  const q = req.query.q as string

  if(!q) return res.json({})

  const client = buildClient({ apiToken: process.env.NEXT_PUBLIC_SITESEARCH_API_TOKEN });
  const itemTypes = await client.itemTypes.list();
  
  const search = (await client.items.list({
    filter: {
      type: itemTypes.map(m => m.api_key).join(','),
      query: q,      
    },
    locale: 'en',
    order_by: '_rank_DESC'
  })).map(el => ({
    ...el, 
    _api_key: itemTypes.find((t) => t.id === el.item_type.id).api_key,
  }))

  const data = await apiQuery(SiteSearchDocument, {
    variables:{
      productIds: search.filter(el => el._api_key === 'product').map(el => el.id),
      designerIds: search.filter(el => el._api_key === 'designer').map(el => el.id),
      newsIds: search.filter(el => el._api_key === 'news').map(el => el.id),
      faqIds: search.filter(el => el._api_key === 'faq').map(el => el.id)
    }
  })

  console.log('total:', search.length)
  Object.keys(data).forEach(type => {
    
    if(!data[type].length)
      delete data[type]
    else
      console.log(type, data[type].length)
  })
  
  res.json(data)
}



const parseRecords = (records : [any]) : SearchResult[] => {

  const r : SearchResult[] = []

  records.forEach(el => {
    if(el._model === 'product')
      r.push({
        _model: el._model,
        _modelName: el._modelName,
        title: el.title,
        slug: `/products/${el.slug}`,
        description: el.description.en,
        data:{...el}
      })
  })

  return r;
}