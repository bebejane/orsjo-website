import { SiteClient } from 'datocms-client';
import { isAuthorized, generatePDF } from ".";

export default async function productSheet(req, res) {

  const isWebhook = (req.body?.entity)

  if(isWebhook && !isAuthorized(req, res)) return

  const id = isWebhook ? req.body.entity.id : req.query.id ? req.query.id[0] : null;
  const title = id
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue/${id}`
  const {buffer, filePath} = await generatePDF(url, title);

  if(isWebhook && id){
    
    console.time(`upload ${title}`)
    const datoClient = new SiteClient(process.env.CMS_API_TOKEN);
    const path = await datoClient.createUploadPath(filePath)
    const record = await datoClient.items.all({filter: { type: 'product', fields: { id: {eq: id}}}});

    if(record && record.length === 1 && record[0].pdfFile) 
      await datoClient.uploads.update(record[0].pdfFile.uploadId, {path});
    else{
      const upload = await datoClient.uploads.create({path, tags:['product-pdf']})
      await datoClient.items.update(id, {pdfFile:{upload_id:upload.id}})
    }
    res.json({success:true})
    console.timeEnd(`upload ${title}`)
  }
  else {
    res.setHeader('Content-Type', 'application/pdf');
     //res.setHeader('Content-Disposition', `attachment; filename="Örsjö - Catalogue 2022.pdf"`)
    res.send(buffer)
  }
}