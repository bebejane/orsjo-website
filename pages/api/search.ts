import type { NextRequest } from 'next/server'

export const config = { runtime: 'experimental-edge' }

const search = (query, options = {}) => {

    let url = 'https://site-api.datocms.com/search-results?';
    url += 'q=' + encodeURIComponent(query);
    url += '&build_trigger_id=18902';
    url += '&locale=en'

    if (options.offset)
      url += '&offset=' + encodeURIComponent(options.offset);
    
    if (options.limit)
      url += '&limit=' + encodeURIComponent(options.limit);
    
    console.log(url)

    return fetch(url, {
      headers: {
        'Authorization': 'API-Token ' + process.env.GRAPHQL_API_TOKEN,
        'Accept': 'application/json',
      },
    })
}


export default async function handler(req: NextRequest) {
  
  const q = req.nextUrl.searchParams.get('q')
  const result = await (await search(q)).json()
  
  return new Response(
    JSON.stringify({q, ...result}),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}
