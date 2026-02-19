import 'dotenv/config';
import * as mgmt from '@/lib/geins/mgmt-api';
import * as merchant from '@/lib/geins/merchant-api';
import geinsQuery from '@/lib/geins/geins-query';
import {
	AllGeinsChannelsDocument,
	AllGeinsProductsDocument,
	GeinsProductByCategoryDocument,
} from '@/lib/geins/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { sleep } from 'next-dato-utils/utils';
import { sync, resetAll, resyncAll } from '@/lib/geins/sync';
import { AllProductsDocument } from '@/graphql';

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
		//await resyncAll();
		//await resync();
		//await resetAll();
		//await sync(lampId);
		//const products = await mgmt.getVariantGroupProducts(22);
		//console.log(products);
		//await reset();
		//await resetAll();
		//await sync('167791073');
		const products = await merchant.getProducts();
		//console.log(JSON.stringify(products, null, 2));
		//await resetAll();
		//await resyncAll();
		//await sync(accessoryId);
		// const { allProducts } = await apiQuery(AllProductsDocument, {
		// 	all: true,
		// });
		// const ids = allProducts.map(({ id }) => id);
		// console.time('sync');
		// for (const id of ids) await sync(id);
		// console.timeEnd('sync');
		//const products = await mgmt.getProducts();
		//console.log(JSON.stringify(products, null, 2));
		//const markets = await mgmt.getMarkets();
		//console.log(JSON.stringify(markets, null, 2));
		//const lists = await mgmt.getPriceLists();
		//console.log(lists);
		//for (const list of lists) {
		//console.log(list.Id);
		//await mgmt.deletePriceList(list.Id);
		//}
		//
		// await sync(accessoryId);
		// await sync(lightsourceId);
		// const prods = await mgmt.getProductByArticleNo([
		// 	'36124-30S-000',
		// 	'36124-88S-000',
		// 	'36124-01S-000',
		// ]);
		// console.log(prods);
		//console.log(await mgmt.getPriceLists());
		//const products = await mgmt.getProducts();
		//console.log(products);
		//const p = await mgmt.getProductByArticleNo(['art-no7', 'art-no5']);
		//console.log(p);
		// const b = await mgmt.getBrands();
		// console.log(b);
		//const c = await mgmt.getCategories();
		//console.log(c);
		//const p = await mgmt.createProduct(data);
		// const productId = 1012; //p.Resource.ProductId;
		// console.log(productId);
		// while (true) {
		// 	process.stdout.write('.');
		// 	const newProd = await mgmt.getProduct(productId);
		// 	if (newProd) {
		// 		console.log(newProd);
		// 		break;
		// 	}
		// 	await sleep(5000);
		// }
		// console.log('upload image...');
		// const img = await mgmt.createProductImage(
		// 	productId,
		// 	'https://www.datocms-assets.com/62617/1770037059-ray-wall-brass.jpg',
		// );
		// console.log(img);
		// //const p = await getProduct('1002');
		// const p = await geinsQuery(GeinsProductDocument, {
		// 	variables: {
		// 		productId: 1003,
		// 	},
		// });
		// console.log(p);
		// const prods = await geinsQuery(GeinsProductBySKUDocument, {
		// 	variables: {
		// 		articleNumbers: ['art-no2'],
		// 	},
		// });
		// console.log(prods);
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
