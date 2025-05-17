import shopify_client from '@/lib/shopify/rest-client';
import client from '@/lib/client';
import { IProduct, IProductImage, IProductVariant } from 'shopify-api-node';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductLightsourcesDocument, AllProductsDocument } from '@/graphql';

export type ProductData = {
  id?: string
  title: string
  handle: string
  body_html: string
  imageUrl?: string | null | undefined
  tags?: string[]
  price?: string
}

export type VariantData = {
  product_id: number
  option1: string
  sku: string
  price?: string
  grams?: number | null
  imageUrl?: string | null | undefined
  image_id?: number | null | undefined
}

export const create = async (data: ProductData): Promise<IProduct> => {
  console.log('creating product:', data.handle)

  try {

    const product = await shopify_client.product.create(data)

    if (data.imageUrl)
      await uploadProductImage(product.id, { url: data.imageUrl, position: 1, imageId: product.image?.id })

    return product
  } catch (e) {
    console.log("error creating product", data.handle, e)
    throw e
  }
}

export const update = async (shopifyId: number, data: ProductData): Promise<IProduct> => {
  if (!data.id)
    throw new Error('Invalid id: ' + data.id)

  const item = (await client.items.find(data.id))

  if (!item)
    throw new Error('Invalid item: ' + data.id)

  const product = await shopify_client.product.update(shopifyId, data)

  if (data.imageUrl) {
    await uploadProductImage(product.id, { url: data.imageUrl, position: 1, imageId: product.image?.id })
  }
  return product
}

export const remove = async (shopifyId: number): Promise<void> => {
  console.log('deleting product: ', shopifyId)
  await shopify_client.product.delete(shopifyId)
}

export const uploadProductImage = async (productId: number, opt: { url: string, imageId?: number, position: number }): Promise<IProductImage> => {
  let image: IProductImage | null = null

  const { url, position, imageId } = opt

  if (!imageId) {
    console.log('creating image: ', url)
    image = await shopify_client.productImage.create(productId, { src: url, position })
  } else {
    console.log('updating image: ', imageId, url)
    image = await shopify_client.productImage.update(productId, imageId, { src: url, position })
  }

  return image
}


export const createVariant = async (data: VariantData): Promise<IProductVariant> => {
  console.log('creating variant:', data.product_id, data.sku)

  try {

    if (data.imageUrl) {
      const image = await uploadProductImage(data.product_id, { url: data.imageUrl, position: 2 })
      data.image_id = image.id
      delete data.imageUrl
    }

    const variant = await shopify_client.productVariant.create(data.product_id, data)

    return variant
  } catch (e) {
    console.log("error creating variant", data.product_id, data.sku, e)
    throw e
  }
}

export const batchPromises = async (tasks: any[], concurrency: number, timeout?: number) => {
  const results: any[] = [];
  const executing = new Set();

  for (const task of tasks) {
    const promise = Promise.resolve().then(() => task());
    results.push(promise);
    executing.add(promise);

    const clean = () => executing.delete(promise);
    promise.then(clean).catch(clean);

    if (executing.size >= concurrency) {
      await Promise.race(executing);
      if (timeout)
        await new Promise((resolve) => setTimeout(resolve, timeout));
    }
  }

  return Promise.all(results);
}

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text        
    .replace(/-+$/, '') // Trim - from end of text
}

function dedupeByKey<T>(array: T[], key: string) {
  return array.reduce((acc, item) => {
    const existingItem = acc.find((i) => i[key] === item[key]);
    if (!existingItem) {
      acc.push(item);
    }
    return acc;
  }, [] as T[]);
}

export const resyncAll = async () => {

  const shopifyProducts = await shopify_client.product.list()

  const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, { variables: { first: 500, skip: 0 } })
  const { allProductLightsources } = await apiQuery<AllProductLightsourcesQuery, AllProductLightsourcesQueryVariables>(AllProductLightsourcesDocument, { variables: { first: 500, skip: 0 } })

  const accessories: ProductData[] = []
  const lightsources: ProductData[] = []
  const variants: VariantData[] = []

  console.log('removing all products')
  await batchPromises(shopifyProducts.map((product) => () => remove(product.id)), 10, 5000)

  for (const product of allProducts) {

    const p = await create({
      title: product.title,
      body_html: product.description ?? '',
      handle: product.slug,
      tags: ['lamp'],
      imageUrl: product.image?.url ?? null
    })

    for (const model of product.models) {

      for (const variant of model.variants) {
        const sku = variant.articleNo?.trim() ?? ''

        variants.push({
          product_id: p.id,
          sku,
          option1: sku,
          price: variant.price ? String(variant.price) : '0',
          imageUrl: variant.image?.url ?? null
        })
      }

      for (const accessory of model.accessories) {
        accessories.push({
          title: accessory.accessory?.name ?? '',
          body_html: '',
          handle: accessory.articleNo?.trim() ?? '',
          price: accessory.price,
          tags: ['accessory']
        })
      }
    }
  }

  for (const lightsource of allProductLightsources) {
    lightsources.push({
      title: lightsource.name ?? '',
      handle: slugify(lightsource.name ?? ''),
      body_html: '',
      tags: ['lightsource'],
      price: lightsource.price,
    })
  }

  console.log('add variants')
  const shopifyVariants = await batchPromises(dedupeByKey(variants, 'sku').map((variant) => () => createVariant(variant)), 5, 5000)
  console.log('added variants', shopifyVariants.length)

  console.log('add accessories')
  const shopifyAccessories = await batchPromises(dedupeByKey(accessories, 'handle').map((accessory) => () => create(accessory)), 5, 5000)
  console.log('added accessories', shopifyAccessories.length)


  console.log('add lightsources')
  const addedLightsources = await batchPromises(lightsources.map((product) => () => create(product)), 5, 5000)
  console.log('added lightsources', addedLightsources.length)

}