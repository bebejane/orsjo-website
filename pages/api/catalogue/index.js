import puppeteer, { ConsoleMessage } from "puppeteer";
import chrome from 'chrome-aws-lambda';
import { SiteClient } from 'datocms-client';

export default async function catalogue(req, res) {

  const isWebhook = (req.body?.entity?.id)

  if(isWebhook && !isAuthorized(req, res)) return

  const id = isWebhook ? req.body.entity.id : req.query.id ? req.query.id[0] : null;
  const title = id || 'price-list'
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue${id ? `/${id}` : ''}`;
  const urlFull = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue`;
  const pdfFilePath = `/tmp/${title}.pdf`
  const pdfFileFullPath = `/tmp/price-list.pdf`

  console.time(`generate pdf ${title}`)
  console.time('pupeteer')

  const browser = url.includes('heroku') ? await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']}) : await puppeteer.launch(process.env.NODE_ENV === 'production' ? { args: chrome.args, executablePath: await chrome.executablePath, headless: chrome.headless } : {});
  const page = await browser.newPage(); 
  console.timeEnd('pupeteer')

  console.time('loadpage')
  await page.goto(url, {waitUntil:'networkidle0'});
  console.timeEnd('loadpage')

  const pdfBuffer = await page.pdf({
    path: isWebhook ? pdfFilePath : undefined,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px'
    },
  });
  
  
  await page.goto(urlFull, {waitUntil:'networkidle0'});
  const pdfBufferFull = await page.pdf({
    path: isWebhook ? pdfFileFullPath : undefined,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px'
    },
  });
  await page.close();
  await browser.close();
  
  if(isWebhook){
    
    console.time('upload')
    const datoClient = new SiteClient(process.env.CMS_API_TOKEN);
    const path = await datoClient.createUploadPath(pdfFilePath)
    const record = await datoClient.items.all({filter: { type: 'product', fields: { id: {eq: id}}}});
    
    console.log('uploading pdf...')

    if(record && record.length === 1 && record[0].pdfFile) 
      await datoClient.uploads.update(record[0].pdfFile.uploadId, {path});
    else{
      const upload = await datoClient.uploads.create({path, tags:['product-pdf']})
      await datoClient.items.update(id, {pdfFile:{upload_id:upload.id}})
    }


    const pathFull = await datoClient.createUploadPath(pdfFileFullPath)
    const recordFull = await datoClient.items.all({filter: { type: 'price_list'}});
    
    console.log('uploading full pdf...')

    if(recordFull && recordFull.length === 1 && recordFull[0].pdfFile) 
      await datoClient.uploads.update(recordFull[0].pdfFile.uploadId, {path:pathFull});
    else{
      const uploadFull = await datoClient.uploads.create({path:pathFull, tags:['pricelist-pdf']})
      await datoClient.items.update(id, {pdfFile:{upload_id:uploadFull.id}})
    }

    res.json({success:true})
    console.timeEnd('upload')
  }
  else {
    res.setHeader('Content-Type', 'application/pdf');
     //res.setHeader('Content-Disposition', `attachment; filename="Örsjö - Catalogue 2022.pdf"`)
    res.send(pdfBuffer)
  }
  
  console.timeEnd(`generate pdf ${title}`)
}

const isAuthorized = (req, res) => {
  
  const authheader = req.headers.authorization;

  if (!authheader) {
      const err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      res.status(401).send(err)
      return false
  }

  const auth = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
  
  const username = auth[0];
  const password = auth[1];

  return username === process.env.DATOCMS_WEBHOOK_USERNAME && password === process.env.DATOCMS_WEBHOOK_PASSWORD
}