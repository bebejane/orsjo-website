import 'dotenv/config';
import shopifyQuery from '../shopify-query';
import { AllCatalogsDocument, AllPriceListsDocument } from '../graphql-admin';

(async () => {
	const { catalogs } = await shopifyQuery(AllCatalogsDocument, {
		country: 'SE',
		admin: true,
	});
	const { priceLists } = await shopifyQuery(AllPriceListsDocument, {
		admin: true,
	});

	console.log(JSON.stringify(catalogs, null, 2));
	console.log(JSON.stringify(priceLists, null, 2));
})();
