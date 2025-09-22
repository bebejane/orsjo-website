import 'dotenv/config';
import shopifyQuery from '../shopify-query';
import { AllCatalogsDocument, AllPriceListsDocument } from '../graphql-admin';
import { sync } from '@/lib/shopify/sync';
import client from '@/lib/client';

(async () => {
	const { catalogs } = await shopifyQuery<AllCatalogsQuery, AllCatalogsQueryVariables>(AllCatalogsDocument, {
		country: 'SE',
		admin: true,
	});
	const { priceLists } = await shopifyQuery<AllPriceListsQuery, AllPriceListsQueryVariables>(AllPriceListsDocument, {
		admin: true,
	});

	console.log(JSON.stringify(catalogs, null, 2));
	console.log(JSON.stringify(priceLists, null, 2));
})();
