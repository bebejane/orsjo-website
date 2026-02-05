import 'dotenv/config';
import * as mgmt from '@/lib/geins/mgmt-api';
import geinsQuery from '@/lib/geins/geins-query';
import {
	AllGeinsProductsDocument,
	GeinsProductDocument,
	GeinsProductBySKUDocument,
} from '@/lib/geins/graphql';
import { sleep } from 'next-dato-utils/utils';

const data = {
	ArticleNumber: 'art-no7',
	ExternalId: 'test-prod7',
	Url: 'test-prod7',
	Names: [
		{
			LanguageCode: 'sv',
			Content: 'Test prod7',
		},
	],
	Active: true,
	PurchasePrice: 1,
	BrandId: 1,
	CategoryIds: [1],
	PurchasePriceCurrency: 'SEK',
	Markets: [
		{
			Id: 1,
			ChannelId: 'mystore1.orsjo',
		},
	],
};

const main = async () => {
	try {
		console.log('main: test');
		// const b = await mgmt.getBrands();
		// console.log(b);
		//const c = await mgmt.getCategories();
		//console.log(c);
		//const p = await mgmt.createProduct(data);
		const productId = 1012; //p.Resource.ProductId;
		console.log(productId);

		while (true) {
			process.stdout.write('.');
			const newProd = await mgmt.getProduct(productId);
			if (newProd) {
				console.log(newProd);
				break;
			}

			await sleep(5000);
		}

		console.log('upload image...');
		const img = await mgmt.createProductImage(
			productId,
			'https://www.datocms-assets.com/62617/1770037059-ray-wall-brass.jpg',
		);
		console.log(img);

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

main();
