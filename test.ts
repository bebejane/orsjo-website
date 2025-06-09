import { AllProductsDocument, AllProductsLightDocument } from '@/graphql';
import 'dotenv/config';
import { apiQuery } from 'next-dato-utils/api';

(async () => {
	const products: any[] = [];

	const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, {
		all: true,
	});
	const variants: any[] = [];
	for (const product of allProducts) {
		if (!product.models) continue;
		for (const model of product.models) {
			const name = model.name?.name;
			model.variants.forEach((variant) => {
				variants.push({
					articleNo: variant.articleNo,
					title: [name, variant.color?.name, variant.material?.name].filter(Boolean).join(' '),
				});
			});
		}
	}
	variants
		.filter((variant) => !variant.title)
		.forEach((variant) => {
			console.log(variant.articleNo, variant.title);
		});
})();
