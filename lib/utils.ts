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

const priceIncLight = (prodPrice : number, lightsources : LightsourceElement[], locale: Locale) => {
  let price = prodPrice;
  lightsources.filter((l) => !l.optional && !l.included).forEach((l) => price += (l.lightsource.price * (l.amount ? l.amount : 0)))
  return formatPrice(price, locale);
}

const sortProductsByCategory = (products : Product[]) => {
  const sortedProducts = [...products].sort((a, b) => {
    if(a.family?.id === b.family?.id)
      return a.categories[0].position < b.categories[0].position ? -1 : 1;
    else
      return 0
  })
  return sortedProducts;
}

const isServer = typeof window === 'undefined';

const sectionId = (str : string, id?:string) => ({
  id: id || str.replace(/\s/g, '').replace(/[^\w\s]/gi, '').toLowerCase(), 
  'data-section-id': id || str.replace(/\s/g, '').replace(/[^\w\s]/gi, '').toLowerCase(),
  title:str
});

const chunkArray = (array: any[], chunkSize: number) => {
  const newArr = []
  for (let i = 0; i < array.length; i += chunkSize)
    newArr.push(array.slice(i, i + chunkSize));
  return newArr
}


export {
  sleep,
  isServer,
  formatPrice,
  convertPrice,
  priceIncLight,
  sortProductsByCategory,
  sectionId,
  chunkArray
}