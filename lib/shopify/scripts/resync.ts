import 'dotenv/config';
import { resyncAll, sync } from "../sync";

(async () => {

  console.time('resync')
  console.log('resyncing...')
  await resyncAll()
  console.timeEnd('resync')
})()