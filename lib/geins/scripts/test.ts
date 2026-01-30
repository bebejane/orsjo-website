import { geinsCore, geinsGraphql } from '@/lib/geins/client';

(async () => {
	try {
		const channels = await geinsCore.channel.current();
		console.log('Channels:', JSON.stringify(channels, null, 2));
	} catch (error) {
		console.error('Error fetching channels:', error);
	}
})();
