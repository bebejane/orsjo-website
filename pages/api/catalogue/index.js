import puppeteer from "puppeteer";
import chrome from 'chrome-aws-lambda';
import fs from 'fs';
import { SiteClient } from 'datocms-client';
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

export default async function catalogue(req, res) {
  
  const id = req.body?.entity?.id ? req.body.entity.id : req.query.id ? req.query.id[0] : null;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue${id ? `/${id}` : ''}`;
  const browser = await puppeteer.launch(process.env.NODE_ENV === 'production' ? { args: chrome.args, executablePath: await chrome.executablePath, headless: chrome.headless } : {});
  const pdfFilePath = `${serverRuntimeConfig.TEMP_DIR}/${id}.pdf`

  const page = await browser.newPage(); 
  await page.goto(url, {waitUntil:'networkidle0'});
  
  const pdfBuffer = await page.pdf({
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
  fs.writeFileSync(pdfFilePath, pdfBuffer)

  const datoClient = new SiteClient(process.env.CMS_API_TOKEN);
  const record = await datoClient.items.all({filter: { type: 'product', fields: { id: {eq: id}}}});
  
  

  if(req.body?.entity?.id){
    console.log('uploading pdf...')
    await datoClient.uploads.update(record[0].pdfFile.uploadId, {path: await datoClient.createUploadPath(pdfFilePath)});
    console.log('done')
    return res.json({success:true})
  }

  res.setHeader('Content-Type', 'application/pdf'); //res.setHeader('Content-Disposition', `attachment; filename="Örsjö - Catalogue 2022.pdf"`)
  res.send(pdfBuffer)
  
}