import puppeteer from "puppeteer";
import chromium from 'chrome-aws-lambda';
import fs from 'fs';
import { SiteClient } from 'datocms-client';
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

let browserWSEndpoint

export default async function catalogue(req, res) {
  console.time('pupeteer')
  const isWebhook = (req.body?.entity?.id)
  const id = isWebhook ? req.body.entity.id : req.query.id ? req.query.id[0] : null;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue${id ? `/${id}` : ''}`;
  let browser, page, pdfBuffer;

  try {
    if (browserWSEndpoint) {
      browser = await chromium.puppeteer.connect({ browserWSEndpoint })
    }

    if (!browser || !browser.isConnected()) {
      browser = await puppeteer.launch(process.env.NODE_ENV === 'production' ? { args: chromium.args, executablePath: await chromium.executablePath, headless: chromium.headless } : {});
      // Keep blank page open
      //page = await browser.newPage()
      browserWSEndpoint = browser.wsEndpoint()
    }

    page = await browser.newPage()
    //const browser = await puppeteer.launch(process.env.NODE_ENV === 'production' ? { args: chromium.args, executablePath: await chromium.executablePath, headless: chromium.headless } : {});
  const pdfFilePath = `${serverRuntimeConfig.TEMP_DIR}/${id}.pdf`

  //const page = await browser.newPage(); 
  await page.goto(url, {waitUntil:'networkidle0'});
  
  pdfBuffer = await page.pdf({
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
  await page.close()
  await browser.disconnect()
  
  console.timeEnd('pupeteer')
  console.time('upload')
  fs.writeFileSync(pdfFilePath, pdfBuffer)

  const datoClient = new SiteClient(process.env.CMS_API_TOKEN);
  const record = await datoClient.items.all({filter: { type: 'product', fields: { id: {eq: id}}}});
  if(isWebhook){
    console.log('Uploading pdf...')
    await datoClient.uploads.update(record[0].pdfFile.uploadId, {path: await datoClient.createUploadPath(pdfFilePath)});
    console.timeEnd('upload')
    return res.json({success:true})
  }
  else{
    res.setHeader('Content-Type', 'application/pdf'); //res.setHeader('Content-Disposition', `attachment; filename="Örsjö - Catalogue 2022.pdf"`)
    res.send(pdfBuffer)
  }
  

  }catch(err){
    console.error(err)
  
  }
 
}