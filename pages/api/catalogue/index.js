import puppeteer from "puppeteer";
import { sleep } from '/lib/utils'

export default async function catalogue(req, res) {
  console.time('generate pdf')
  const productId = req.query.id ? req.query.id[0] : null;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue${productId ? `/${productId}` : ''}`;
  
  const browser = await puppeteer.launch({headless: true});
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
  res.setHeader('Content-Type', 'application/pdf');
  //res.setHeader('Content-Disposition', `attachment; filename="Örsjö - Catalogue 2022.pdf"`)
  res.send(pdfBuffer)
  console.timeEnd('generate pdf')
}