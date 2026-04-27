import 'dotenv/config';
import fs from 'fs';
import geinsQuery from '@/geins/geins-query';
import { AllGeinsChannelsDocument } from '@/geins/graphql';

(async () => {
	const channels = await geinsQuery(AllGeinsChannelsDocument);
	const markets = channels.channels?.map((c) => c?.markets ?? []).flat() as any[];
	fs.writeFileSync('./markets.json', JSON.stringify(markets, null, 2));
})();
