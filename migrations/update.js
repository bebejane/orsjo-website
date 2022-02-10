require('dotenv').config({path:'./.env.local'})
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs')
const stripTags = require('striptags');
const TurndownService = require('turndown')
const turndownService = new TurndownService()
const {decode : decodeEntities} = require('html-entities');

const wait = (ms = 0) => new Promise((resolve) => setTimeout(()=>resolve(), ms))
const { SiteClient, buildModularBlock } = require('datocms-client');

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
    lightsource_price:'price',
    lightsource_art_no: 'article_no',
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

const datoClient = new SiteClient(process.env.CMS_API_TOKEN);

const cleanDato = async () => {

  const records = await datoClient.items.all({
    filter: {
      type: 'product_connection'
    }
  });

  for (let i = 0; i < records.length; i++) {
    const item = records[i];
    console.log(item.id)
    await datoClient.items.update(item.id, {
      name: decodeEntities(item.name)
        
    });
  }


}

cleanDato()

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

