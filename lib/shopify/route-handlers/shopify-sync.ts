import { NextRequest, NextResponse } from 'next/server'
import { syncObjects, deleteObject } from '../sync'

export default async function shopifyToDatoCMSSync(req: NextRequest) {

  try {

    const event = (req.headers.get('x-shopify-topic') as string)?.split('/')?.[1]

    if (!event)
      return NextResponse.json({ success: false, error: 'event type not found in headers' })

    const data: any = await req.json()

    if (!data)
      return NextResponse.json({ success: false, error: 'item not found' })

    console.log('sync', event, data.id, data.title)

    if (['create', 'update'].includes(event))
      await syncObjects(data)
    //else if (event === 'delete')
    //await deleteObject(data)

    return NextResponse.json({ success: true, event })

  } catch (error) {
    console.log(JSON.stringify(error, null, 2))
    return NextResponse.json({ success: false, error: (error as Error).message })
  }
}
