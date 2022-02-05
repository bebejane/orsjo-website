import puppeteer from "puppeteer";
import chrome from 'chrome-aws-lambda';
import { SiteClient } from 'datocms-client';

export default async function catalogue(req, res) {

  console.log(req.body)
  console.log(req)

  const isWebhook = (req.body?.entity?.id)
  const id = isWebhook ? req.body.entity.id : req.query.id ? req.query.id[0] : null;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue${id ? `/${id}` : ''}`;
  const pdfFilePath = `/tmp/${id}.pdf`

  console.time(`generate pdf ${id}`)
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
    res.json({success:true})
    console.timeEnd('upload')
  }
  else {
    res.setHeader('Content-Type', 'application/pdf');
     //res.setHeader('Content-Disposition', `attachment; filename="Örsjö - Catalogue 2022.pdf"`)
    res.send(pdfBuffer)
  }
  
  console.timeEnd(`generate pdf ${id}`)
}