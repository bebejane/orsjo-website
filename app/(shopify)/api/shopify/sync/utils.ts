import shopify_client from '@/lib/shopify/rest-client';
import client from '@/lib/client';
import { IProduct, IProductImage, IProductVariant } from 'shopify-api-node';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductAccessoriesDocument, AllProductLightsourcesDocument, AllProductsDocument } from '@/graphql';

export type ProductData = {
  id?: string
  title: string
  handle: string
  body_html: string
  imageUrl?: string | null | undefined
  tags?: string[]
  price?: string
  variants?: VariantData[]
  published_scope: string
}

export type VariantData = {
  product_id?: number
  option1: string
  sku: string
  price?: string
  grams?: number | null
  imageUrl?: string | null | undefined
  image_id?: number | null | undefined
  inventory_quantity: number
}

export const create = async (data: ProductData): Promise<IProduct> => {
  console.log('creating product:', data.handle)

  try {

    const product = await shopify_client.product.create(data)

    if (data.imageUrl)
      await uploadProductImage(product.id, { url: data.imageUrl, position: 1, imageId: product.image?.id })

    return product
  } catch (e) {
    console.log(data)
    console.log("error creating product")
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
    if (!data.product_id) throw new Error('Invalid product id: ' + data.product_id)

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

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text        
    .replace(/-+$/, '') // Trim - from end of text
}

export function dedupeByKey<T>(array: T[], key: string) {
  return array.reduce((acc, item) => {
    const existingItem = acc.find((i) => i[key] === item[key]);
    if (!existingItem) {
      acc.push(item);
    }
    return acc;
  }, [] as T[]);
}

export const resyncAll = async () => {

  const shopifyProducts = await shopify_client.product.list({ limit: 250 })

  const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, { variables: { first: 500, skip: 0 } })
  const { allProductLightsources } = await apiQuery<AllProductLightsourcesQuery, AllProductLightsourcesQueryVariables>(AllProductLightsourcesDocument, { variables: { first: 500, skip: 0 } })
  const { allProductAccessories } = await apiQuery<AllProductAccessoriesQuery, AllProductAccessoriesQueryVariables>(AllProductAccessoriesDocument, { variables: { first: 500, skip: 0 } })

  const products: ProductData[] = []
  const accessories: ProductData[] = []
  const lightsources: ProductData[] = []


  console.log('removing all products')
  await batchPromises(shopifyProducts.map((product) => () => remove(product.id)), 5, 5000)

  for (const product of allProducts) {

    const variants: VariantData[] = []

    const productData = {
      title: product.title,
      body_html: product.description ?? '',
      handle: product.slug,
      tags: ['lamp'],
      imageUrl: product.image?.url ?? null,
      published_scope: 'global'
    }

    for (const model of product.models) {

      for (const variant of model.variants) {
        const sku = variant.articleNo?.trim() ?? ''
        variants.push({
          sku,
          option1: sku,
          price: variant.price ? String(variant.price) : '0',
          imageUrl: variant.image?.url ?? null,
          inventory_quantity: 10
        })
      }
    }
    products.push({ ...productData, variants: dedupeByKey(variants, 'sku') })
  }

  for (const accessory of allProductAccessories) {
    const articleNo = accessory.articleNo?.trim() ?? ''
    accessories.push({
      title: accessory.name ?? '',
      body_html: '',
      handle: accessory.slug,
      price: accessory.price,
      imageUrl: accessory.image?.url,
      tags: ['accessory', articleNo],
      published_scope: 'global',
      variants: [{
        sku: articleNo,
        option1: articleNo,
        price: accessory.price,
        imageUrl: accessory.image?.url ?? null,
        inventory_quantity: 10
      }]
    })
  }

  for (const lightsource of allProductLightsources) {
    const articleNo = lightsource.articleNo?.trim() ?? ''
    lightsources.push({
      title: lightsource.name ?? '',
      handle: lightsource.slug,
      body_html: '',
      price: lightsource.price,
      imageUrl: lightsource?.image?.url,
      tags: ['lightsource', articleNo],
      published_scope: 'global',
      variants: [{
        sku: articleNo,
        option1: articleNo,
        price: lightsource.price,
        imageUrl: lightsource?.image?.url ?? null,
        inventory_quantity: 10
      }]
    })
  }

  console.log('add products', products.length)
  const addedProducts = await batchPromises(products.map((p) => () => create(p)), 5, 5000)
  console.log('added products', addedProducts.length)

  console.log('add accessories', dedupeByKey(accessories, 'handle').length)
  const shopifyAccessories = await batchPromises(dedupeByKey(accessories, 'handle').map((accessory) => () => create(accessory)), 5, 5000)
  console.log('added accessories', shopifyAccessories.length)

  console.log('add lightsources', lightsources.length)
  const addedLightsources = await batchPromises(lightsources.map((product) => () => create(product)), 5, 5000)
  console.log('added lightsources', addedLightsources.length)

  /*
  console.log('delete default variants...')
  const products = await shopify_client.product.list({ limit: 250 })
  const defaultVariants: { productId: number, variantId: number }[] = []
  for (const product of products) {
    for (const variant of product.variants) {
      if (variant.title.includes('Default')) {
        console.log('deleting default variant', variant.id)
        defaultVariants.push({ productId: product.id, variantId: variant.id })
      }
    }
  }
  await batchPromises(defaultVariants.map(({ productId, variantId }) => () => shopify_client.productVariant.delete(productId, variantId)), 5, 5000)
  */
}

export const sync = async (itemId: string) => {
  const item: any = await client.items.find(itemId);

  if (!item)
    throw new Error('Invalid item: ' + itemId)

  const itemTypes = await client.itemTypes.list()
  const apiKey = itemTypes.find(({ id }) => id === item.item_type.id)?.api_key

  switch (apiKey) {
    case 'product':
      const shopifyProduct = (await shopify_client.product.list({ limit: 1, handle: item.slug }))?.[0]

      const data: ProductData = {
        title: item.title,
        handle: item.slug,
        body_html: item.description ?? '',
        imageUrl: item.image?.url ?? null,
        published_scope: 'global'
      }
      if (!shopifyProduct)
        await create(data)
      else {
        await update(shopifyProduct.id, data)
      }
      break
    case 'product_accessory':
      break
    case 'product_lightsource':
      break
    default:
      throw new Error('Invalid item type: ' + item.item_type.id)
  }


}