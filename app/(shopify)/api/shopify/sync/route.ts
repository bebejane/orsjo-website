import { sync } from '@/lib/shopify/sync';
import { basicAuth } from 'next-dato-utils/route-handlers'

export const POST = async (req: Request) => {
  return basicAuth(req, async (req) => {
    const { entity } = await req.json();
    if (!entity) return new Response('ok', { status: 422 })

    const itemId = entity.id
    try {
      await sync(itemId)
    } catch (e) {
      console.log(e)
      return new Response(JSON.stringify({ error: e.message }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }
    return new Response('ok', { status: 200 })
  })
}
