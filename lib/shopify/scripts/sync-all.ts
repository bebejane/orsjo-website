import 'dotenv/config';
import { resyncAll, sync } from '../sync';

(async () => {
	console.time('sync-all');
	console.log('resyncing all...');
	await resyncAll();
	console.timeEnd('sync-all');
})();
