import 'dotenv/config';
import { GeinsCore } from '@geins/core';
import { GeinsOMS } from '@geins/oms';
import * as mgmt from '@/geins/mgmt-api';
import * as merchant from '@/geins/merchant-api';
import geinsQuery from '@/geins/geins-query';
import {
	AllGeinsChannelsDocument,
	AllGeinsProductsDocument,
	GeinsProductsByCategoryDocument,
} from '@/geins/graphql';
import { sync, resetAll, resyncAll, syncProductStatus } from '@/geins/sync';

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
	const arg = process.argv[2];

	try {
		//await resync();
		//await resyncAll();
		console.log(arg);
		const data = await merchant.getProductsByCategory(arg);
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

main();
//syncAll();
