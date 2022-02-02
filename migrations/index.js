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
    dato:{
      id:1765134
    }
  },
  'family':{
    name:'name',
    dato:{
      id:1765136
    }
  },
  'electrical-data':{
    name:'name',
    dato:{
      id:1765137
    }
  },
  'connection':{
    name:'name',
    dato:{
      id:1765138
    }
  },
  'mounting':{
    name:'name',
    dato:{
      id:1765139
    }
  },
  'color':{
    name:'name',
    dato:{
      id:1765140
    }
  },
  'material':{
    name:'name',
    dato:{
      id:1765215
    }
  },
  'socket':{
    name:'name',
    dato:{
      id:1765141
    }
  },
  'lightsource':{
    name:'name',
    dato:{
      id:1765143
    }
  },
  'dimmable':{
    name:'name',
    dato:{
      id:1765144
    }
  },
}

const parseProduct = (p) => {
  const { 
    designer, 
    electrical_data : electricalData, 
    socket, 
    dimmable, 
    connection, 
    mounting, 
    bim_link : bimLink,
    model, 
    product_environment : productEnvironment,
    pdf,
    colors,
    gallery
  } = p.acf

  const prod = {
    slug:p.slug,
    title:p.title.rendered.trim(),
    description:stripTags(p.content.rendered).replace(/\n/g, '').trim()
  }
  return prod
}

const migrateProducts = async () => {
  console.log('Migrating product db...')
  wpapi.product = wpapi.registerRoute('wp/v2', '/product/(?P<id>)', {wpml_language:'en'});

  try{
    const products = await wpapi.product().param(lang)
    console.log(products)
    writeToFile('products', products)
    
    console.log(parseProduct(products[0]))
  }catch(err){
    console.error(err)
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
      const data = await wpapi['product'+k]().param(lang)
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
            itemType: '' + taxonomies[k].dato.id,
            ...item
          }); 
        } catch(err){
          
        }
        console.log(k, taxonomies[k].dato.id, item)
        await wait(300)
      }
      
      
      
    
    })

  }catch(err){
    console.error(err)
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

migrateDesigners()
//migrateProducts()
//migrateTaxonomies()
//getTaxonomies()