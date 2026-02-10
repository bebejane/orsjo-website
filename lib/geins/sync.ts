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

		if (!apiKey) throw new Error('Invalid item type (api_key): ' + apiKey);

		syncResult.itemType = apiKey;

		console.log('syncing', apiKey, itemId);

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

				const productMedia: CreateMediaInput[] = [];

				const products: any[] = product.models.reduce((acc, model) => {
					model.variants.forEach((variant) => {
						const articleNo = variant.articleNo?.trim();
						const geinsProduct = geinsProducts?.find((p: any) => p?.ArticleNumber === articleNo);
						const mediaSrc = variant.image?.url
							? [generateThumbnailUrl(variant.image?.url)]
							: product.image.url
								? [generateThumbnailUrl(product.image.url)]
								: null;

						const description = [variant.color?.name, variant.material?.name]
							.filter(Boolean)
							.join(', ');

						const title = `${product.title} - ${generateProductTitle(product as ProductRecord, variant.id)}`;
						const deliveryDays = variant.deliveryDays;
						const marketId = 1;
						const categoryId = 1;

						acc.push({
							data: {
								ProductId: geinsProduct?.ProductId,
								ArticleNumber: articleNo,
								Names: [
									{
										LanguageCode: 'sv',
										Content: title,
									},
								],
								ShortTexts: [
									{
										LanguageCode: 'sv',
										Content: description,
									},
								],
								Active: true,
								BrandId: 1,
								CategoryIds: [categoryId],
								Markets: markets.map((m: any) => ({ Id: m.Id, ChannelId: 'mystore1.orsjo' })),
							},
							item: {
								Active: true,
								ArticleNumber: articleNo,
								Name: title,
							},

							image: generateThumbnailUrl(variant.image?.url),
						});
					});
					return acc;
				}, [] as any[]);
				// .reduce((acc, variant) => {
				// 	if (
				// 		!acc.find(
				// 			(v) => v.inventoryItem && v.inventoryItem?.sku === variant.inventoryItem?.sku,
				// 		)
				// 	)
				// 		acc.push(variant);
				// 	return acc;
				// }, [] as ProductVariantsBulkInput[]);

				// const variantsMedia: CreateMediaInput[] = products
				// 	.filter((variant) => variant.mediaSrc?.[0])
				// 	.map((variant) => ({
				// 		originalSource: generateThumbnailUrl(variant.mediaSrc?.[0] ?? ''),
				// 		mediaContentType: 'IMAGE' as MediaContentType,
				// 		alt: variant.inventoryItem?.sku,
				// 	}));

				// syncResult.handle = product.slug as string;
				// syncResult.id = product.id as string;

				// await updateProduct(
				// 	{ product: productData, media: productMedia },
				// 	productVariants,
				// 	variantsMedia,
				// );

				console.log('update products', products.length);

				const updatedProducts = await Promise.all(
					products.map(({ data }) =>
						!data.ProductId ? mgmt.createProduct(data) : mgmt.updateProduct(data),
					),
				);

				const updatedProductItems = await Promise.all(
					updatedProducts.map((p) => {
						const item = products.find(({ data }) => data.ArticleNumber === p.ArticleNumber)?.item;

						return !p.Items?.length
							? mgmt.createProductItem({ ...item, ProductId: p.ProductId })
							: mgmt.updateProductItem({ ...item, ItemId: p.Items[0].ItemId });
					}),
				);

				const updatedProductImages = await Promise.all(
					updatedProducts.map((p) => {
						const image = products.find(
							({ data }) => data.ArticleNumber === p.ArticleNumber,
						)?.image;

						return !p.Images?.length
							? mgmt.createProductImage(p.ProductId, image)
							: mgmt.updateProductImage(p.ProductId, image);
					}),
				);

				console.log('done');
				break;

			// case 'product_accessory':
			// 	const { productAccessory } = await apiQuery(ProductAccessoryByIdDocument, {
			// 		revalidate: 0,
			// 		variables: { id: itemId },
			// 	});

			// 	if (!productAccessory) throw new Error('Invalid product accessory: ' + itemId);

			// 	const accessoryArticleNo = productAccessory.articleNo?.trim();

			// 	const { product: geinsAccessory } = await geinsQuery(AdminProductDocument, {
			// 		admin: true,
			// 		variables: { handle: productAccessory.slug ?? '' },
			// 	});

			// 	const accessoryData: ProductCreateInput | ProductUpdateInput = {
			// 		id: geinsAccessory?.id,
			// 		title: productAccessory.name,
			// 		handle: productAccessory.slug,
			// 		tags: ['accessory', accessoryArticleNo].filter(Boolean) as string[],
			// 	};

			// 	const accessoryVariantsMedia: CreateMediaInput[] | undefined = productAccessory.image?.url
			// 		? [
			// 				{
			// 					originalSource: generateThumbnailUrl(productAccessory.image.url),
			// 					mediaContentType: 'IMAGE' as MediaContentType,
			// 					alt: accessoryArticleNo,
			// 				},
			// 			]
			// 		: undefined;

			// 	const accessoryVariants: ProductVariantsBulkInput[] = [
			// 		{
			// 			id: geinsAccessory?.variants.edges.find(
			// 				(v) => v.node.sku === productAccessory?.articleNo?.trim(),
			// 			)?.node.id,
			// 			price: productAccessory.price,
			// 			mediaSrc: productAccessory.image?.url ? [productAccessory.image.url] : null,
			// 			inventoryItem: {
			// 				cost: productAccessory.price,
			// 				sku: productAccessory?.articleNo?.trim(),
			// 				tracked: false,
			// 			},
			// 			metafields: [
			// 				{
			// 					key: 'articleNo',
			// 					value: accessoryArticleNo,
			// 					type: 'single_line_text_field',
			// 					namespace: 'variant',
			// 				},
			// 				{
			// 					key: 'description',
			// 					value: productAccessory.name,
			// 					type: 'single_line_text_field',
			// 					namespace: 'variant',
			// 				},
			// 				{
			// 					key: 'deliveryDays',
			// 					value: productAccessory.deliveryDays,
			// 					type: 'single_line_text_field',
			// 					namespace: 'variant',
			// 				},
			// 			],
			// 			optionValues: [
			// 				{
			// 					optionName: 'Title',
			// 					name: accessoryArticleNo,
			// 				},
			// 			],
			// 		},
			// 	];

			// 	syncResult.handle = accessoryData.handle as string;
			// 	syncResult.id = accessoryData.id as string;

			// 	await updateProduct({ product: accessoryData }, accessoryVariants, accessoryVariantsMedia);
			// 	break;
			// case 'product_lightsource':
			// 	const { productLightsource } = await apiQuery(ProductLightsourceByIdDocument, {
			// 		revalidate: 0,
			// 		variables: { id: itemId },
			// 	});

			// 	if (!productLightsource) throw new Error(`Invalid product: ${itemId}`);

			// 	const lightsourceArticleNo = productLightsource.articleNo?.trim();

			// 	const { product: geinsLightsource } = await geinsQuery(AdminProductDocument, {
			// 		admin: true,
			// 		variables: { handle: productLightsource.slug ?? '' },
			// 	});

			// 	const lightsourceData: ProductCreateInput | ProductUpdateInput = {
			// 		id: geinsLightsource?.id,
			// 		title: productLightsource.name,
			// 		handle: productLightsource.slug,
			// 		tags: ['lightsource', lightsourceArticleNo].filter(Boolean) as string[],
			// 	};

			// 	const lightsourceMedia: CreateMediaInput[] | undefined = productLightsource.image?.url
			// 		? [
			// 				{
			// 					originalSource: generateThumbnailUrl(productLightsource.image.url),
			// 					mediaContentType: 'IMAGE' as MediaContentType,
			// 					alt: lightsourceArticleNo,
			// 				},
			// 			]
			// 		: undefined;

			// 	const lightsourceVariants: ProductVariantsBulkInput[] = [
			// 		{
			// 			id: geinsLightsource?.variants.edges.find(
			// 				(v) => v.node.sku === productLightsource?.articleNo?.trim(),
			// 			)?.node.id,
			// 			price: productLightsource.price,
			// 			mediaSrc: productLightsource.image?.url
			// 				? [generateThumbnailUrl(productLightsource.image.url)]
			// 				: null,
			// 			inventoryItem: {
			// 				cost: productLightsource.price,
			// 				sku: productLightsource?.articleNo?.trim(),
			// 				tracked: false,
			// 			},
			// 			metafields: [
			// 				{
			// 					key: 'articleNo',
			// 					value: lightsourceArticleNo,
			// 					type: 'single_line_text_field',
			// 					namespace: 'variant',
			// 				},
			// 				{
			// 					key: 'description',
			// 					value: productLightsource.name,
			// 					type: 'single_line_text_field',
			// 					namespace: 'variant',
			// 				},
			// 				{
			// 					key: 'deliveryDays',
			// 					value: productLightsource.deliveryDays,
			// 					type: 'single_line_text_field',
			// 					namespace: 'variant',
			// 				},
			// 			],
			// 			optionValues: [
			// 				{
			// 					optionName: 'Title',
			// 					name: lightsourceArticleNo,
			// 				},
			// 			],
			// 		},
			// 	];

			// 	syncResult.handle = lightsourceData.handle as string;
			// 	syncResult.id = lightsourceData.id as string;

			// 	await updateProduct(
			// 		{ product: lightsourceData, media: lightsourceMedia },
			// 		lightsourceVariants,
			// 		lightsourceMedia,
			// 	);
			// 	break;
			default:
				console.log('Unsupported item type(api_key): ' + apiKey);
				break;
		}
	} catch (e) {
		throw e;
	}
	return syncResult;
};

// export async function updateProduct(
// 	data: {
// 		product: ProductCreateInput | ProductUpdateInput;
// 		media?: CreateMediaInput[] | undefined;
// 	},
// 	variants?: ProductVariantsBulkInput[],
// 	variantsMedia?: CreateMediaInput[],
// ) {
// 	const isUpdate = (data.product as ProductUpdateInput)?.id !== undefined;

// 	try {
// 		let product:
// 			| NonNullable<AddProductMutation['productCreate']>['product']
// 			| NonNullable<UpdateProductMutation['productUpdate']>['product'] = null;

// 		//@ts-ignore
// 		data.product.status = 'ACTIVE';

// 		if (!isUpdate) {
// 			console.log('creating product:', data.product.handle);

// 			const res = await geinsQuery(AddProductDocument, {
// 				admin: true,
// 				variables: {
// 					product: data.product,
// 					media: data.media,
// 				},
// 			});
// 			product = res.productCreate?.product;
// 		} else {
// 			console.log('updating product:', data.product.handle);

// 			const { product: geinsProduct } = await geinsQuery(AdminProductDocument, {
// 				admin: true,
// 				variables: { handle: data.product.handle ?? '' },
// 			});

// 			if (!geinsProduct) throw new Error('Invalid geins product: ' + data.product.handle);

// 			const deleteMedia: string[] = geinsProduct?.media.nodes.map((media) => media.id);
// 			const deleteVariants: string[] = geinsProduct?.variants.edges
// 				.filter(
// 					({ node }) =>
// 						node.sku &&
// 						variants?.find((variant) => variant.inventoryItem?.sku === node.sku) === undefined,
// 				)
// 				.map(({ node }) => node.id);

// 			if (deleteVariants.length) {
// 				const { productVariantsBulkDelete } = await geinsQuery<
// 					ProductVariantsBulkDeleteMutation,
// 					ProductVariantsBulkDeleteMutationVariables
// 				>(ProductVariantsBulkDeleteDocument, {
// 					admin: true,
// 					variables: {
// 						productId: geinsProduct.id,
// 						variantsIds: deleteVariants,
// 					},
// 				});
// 				if (productVariantsBulkDelete?.userErrors?.length) {
// 					throw new Error(
// 						JSON.stringify(
// 							productVariantsBulkDelete.userErrors.map((e) => e.message).join('. '),
// 							null,
// 							2,
// 						),
// 					);
// 				}
// 			}

// 			if (deleteMedia.length) {
// 				console.log('delete all media:', geinsProduct.id);
// 				const { productDeleteMedia } = await geinsQuery<
// 					ProductMediaDeleteMutation,
// 					ProductMediaDeleteMutationVariables
// 				>(ProductMediaDeleteDocument, {
// 					admin: true,
// 					variables: { productId: geinsProduct.id, mediaIds: deleteMedia },
// 				});

// 				if (productDeleteMedia?.mediaUserErrors?.length)
// 					throw new Error(
// 						JSON.stringify(
// 							productDeleteMedia.mediaUserErrors.map((e) => e.message).join('. '),
// 							null,
// 							2,
// 						),
// 					);
// 			}

// 			delete (data.product as ProductCreateInput).productOptions;

// 			const res = await geinsQuery(UpdateProductDocument, {
// 				admin: true,
// 				variables: {
// 					product: data.product,
// 				},
// 			});
// 			product = res.productUpdate?.product;
// 		}

// 		if (!product) throw new Error('Invalid product: ' + data.product.handle);

// 		if (variants) {
// 			const newVariants: ProductVariantsBulkInput[] = variants
// 				.filter((variant) => !variant.id)
// 				.map((variant) => {
// 					delete variant.id;
// 					return variant;
// 				});
// 			const newVariantsMedia: CreateMediaInput[] =
// 				variantsMedia?.filter(({ alt }) =>
// 					newVariants.find(
// 						(variant) => variant.inventoryItem?.sku && variant.inventoryItem?.sku === alt,
// 					),
// 				) ?? [];
// 			const updatedVariants: ProductVariantsBulkInput[] = variants.filter((variant) => variant.id);
// 			const updatedVariantsMedia: CreateMediaInput[] =
// 				variantsMedia?.filter(({ alt }) =>
// 					updatedVariants.find(
// 						(variant) => variant.inventoryItem?.sku && variant.inventoryItem?.sku === alt,
// 					),
// 				) ?? [];

// 			console.log('new variants:', newVariants.length, newVariantsMedia.length);
// 			console.log('update variants:', updatedVariants.length, updatedVariantsMedia.length);

// 			const [{ productVariantsBulkCreate }, { productVariantsBulkUpdate }] = await Promise.all([
// 				geinsQuery(ProductVariantsBulkCreateDocument, {
// 					admin: true,
// 					variables: {
// 						productId: product.id,
// 						variants: newVariants,
// 						media: newVariantsMedia,
// 					},
// 				}),
// 				geinsQuery(ProductVariantsBulkUpdateDocument, {
// 					admin: true,
// 					variables: {
// 						productId: product.id,
// 						variants: updatedVariants,
// 						media: updatedVariantsMedia,
// 					},
// 				}),
// 			]);

// 			if (productVariantsBulkCreate?.userErrors?.length)
// 				throw new Error(
// 					productVariantsBulkCreate.userErrors
// 						.map((e) => `${e.code}: "${e.message}" (${e.field?.join(', ')})`)
// 						.join('. '),
// 				);

// 			if (productVariantsBulkUpdate?.userErrors?.length)
// 				throw new Error(
// 					productVariantsBulkUpdate.userErrors
// 						.map((e) => `${e.code}: "${e.message}" (${e.field?.join(', ')})`)
// 						.join('. '),
// 				);

// 			const allVariants = (productVariantsBulkCreate?.productVariants ?? []).concat(
// 				productVariantsBulkUpdate?.productVariants ?? [],
// 			);

// 			console.log('updating prices');
// 			await updateVariantPrices(allVariants as ProductVariant[]);

// 			console.log(
// 				`https://admin.geins.com/store/orsjo-shop/products/${product.id?.split('/').pop()}`,
// 			);
// 		}
// 	} catch (e) {
// 		console.log(e);
// 		console.log(JSON.stringify(e, null, 2));
// 		throw e;
// 	} finally {
// 	}
// }

// export const updateVariantPrices = async (variants: ProductVariant[]) => {
// 	const { priceLists } = await geinsQuery(AllPriceListsDocument, {
// 		admin: true,
// 	});

// 	const allCurrencies = await getAllCurrencyRates();
// 	console.log(
// 		'updating fixed pricing:',
// 		priceLists.nodes.map(({ currency }) => currency).join(','),
// 	);

// 	for (const priceList of priceLists.nodes) {
// 		const pricesToAdd: PriceListPriceInput[] = [];
// 		const currencyCode = priceList.currency;
// 		const currencyRate = allCurrencies.find((c) => c.isoCode === currencyCode);

// 		if (!currencyRate) throw new Error('Currency not found: ' + currencyCode);

// 		for (const variant of variants) {
// 			pricesToAdd.push({
// 				variantId: variant.id,
// 				price: {
// 					amount: convertPriceWithRatesAndTaxes(variant.price, currencyRate),
// 					currencyCode,
// 				},
// 			});
// 		}

// 		const { priceListFixedPricesUpdate } = await geinsQuery<
// 			PriceListFixedPricesUpdateMutation,
// 			PriceListFixedPricesUpdateMutationVariables
// 		>(PriceListFixedPricesUpdateDocument, {
// 			admin: true,
// 			variables: {
// 				priceListId: priceList.id,
// 				pricesToAdd,
// 				variantIdsToDelete: [],
// 			},
// 		});

// 		if (priceListFixedPricesUpdate?.userErrors?.length)
// 			throw new Error(
// 				JSON.stringify(
// 					priceListFixedPricesUpdate.userErrors.map((e) => e.message).join('. '),
// 					null,
// 					2,
// 				),
// 			);
// 	}
// };

export const generateThumbnailUrl = (url: string | undefined | null): string => {
	if (!url) return '';
	const u = new URL(url);
	const size = 2000;
	const pad = size * 0.1;
	const imgixUrl = `${u.origin}${u.pathname}?w=${size}&h=${size}&fit=fill&auto=format&bg=fff&pad=${pad}`;
	return imgixUrl;
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

export const resetAll = async () => {
	console.log('reseting all...');

	const products = await mgmt.getProducts();

	console.log('deleting all products:', products.length);

	for (const product of products) await mgmt.removeProduct(product.ProductId);
};

// export const resyncAll = async (index: number = 0) => {
// 	const { allProducts } = await apiQuery(AllProductsDocument, {
// 		all: true,
// 		variables: { first: 500, skip: 0 },
// 		revalidate: 0,
// 	});
// 	const { allProductLightsources } = await apiQuery(AllProductLightsourcesDocument, {
// 		all: true,
// 		revalidate: 0,
// 		variables: { first: 500, skip: 0 },
// 	});
// 	const { allProductAccessories } = await apiQuery(AllProductAccessoriesDocument, {
// 		all: true,
// 		revalidate: 0,
// 		variables: { first: 500, skip: 0 },
// 	});

// 	const itemIds = [...allProducts, ...allProductLightsources, ...allProductAccessories]
// 		.map(({ id }) => id)
// 		.slice(index);

// 	try {
// 		for (let x = 0; x < itemIds.length; x++) {
// 			const id = itemIds[x];
// 			console.log(`------------------- ${x + 1}/${itemIds.length} -----------------------`);

// 			await sync(id);
// 		}
// 	} catch (e) {
// 		console.error(e);
// 		throw new Error('sync failed');
// 	}
// 	//await batchPromises(itemIds.map((id) => () => sync(id)), 5, 5000)
// };

// export const waitForMedia = async (productId: string) => {
// 	async function check() {
// 		const { product } = await geinsQuery(AdminProductMediaStatusDocument, {
// 			admin: true,
// 			variables: {
// 				id: productId,
// 			},
// 		});

// 		return product?.media.edges.filter(({ node }) => node.status !== 'READY')?.length === 0;
// 	}

// 	for (let i = 0; i < 5000; i += 1000) {
// 		if (await check()) return true;
// 		await sleep(1000);
// 	}
// 	return false;
// };
