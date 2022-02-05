import puppeteer from "puppeteer";
import chrome from 'chrome-aws-lambda';
import { SiteClient } from 'datocms-client';

export default async function priceList(req, res) {

  const isWebhook = (req.body?.entity)

  if(isWebhook && !isAuthorized(req, res)) return

  const title = 'price-list'
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue`;
  const {buffer, filePath} = await generatePDF(url, title);

  if(isWebhook){
    
    console.time('upload')
    const datoClient = new SiteClient(process.env.CMS_API_TOKEN);
    const path = await datoClient.createUploadPath(filePath)
    const record = await datoClient.items.all({filter: { type: 'pricelist'}});
    
    console.log('uploading pdf...')
    console.log(record)
    if(record && record.length === 1 && record[0].pdfFile) 
      await datoClient.uploads.update(record[0].pdfFile.uploadId, {path});
    res.json({success:true})
    console.timeEnd('upload')
  }
  else {
    res.setHeader('Content-Type', 'application/pdf');
     //res.setHeader('Content-Disposition', `attachment; filename="Örsjö - Catalogue 2022.pdf"`)
    res.send(buffer)
  }
  console.timeEnd(`generate pdf ${title}`)
}

const generatePDF = async (url, title) => {

  console.time(`generate pdf ${title}`)
  
  const filePath = `/tmp/${title}.pdf`;

  console.time('pupeteer')
  const browser = url.includes('heroku') ? await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']}) : await puppeteer.launch(process.env.NODE_ENV === 'production' ? { args: chrome.args, executablePath: await chrome.executablePath, headless: chrome.headless } : {});
  const page = await browser.newPage(); 
  console.timeEnd('pupeteer')

  console.time('loadpage')
  await page.goto(url, {waitUntil:'networkidle0'});
  console.timeEnd('loadpage')
  console.time('generate')
  const buffer = await page.pdf({
    path: `/tmp/${title}.pdf`,
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
  console.timeEnd(`generate ${title}`)
  await page.close();
  await browser.close();
  console.time(`generate pdf ${title}`)
  return {buffer, filePath}
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

export { isAuthorized, generatePDF }