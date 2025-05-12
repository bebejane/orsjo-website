import client from '@lib/client';
import { NextRequest, NextResponse } from 'next/server'
import { syncDatoCMSObject } from '../sync'

export default async function datocmsToShopifySync(req: NextRequest) {

  try {

    const payload: any = req.body;

    if (!payload)
      throw new Error('Invalid payload')

    const { event_type, entity } = payload

    console.log('sync datocms > shopify', event_type)

    const item = await client.items.find(entity.id)

    if (!item)
      throw new Error(`Invalid item ${entity.id}`)

    if (['update', 'publish', 'unpublish'].includes(event_type))
      await syncDatoCMSObject(item)

    return NextResponse.json({ success: true })

  } catch (error) {
    console.log(JSON.stringify(error, null, 2))
    return NextResponse.json({ success: false, error: (error as Error).message })
  }
}