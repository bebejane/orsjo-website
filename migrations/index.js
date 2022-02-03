require('dotenv').config({path:'./.env.local'})
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs')
const stripTags = require('striptags');
const TurndownService = require('turndown')
const turndownService = new TurndownService()

const wait = (ms = 0) => new Promise((resolve) => setTimeout(()=>resolve(), ms))
const writeToFile = (name, obj) => fs.writeFileSync(`./migrations/data/${name}.json`, JSON.stringify(obj, null, 4))

const WP_ENDPOINT = 'http://orsjo.com/wp-json';


const { SiteClient } = require('datocms-client');
const WPAPI = require( 'wpapi' );
const wpapi = new WPAPI({ endpoint: WP_ENDPOINT });
const datoClient = new SiteClient(process.env.CMS_API_TOKEN);

const lang = {wpml_language:'en'}

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

const parseProduct = (p, taxMap) => {
  console.log(p)
  const wpIdToDatoId = (taxonomy, wpId) => {
    if(!wpId) return undefined
    return taxMap[taxonomy][wpId]
  }
  
  const image = p.featured_image// await migrateImage(p.featured_image, ['product-image']).id
  const gallery = p.acf.gallery.map((i) => {
    return {
      id: i.id//await migrateImage(c.id, ['product-gallery']).id
    }
  })
  const colorImages = p.acf.colors.map((c) => {
    return {
      id: c.id//await migrateImage(c.id, ['product-color']).id
    }
  })
  const connection = []
  const electricalData = p.acf.electrical_data.map((el)=> ({id: wpIdToDatoId('electrical', el.term_taxonomy_id)}))
  const sockets = p.acf.socket ? p.acf.socket.map(({id}) => ({id})) : undefined

  const prod = {
    bimLink:p.acf.bim_link,
    colorImages,
    environmentImage:p.product_environment,//await migrateImage(p.product_environment, ['product-enviroment-image']).id
    description:stripTags(p.content.rendered).replace(/\n/g, '').trim(),
    designer: {id:wpIdToDatoId('designer', p.acf.designer?.ID)},
    connection:{id:wpIdToDatoId('connection', p.acf.connection?.term_taxonomy_id)},
    dimmable: {id:wpIdToDatoId('dimmable', p.acf.dimmable?.term_taxonomy_id)},
    mounting: {id:wpIdToDatoId('mounting', p.acf.mounting?.term_taxonomy_id)},
    electricalData,
    image,
    gallery,
    lightFile:{id:p.light_file},//{id:await migrateFile(p.light_file, ['product-light-file']).id},
    pdfFile:{id:p.pdf},//{id:await migrateFile(p.pdf, ['product-pdf']).id},
    presentation:p.presentation,
    slug:p.slug,
    sockets,
    title:p.title.rendered.trim(),
    models: p.acf.model.map((m)=> ({
      name:m.name,
      drawing:{id:m.drawing},//{id:await migrateFile(p.drawing, ['product-model-drawing']).id},
      lightsources:m.lightsources.map((el)=> ({
        amount:el.amount,
        included:el.included,
        lightsource:{id:wpIdToDatoId('lightsource', el.lightsource.term_taxonomy_id)}
      })),
      variants: m.versions.map((v) => ({
        articleNo:v.art_no,
        color:{id:wpIdToDatoId('color', v.color.term_taxonomy_id)},
        material:{id:wpIdToDatoId('material', v.material.term_taxonomy_id)},
        extraPercent:v.extra,
        price:v.price,
        specificFeature:v.differance,
        vat:v.exclude_price_factor,
        volume:v.volume,
        weight:v.weight
      }))
    }))
  }
  return prod
}

const migrateProducts = async () => {
  console.log('Migrating product db...')

  const findTaxonomy = (id) => {
    return id;
  }

  wpapi.product = wpapi.registerRoute('wp/v2', '/product/(?P<id>)', {wpml_language:'en'});
  const taxMap = await generateTaxonomyMap()
  
  try{
    console.log('Loading products...')
    const parsed = []
    const products = await wpapi.product().perPage(1).param(lang)

    for (let i = 0; i < products.length; i++) {
      const p = parseProduct(products[i], taxMap);
      parsed.push(p)
      writeToFile(p.slug, p)
      writeToFile('_'+p.slug, products[i])
    }
    console.log(parsed)


    //writeToFile('products', products)
  }catch(err){
    console.error(err)
  }
}
const migrateDesigners = async () => {
  console.log('Migrating designers...')
  
  const designers = await wpapi.designer().perPage(100).param(lang)
  
  console.log(`Migrating ${designers.length} items...`)

  for (let i = 0; i < designers.length; i++) {
    const element = designers[i];
    
    try{
      const upload = await migrateImage(element.featured_media, ['designer'])
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

const migrateTaxonomies = async () => {
  console.log('Get all taxonomies...') 
  try{

    Object.keys(taxonomies).forEach( async(k) => {
      wpapi['product'+k] = wpapi.registerRoute('wp/v2', `/product-${k}/(?P<id>)`);
      const data = await wpapi['product'+k]().perPage(100).param(lang)
      const datoData = data.map(t => {
        const d = {}
        Object.keys(taxonomies[k]).forEach( (k2) => { 
          if(k2 === 'dato') return
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

  }catch(err){
    console.error('exist')
  }
}

const migrateImage = async (id, tags = []) => {
  const image = await wpapi.media().id(id)
  if(!image) return null

  console.log('uploading ' + image.source_url + '...')
  const path = await datoClient.createUploadPath(image.source_url);
  const upload = await datoClient.uploads.create({path, tags});
  return upload
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

//migrateDesigners()
migrateProducts()
//migrateTaxonomies()
//getTaxonomies()