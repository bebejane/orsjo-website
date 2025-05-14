import shopify_client from '@/lib/shopify/rest-client';
import client from '@/lib/client';
import data from './data.json';
import { ProductWebhook } from './types';
import { IProduct, IProductImage } from 'shopify-api-node';

export const POST = async (req: Request) => {

  //const { entity: data } = await req.json();
  const datoProduct = data.entity.attributes
  const handle = datoProduct.slug
  const products = await shopify_client.product.list({ handle })
  let product: IProduct | null = null

  if (!products[0])
    product = await create(data as unknown as ProductWebhook)
  else
    product = await update(products[0], data as unknown as ProductWebhook)

  return new Response(JSON.stringify(product ?? {}))
}

const create = async (data: ProductWebhook): Promise<IProduct> => {
  console.log('creating product...')
  const { entity: { attributes } } = data;
  const variants = []//attributes.models.map(({ attributes: { article_no, color, material, feature, weight, volume, price } }) => ({

  const p = {
    title: attributes.title,
    handle: attributes.slug,
    body_html: attributes.description.en,
    variants
  }

  const product = await shopify_client.product.create(p)

  if (attributes.image) {
    const image = await client.uploads.find(attributes.image.upload_id)
    image && await uploadProductImage(product, image.url)
  }
  return product
}

const update = async (product: IProduct, data: ProductWebhook): Promise<IProduct> => {
  console.log('updating product...')
  const { entity: { id } } = data;

  const item = (await client.items.find(id)) as unknown as ProductWebhook['entity']['attributes']

  if (!item)
    throw new Error('Invalid item: ' + id)

  if (item.image?.upload_id) {
    const image = await client.uploads.find(item.image.upload_id)
    image && await uploadProductImage(product, image.url)
  }

  const p: any = {
    title: item.title,
    handle: item.slug,
    body_html: item.description?.en,
  }

  return await shopify_client.product.update(product.id, p)
}

const uploadProductImage = async (product: IProduct, url: string): Promise<IProductImage> => {
  let image: IProductImage | null = null

  if (product.image) {
    console.log('updating image...')
    image = await shopify_client.productImage.update(product.id, product.image.id, { src: url })
  } else {
    console.log('creating image...')
    image = await shopify_client.productImage.create(product.id, { src: url })
  }

  return image
}