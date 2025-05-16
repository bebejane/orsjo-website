import shopify_client from '@/lib/shopify/rest-client';
import client from '@/lib/client';
import { IProduct, IProductImage } from 'shopify-api-node';

export type ProductData = {
  id?: string
  title: string
  handle: string
  body_html: string
  image?: string
}


export const create = async (data: ProductData): Promise<IProduct> => {
  console.log('creating product:', data.handle)

  const product = await shopify_client.product.create(data)

  if (data.image) {
    const image = await client.uploads.find(data.image)
    image && await uploadProductImage(product, image.url)
  }
  return product
}

export const update = async (shopifyId: number, data: ProductData): Promise<IProduct> => {
  if (!data.id)
    throw new Error('Invalid id: ' + data.id)

  const item = (await client.items.find(data.id))

  if (!item)
    throw new Error('Invalid item: ' + data.id)

  const product = await shopify_client.product.update(shopifyId, data)

  if (data.image) {
    const image = await client.uploads.find(data.image)
    image && await uploadProductImage(product, image.url)
  }
  return product
}

export const uploadProductImage = async (product: IProduct, url: string): Promise<IProductImage> => {
  let image: IProductImage | null = null

  if (product.image) {
    console.log('updating image: ', product.image.id)
    image = await shopify_client.productImage.update(product.id, product.image.id, { src: url })
  } else {
    console.log('creating image: ', url)
    image = await shopify_client.productImage.create(product.id, { src: url })
  }

  return image
}

export const remove = async (shopifyId: number): Promise<void> => {
  console.log('deleting product: ', shopifyId)
  await shopify_client.product.delete(shopifyId)
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