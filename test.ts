import { AllProductsDocument, AllProductsLightDocument } from '@/graphql';
import 'dotenv/config';
import { apiQuery } from 'next-dato-utils/api';
import { parseTitle } from '@/lib/shopify/sync';

(async () => {
	const products: any[] = [];

	const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, {
		all: true,
	});
	const models: any[][] = [];
	for (const product of allProducts) {
		if (!product.models) continue;
		for (const model of product.models) {
			const v: any[] = [];
			const name = model.name?.name;
			model.variants.forEach((variant) => {
				v.push({
					id: variant.id,
					articleNo: variant.articleNo,
					title: parseTitle(product as ProductRecord, variant.id),
				});
			});
			models.push(v);
		}
	}

	let dupes: any[] = [];
	models.forEach((variants) => {
		let dupe = false;
		variants.forEach((variant) => {
			if (variants.some((v) => v.id !== variant.id && v.title === variant.title)) dupe = true;
		});
		if (dupe) dupes.push(variants);
	});
	console.log(dupes);
})();
