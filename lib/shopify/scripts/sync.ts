import 'dotenv/config';
import { sync } from "@/lib/shopify/sync";
import client from '@/lib/client';

(async () => {
  console.time('sync')
  console.log('syncing...')
  // Pebble
  //await sync('107174950')

  // 5,8W LEDstrip 2700K 600lm CRI90 24V trafo incl
  //await sync('107174848')

  //Cone, black
  await sync('NwAAPoy6RbC19AQatEtDWw')


  console.timeEnd('sync')
})()