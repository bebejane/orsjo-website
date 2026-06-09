import 'dotenv/config';
import {
	AllProductsDocument,
	AllProductLightsourcesDocument,
	AllProductAccessoriesDocument,
} from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { buildClient, ApiError, buildBlockRecord } from '@datocms/cma-client';
import { Product, ProductModel, Variant } from '@/types/datocms-cma';
import { Item, ItemInNestedResponse } from '@datocms/cma-client/dist/types/generated/ApiTypes';

const environment = 'dev';
const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN as string, environment });

(async () => {
	const products: Item<Product>[] = [];

	for await (const record of client.items.listPagedIterator<Product>({
		version: 'current',
		nseted: true,
		filter: { type: 'product' },
	}))
		products.push(record);

	for (const product of products) {
		const variants: { model: Item<ProductModel>; variants: Item<Variant> }[] = [];
		for (const id of product.models) {
			const m = await client.items.find<ProductModel>(id, { nested: true });
			const variants = m.variants;

			for (const variant of variants) {
				const pv = {
					...variant.attributes,
					image: variant.attributes.image?.upload_id
						? { upload_id: variant.attributes.image?.upload_id }
						: null,
				} as Item<Variant>;

				variants.push({
					model: m,
					variants: pv,
				});
			}
		}

		await client.items.update<Product>(product.id, {
			models: product.models.map((id) => {
				const model = variants.find((v) => v.model.id === id);
				return {
					...model,
					...model?.variants.map((v) => {
						return {
							...v,
							attributes: {
								...v.attributes,
								variants: v.attributes.variants?.map((v) => {
									return {
										...v,
										attributes: {
											...v.attributes,
											delivery_days:
												v.attributes.article_no === variant.articleNo
													? variant.days
													: v.attributes.delivery_days,
										},
									};
								}),
							},
						};
					}),
				};
			}),
		});

		if (product.meta.status === 'published') await client.items.publish(product.id);
	}
})();
