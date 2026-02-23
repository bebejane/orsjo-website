import 'dotenv/config';
import fs from 'fs';
import { getMarkets } from '@/geins/utils';

(async () => {
	const markets = await getMarkets();
	const localizationJson = JSON.stringify(markets, null, 2);
	fs.writeFileSync('./markets.json', localizationJson);
})();
