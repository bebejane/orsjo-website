import puppeteer from "puppeteer";
import chrome from 'chrome-aws-lambda';
import { SiteClient } from 'datocms-client';
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

export default async function catalogue(req, res) {
  
  const isWebhook = (req.body?.entity?.id)
  const id = isWebhook ? req.body.entity.id : req.query.id ? req.query.id[0] : null;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue${id ? `/${id}` : ''}`;
  const pdfFilePath = `${serverRuntimeConfig.TEMP_DIR}/${id}.pdf`

  console.log('generate pdf file', id)
  console.time('pupeteer')

  const browser = await puppeteer.launch(process.env.NODE_ENV === 'production' ? { args: chrome.args, executablePath: await chrome.executablePath, headless: chrome.headless } : {});
  const page = await browser.newPage(); 
  await page.goto(url, {waitUntil:'networkidle0'});
  
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
  
  await page.close();
  await browser.close();
  console.timeEnd('pupeteer')

  if(isWebhook){
    console.time('upload')
    const datoClient = new SiteClient(process.env.CMS_API_TOKEN);
    const record = await datoClient.items.all({filter: { type: 'product', fields: { id: {eq: id}}}});
    await datoClient.uploads.update(record[0].pdfFile.uploadId, {path: await datoClient.createUploadPath(pdfFilePath)});
    console.timeEnd('upload')
    res.json({success:true})
  }
  else {
    res.setHeader('Content-Type', 'application/pdf'); //res.setHeader('Content-Disposition', `attachment; filename="Örsjö - Catalogue 2022.pdf"`)
    res.send(pdfBuffer)
  }
}