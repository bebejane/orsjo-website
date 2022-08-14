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
    lightsource:  lightsources.map(({ amount, included, name }) => `${amount} x ${name} ${included ? `(${t ? t('included') : 'included'})` : ''}`).join(', '),
    socket:  product.sockets.map((el) => el.name).join(', '),
    weight:  product.models.length && product.models?.[0].variants?.[0]?.weight ? `${product.models?.[0].variants?.[0]?.weight} kg` : undefined,
    volume:  product.models.length && product.models?.[0].variants?.[0]?.volume ? `${product.models?.[0].variants?.[0]?.volume} m³` : undefined,
    care:  null,
    recycling:  null
  }

  return specs
}
/*
const parseProductModels = (product: ProductRecord) => {

  //const t = useTranslations('Catalogue')
  const drawings = product.models.map((m) => ({ drawing: m.drawing, name: m.name })).filter(d => d.drawing);
  const specs = {}

  product.models.forEach((m, idxm) => {
    const lightsources = m.lightsources.filter(({ included }) => !included)
    return m.variants.map((v, idx) => {
      
          <tr key={`price-${idx}-${idxm}`}>
            <td>{v.articleNo}</td>
            <td>{[v.color?.name, v.material?.name, v.feature?.name].filter(el => el).join(', ')}</td>
            <td>{withLightsource ? priceIncLight(v.price, lightsources, locale) : convertPrice(v.price, locale)}</td>
          </tr>
          {m.variants.length === (idx + 1) && (lightsources.filter(({ optional, lightsource }) => (!withLightsource || !optional)).map(({ amount, lightsource }, idxl) =>
            <tr key={`light-${idx}-${idxl}-${idxm}`}>
              <td>{lightsource?.articleNo || '---'}</td>
              <td>{lightsource?.name} ({t('needs')} {amount})</td>
              <td>{withLightsource ? "Inkluderad" : convertPrice(lightsource?.price, locale)}</td>
            </tr>
          ))}
          {m.variants.length === (idx + 1) && (m.accessories.map(({ price, articleNo, accessory }, idxv) =>
            <tr key={`acc-${idx}-${idxv}-${idxm}`}>
              <td>{articleNo || '---'}</td>
              <td>{accessory?.name}</td>
              <td>{convertPrice(price, locale)}</td>
            </tr>
          ))}
          {idx + 1 === m.variants.length && <tr key={`space-${idx}-${idxm}`} className={styles.space}><td></td></tr>}
        </>
      )
    })
}
*/

export {
  sleep,
  isServer,
  formatPrice,
  convertPrice,
  priceIncLight,
  sortProductsByCategory,
  sectionId,
  chunkArray,
  parseSpecifications
}