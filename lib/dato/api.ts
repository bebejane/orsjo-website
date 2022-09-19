import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BatchHttpLink } from "@apollo/client/link/batch-http"; 
import { IntlDocument } from '/graphql';
import { isServer } from '/lib/utils';
import { TypedDocumentNode, gql } from '@apollo/client';

export type IntlMessage = { key:string, value:string }

export const GRAPHQL_API_ENDPOINT = `https://graphql.datocms.com`;
export const GRAPHQL_PREVIEW_API_ENDPOINT = `https://graphql.datocms.com/preview`;
export const GRAPHQL_API_TOKEN = (isServer ? process.env.GRAPHQL_API_TOKEN : process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN) || null

const loggingFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response>  => {
  
  const body = JSON.parse(init.body as string)
  const operations = body.map(({operationName})=> operationName)
  const requestName = `${operations.join(', ')}`
  const t = new Date().getTime()
  const response = await fetch(input, init)

  return {
    ...response,
    async text () {
      const result = await response.text()
      console.log("\x1b[35m%s\x1b[0m", 'graql', `- ${requestName}`, `- ${new Date().getTime()-t}ms`)
      return result
    }
  }
}

const link = new BatchHttpLink({ 
  uri: GRAPHQL_API_ENDPOINT,
  fetch: process.env.LOG_GRAPHQL ? loggingFetch : undefined,
  batchMax: 10, 
  batchInterval: 50,
  headers: { Authorization: `Bearer ${GRAPHQL_API_TOKEN}` }
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  //ssrMode: isServer,
  defaultOptions: {
    query: {
      fetchPolicy: process.env.DEV_CACHE ? 'cache-first' : 'no-cache',
      errorPolicy: 'all',
    }
  }
});

export type ApiQueryOptions = {variables?: any | any[], preview?: boolean}

export const apiQuery = async (query: TypedDocumentNode | TypedDocumentNode[], options? : ApiQueryOptions) : Promise<any> => {
  
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
    data.forEach((res) => result = {...result, ...res?.data})
    return result

  }catch(err){
    throw err
  }
}

export const SEOQuery = (schema: string) : TypedDocumentNode => {
  return gql`
    query GetSEO {
      seo: ${schema} {
        id
        tags: _seoMetaTags {
          attributes
          content
          tag
        }
      }
    }
  ` as TypedDocumentNode
}

export const intlQuery = async (page : string, locale: string = 'en', fallbackLocales: string[]) : Promise<any> => {

  const res = await apiQuery(IntlDocument, {variables: { page, locale, fallbackLocales }})
  const messages : [IntlMessage] = res.messages
  const dictionary : {[page:string]: any} = {[page]:{}}
  messages.forEach(({key, value}) => dictionary[page][key] = value)
  return dictionary
}

export const datoError = (err : Error) =>{
  console.log(err)
  return err.message || err
}