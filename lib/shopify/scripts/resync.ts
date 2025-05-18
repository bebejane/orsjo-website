import 'dotenv/config';
import { resyncAll } from "@/app/(shopify)/api/shopify/sync/utils";

(async () => {
  console.time('resync')
  console.log('resyncing...')
  await resyncAll()
  console.timeEnd('resync')
})()