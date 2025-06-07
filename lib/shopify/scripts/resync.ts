import 'dotenv/config';
import { resyncAll, sync } from "../sync";

(async () => {


  const itemId = 'VAkMbrCzTlCovBJgUEcxEg'
  await sync(itemId)
  return

  console.time('resync')
  console.log('resyncing...')
  await resyncAll()
  console.timeEnd('resync')
})()