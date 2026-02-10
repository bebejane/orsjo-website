import 'dotenv/config';
import * as mgmt from '@/lib/geins/mgmt-api';
import geinsQuery from '@/lib/geins/geins-query';
import { AllGeinsProductsDocument, GeinsProductDocument } from '@/lib/geins/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { sleep } from 'next-dato-utils/utils';
import { sync, resetAll } from '@/lib/geins/sync';
import { AllProductsDocument } from '@/graphql';

const main = async () => {
	console.log('main: test');

	try {
		const { allProducts } = await apiQuery(AllProductsDocument, {
			all: true,
		});
		const ids = allProducts.map(({ id }) => id);
		await resetAll();
		for (const id of ids) await sync(id);

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

main();
