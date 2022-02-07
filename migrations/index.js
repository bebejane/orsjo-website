require('dotenv').config({path:'./.env.local'})
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs')
const stripTags = require('striptags');
const TurndownService = require('turndown')
const turndownService = new TurndownService()
const wait = (ms = 0) => new Promise((resolve) => setTimeout(()=>resolve(), ms))
const writeToFile = (name, obj) => fs.writeFileSync(`./migrations/data/${name}.json`, JSON.stringify(obj, null, 2))

const { SiteClient, buildModularBlock } = require('datocms-client');
const WPAPI = require( 'wpapi' );
const wpapi = new WPAPI({ endpoint: process.env.WP_ENDPOINT, username: process.env.WP_USERNAME, password: process.env.WP_PASSWORD, auth:true});
const datoClient = new SiteClient(process.env.CMS_API_TOKEN);

const english = {wpml_language:'en'}
const swedish = {wpml_language:'se'}
const lang = english;

const taxonomies = {
  'category':{
    name:'name',
    description:'description',
    _dato:{
      id:1765134
    }
  },
  'family':{
    name:'name',
    _dato:{
      id:1765136
    }
  },
  'electrical-data':{
    name:'name',
    _dato:{
      id:1765137,
      column: 'electrical'
    }
  },
  'connection':{
    name:'name',
    _dato:{
      id:1765138
    }
  },
  'mounting':{
    name:'name',
    _dato:{
      id:1765139
    }
  },
  'color':{
    name:'name',
    _dato:{
      id:1765140
    }
  },
  'material':{
    name:'name',
    _dato:{
      id:1765215
    }
  },
  'socket':{
    name:'name',
    _dato:{
      id:1765141
    }
  },
  'lightsource':{
    name:'name',
    _dato:{
      id:1765143
    }
  },
  'dimmable':{
    name:'name',
    _dato:{
      id:1765144
    }
  },
}

const parseProduct = async (p, taxMap) => {
  
  const wpIdToDatoId = (taxonomy, wpId) => {
    if(!wpId) return undefined
    return taxMap[taxonomy][wpId]
  }
  const uploadMedia = async (arr, key, tags) => {
    const uploads = []
    for (let i = 0; i < arr.length; i++) 
      uploads.push(migrateMedia(arr[i][key], tags))
    const res = await Promise.all(uploads)
    return res.map( r => r ? ({upload_id:r.id}) : undefined);
  }
  console.time('parse')
  console.log('Product: ' + p.title.rendered.trim(), p.status)

  const image = !p.featured_media ? undefined : await migrateMedia(p.featured_media, ['product-image'])
  const environmentImage = !p.acf.product_environment ? undefined : await migrateMedia(p.acf.product_environment, ['product-enviroment-image'])
  const gallery = await uploadMedia(p.acf.gallery, 'id', ['product-gallery'])
  const colorImages = await uploadMedia(p.acf.colors, 'id', ['product-color'])
  const drawings = await uploadMedia(p.acf.model.map(m => ({id:m.drawing})), 'id', ['product-drawing'])

  const electricalData = !p.acf.electrical_data ? undefined : p.acf.electrical_data.map((el)=> wpIdToDatoId('electrical', el.term_id))
  const sockets = p.acf.socket ? p.acf.socket.map(({term_id}) => wpIdToDatoId('socket', term_id)) : undefined
  const pdfFile = !p.acf.pdf ? undefined : await migrateMedia(p.acf.pdf, ['product-pdf'])
  const lightFile = !p.acf.light_file ? undefined : await migrateMedia(p.acf.light_file, ['product-light-file']);
  
  const prod = {
    title:p.title.rendered.trim(),
    bimLink:p.acf.bim_link,
    colorImages,
    environmentImage: environmentImage ? {upload_id: environmentImage.id} : undefined,
    description: stripTags(p.content.rendered).replace(/\n/g, '').trim(),
    family: !p['product-family'] ? undefined : wpIdToDatoId('family', p['product-family'][0]),
    categories: !p['product-category'] ? undefined : p['product-category'].map((c)=>wpIdToDatoId('category', c)),
    designer: wpIdToDatoId('designer', p.acf.designer?.ID),
    connection:wpIdToDatoId('connection', p.acf.connection?.term_id),
    dimmable: wpIdToDatoId('dimmable', p.acf.dimmable?.term_id),
    mounting: wpIdToDatoId('mounting', p.acf.mounting?.term_id),
    electricalData,
    image: image ? {upload_id: image.id} : undefined,
    gallery,
    lightFile: lightFile ? {upload_id: lightFile.id} : undefined,
    pdfFile: pdfFile ? {upload_id:pdfFile.id} : undefined,
    presentation:p.acf.desc,
    slug:p.slug,
    sockets,
    models: p.acf.model.map((m, idx)=> ({
      name:m.name,
      drawing: !m.drawing ? undefined : drawings[idx],
      lightsources:!m.lightsources ? undefined : m.lightsources.map((el)=> ({
        amount:el.amount,
        included:el.included,
        lightsource:wpIdToDatoId('lightsource', el.lightsource.term_id)
      })),
      variants: !m.versions ? undefined : m.versions.map((v) => ({
        articleNo:v.art_no,
        color:wpIdToDatoId('color', v.color.term_id),
        material:wpIdToDatoId('material', v.material.term_id),
        extraPercent:v.extra,
        price:v.price,
        specificFeature:v.differance,
        vat:v.exclude_price_factor,
        volume:v.volume,
        weight:v.weight
      })),
      accessories: !m.accessories ? undefined : m.accessories.map((a) => ({
        product:a.product,
        priceNoVat:a.amount,
        articleNo:a.product_no
      }))
    }))
  }
  console.timeEnd('parse')
  console.log('')
  return prod
}

const migrateProducts = async () => {

  console.log('Migrating product db...')

  wpapi.product = wpapi.registerRoute('wp/v2', '/product/(?P<id>)', {wpml_language:'en'});
  const taxMap = await generateTaxonomyMap()
  
  try{
    console.log('Loading products...')

    const parsed = []
    const failed = []
    let page = 1;

    let products = await wpapi.product().perPage(100).page(page).param(english).param({status:'publish'})
    //products = products.filter(({status}) => status === 'published')
    
    while(products && products.length){
      for (let i = 0; i < products.length; i++) {
        
        const prod = await productExists(products[i].slug)
        const p = await parseProduct(products[i], taxMap);
        
        try{
        
          const exist = await productExists(products[i].slug)
          if(exist) {
            console.log('Skip:', products[i].slug)
            continue
          }
          const p = await parseProduct(products[i], taxMap);
          parsed.push(p)
          fs.writeFileSync(`./migrations/data/products/${p.slug}.json`, JSON.stringify(p, null, 2))      
          fs.writeFileSync(`./migrations/data/products/${p.slug}_.json`, JSON.stringify(products[i], null, 2))      
          const record = await datoClient.items.create({
            itemType: '1765120',
            ...{...p, models:undefined},
            models: p.models?.map((m)=> 
              buildModularBlock({
                itemType:'1765343',
                name:m.name,
                drawing:m.drawing,
                lightsources: m.lightsources?.map(l => buildModularBlock({
                  itemType:'1765346',
                  ...l
                })),
                variants: m.variants?.map(v => buildModularBlock({
                  itemType:'1765356',
                  ...v
                })),
                accessories: m.accessories?.map(a => buildModularBlock({
                  itemType:'1765450',
                  ...a
                }))
              })
            )
          });
        }catch(err){
          console.log('failed')
          console.log(err)
          failed.push({...products[i], error:err})
        }
      }
      products = await wpapi.product().perPage(100).page(++page).param(lang)
    }
    writeToFile('passed', parsed)
    writeToFile('failed', failed)
  }catch(err){
    console.error(err)
  }
}
const migrateMedia = async (id, tags = []) => {

  if(!id) return undefined
  const media = isNaN(id) ? { source_url:id } : await wpapi.media().id(id)
  if(!media) return undefined

  const {caption, source_url : url} = media;
  const title = caption?.rendered ? stripTags(caption.rendered).replace(/\n/g, '').trim() : undefined
  console.log(`Uploading ${url.split('/').pop()} - "${title}"`)

  const path = await datoClient.createUploadPath(url);
  const defaultFieldMetadata = title ? {
    en: {
      alt: title,
      title: title,
      customData:{}
    }
  } : null
  
  console.log(defaultFieldMetadata)
  
  let data = { path, tags}
  if(defaultFieldMetadata)
    data = {...data, defaultFieldMetadata}

  const upload = await datoClient.uploads.create(data);
  return upload
}




const migrateTaxonomies = async () => {
  console.log('Get all taxonomies...') 
  try{

    Object.keys(taxonomies).forEach( async(k) => {
      wpapi['product'+k] = wpapi.registerRoute('wp/v2', `/product-${k}/(?P<id>)`);
      const data = await wpapi['product'+k]().perPage(100).param(lang)
      const datoData = data.map(t => {
        const d = {}
        Object.keys(taxonomies[k]).forEach((k2) => { 
          if(k2 === '_dato') return
          d[taxonomies[k][k2]] = t[k2]
        })
        return d;
      })
      for (let i = 0; i < datoData.length; i++) {
        const item = datoData[i];
        try{
          const record = await datoClient.items.create({
            itemType: '' + taxonomies[k]._dato.id,
            ...item
          }); 
        } catch(err){
          
        }
        console.log(k, taxonomies[k]._dato.id, item)
        await wait(300)
      }
    })
    await migrateDesigners()

  }catch(err){
    console.error('exist')
  }
}

const migrateDesigners = async () => {
  console.log('Migrating designers...')
  
  wpapi.designer = wpapi.registerRoute('wp/v2', '/designer/(?P<id>)', {wpml_language:'en'});
  const designers = await wpapi.designer().perPage(100).param(lang)
  
  console.log(`Migrating ${designers.length} items...`)

  for (let i = 0; i < designers.length; i++) {
    const element = designers[i];
    
    try{
      const upload = await migrateMedia(element.featured_media, ['designer'])
      const item = {
        itemType: '1765453',
        slug:element.slug,
        name:element.title.rendered,
        description: turndownService.turndown(element.content.rendered),
        image:{
          upload_id:upload.id
        }
      }
      console.log('Add ' + item.name)
      const record = await datoClient.items.create(item); 

    } catch(err){
      console.log(err)
      console.log('failed')
    } 
    await wait(300) 
  }
}


const getWPTaxonomies = async () => {
  const t = {...taxonomies}
  for (let i = 0; i < Object.keys(t).length; i++) {
    const k = Object.keys(t)[i];
    wpapi['product'+k] = wpapi.registerRoute('wp/v2', `/product-${k}/(?P<id>)`);
    t[k].data = await wpapi['product'+k]().perPage(100).param(lang)
  }
  return t;
}

const getDatoTaxonomies = async () => {
  
  const types = ['designer','product_category','product_color','product_connection','product_dimmable','product_electrical','product_family','product_lightsource', 'product_material', 'product_mounting', 'product_socket']
  const tax = {}

  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    tax[types[i].replace('product_', '')] = await datoClient.items.all({filter: {type}, page:{limit:100}});
  }
  return tax
}

const generateTaxonomyMap = async () => {
  wpapi.designer = wpapi.registerRoute('wp/v2', '/designer/(?P<id>)', {wpml_language:'en'});
  const wpTaxonomy = {...await getWPTaxonomies(), designer:{data: await wpapi.designer().perPage(100).param(lang)}}
  const datoTaxonomy = await getDatoTaxonomies()
  const taxMap = {}

  wpTaxonomy['electrical'] = wpTaxonomy['electrical-data']
  delete wpTaxonomy['electrical-data']

  console.log('Creating taxonomy map...')
  Object.keys(wpTaxonomy).forEach(k => {  
    wpTaxonomy[k].data.forEach((item, idx) => {
      const wpId = wpTaxonomy[k].data[idx].id
      const datoId = datoTaxonomy[k].filter((el)=> el.name === wpTaxonomy[k].data[idx].name ||  el.name === wpTaxonomy[k].data[idx].title?.rendered)[0]?.id
      if(!taxMap[k]) taxMap[k] = {}
      taxMap[k][wpId] = datoId
    })
  })
  return taxMap
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

if(argv.products)
  migrateProducts()
else if(argv.taxonomies)
  migrateTaxonomies()

