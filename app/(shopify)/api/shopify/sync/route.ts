import shopify_client from '@/lib/shopify/rest-client';
import client from '@/lib/client';
import data from './data.json';
import { ProductWebhook } from './types';
import { IProduct } from 'shopify-api-node';
import { create, update, uploadProductImage, ProductData } from './utils';

export const POST = async (req: Request) => {

  const { entity: data } = await req.json();

  if (!data) return new Response(JSON.stringify({ success: false, message: 'No data' }))

  const attributes = data.attributes
  const datoProduct = data.entity.attributes
  const handle = datoProduct.slug
  const products = await shopify_client.product.list({ handle })

  let product: IProduct | null = null

  const productData: ProductData = {
    title: attributes.title,
    handle: attributes.slug,
    body_html: attributes.description.en,
    published_scope: 'global'
  }

  if (!products[0])
    product = await create(productData)
  else
    product = await update(products[0].id, productData)

  return new Response(JSON.stringify(product ?? {}))
}
