import 'dotenv/config';
import fs from 'fs';
<<<<<<< HEAD
import shopifyQuery from '@/lib/shopify/shopify-query';
import { LocalizationDocument } from '@/lib/shopify/graphql';

(async () => {
	const { localization } = await shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument, {
		variables: { language: 'EN' as LanguageCode },
		country: 'US',
	});
	const localizationJson = JSON.stringify(localization, null, 2);
	fs.writeFileSync('./localization.json', localizationJson);
=======
import geinsQuery from '@/geins/geins-query';
import { AllGeinsChannelsDocument } from '@/geins/graphql';

(async () => {
	const channels = await geinsQuery(AllGeinsChannelsDocument);
	const markets = channels.channels?.map((c) => c?.markets ?? []).flat() as any[];
	fs.writeFileSync('./markets.json', JSON.stringify(markets, null, 2));
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
})();
