import client from '@/lib/client';
import { apiQuery } from 'next-dato-utils/api';
import {
	AllProductAccessoriesDocument,
	AllProductLightsourcesDocument,
	AllProductsDocument,
	ProductByIdDocument,
	ProductAccessoryByIdDocument,
	ProductLightsourceByIdDocument,
} from '@/graphql';
import * as mgmt from '@/geins/mgmt-api';
import { generateProductTitle } from '@/lib/utils';
import { convertPriceWithRatesAndTaxes, getAllCurrencyRates, CurrencyRate } from '@/lib/utils';
import { Item } from '@datocms/cma-client/dist/types/generated/ApiTypes';
import {
	GEINS_CHANNEL_ID,
	GEINS_DELIVERY_PARAMETER_ID,
	GEINS_SLUG_PARAMETER_ID,
} from '@/geins/constants';

type ProductData = {
	apiKey: string;
	slug: string;
	productId: string | null;
	categoryId: number | null;
	name: string;
	description: string;
	articleNo: string;
	price: number;
	image?: string | null | undefined;
	deliveryDays?: string;
};

export const sync = async (itemId: string): Promise<void> => {
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
		const categories = await mgmt.getCategories();
		const categorySlug =
			apiKey === 'product'
				? item.slug
				: apiKey === 'product_lightsource'
					? 'lightsource'
					: 'accessory';

		const categoryId =
			categories.find((c: any) =>
				c.Names.find((n: any) => n.Content.toLowerCase() === categorySlug),
			)?.CategoryId ?? null;

		if (!apiKey) throw new Error('Invalid item type (api_key): ' + apiKey);

		console.log('syncing', { apiKey, itemId, categoryId });

		let products: ProductData[] = [];
		const slug = item.slug as string;

		switch (apiKey) {
			case 'product':
				const { product } = await apiQuery(ProductByIdDocument, {
					revalidate: 0,
					variables: { id: itemId },
				});

				if (!product) throw new Error('Invalid product: ' + itemId);

				const articleNumbers = product.models
					.map((model) => model.variants.map((v) => v.articleNo?.trim()).filter(Boolean))
					.flat() as string[];

				const geinsProducts = await mgmt.getProductByArticleNo(articleNumbers);

				products = product.models.reduce((acc, model) => {
					model.variants.forEach((variant) => {
						const articleNo = variant.articleNo?.trim() as string;
						const geinsProduct = geinsProducts?.find((p: any) => p?.ArticleNumber === articleNo);
						const productId = geinsProduct?.ProductId ?? null;
						const description = generateProductTitle(product as ProductRecord, variant.id);
						const name = product.title;
						const price = variant.price;
						const image = mgmt.generateThumbnailUrl(variant.image?.url);
						const deliveryDays = variant.deliveryDays ?? undefined;

						acc.push({
							apiKey,
							slug,
							productId,
							categoryId,
							name,
							description,
							articleNo,
							price,
							image,
							deliveryDays,
						});
					});
					return acc;
				}, [] as ProductData[]);

				break;

			case 'product_accessory':
				const { productAccessory } = await apiQuery(ProductAccessoryByIdDocument, {
					revalidate: 0,
					variables: { id: itemId },
				});

				if (!productAccessory) throw new Error('Invalid product accessory: ' + itemId);

				const [geinsAccessory] = await mgmt.getProductByArticleNo([
					productAccessory.articleNo?.trim(),
				]);

				products = [
					{
						apiKey,
						slug,
						productId: geinsAccessory?.ProductId ?? null,
						categoryId,
						name: productAccessory.name ?? '',
						description: productAccessory.name
							? productAccessory.name?.length > 50
								? productAccessory.name.slice(0, 47) + '...'
								: productAccessory.name
							: '',
						articleNo: productAccessory.articleNo?.trim(),
						price: productAccessory.price,
						image: mgmt.generateThumbnailUrl(productAccessory.image?.url),
					},
				];
				break;

			case 'product_lightsource':
				const { productLightsource } = await apiQuery(ProductLightsourceByIdDocument, {
					revalidate: 0,
					variables: { id: itemId },
				});

				if (!productLightsource) throw new Error(`Invalid product: ${itemId}`);

				const lightsourceArticleNo = productLightsource.articleNo?.trim();
				const [geinsLightsource] = await mgmt.getProductByArticleNo([lightsourceArticleNo]);

				products = [
					{
						apiKey,
						slug,
						productId: geinsLightsource?.ProductId ?? null,
						categoryId,
						name: productLightsource.name ?? '',
						description: productLightsource.name
							? productLightsource.name?.length > 50
								? productLightsource.name.slice(0, 47) + '...'
								: productLightsource.name
							: '',
						articleNo: productLightsource.articleNo?.trim(),
						price: productLightsource.price,
						image: mgmt.generateThumbnailUrl(productLightsource.image?.url),
					},
				];

				break;
			default:
				console.log('Unsupported item type(api_key): ' + apiKey);
				break;
		}

		await updateProduct(itemId, products, markets);
	} catch (e) {
		throw e;
	}
};

export async function updateProduct(itemId: string, p: ProductData[], markets: any) {
	let categoryId = p[0].categoryId;
	const categorySlug =
		p[0].apiKey === 'product'
			? p[0].slug
			: p[0].apiKey === 'product_lightsource'
				? 'lightsource'
				: 'accessory';
	const categoryTitle =
		p[0].apiKey === 'product'
			? p[0].name
			: p[0].apiKey === 'product_lightsource'
				? 'Lightsource'
				: 'Accessory';
	if (!categoryId) {
		const category = await mgmt.createCategory(categorySlug, categoryTitle);
		categoryId = category.CategoryId;
	} else {
		await mgmt.updateCategory(categoryId, categorySlug, categoryTitle);
	}

	for (const { slug, productId, name, description, articleNo, price, image, deliveryDays } of p) {
		const product = {
			ProductId: productId,
			ArticleNumber: articleNo,
			Names: [
				{
					LanguageCode: 'sv',
					Content: name,
				},
			],
			Active: true,
			BrandId: 1,
			CategoryIds: [categoryId],
			Markets: markets.map((m: any) => ({ Id: m.Id, ChannelId: GEINS_CHANNEL_ID })),
		};

		const productItem = {
			Active: true,
			ArticleNumber: articleNo,
			Name: description.length > 50 ? description.slice(0, 47) + '...' : description,
		};

		const updatedProduct = await (!product.ProductId
			? mgmt.createProduct(product)
			: mgmt.updateProduct(product));

		await mgmt.updateProductParameterValue(updatedProduct.ProductId, GEINS_SLUG_PARAMETER_ID, slug);

		if (deliveryDays)
			await mgmt.updateProductParameterValue(
				updatedProduct.ProductId,
				GEINS_DELIVERY_PARAMETER_ID,
				deliveryDays,
			);

		const updatedProductItem = await (!updatedProduct.Items?.length
			? mgmt.createProductItem({ ...productItem, ProductId: updatedProduct.ProductId })
			: mgmt.updateProductItem({ ...productItem, ItemId: updatedProduct.Items[0].ItemId }));

		if (image) {
			const fileName = updatedProduct.Images?.[0]?.Url?.split('/').pop()?.split('?')[0];
			await (!updatedProduct.Images?.length
				? mgmt.createProductImage(updatedProduct.ProductId, image, fileName)
				: mgmt.updateProductImage(updatedProduct.ProductId, image, fileName));
		}

		const allCurrencies = await getAllCurrencyRates();
		const PriceListId = 1000000;
		const priceListPrices = allCurrencies.map((c) => ({
			PriceListId,
			Price: convertPriceWithRatesAndTaxes(price, c),
			ProductId: updatedProduct.ProductId,
			Currency: c.isoCode,
		}));
		console.log(priceListPrices);
		await mgmt.updateStock([
			{
				Id: updatedProductItem.ItemId as string,
				Stock: 100,
				StockSellable: 100,
				StockType: 0,
			},
		]);

		await mgmt.updatePriceListPrices(priceListPrices);
	}
}

export const syncProductStatus = async (
	slug: string,
	status: 'draft' | 'published' | 'update',
): Promise<any[]> => {
	if (!['draft', 'published', 'update'].includes(status))
		throw new Error('Invalid status: ' + status);

	const active = status !== 'draft';
	const products = await mgmt.getProductsBySlug(slug);
	if (!products?.length) throw new Error('Invalid product slug: ' + slug);

	const _products = [];

	for (const product of products) {
		const productUpdate = await mgmt.updateProduct({
			ProductId: product.ProductId,
			Active: active,
		});
		_products.push(productUpdate);
	}

	return _products;
};

export const resetAll = async () => {
	console.log('resetting all...');
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
