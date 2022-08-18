import type { NextRequest } from 'next/server'
import { siteSearch } from '/lib/utils'

export const config = { runtime: 'experimental-edge' }

export default async function handler(req: NextRequest) {
  
  const q = req.nextUrl.searchParams.get('q')
  const result = await siteSearch(q)
  
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
