import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { BatchHttpLink } from "@apollo/client/link/batch-http"; 
import { TypedDocumentNode, gql } from '@apollo/client';

export type IntlMessage = { key:string, value:string }
export type ApiQueryOptions = { variables?: any | any[], preview?: boolean}

const isServer = typeof window === 'undefined';
const GRAPHQL_API_ENDPOINT = process.env.SHOPIFY_API_ENDPOINT;
const GRAPHQL_API_TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN

export const shopifyQuery = async (query: TypedDocumentNode | TypedDocumentNode[], options? : ApiQueryOptions) : Promise<any> => {
  
  const { variables, preview = false} = options || {}

  if(query === null) 
    throw "Invalid Query!"

  if(!GRAPHQL_API_TOKEN) 
    throw "No api token in .env.local"

  try{
    
    const batch = (Array.isArray(query) ? query : [query]).map((q, idx) => {
      const vars = Array.isArray(variables) && variables.length > idx -1 ? variables[idx] : variables || {}
      return client.query({query:q, variables:vars})
    })
  
    const data = await Promise.all(batch)
    const errors = data.filter(({errors}) => errors).map(({errors})=> errors?.reduce((curr, acc) => curr + '. ' + acc.message, ''))

    if(errors.length)
      throw new Error(errors.join('. '))
    
    let result = {}
    data.forEach((res) => result = {...result, ...res?.data.data})
    return result

  }catch(err){
    throw err
  }
}


const loggingFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response>  => {
  
  const queries = init ? JSON.parse(init.body.toString()) : undefined;
  const operations = queries ? Array.isArray(queries) ? queries.map((op : {operationName:string}) => op.operationName) : [queries.operationName] : [];
  const requestName = `${operations.join(', ')}`
  const response = await fetch(input, init)
  const t = new Date().getTime()
  
  return {
    ...response,
    async text () {
      const result = await response.text()
      if(process.env.NODE_ENV === 'development')
        console.log("\x1b[33m%s\x1b[0m", 'gql  ', `- ${requestName}`, `- ${new Date().getTime()-t}ms`)
      return result
    }
  }
}

const linkConfig = {
  uri: GRAPHQL_API_ENDPOINT,
  credentials: 'include',
  fetch: process.env.LOG_GRAPHQL ? loggingFetch : undefined,
  batchMax: 10, 
  batchInterval: 50,
  headers: { 
    'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_TOKEN,
    'Content-Type': 'application/json',
    //'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_API_TOKEN,
    //'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ADMIN_API_TOKEN,
    //'Accept': 'application/json',
  }
}

const link = new HttpLink(linkConfig)

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: isServer,
  
  defaultOptions: {
    query: {
      fetchPolicy: process.env.DEV_CACHE ? 'cache-first' : 'no-cache',
      errorPolicy: 'all',
      
    },
  }
});