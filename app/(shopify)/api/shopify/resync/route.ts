import shopify_client from '@/lib/shopify/rest-client';
import client from '@/lib/client';
import { create, update, remove, uploadProductImage, ProductData, batchPromises } from '../sync/utils';

export const GET = async (req: Request) => {

  const products = await client.items.list({ filter: { type: 'product' }, page: { limit: 500 }, version: "published" })
  const shopifyProducts = await shopify_client.product.list()

  const res = await batchPromises(shopifyProducts.map((product) => () => remove(product.id)), 5, 5000)

  const productData: ProductData[] = []

  for (const product of products as any) {
    productData.push({
      title: product.title,
      handle: product.slug,
      body_html: product.description?.en,
      image: product.image?.upload_id ?? null
    })
  }

  const addedProducts = await batchPromises(productData.map((product) => () => create(product)), 5, 5000)

  return new Response(JSON.stringify(addedProducts, null, 2))
}