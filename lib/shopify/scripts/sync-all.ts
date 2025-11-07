import 'dotenv/config';
import { resyncAll, sync } from '../sync';

(async () => {
	console.time('sync-all');
	console.log('datocms > shopify: resyncing all...');
	const index = process.argv[2] && !isNaN(parseInt(process.argv[2])) ? parseInt(process.argv[2]) : 0;
	await resyncAll(index);
	console.timeEnd('sync-all');
})();
