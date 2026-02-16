//@ts-nocheck
import client from '@/lib/client';
import { apiQuery } from 'next-dato-utils/api';
import geinsQuery from '@/lib/geins/geins-query';
import {
	AllProductAccessoriesDocument,
	AllProductLightsourcesDocument,
	AllProductsDocument,
	ProductByIdDocument,
	ProductAccessoryByIdDocument,
	ProductLightsourceByIdDocument,
} from '@/graphql';
import * as mgmt from '@/lib/geins/mgmt-api';

import { batchPromises } from '@/lib/utils';
import { generateProductTitle } from '@/lib/utils';
import { convertPriceWithRatesAndTaxes, getAllCurrencyRates, CurrencyRate } from '@/lib/utils';
import { Item } from '@datocms/cma-client/dist/types/generated/ApiTypes';
import { GeinsProductByArticleNoDocument } from '@/lib/geins/graphql';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type SyncResult = {
	id: string;
	handle: string;
	itemId: string;
	itemType: string;
};

type Product = {
	product: ProductData;
	productItem: ProductItemData;
	productImage: string | null;
	price: number;
	//productPrices: ProductPriceData[];
};

type ProductData = {
	ProductId?: string;
	ArticleNumber: string;
	ExternalId: string;
	Names: { LanguageCode: string; Content: string }[];
	Active: boolean;
	BrandId: number;
	CategoryIds: number[];
	Markets: { Id: string; ChannelId: string }[];
};

type ProductItemData = {
	ArticleNumber: string;
	Name: string;
	Active: boolean;
};

type ProductPriceData = {
	PriceListId: string;
	Price: number;
	ProductId: string;
	Currency: string;
};

const channelId = 'mystore1.orsjo';

export const sync = async (itemId: string): Promise<SyncResult> => {
	const syncResult: SyncResult = { id: '', handle: '', itemId, itemType: '' };

	try {
		let item: Item;

		try {
			item = await client.items.find(itemId);
		} catch (e) {
			console.log(e);
			throw new Error('Invalid item: ' + itemId);
		}

		const itemTypes = await client.itemTypes.list();
		const apiKey = itemTypes.find(({ id }) => id === item.item_type.id)?.api_key;
		const markets = await mgmt.getMarkets();
		const priceLists = await mgmt.getPriceLists();
		const categories = await mgmt.getCategories();
		const allCurrencies = await getAllCurrencyRates();

		if (!apiKey) throw new Error('Invalid item type (api_key): ' + apiKey);

		syncResult.itemType = apiKey;

		console.log('syncing', apiKey, itemId);

		let articleNumbers = [];
		let categoryId = 1;
		let name = '';

		switch (apiKey) {
			case 'product':
				const { product } = await apiQuery(ProductByIdDocument, {
					revalidate: 0,
					variables: { id: itemId },
				});

				if (!product) throw new Error('Invalid product: ' + itemId);

				articleNumbers = product.models
					.map((model) => model.variants.map((v) => v.articleNo?.trim()).filter(Boolean))
					.flat() as string[];

				categoryId = await getCatgegoryId('Lamp');

				const geinsProducts = await mgmt.getProductByArticleNo(articleNumbers);
				const products: Product[] = product.models.reduce((acc, model) => {
					model.variants.forEach((variant) => {
						const articleNo = variant.articleNo?.trim();
						const geinsProduct = geinsProducts?.find((p: any) => p?.ArticleNumber === articleNo);
						name = `${product.title} - ${generateProductTitle(product as ProductRecord, variant.id)}`;
						const deliveryDays = variant.deliveryDays;

						acc.push({
							product: {
								ProductId: geinsProduct?.ProductId,
								ArticleNumber: articleNo,
								ExternalId: itemId,
								Names: [
									{
										LanguageCode: 'sv',
										Content: name,
									},
								],
								Active: true,
								BrandId: 1,
								CategoryIds: [categoryId],
								Markets: markets.map((m: any) => ({ Id: m.Id, ChannelId: channelId })),
							},
							productItem: {
								Active: true,
								ArticleNumber: articleNo,
								Name: name.length > 50 ? name.slice(0, 47) + '...' : name,
							},
							productImage: generateThumbnailUrl(variant.image?.url),
							price: variant.price,
						});
					});
					return acc;
				}, [] as any[]);

				await Promise.all(products.map((p) => updateProduct(p)));
				break;

			case 'product_accessory':
				const { productAccessory } = await apiQuery(ProductAccessoryByIdDocument, {
					revalidate: 0,
					variables: { id: itemId },
				});

				if (!productAccessory) throw new Error('Invalid product accessory: ' + itemId);

				articleNumbers = [productAccessory.articleNo?.trim()];
				categoryId = await getCatgegoryId('Accessory');
				name = productAccessory.name ?? '';
				const [geinsAccessory] = await mgmt.getProductByArticleNo(articleNumbers);

				console.log(categoryId);

				const accessory: Product = {
					product: {
						ProductId: geinsAccessory?.ProductId,
						ArticleNumber: articleNumbers[0],
						ExternalId: itemId,
						Names: [
							{
								LanguageCode: 'sv',
								Content: name,
							},
						],
						Active: true,
						BrandId: 1,
						CategoryIds: [categoryId],
						Markets: markets.map((m: any) => ({ Id: m.Id, ChannelId: channelId })),
					},
					productItem: {
						Active: true,
						ArticleNumber: articleNumbers[0],
						Name: name,
					},
					productImage: generateThumbnailUrl(productAccessory.image?.url),
					price: productAccessory.price,
				};

				await updateProduct(accessory);
				break;

			case 'product_lightsource':
				const { productLightsource } = await apiQuery(ProductLightsourceByIdDocument, {
					revalidate: 0,
					variables: { id: itemId },
				});

				if (!productLightsource) throw new Error(`Invalid product: ${itemId}`);

				const lightsourceArticleNo = productLightsource.articleNo?.trim();
				const [geinsLightsource] = await mgmt.getProductByArticleNo([lightsourceArticleNo]);
				categoryId = await getCatgegoryId('Lightsource');
				name = productLightsource.name ?? '';

				const lightsource: Product = {
					product: {
						ProductId: geinsLightsource?.ProductId,
						ArticleNumber: lightsourceArticleNo,
						ExternalId: itemId,
						Names: [
							{
								LanguageCode: 'sv',
								Content: name,
							},
						],
						Active: true,
						BrandId: 1,
						CategoryIds: [categoryId],
						Markets: markets.map((m: any) => ({ Id: m.Id, ChannelId: channelId })),
					},
					productItem: {
						Active: true,
						ArticleNumber: lightsourceArticleNo,
						Name: name.length > 50 ? name.slice(0, 47) + '...' : name,
					},
					productImage: generateThumbnailUrl(productLightsource.image?.url),
					price: productLightsource.price,
				};
				await updateProduct(lightsource);
				break;
			default:
				console.log('Unsupported item type(api_key): ' + apiKey);
				break;
		}
	} catch (e) {
		throw e;
	}
	return syncResult;
};

export async function updateProduct(p: Product) {
	const { product, productItem, productImage } = p;
	const updatedProduct = await (!product.ProductId
		? mgmt.createProduct(product)
		: mgmt.updateProduct(product));

	const updatedProductItem = await (!updatedProduct.Items?.length
		? mgmt.createProductItem({ ...productItem, ProductId: updatedProduct.ProductId })
		: mgmt.updateProductItem({ ...productItem, ItemId: updatedProduct.Items[0].ItemId }));

	if (productImage) {
		await (!updatedProduct.Images?.length
			? mgmt.createProductImage(updatedProduct.ProductId, productImage)
			: mgmt.updateProductImage(updatedProduct.ProductId, productImage));
	}
	const priceLists = await mgmt.getPriceLists();
	const allCurrencies = await getAllCurrencyRates();
	const priceListPrices = priceLists.map(({ Id: PriceListId, Currency }) => ({
		PriceListId,
		Price: convertPriceWithRatesAndTaxes(
			p.price,
			allCurrencies.find((c) => c.isoCode === Currency),
		),
		ProductId: updatedProduct.ProductId,
		Currency,
	}));
	console.log(priceListPrices);
	console.log(priceLists);
}

export async function getCatgegoryId(name: string) {
	const categories = await mgmt.getCategories();
	return categories.find(({ Names }) => Names.find(({ Content }) => Content === name))?.CategoryId;
}

export const generateThumbnailUrl = (url: string | undefined | null): string | null => {
	if (!url) return null;
	const u = new URL(url);
	const size = 2000;
	const pad = size * 0.1;
	const imgixUrl = `${u.origin}${u.pathname}?w=${size}&h=${size}&fit=fill&auto=format&bg=fff&pad=${pad}`;
	return imgixUrl;
};

export const resetAll = async () => {
	console.log('reseting all...');
	const products = await mgmt.getProducts();
	console.log('deleting all products:', products.length);
	for (const product of products) await mgmt.removeProduct(product.ProductId);
};

export const resyncAll = async (index: number = 0) => {
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		variables: { first: 500, skip: 0 },
		revalidate: 0,
	});
	const { allProductLightsources } = await apiQuery(AllProductLightsourcesDocument, {
		all: true,
		revalidate: 0,
		variables: { first: 500, skip: 0 },
	});
	const { allProductAccessories } = await apiQuery(AllProductAccessoriesDocument, {
		all: true,
		revalidate: 0,
		variables: { first: 500, skip: 0 },
	});

	const itemIds = [...allProducts, ...allProductLightsources, ...allProductAccessories]
		.map(({ id }) => id)
		.slice(index);

	try {
		for (let x = 0; x < itemIds.length; x++) {
			const id = itemIds[x];
			console.log(`------------------- ${x + 1}/${itemIds.length} -----------------------`);
			await sync(id);
		}
	} catch (e) {
		console.error(e);
		throw new Error('sync failed');
	}
};

// export const syncProductStatus = async (
// 	handle: string,
// 	status: ProductStatus,
// ): Promise<UpdateProductStatusMutation['productUpdate']> => {
// 	const { product: geinsProduct } = await geinsQuery(AdminProductDocument, {
// 		admin: true,
// 		variables: { handle },
// 	});

// 	const { productUpdate } = await geinsQuery(UpdateProductStatusDocument, {
// 		admin: true,
// 		variables: {
// 			productId: geinsProduct?.id,
// 			status,
// 		},
// 	});
// 	return productUpdate;
// };
