import { resyncAll } from '../sync/utils';

const collections = [
  { title: 'Accessories', handle: 'accessory' },
  { title: 'Lightsources', handle: 'lightsource' },
  { title: 'Lamps', handle: 'lamp' },
]

export const dynamic = 'force-dynamic'

export const GET = async (req: Request) => {
  return new Response('disabled')
  try {
    console.time('resyncing all')
    console.log('resyncing all...')
    await resyncAll()
  } catch (e) {
    console.log(e)
    return new Response(e.message)
  } finally {
    console.timeEnd('resyncing all');
  }

  return new Response('ok')
}