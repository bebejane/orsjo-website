require('dotenv').config({path:'./.env.local'})
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs')
const wait = (ms = 0) => new Promise((resolve) => setTimeout(()=>resolve(), ms))
const { SiteClient, buildModularBlock } = require('datocms-client');
const datoClient = new SiteClient(process.env.CMS_API_TOKEN);
const excelFile = './migrations/data/Örsjö prislista nov 2021 Excel.xlsx'

const productLightSourceModelId = 1765143
const lightsourceBlockId = 1765346
const variantBlockId = 1765356

const ROW_INDEX = {
  articleNo:2,
  description:3,
  price:4
}



const productExists = async (slug) => {
  const records = await datoClient.items.all({
    filter: {
      type: 'product',
      fields: {
        slug: {
          eq: slug,
        }
      }
    }
  });
  return records.length ? records[0] : false
}

const updateProducts = async (products) => {

  const lightsources = await datoClient.items.all({filter:{type:'product_lightsource'}}, {allPages: true});
  const variants = await datoClient.items.all({filter:{type:variantBlockId}},{allPages: true});
  
  const all = lightsources.concat(variants);
  const notFound = []
  
  products.forEach(p => {    
    p._itemId = all.filter((l) => l.articleNo == p.articleNo)[0]?.id  
    if(!p._itemId) notFound.push(p)
  })
  
  if(notFound.length){
    console.log(`Not found: ${notFound.length} / ${products.length}. Exiting`)
    fs.writeFileSync('./notfound.csv', notFound.map((p)=> [p.articleNo, p.description, p.price].join('\t')).join('\n'))
    return;
  }
}
