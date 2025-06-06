import 'dotenv/config';
import client from '../datocms-client';
import { ApiError, buildBlockRecord } from '@datocms/cma-client'

(async () => {

  const itemTypes = await client.itemTypes.list();
  const accessoryId = itemTypes.find(itemType => itemType.api_key === 'accessory')?.id;
  const accessoryTempId = itemTypes.find(itemType => itemType.api_key === 'accessory_temp')?.id

  const productAccessories: any[] = [];
  const tempAccessories: any[] = [];
  const products: any[] = [];

  for await (const record of client.items.listPagedIterator({ filter: { type: 'product' }, nested: true }))
    products.push(record);

  for await (const record of client.items.listPagedIterator({ filter: { type: 'product_accessory' }, nested: true }))
    productAccessories.push(record);


  const accessoryItems: any[] = []

  for (const product of products) {
    if (!product.models) continue;
    for (const model of product.models) {

      for (const accessory of model.attributes.accessories) {
        accessoryItems.push({
          name: productAccessories.find(item => item.id === accessory.attributes.accessory)?.name,
          article_no: accessory.attributes.article_no,
          price: accessory.attributes.price,
        })
      }
    }
  }
  const allAccessories = dedupeByKey(accessoryItems, 'article_no')
  /*
  for (const accessory of allAccessories) {
    try {

      const exist = (await client.items.list({
        item_type: {
          type: "item_type",
          id: accessoryTempId as string
        }, filter: { article_no: accessory.article_no }
      }))[0]
      if (exist) {
        console.log('item exist', accessory.article_no)
        continue
      }
      console.log('creating item', accessory.article_no)
      const item = await client.items.create({
        item_type: {
          type: "item_type",
          id: accessoryTempId as string
        },
        ...accessory
      })
    } catch (err) {
      //console.log('error creating item', accessory.article_no)
      //console.log((err as ApiError).response.body)

      //console.log(accessory)
      console.log(JSON.stringify(err, null, 2))
    }
  }
*/
  for await (const record of client.items.listPagedIterator({ filter: { type: 'accessory_temp' }, nested: true }))
    tempAccessories.push(record);


  for (const product of products) {
    if (!product.models) continue;
    const models: any[] = []

    for (const model of product.models) {
      const accessoriesBlocks: any[] = []

      for (const accessory of model.attributes.accessories) {
        try {
          accessoriesBlocks.push({
            ...accessory,
            attributes: {
              ...accessory.attributes,
              accessory_temp: tempAccessories.find(item => item.article_no === accessory.attributes.article_no)?.id
            }
          })
        } catch (err) {
          console.log(JSON.stringify(err, null, 2))
          console.log('error updating item', accessory.attributes.article_no)
        }
      }
      models.push({
        ...model,
        attributes: {
          ...model.attributes,
          accessories: accessoriesBlocks
        }
      })
    }
    console.log('update', product.slug)
    const item = await client.items.update(product.id, {
      models
    })
  }
  //console.log(tempAccessories)
  // https://www.datocms.com/docs/content-management-api/resources/item/update

})()

function dedupeByKey<T>(array: T[], key: string) {
  return array.reduce((acc, item) => {
    const existingItem = acc.find((i) => i[key] === item[key]);
    !existingItem && acc.push(item);
    return acc;
  }, [] as T[]);
}