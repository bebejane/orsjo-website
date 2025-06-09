import client from '@/lib/client';
import shopifyQuery from '@/lib/shopify/shopify-query';
import { apiQuery } from 'next-dato-utils/api';
import {
	AllProductAccessoriesDocument,
	AllProductLightsourcesDocument,
	AllProductsDocument,
	ProductByIdDocument,
	ProductAccessoryByIdDocument,
	ProductLightsourceByIdDocument,
} from '@/graphql';
import {
	AddProductDocument,
	UpdateProductDocument,
	AdminProductMediaStatusDocument,
	AdminProductDocument,
	ProductVariantsBulkCreateDocument,
	ProductVariantsBulkUpdateDocument,
	ProductMediaDeleteDocument,
	ProductVariantsBulkDeleteDocument,
	AllAdminProductsDocument,
	RemoveProductDocument,
	FilesDocument,
	FileDeleteDocument,
} from '@/lib/shopify/graphql-admin';
import { Item } from '@datocms/cma-client/dist/types/generated/SimpleSchemaTypes';
import { batchPromises } from '@/lib/utils';

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
			console.log(e.message);
			throw new Error('Invalid item: ' + itemId);
		}

		const itemTypes = await client.itemTypes.list();
		const apiKey = itemTypes.find(({ id }) => id === item.item_type.id)?.api_key;

		if (!apiKey) throw new Error('Invalid item type: ' + item?.item_type?.id);

		syncResult.itemType = apiKey;

		console.log('syncing');

		switch (apiKey) {
			case 'product':
				const { product } = await apiQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, {
					revalidate: 0,
					variables: { id: itemId },
				});

				if (!product) throw new Error('Invalid product: ' + itemId);

				const { product: shopifyProduct } = await shopifyQuery<AdminProductQuery, AdminProductQueryVariables>(AdminProductDocument, {
					admin: true,
					variables: { handle: product.slug },
				});

				const productMedia: CreateMediaInput[] = [];

				const productVariants: ProductVariantsBulkInput[] = product.models
					.reduce((acc, model) => {
						model.variants.forEach((variant) => {
							const articleNo = variant.articleNo?.trim();
							const shopifyVariant = shopifyProduct?.variants.edges.find((v) => v.node.sku === articleNo)?.node;
							const id = shopifyVariant?.id ?? undefined;
							const mediaSrc = variant.image?.url ? [variant.image?.url] : product.image.url ? [product.image.url] : null;
							const description = [variant.color?.name, variant.material?.name].filter(Boolean).join(', ');

							acc.push({
								id,
								mediaSrc,
								price: variant.price,
								inventoryItem: {
									cost: variant.price,
									sku: articleNo,
									tracked: false,
								},
								metafields: [
									{
										key: 'articleNo',
										value: articleNo,
										type: 'single_line_text_field',
										namespace: 'variant',
									},
									{
										key: 'description',
										value: description,
										type: 'single_line_text_field',
										namespace: 'variant',
									},
								],
								optionValues: [
									{
										name: parseTitle(product as ProductRecord, variant.id),
										optionName: 'Title',
									},
								],
							});
						});
						return acc;
					}, [] as ProductVariantsBulkInput[])
					.reduce((acc, variant) => {
						if (!acc.find((v) => v.inventoryItem && v.inventoryItem?.sku === variant.inventoryItem?.sku)) acc.push(variant);
						return acc;
					}, [] as ProductVariantsBulkInput[]);

				const productData: ProductCreateInput | ProductUpdateInput = {
					id: shopifyProduct?.id,
					title: product.title,
					handle: product.slug,
					descriptionHtml: product.description,
					tags: ['lamp'],
				};

				const variantsMedia: CreateMediaInput[] = productVariants
					.filter((variant) => variant.mediaSrc?.[0])
					.map((variant) => ({
						originalSource: variant.mediaSrc?.[0] ?? '',
						mediaContentType: 'IMAGE' as MediaContentType,
						alt: variant.inventoryItem?.sku,
					}));

				syncResult.handle = productData.handle as string;
				syncResult.id = productData.id as string;

				await updateProduct({ product: productData, media: productMedia }, productVariants, variantsMedia);

				break;

			case 'product_accessory':
				const { productAccessory } = await apiQuery<ProductAccessoryByIdQuery, ProductAccessoryByIdQueryVariables>(
					ProductAccessoryByIdDocument,
					{ revalidate: 0, variables: { id: itemId } }
				);

				if (!productAccessory) throw new Error('Invalid product accessory: ' + itemId);

				const { product: shopifyAccessory } = await shopifyQuery<AdminProductQuery, AdminProductQueryVariables>(AdminProductDocument, {
					admin: true,
					variables: { handle: productAccessory.slug ?? '' },
				});

				const accessoryData: ProductCreateInput | ProductUpdateInput = {
					id: shopifyAccessory?.id,
					title: productAccessory.name,
					handle: productAccessory.slug,
					tags: ['accessory', productAccessory?.articleNo?.trim()].filter(Boolean) as string[],
				};

				const accessoryVariantsMedia: CreateMediaInput[] | undefined = productAccessory.image?.url
					? [
							{
								originalSource: productAccessory.image.url,
								mediaContentType: 'IMAGE' as MediaContentType,
								alt: productAccessory.articleNo?.trim(),
							},
						]
					: undefined;

				const accessoryVariants: ProductVariantsBulkInput[] = [
					{
						id: shopifyAccessory?.variants.edges.find((v) => v.node.sku === productAccessory?.articleNo?.trim())?.node.id,
						price: productAccessory.price,
						mediaSrc: productAccessory.image?.url ? [productAccessory.image.url] : null,
						inventoryItem: {
							cost: productAccessory.price,
							sku: productAccessory?.articleNo?.trim(),
							tracked: false,
						},
						metafields: [
							{
								key: 'articleNo',
								value: productAccessory.articleNo?.trim(),
								type: 'single_line_text_field',
								namespace: 'variant',
							},
							{
								key: 'description',
								value: productAccessory.name,
								type: 'single_line_text_field',
								namespace: 'variant',
							},
						],
						optionValues: [
							{
								optionName: 'Title',
								name: productAccessory.name,
							},
						],
					},
				];

				syncResult.handle = accessoryData.handle as string;
				syncResult.id = accessoryData.id as string;

				await updateProduct({ product: accessoryData }, accessoryVariants, accessoryVariantsMedia);
				break;
			case 'product_lightsource':
				console.log('start sync: product_lightsource');
				const { productLightsource } = await apiQuery<ProductLightsourceByIdQuery, ProductLightsourceByIdQueryVariables>(
					ProductLightsourceByIdDocument,
					{ revalidate: 0, variables: { id: itemId } }
				);

				if (!productLightsource) throw new Error(`Invalid product: ${itemId}`);

				const { product: shopifyLightsource } = await shopifyQuery<AdminProductQuery, AdminProductQueryVariables>(AdminProductDocument, {
					admin: true,
					variables: { handle: productLightsource.slug ?? '' },
				});

				const lightsourceData: ProductCreateInput | ProductUpdateInput = {
					id: shopifyLightsource?.id,
					title: productLightsource.name,
					handle: productLightsource.slug,
					tags: ['lightsource', productLightsource?.articleNo?.trim()].filter(Boolean) as string[],
				};

				const lightsourceMedia: CreateMediaInput[] | undefined = productLightsource.image?.url
					? [
							{
								originalSource: productLightsource.image.url,
								mediaContentType: 'IMAGE' as MediaContentType,
								alt: productLightsource.articleNo?.trim(),
							},
						]
					: undefined;

				const lightsourceVariants: ProductVariantsBulkInput[] = [
					{
						id: shopifyLightsource?.variants.edges.find((v) => v.node.sku === productLightsource?.articleNo?.trim())?.node.id,
						price: productLightsource.price,
						mediaSrc: productLightsource.image?.url ? [productLightsource.image.url] : null,
						inventoryItem: {
							cost: productLightsource.price,
							sku: productLightsource?.articleNo?.trim(),
							tracked: false,
						},
						metafields: [
							{
								key: 'articleNo',
								value: productLightsource.articleNo?.trim(),
								type: 'single_line_text_field',
								namespace: 'variant',
							},
							{
								key: 'description',
								value: productLightsource.name,
								type: 'single_line_text_field',
								namespace: 'variant',
							},
						],
						optionValues: [
							{
								optionName: 'Title',
								name: productLightsource.name,
							},
						],
					},
				];

				syncResult.handle = lightsourceData.handle as string;
				syncResult.id = lightsourceData.id as string;

				await updateProduct({ product: lightsourceData, media: lightsourceMedia }, lightsourceVariants, lightsourceMedia);
				break;
			default:
				throw new Error('Invalid item type: ' + item.item_type.id);
		}
	} catch (e) {
		throw e;
	}
	return syncResult;
};

export async function updateProduct(
	data: {
		product: ProductCreateInput | ProductUpdateInput;
		media?: CreateMediaInput[] | undefined;
	},
	variants?: ProductVariantsBulkInput[],
	variantsMedia?: CreateMediaInput[]
) {
	const isUpdate = (data.product as ProductUpdateInput)?.id !== undefined;

	try {
		let product:
			| NonNullable<AddProductMutation['productCreate']>['product']
			| NonNullable<UpdateProductMutation['productUpdate']>['product'] = null;
		if (!isUpdate) {
			console.log('creating product:', data.product.handle);

			const res = await shopifyQuery<AddProductMutation, AddProductMutationVariables>(AddProductDocument, {
				admin: true,
				variables: {
					product: data.product,
					media: data.media,
				},
			});
			product = res.productCreate?.product;
		} else {
			console.log('updating product:', data.product.handle);

			const { product: shopifyProduct } = await shopifyQuery<AdminProductQuery, AdminProductQueryVariables>(AdminProductDocument, {
				admin: true,
				variables: { handle: data.product.handle ?? '' },
			});

			if (!shopifyProduct) throw new Error('Invalid shopify product: ' + data.product.handle);

			const deleteMedia: string[] = shopifyProduct?.media.nodes.map((media) => media.id);
			const deleteVariants: string[] = shopifyProduct?.variants.edges
				.filter(({ node }) => node.sku && variants?.find((variant) => variant.inventoryItem?.sku === node.sku) === undefined)
				.map(({ node }) => node.id);

			if (deleteMedia.length) {
				console.log('delete all media:', shopifyProduct.id);
				const { productDeleteMedia } = await shopifyQuery<ProductMediaDeleteMutation, ProductMediaDeleteMutationVariables>(
					ProductMediaDeleteDocument,
					{
						admin: true,
						variables: { productId: shopifyProduct.id, mediaIds: deleteMedia },
					}
				);

				if (productDeleteMedia?.mediaUserErrors?.length)
					throw new Error(JSON.stringify(productDeleteMedia.mediaUserErrors.map((e) => e.message).join('. '), null, 2));
			}

			if (deleteVariants.length) {
				console.log(shopifyProduct?.variants.edges);
				const { productVariantsBulkDelete } = await shopifyQuery<
					ProductVariantsBulkDeleteMutation,
					ProductVariantsBulkDeleteMutationVariables
				>(ProductVariantsBulkDeleteDocument, {
					admin: true,
					variables: {
						productId: shopifyProduct.id,
						variantsIds: deleteVariants,
					},
				});
				if (productVariantsBulkDelete?.userErrors?.length) {
					throw new Error(JSON.stringify(productVariantsBulkDelete.userErrors.map((e) => e.message).join('. '), null, 2));
				}
			}

			delete (data.product as ProductCreateInput).productOptions;

			const res = await shopifyQuery<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, {
				admin: true,
				variables: {
					product: data.product,
				},
			});
			product = res.productUpdate?.product;
		}

		if (!product) throw new Error('Invalid product: ' + data.product.handle);

		if (variants) {
			const newVariants: ProductVariantsBulkInput[] = variants
				.filter((variant) => !variant.id)
				.map((variant) => {
					delete variant.id;
					return variant;
				});
			const newVariantsMedia: CreateMediaInput[] =
				variantsMedia?.filter(({ alt }) =>
					newVariants.find((variant) => variant.inventoryItem?.sku && variant.inventoryItem?.sku === alt)
				) ?? [];
			const updatedVariants: ProductVariantsBulkInput[] = variants.filter((variant) => variant.id);
			const updatedVariantsMedia: CreateMediaInput[] =
				variantsMedia?.filter(({ alt }) =>
					updatedVariants.find((variant) => variant.inventoryItem?.sku && variant.inventoryItem?.sku === alt)
				) ?? [];

			console.log('new variants:', newVariants.length, newVariantsMedia.length);
			console.log('update variants:', updatedVariants.length, updatedVariantsMedia.length);

			const [{ productVariantsBulkCreate }, { productVariantsBulkUpdate }] = await Promise.all([
				shopifyQuery<ProductVariantsBulkCreateMutation, ProductVariantsBulkCreateMutationVariables>(ProductVariantsBulkCreateDocument, {
					admin: true,
					variables: {
						productId: product.id,
						variants: newVariants,
						media: newVariantsMedia,
					},
				}),
				shopifyQuery<ProductVariantsBulkUpdateMutation, ProductVariantsBulkUpdateMutationVariables>(ProductVariantsBulkUpdateDocument, {
					admin: true,
					variables: {
						productId: product.id,
						variants: updatedVariants,
						media: updatedVariantsMedia,
					},
				}),
			]);

			if (productVariantsBulkCreate?.userErrors?.length)
				throw new Error(JSON.stringify(productVariantsBulkCreate.userErrors.map((e) => e.message).join('. '), null, 2));

			if (productVariantsBulkUpdate?.userErrors?.length)
				throw new Error(JSON.stringify(productVariantsBulkUpdate.userErrors.map((e) => e.message).join('. '), null, 2));

			console.log(`https://admin.shopify.com/store/orsjo-shop/products/${product.id?.split('/').pop()}`);
			//console.log(`https://orsjo.admin.datocms.com/environments/dev/editor/item_types/${}/items/${}/edit`)
			/*
      const ready = await waitForMedia(product.id)

      if (!ready)
        throw new Error('Product media not ready')

      
      const { product: shopifyProduct } = await shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
        admin: true,
        variables: { handle: data.product.handle ?? '' }
      })
      
      const appendVariantMedia = shopifyProduct?.variants.edges.map(({ node }) => ({
        variantId: node.id,
        mediaIds: [product.media.nodes.find((media) => media.alt === node.sku)?.id ?? ''].filter(Boolean),
      })).filter(({ mediaIds }) => mediaIds.length) ?? []

      const { productVariantAppendMedia } = await shopifyQuery<ProductVariantAppendMediaMutation, ProductVariantAppendMediaMutationVariables>(ProductVariantAppendMediaDocument, {
        admin: true,
        variables: {
          productId: product.id,
          variantMedia: appendVariantMedia,
        }
      })
      //console.log(JSON.stringify(productVariantDetachMedia, null, 2))
      console.log(JSON.stringify(productVariantAppendMedia, null, 2))
      */
		}
	} catch (e) {
		console.log(e);
		console.log(JSON.stringify(e, null, 2));
		throw e;
	} finally {
	}
}

export const parseTitle = (product: ProductRecord, variantId: string): string => {
	const model = product.models.find(({ variants }) => variants.find((v) => v.id === variantId));
	const variant = model?.variants.find(({ id }) => id === variantId);
	const title =
		[model?.name?.name, variant?.color?.name, variant?.material?.name, variant?.feature?.name].filter(Boolean).join(' - ') ??
		variant?.articleNo?.trim();
	return title || 'No title';
};

export const resetAll = async () => {
	console.log('reseting all...');
	//throw new Error('Not implemented');
	const { products } = await shopifyQuery<AllAdminProductsQuery, AllAdminProductsQueryVariables>(AllAdminProductsDocument, {
		admin: true,
	});

	console.log('deleting all products:', products?.edges.length);

	await batchPromises(
		products?.edges.map(
			({ node: { id } }) =>
				() =>
					shopifyQuery<RemoveProductMutation, RemoveProductMutationVariables>(RemoveProductDocument, {
						admin: true,
						variables: {
							id,
						},
					})
		),
		5,
		5000
	);

	const files = [];
	let first = 100;
	let after: string | undefined = undefined;

	while (true) {
		const res = await shopifyQuery<FilesQuery, FilesQueryVariables>(FilesDocument, {
			admin: true,
			variables: {
				first,
				after,
			},
		});

		files.push.apply(
			files,
			res.files.edges.map(({ node }) => node)
		);

		if (!res.files.pageInfo.hasNextPage) break;

		after = res.files.pageInfo.endCursor;
	}
	console.log('deleting all files:', files.length);

	await batchPromises(
		files.map(
			({ id }) =>
				() =>
					shopifyQuery<FileDeleteMutation, FileDeleteMutationVariables>(FileDeleteDocument, {
						admin: true,
						variables: {
							id,
						},
					})
		),
		10,
		5000,
		(index) => console.log(`deleted file (index): ${index}`)
	);
};

export const resyncAll = async () => {
	const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, {
		variables: { first: 500, skip: 0 },
		revalidate: 0,
	});
	const { allProductLightsources } = await apiQuery<AllProductLightsourcesQuery, AllProductLightsourcesQueryVariables>(
		AllProductLightsourcesDocument,
		{ revalidate: 0, variables: { first: 500, skip: 0 } }
	);
	const { allProductAccessories } = await apiQuery<AllProductAccessoriesQuery, AllProductAccessoriesQueryVariables>(
		AllProductAccessoriesDocument,
		{ revalidate: 0, variables: { first: 500, skip: 0 } }
	);

	const itemIds = [...allProducts, ...allProductLightsources, ...allProductAccessories].map(({ id }) => id);

	try {
		for (let x = 0; x < itemIds.length; x++) {
			const id = itemIds[x];
			console.log(`------------------- ${x + 1}/${itemIds.length} -----------------------`);

			await sync(id);
		}
	} catch (e) {
		console.log(e.message);
	}
	//await batchPromises(itemIds.map((id) => () => sync(id)), 5, 5000)
};

export const waitForMedia = async (productId: string) => {
	async function check() {
		const { product } = await shopifyQuery<AdminProductMediaStatusQuery, AdminProductMediaStatusQueryVariables>(
			AdminProductMediaStatusDocument,
			{
				admin: true,
				variables: {
					id: productId,
				},
			}
		);

		return product?.media.edges.filter(({ node }) => node.status !== 'READY')?.length === 0;
	}

	for (let i = 0; i < 5000; i += 1000) {
		if (await check()) return true;
		await sleep(1000);
	}
	return false;
};
