import { apiQuery } from '/lib/dato/api';
import { SiteSearchDocument } from '/graphql';

import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export type SearchResult = {
  _model:string,
  _modelName:string,
  title: string,
  slug: string,
  description : string,
  data:any
}

const baseEndpoint = 'https://site-api.datocms.com'
const fetchOptions = {
  headers:{
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SITESEARCH_API_TOKEN}`,
    'Accept':  'application/json',
    'X-Api-Version': '3',
  }
}

export default async function handler(req: NextRequest) {
  
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q')
  
  if(!q) 
    return new Response(JSON.stringify({}),{status: 200,headers: {'content-type': 'application/json'}})

  const res = await fetch(`${baseEndpoint}/item-types`, fetchOptions)
  const itemTypes = (await res.json()).data

  const qs = `items?[type]=${itemTypes.map(m => m.api_key).join(',')}&filter[query]=${q}&locale=en&order_by=_rank_DESC`
  const searchRes = await fetch(`${baseEndpoint}/${qs}`, fetchOptions)

  const search = (await searchRes.json()).data.map(el => ({
    ...el, 
    _api_key: itemTypes.find((t) => t.id === el.relationships.item_type.data.id).attributes.api_key,
  }))

  const data = await apiQuery(SiteSearchDocument, {
    variables:{
      productIds: search.filter(el => el._api_key === 'product').map(el => el.id),
      designerIds: search.filter(el => el._api_key === 'designer').map(el => el.id),
      newsIds: search.filter(el => el._api_key === 'news').map(el => el.id),
      faqIds: search.filter(el => el._api_key === 'faq').map(el => el.id)
    }
  })
  
  Object.keys(data).forEach(type => {
    if(!data[type].length)
      delete data[type]
    else
      console.log(type, data[type].length)
  })
  console.log('total:', search.length)
  
  return new Response(JSON.stringify(data),{status: 200,headers: {'content-type': 'application/json'}})
  
}