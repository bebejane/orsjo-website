require('dotenv').config({path:'./.env.local'})
const fs = require('fs')
const { buildClient } = require('@datocms/cma-client-node');
const client = buildClient({ apiToken: process.env.CMS_API_TOKEN });

const get = async () => {
  const uploads = []
 
  for await (const upload of client.uploads.listPagedIterator()) {
    console.log(upload.filename)
    upload.refs = await client.uploads.references(upload.id, {nested: 'true', version: 'current'});
    uploads.push(upload)
  }
  fs.writeFileSync('./uploads.json', JSON.stringify(uploads))
  return uploads
}

const load = async () => {
  const uploads = JSON.parse(fs.readFileSync('./uploads.json'))
  const refless = []
  const dupes = {}

  for (let i = 0; i < uploads.length; i++) {
    const el = uploads[i];
    if(el.refs.length === 0) refless.push(el)
    if(!dupes[el.filename]) dupes[el.filename] = 0
    dupes[el.filename]++;
  }
  
  //console.log(Object.keys(dupes).filter(k => dupes[k] > 1).forEach(k => console.log(k, dupes[k])))
  console.log(refless.length)
  return uploads
}

const deleteRefless = async (ids) => {
  const uploads = await get();
  for (let i = 0; i < uploads.length; i++) {
    const el = uploads[i];
    if(el.refs.length === 0) {
      console.log('deleting', el.filename)
      await client.uploads.destroy(el.id)
    }
  }
}
//deleteRefless()
//load()
//save()