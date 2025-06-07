import shopify_client from '@/lib/shopify/rest-client';
import client from '@/lib/client';
import shopifyQuery from '@/lib/shopify/shopify-query';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductAccessoriesDocument, AllProductLightsourcesDocument, AllProductsDocument, ProductByIdDocument, ProductAccessoryByIdDocument, ProductLightsourceByIdDocument } from '@/graphql';
import { AddProductDocument, UpdateProductDocument, ProductDeleteDocument, AllShopifyProductsDocument, ShopifyProductDocument, ProductVariantsBulkCreateDocument, ProductVariantsBulkUpdateDocument, RemoveProductDocument } from '@/lib/shopify/graphql-admin';
import { batchPromises, dedupeByKey } from '@/lib/utils';
import { Item } from '@datocms/cma-client/dist/types/generated/SimpleSchemaTypes';

export const sync = async (itemId: string) => {


  try {
    let item: Item;

    try {
      item = await client.items.find(itemId)
    } catch (e) {
      console.log(e)
      throw new Error('Invalid item: ' + itemId)
    }

    const itemTypes = await client.itemTypes.list()
    const apiKey = itemTypes.find(({ id }) => id === item.item_type.id)?.api_key

    switch (apiKey) {
      case 'product':
        const { product } = await apiQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, { variables: { id: itemId } })

        if (!product)
          throw new Error('Invalid product: ' + itemId)

        const { product: shopifyProduct } = await shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
          variables: { handle: product.slug }
        })

        const productData: ProductCreateInput | ProductUpdateInput = {
          id: shopifyProduct?.id,
          title: product.title,
          handle: product.slug,
          descriptionHtml: product.description,
          tags: ['lamp']
        }

        //@ts-ignore
        const productMedia: CreateMediaInput[] | undefined = product.image?.url ? [{
          originalSource: product.image.url,
          mediaContentType: 'IMAGE',
          alt: product.image.title,

        }] : undefined

        const productVariants: ProductVariantsBulkInput[] = product.models.reduce((acc, model) => {
          model.variants.forEach((variant) => {
            const id = shopifyProduct?.variants.edges.find((v) => v.node.sku === variant.articleNo)?.node.id ?? undefined
            acc.push({
              id,
              price: variant.price,
              inventoryItem: {
                cost: variant.price,
                sku: variant.articleNo?.trim(),
              },
              optionValues: [
                {
                  name: model.name?.id,
                }
              ]
            })
          })
          return acc
        }, [] as ProductVariantsBulkInput[])

        await syncProduct({ product: productData, media: productMedia }, dedupeByKey(productVariants, 'sku'))
        break

      case 'product_accessory':

        const { productAccessory } = await apiQuery<ProductAccessoryByIdQuery, ProductAccessoryByIdQueryVariables>(ProductAccessoryByIdDocument, { variables: { id: itemId } })

        if (!productAccessory)
          throw new Error('Invalid product: ' + itemId)

        const { product: shopifyAccessory } = await shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
          admin: true,
          variables: { handle: productAccessory.slug ?? '' }
        })

        const accessoryData: ProductCreateInput | ProductUpdateInput = {
          id: shopifyAccessory?.id,
          title: productAccessory.name,
          handle: productAccessory.slug,
          tags: ['accessory', productAccessory?.articleNo?.trim()].filter(Boolean) as string[],
        }

        const accessoryMedia: CreateMediaInput[] | undefined = productAccessory.image?.url ? [{
          originalSource: productAccessory.image.url,
          mediaContentType: MediaContentType.IMAGE,
          alt: productAccessory.image.title,
        }] : undefined

        const accessoryVariants: ProductVariantsBulkInput[] = [
          {
            id: shopifyAccessory?.variants.edges.find((v) => v.node.sku === productAccessory?.articleNo?.trim())?.node.id,
            price: productAccessory.price,
            inventoryItem: {
              cost: productAccessory.price,
              sku: productAccessory?.articleNo?.trim(),
            },
            optionValues: [
              {
                name: productAccessory.articleNo?.trim(),
              }
            ]
          }
        ]
        await syncProduct({ product: accessoryData, media: accessoryMedia }, accessoryVariants)
        break
      case 'product_lightsource':
        const { productLightsource } = await apiQuery<ProductLightsourceByIdQuery, ProductLightsourceByIdQueryVariables>(ProductLightsourceByIdDocument, { variables: { id: itemId } })
        if (!productLightsource)
          throw new Error('Invalid product: ' + itemId)

        const { product: shopifyLightsource } = await shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, { admin: true, variables: { handle: productLightsource.slug ?? '' } })

        const lightsourceData: ProductCreateInput | ProductUpdateInput = {
          id: shopifyLightsource?.id,
          title: productLightsource.name,
          handle: productLightsource.slug,
          tags: ['lightsource', productLightsource?.articleNo?.trim()].filter(Boolean) as string[],
        }

        const lightsourceMedia: CreateMediaInput[] | undefined = productLightsource.image?.url ? [{
          originalSource: productLightsource.image.url,
          mediaContentType: MediaContentType.IMAGE,
          alt: productLightsource.image.title,
        }] : undefined

        const lightsourceVariants: ProductVariantsBulkInput[] = [
          {
            id: shopifyLightsource?.variants.edges.find((v) => v.node.sku === productLightsource?.articleNo?.trim())?.node.id,
            price: productLightsource.price,
            inventoryItem: {
              cost: productLightsource.price,
              sku: productLightsource?.articleNo?.trim(),
            },
            optionValues: [
              {
                name: productLightsource.articleNo?.trim(),
              }
            ]
          }
        ]
        await syncProduct({ product: lightsourceData, media: lightsourceMedia }, lightsourceVariants)
        break
      default:
        throw new Error('Invalid item type: ' + item.item_type.id)
    }
  } catch (e) {
    console.log(e)
    throw e
  }
}

export async function syncProduct(data: { product: ProductCreateInput | ProductUpdateInput, media: CreateMediaInput[] | undefined }, variants?: ProductVariantsBulkInput[]) {

  try {
    console.time('sync-product')

    let product: NonNullable<AddProductMutation['productCreate']>['product'] | NonNullable<UpdateProductMutation['productUpdate']>['product'] = null;

    //@ts-ignore
    if (!data.product.id) {
      console.log('creating product', data.product.handle)

      const res = await shopifyQuery<AddProductMutation, AddProductMutationVariables>(AddProductDocument, {
        admin: true,
        variables: {
          product: data.product,
          media: data.media
        }
      })
      product = res.productCreate?.product
    }
    else {
      console.log('updating product', data.product.handle)

      const res = await shopifyQuery<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, {
        admin: true,
        variables: {
          product: data.product,
          media: data.media
        }
      })
      console.log(res.productUpdate?.userErrors)
      product = res.productUpdate?.product
    }

    if (!product) throw new Error('Invalid product: ' + data.product.handle)

    if (variants) {
      const newVariants: ProductVariantsBulkInput[] = variants.filter((variant) => !variant.id)
      const updatedVariants: ProductVariantsBulkInput[] = variants.filter((variant) => variant.id)

      console.log('create new variants', newVariants.length)
      console.log('updated variants', updatedVariants.length)

      const [{ productVariantsBulkCreate }, { productVariantsBulkUpdate }] = await Promise.all([
        shopifyQuery<ProductVariantsBulkCreateMutation, ProductVariantsBulkCreateMutationVariables>(ProductVariantsBulkCreateDocument, {
          admin: true,
          variables: {
            productId: product.id,
            variants: newVariants
          }
        }),
        shopifyQuery<ProductVariantsBulkUpdateMutation, ProductVariantsBulkUpdateMutationVariables>(ProductVariantsBulkUpdateDocument, {
          admin: true,
          variables: {
            productId: product.id,
            variants: updatedVariants
          }
        })])
    }
  } catch (e) {
    console.log(data)
    throw e
  } finally {
    console.timeEnd('sync-product')
  }
}

export const resyncAll = async () => {

  const shopifyProducts = await shopify_client.product.list({ limit: 250 })

  await batchPromises(shopifyProducts.map((product) => () =>
    shopifyQuery<RemoveProductMutation, RemoveProductMutationVariables>(ProductByIdDocument, {
      admin: true,
      variables: {
        id: `gid://shopify/Product/${product.id}`
      }
    })
  ), 5, 5000)

  const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, { variables: { first: 500, skip: 0 } })
  const { allProductLightsources } = await apiQuery<AllProductLightsourcesQuery, AllProductLightsourcesQueryVariables>(AllProductLightsourcesDocument, { variables: { first: 500, skip: 0 } })
  const { allProductAccessories } = await apiQuery<AllProductAccessoriesQuery, AllProductAccessoriesQueryVariables>(AllProductAccessoriesDocument, { variables: { first: 500, skip: 0 } })

  const itemIds = [...allProducts, ...allProductLightsources, ...allProductAccessories].map(({ id }) => id)
  await batchPromises(itemIds.map((id) => sync(id)), 5, 5000)

}
