const sleep = (ms:number) => new Promise((resolve, refject) => setTimeout(resolve, ms))

const formatPrice = (price :number, locale: Locale) => {
  const nf = new Intl.NumberFormat(`${locale}-${locale.toUpperCase()}`);
  const currency = locale === 'en' ? '€' : locale === 'no' ? 'NOK' : locale === 'sv' ? ':-' : ':-'
  return `${nf.format(Math.round(price))} ${currency}`;
  //return format(price, { currency, thousandSeparator: ' ', decimalsDigits: 0, decimalSeparator: '' })
}

const convertPrice = (price : number, locale: Locale) => {
  if (locale === 'sv') 
    return formatPrice(price, locale)
  if (locale === 'en') {
    price = (price * 1.1 * 0.975) / (10.1449 * 0.95);
    return formatPrice(price, locale);
  }
  if (locale === 'no') {
    price = (price * 1.1 * 0.975) / (.998015 * 0.95);
    return formatPrice(price, locale);
  }
}

const priceIncLight = (prodPrice : number, lightsources : LightsourceRecord[], locale: Locale) => {
  let price = prodPrice;
  lightsources.filter((l) => !l.optional && !l.included).forEach((l) => price += (l.lightsource.price * (l.amount ? l.amount : 0)))
  return formatPrice(price, locale);
}

const sortProductsByCategory = (products : ProductRecord[]) => {
  const sortedProducts = [...products].sort((a, b) => {
    if(a.family?.id === b.family?.id)
      return a.categories[0].position < b.categories[0].position ? -1 : 1;
    else
      return 0
  })
  return sortedProducts;
}

const isServer = typeof window === 'undefined';

const sectionId = (title : string, id?:string) => {
  if(!title) return {}
  id = id || title.replace(/\s/g, '').replace(/[^\w\s]/gi, '').toLowerCase()
  return {
    id,
    'data-section-id': id,
    title
  }
}

const chunkArray = (array: any[], chunkSize: number) => {
  const newArr = []
  for (let i = 0; i < array.length; i += chunkSize)
    newArr.push(array.slice(i, i + chunkSize));
  return newArr
}

const parseSpecifications = (product : ProductRecord, locale: Locale, t:any) => {
  
  type LightsourcePick = { id:string, amount?:number, name:string, included:boolean}

  let allLightsources: LightsourceRecord[] = []
  product.models.map((m) => m.lightsources.map((l) => l)).forEach((l) => allLightsources.push.apply(allLightsources, l))
  let lightsources : LightsourcePick[] = allLightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index).filter(({lightsource}) => lightsource !== undefined && lightsource !== null).map(({ amount, included, lightsource }) => ({ included, amount, name: lightsource?.name, id:lightsource?.id }))
  lightsources = lightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index)

  const specs = {
    designer:  product.designer?.name,
    electricalData:  product.electricalData.map((el) => el.name).join(', '),
    description:  product.presentation,
    connection:  product.connection?.name,
    mounting:  product.mounting?.name,
    lightsource:  lightsources.map(({ amount, included, name }) => `${name} ${included ? `(${t ? t('included') : 'included'})` : ''}`).join(', '),
    socket:  product.sockets.map((el) => el.name).join(', '),
    weight:  product.models.length && product.models?.[0].variants?.[0]?.weight ? `${product.models?.[0].variants?.[0]?.weight} kg` : undefined,
    volume:  product.models.length && product.models?.[0].variants?.[0]?.volume ? `${product.models?.[0].variants?.[0]?.volume} m³` : undefined,
    care:  null,
    recycling:  null
  }

  return specs
}

const siteSearch = async (q:string, opt: {offset?:number, limit?:number} = {}) => {

  let url = `https://site-api.datocms.com/search-results?q=${encodeURIComponent(q)}'&build_trigger_id=${18902}&locale=en`
  
  if (opt.offset)
    url += '&offset=' + encodeURIComponent(opt.offset);
  
  if (opt.limit)
    url += '&limit=' + encodeURIComponent(opt.limit);

  const res = await fetch(url, {
    headers: {
      'Authorization': 'API-Token ' + process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,
      'Accept': 'application/json',
    },
  })

  return await res.json()
}

const recordImages = (obj, images = []) => {
  Object.keys(obj).forEach(key => {
    if(obj[key]?.responsiveImage !== undefined)
      images.push(obj[key])
    if (typeof obj[key] === 'object' && obj[key] !== null)
      recordImages(obj[key], images)
  })


  return images.reduce((unique, o) => {
    if(!unique.some(obj => obj.id === o.id))
      unique.push(o);
    return unique;
    },[]);
}

type ProductDownload = { 
  href:string,
  label:string,
  type:string
}
const productDownloads = (product : ProductRecord) : ProductDownload[] => {

  const { pdfFiles, mountingInstructions, bimLink} = product;

  const files = [{
    href: pdfFiles.find(({locale}) => locale ==='sv') && `${pdfFiles.find(({locale}) => locale ==='sv')?.value.url}?dl=${pdfFiles.find(({locale}) => locale ==='sv')?.value.title}`,
    label: 'Productsheet (SE)',
    type:'pdf'
  },{
    href: pdfFiles.find(({locale}) => locale ==='en') && `${pdfFiles.find(({locale}) => locale ==='en')?.value.url}?dl=${pdfFiles.find(({locale}) => locale ==='en')?.value.title}`,
    label: 'Productsheet (EN)',
    type:'pdf'
  },{
    href: mountingInstructions?.url,
    label: 'Mounting instructions',
    type: 'pdf'
  },{
    href: bimLink,
    label: 'BIM files',
    type:'bim'
  },{
    href: undefined,
    label: 'CAD file, size S',
    type: 'cad'
  }]

  return files;
}


export {
  sleep,
  isServer,
  formatPrice,
  convertPrice,
  priceIncLight,
  sortProductsByCategory,
  sectionId,
  chunkArray,
  parseSpecifications,
  siteSearch,
  recordImages,
  productDownloads
}