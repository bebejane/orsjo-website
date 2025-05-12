import { NextRequest, NextResponse } from 'next/server'
import shopify from '../../../rest-client'
import { getCookie } from 'cookies-next'
import { parseGid } from '../../../utils'

export default async function cancel(req: NextRequest) {

  const u = getCookie('user', { req })
  const user = u ? JSON.parse(u) : null as unknown as User
  const { order }: { order: Order } = await req.json()
  const orderId = order?.id

  console.log('cancel order', order?.id, user)

  if (!orderId)
    return NextResponse.json({ success: false, error: 'orderId not found' }, { status: 400 })

  if (order.email !== user.email)
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })

  await shopify.order.cancel(parseGid(order.id))

  return NextResponse.json({ success: true })
}
