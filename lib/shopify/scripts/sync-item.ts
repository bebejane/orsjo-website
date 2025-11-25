import 'dotenv/config';
import { sync } from '@/lib/shopify/sync';

(async () => {
	console.time('sync');

	const itemId = process.argv[2];

	if (!itemId) throw new Error('Invalid item id');

	console.log('syncing:', itemId);

	try {
		await sync(itemId);
	} catch (e) {
		console.log(e);
	}
	console.timeEnd('sync');
})();
