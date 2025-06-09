import 'dotenv/config';
import { sync } from "@/lib/shopify/sync";
import client from '@/lib/client';

(async () => {
  console.time('sync')

  const itemId = process.argv[2]

  if (!itemId)
    throw new Error('Invalid item id')

  console.log('syncing:', itemId)
  try {

    await sync(itemId)

  } catch (e) {
    console.log(e.message)
  }

  // Pebble
  //await sync('107174950')

  // 5,8W LEDstrip 2700K 600lm CRI90 24V trafo incl
  //await sync('107174848')

  //Cone, black
  //await sync('NwAAPoy6RbC19AQatEtDWw')


  console.timeEnd('sync')
})()