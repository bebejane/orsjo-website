import 'dotenv/config';
import * as mgmt from '@/geins/mgmt-api';
import * as merchant from '@/geins/merchant-api';
import geinsQuery from '@/geins/geins-query';
import { AllGeinsChannelsDocument, AllGeinsProductsDocument } from '@/geins/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { sleep } from 'next-dato-utils/utils';
import { sync, resetAll, resyncAll } from '@/geins/sync';
import { AllProductsDocument } from '@/graphql';
import { getAllCurrencyRates } from '@/lib/utils';

const resync = async () => {
	console.time('sync');
	await resetAll();
	await resyncAll();
	console.timeEnd('sync');
};

const main = async () => {
	//console.log('main: test');
	const lampId = '167791073';
	const accessoryId = 'AxA_MbC2RWqrhWYh7DQyNQ';
	const lightsourceId = '107174798';
	try {
		//const d = await merchant.getAccessories();
		//console.log(JSON.stringify(d, null, 2));
		//const d = await mgmt.getPriceLists();console.log(JSON.stringify(d, null, 2));
		await sync(lampId);
		//await resync();
		//await resyncAll();
		//await resyncAll();
		//const allCurrencies = await getAllCurrencyRates();
		//await resyncAll();
		//console.log(allCurrencies);
		//const res = await merchant.getProducts();
		// let products;
		// for (let i = 0; i < 10; i++) {
		// 	const res = await merchant.getAllProducts();
		// 	console.log(res[0]?.productId);
		// }
	} catch (error) {
		console.log(error);
	}
};

const gql = async () => {
	// const data = await geinsQuery(GeinsProductDocument, {
	// 	variables: {
	// 		alias: 'andromeda',
	// 	},
	// });
	//const data = await mgmt.getCategories();
	//const data = await merchant.getProduct('andromeda');
	//await syncAll();
};

main();
//syncAll();
