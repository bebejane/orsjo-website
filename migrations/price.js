require('dotenv').config({path:'./.env.local'})
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs')
const wait = (ms = 0) => new Promise((resolve) => setTimeout(()=>resolve(), ms))
const { SiteClient, buildModularBlock } = require('datocms-client');
const datoClient = new SiteClient(process.env.CMS_API_TOKEN);
const excelFile = './migrations/data/Örsjö prislista nov 2021 Excel.xlsx'

const productLightSourceModelId = 1765143
const lightsourceBlockId = 1765346
const variantBlockId = 1765356

const ROW_INDEX = {
  articleNo:2,
  description:3,
  price:4
}

const parsePriceList = (file) => {

  console.log(`Parsing "${file.split('/').pop()}"...`)
	let count = 0;
  let currentModel = null
  const products = []

	const XlsxStreamReader = require("xlsx-stream-reader");

	var workBookReader = new XlsxStreamReader();
	workBookReader.on('error', function (error) {
	    throw(error);
	});
	workBookReader.on('sharedStrings', function () {
	    // do not need to do anything with these, 
	    // cached and used when processing worksheets
	    //console.log(workBookReader.workBookSharedStrings);
	});

	workBookReader.on('styles', function () {
	    // do not need to do anything with these
	    // but not currently handled in any other way
	    //console.log(workBookReader.workBookStyles);
	});

	workBookReader.on('worksheet', (workSheetReader)=>{
		
	    if (workSheetReader.id > 1){
	        // we only want first sheet
	        workSheetReader.skip();
	        return; 
	    }
	    // print worksheet name
	    //console.log(workSheetReader.name);

	    // if we do not listen for rows we will only get end event
	    // and have infor about the sheet like row count
	    workSheetReader.on('row',(row)=> {
          ++count
	        if(row.attributes.r == 1){
	        	
	        	//process.exit(1)
	            // do something with row 1 like save as column names
	        }else if(count > 3){
            const r = {}
            
            currentModel = row.values[ROW_INDEX.model] ? row.values[ROW_INDEX.model] : currentModel
            Object.keys(ROW_INDEX).forEach(k => r[k] = row.values[ROW_INDEX[k]])
            if(r.articleNo && r.price){
              r.price = parseFloat(r.price.replace(/[^0-9]+/g, ''))
              r.isLightsource = r.articleNo.startsWith('50')
              products.push(r)
            }
	      	}
	    });

	    workSheetReader.on('end', function () {
	        updateProducts(products)
	    });
	    
	    // call process after registering handlers
	    workSheetReader.process();
	});
	workBookReader.on('end', ()=> {
	    // end of workbook reached
	});

	fs.createReadStream(excelFile).pipe(workBookReader);
}

parsePriceList(excelFile)

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

const updateProducts = async (products) => {

  const lightsources = await datoClient.items.all({filter:{type:'product_lightsource'}}, {allPages: true});
  const variants = await datoClient.items.all({filter:{type:variantBlockId}},{allPages: true});
  
  const all = lightsources.concat(variants);
  const notFound = []
  
  products.forEach(p => {    
    p._itemId = all.filter((l) => l.articleNo == p.articleNo)[0]?.id  
    if(!p._itemId) notFound.push(p)
  })
  
  if(notFound.length){
    console.log(`Not found: ${notFound.length} / ${products.length}. Exiting`)
    fs.writeFileSync('./notfound.csv', notFound.map((p)=> [p.articleNo, p.description, p.price].join('\t')).join('\n'))
    return;
  }
}
