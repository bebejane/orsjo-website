import 'dotenv/config';
import { sync } from "@/app/(shopify)/api/shopify/sync/utils";
import client from '@/lib/client';

(async () => {
  console.time('sync')
  console.log('syncing...')
  await sync('107174950')
  console.timeEnd('sync')
})()