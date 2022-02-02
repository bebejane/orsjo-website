require('dotenv').config({path:'./.env.local'})
const fs = require('fs')
const stripTags = require('striptags');
const writeToFile = (name, obj) => fs.writeFileSync(`./migrations/data/${name}.json`, JSON.stringify(obj, null, 4))

const WP_ENDPOINT = 'http://orsjo.com/wp-json';
const argv = require('minimist')(process.argv.slice(2));
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
      id:1765134
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
/*
wpapi.productCategory = wpapi.registerRoute('wp/v2', '/product-category/(?P<id>)');
wpapi.productFamily = wpapi.registerRoute('wp/v2', '/product-family/(?P<id>)');
wpapi.productElectricalData = wpapi.registerRoute('wp/v2', '/product-electrical-data/(?P<id>)');
wpapi.productConnection = wpapi.registerRoute('wp/v2', '/product-connection/(?P<id>)');
wpapi.productMounting = wpapi.registerRoute('wp/v2', '/product-mounting/(?P<id>)');
wpapi.productColor = wpapi.registerRoute('wp/v2', '/product-color/(?P<id>)');
wpapi.productMaterial = wpapi.registerRoute('wp/v2', '/product-material/(?P<id>)');
wpapi.productSocket = wpapi.registerRoute('wp/v2', '/product-socket/(?P<id>)');
wpapi.productLightSource = wpapi.registerRoute('wp/v2', '/product-lightsource/(?P<id>)');
wpapi.productDimmable = wpapi.registerRoute('wp/v2', '/product-dimmable/(?P<id>)');
*/

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
      console.log(datoData)
    })

  }catch(err){
    console.error(err)
  }
}



//migrateProducts()
migrateTaxonomies()
//getTaxonomies()