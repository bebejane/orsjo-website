import 'dotenv/config';
import { GeinsCore } from '@geins/core';
import { GeinsOMS } from '@geins/oms';
import * as mgmt from '@/geins/mgmt-api';
import * as merchant from '@/geins/merchant-api';
import * as crypto from 'crypto';
import geinsQuery from '@/geins/geins-query';
import {
	AllGeinsChannelsDocument,
	AllGeinsProductsDocument,
	GeinsProductsByCategoryDocument,
} from '@/geins/graphql';
import { sync, resetAll, resyncAll, syncProductStatus } from '@/geins/sync';
import { convertPriceWithRatesAndTaxes, getAllCurrencyRates } from '@/lib/utils';

const resync = async (reset = false) => {
	console.time('sync');
	if (reset) await resetAll();
	await resyncAll();
	console.timeEnd('sync');
};

const main = async () => {
	//console.log('main: test');
	const lampId = '167791073';
	const accessoryId = 'AxA_MbC2RWqrhWYh7DQyNQ';
	const lightsourceId = '107174798';
	const arg = process.argv[2];

	try {
		//await sync(lampId);
		//await resync(true);
		//const p = await mgmt.getProduct(8338);
		//const markets = await mgmt.getMarkets();
		//const paaymentTypes = await mgmt.getPaymentMethods();
		// console.log(
		// 	markets.map(({ Language }) => ({
		// 		LanguageCode: Language,
		// 		Content: 'test',
		// 	})),
		// );
		await resyncAll();
		//console.log(JSON.stringify(markets, null, 2));
		//console.log(JSON.stringify(p, null, 2));
		//await resync(true);

		//console.log(p);
		//await resyncAll(151);
		// const allCurrencies = await getAllCurrencyRates();
		// const se = allCurrencies.find((c) => c.isoCode === 'SEK');
		// const price = 97864;

		// console.log(se);
		// console.log(price);
		// console.log(convertPriceWithRatesAndTaxes(price, se));

		//await resync(false);
		//await resync();
		//const data = await merchant.getProductsByCategory(arg);
		//const data = await mgmt.getMarkets();
		//const data = await merchant.getAllProducts(arg ?? 'se');
		//console.log(data.products[0]?.unitPrice);
		//const paymentTypes = await mgmt.getPaymentMethods();

		//await sync(lampId);
		//const data = await mgmt.getPaymentMethods();
		//console.log(JSON.stringify(data, null, 2));
		//console.log(data?.length);
	} catch (error) {
		console.log(error);
	}
};

main();
