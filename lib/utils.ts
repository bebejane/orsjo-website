import scssExports from '/styles/exports.module.scss'
import { buildClient } from '@datocms/cma-client-browser';
import { apiQuery } from 'dato-nextjs-utils/api';
import { SiteSearchDocument } from '/graphql'

export const isServer = typeof window === 'undefined';
export const sleep = (ms: number) => new Promise((resolve, refject) => setTimeout(resolve, ms))

type Locale = 'en' | 'sv' | 'no'

export const formatPrice = (price: number, locale: Locale) => {
  const nf = new Intl.NumberFormat(`${locale}-${locale.toUpperCase()}`);
  const currency = locale === 'en' ? '€' : locale === 'no' ? 'NOK' : locale === 'sv' ? ':-' : ':-'
  return `${nf.format(Math.round(price))} ${currency}`;
}

export const convertPrice = (price: number, locale: Locale) => {
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

export const priceIncLight = (prodPrice: number, lightsources: LightsourceRecord[], locale: Locale) => {
  let price = prodPrice;
  lightsources.filter((l) => !l.optional && !l.included).forEach((l) => price += (l.lightsource.price * (l.amount ? l.amount : 0)))
  return formatPrice(price, locale);
}

export const sortProductsByCategory = (products: ProductRecord[]) => {
  const sortedProducts = [...products].sort((a, b) => {
    if (a.family?.id === b.family?.id)
      return a.categories[0].position < b.categories[0].position ? -1 : 1;
    else
      return 0
  })
  return sortedProducts;
}

export const sectionId = (title: string, id?: string) => {
  if (!title) return {}
  id = id ? id : title.replace(/\s/g, '').replace(/[^\w\s]/gi, '').toLowerCase()
  return {
    id,
    'data-section-id': id,
    'data-section-title': title
  }
}

export const chunkArray = (array: any[], chunkSize: number) => {
  const newArr = []
  for (let i = 0; i < array.length; i += chunkSize)
    newArr.push(array.slice(i, i + chunkSize));
  return newArr
}

export const parseSpecifications = (product: ProductRecord, locale: Locale, t: any) => {

  type LightsourcePick = { id: string, amount?: number, name: string, included: boolean }

  let allLightsources: LightsourceRecord[] = []
  product.models.map((m) => m.lightsources.map((l) => l)).forEach((l) => allLightsources.push.apply(allLightsources, l))
  let lightsources: LightsourcePick[] = allLightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index).filter(({ lightsource }) => lightsource !== undefined && lightsource !== null).map(({ amount, included, lightsource }) => ({ included, amount, name: lightsource?.name, id: lightsource?.id }))
  lightsources = lightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index)

  const specs = {
    designer: product.designer?.name,
    electricalData: product.electricalData.map((el) => el.name).join(', '),
    additionalInformation: product.additionalInformation ? (product.additionalInformation + (product.dimmable?.name ? `. ${product.dimmable?.name}` : '')) : undefined,
    dimmable: product.dimmable?.name,
    connection: product.connection?.name,
    mounting: product.mounting?.name,
    lightsource: lightsources.map(({ amount, included, name }) => `${name} ${included ? `(${t ? t('included') : 'included'})` : ''}`).join(', '),
    socket: product.sockets.map((el) => el.name).join(', '),
    weight: product.models.length && product.models?.[0].variants?.[0]?.weight ? `${product.models?.[0].variants?.[0]?.weight} kg` : undefined,
    volume: product.models.length && product.models?.[0].variants?.[0]?.volume ? `${product.models?.[0].variants?.[0]?.volume} m³` : undefined,
    care: null,
    recycling: null
  }

  return specs
}


export const recordImages = (obj, exclude: string[] = [], images: FileField[] = []): FileField[] => {

  Object.keys(obj).forEach(key => {
    if (obj[key]?.responsiveImage !== undefined && !obj[key]?.mimeType.includes('video') && !exclude.includes(key))
      images.push({ ...obj[key], _key: key })

    if (typeof obj[key] === 'object' && obj[key] !== null)
      recordImages(obj[key], exclude, images)
  })

  return dedupeImages(images)
}

export const dedupeImages = (images: FileField[]): FileField[] => {
  return images.reduce((unique, o) => {
    if (!unique.some(obj => obj.id === o.id))
      unique.push(o);
    return unique;
  }, []);
}

export const siteSearch = async (q: string) => {

  const client = buildClient({ apiToken: process.env.NEXT_PUBLIC_SITESEARCH_API_TOKEN });
  const itemTypes = await client.itemTypes.list();

  const search = (await client.items.list({
    filter: {
      type: itemTypes.map(m => m.api_key).join(','),
      query: q,
    },
    locale: 'en',
    order_by: '_rank_DESC'
  })).map(el => ({
    ...el,
    _api_key: itemTypes.find((t) => t.id === el.item_type.id).api_key,
  }))

  const data = await apiQuery(SiteSearchDocument, {
    variables: {
      productIds: search.filter(el => el._api_key === 'product').map(el => el.id),
      designerIds: search.filter(el => el._api_key === 'designer').map(el => el.id),
      projectIds: search.filter(el => el._api_key === 'project').map(el => el.id),
      newsIds: search.filter(el => el._api_key === 'news').map(el => el.id),
      faqIds: search.filter(el => el._api_key === 'faq').map(el => el.id),
      staffIds: search.filter(el => el._api_key === 'staff').map(el => el.id)
    }
  })

  Object.keys(data).forEach(type => {
    if (!data[type].length)
      delete data[type]
  })

  return data;
}

export type ProductDownload = {
  href: string,
  label: string,
  type: string,
  download: boolean
}

export type ProductRecordWithPdfFiles = ProductRecord & {
  pdfFiles: FileFieldMultiLocaleField[]
}

export const productDownloads = (product: ProductRecordWithPdfFiles): ProductDownload[] => {

  const { pdfFiles, mountingInstructions, bimLink, bimFile, lightFile } = product;

  const files = [{
    href: pdfFiles.find(({ locale }) => locale === 'sv') && `${pdfFiles.find(({ locale }) => locale === 'sv')?.value.url}`,
    label: 'Productsheet (SE)',
    type: 'pdf',
    download: true
  }, {
    href: pdfFiles.find(({ locale }) => locale === 'en') && `${pdfFiles.find(({ locale }) => locale === 'en')?.value.url}`,
    label: 'Productsheet (EN)',
    type: 'pdf',
    download: true
  }, {
    href: mountingInstructions?.url,
    label: 'Mounting instructions',
    type: 'pdf',
    download: true
  }, {
    href: lightFile?.url,
    label: 'Light file',
    type: 'zip',
    download: true
  }, {
    href: bimLink,
    label: 'Download at BIM Objects',
    type: 'cad',
    download: false
  },
  {
    href: bimFile?.url,
    label: 'Download CAD files',
    type: 'cad',
    download: true
  },
  {
    href: undefined,
    label: 'CAD file, size S',
    type: 'cad',
    download: true
  }]

  return files.filter(({ href }) => href);
}

export const truncateParagraph = (s: string, sentances: number = 1, ellipsis: boolean = true) => {
  if (!s || s.indexOf('.') === -1)
    return s;

  let str = s.split('.').slice(0, sentances).join('. ')
  return ellipsis ? (str + '...') : str + '.';
}

export const remToPx = (rem: string | number): number => {
  if (isServer) return 0
  return (typeof rem === 'string' ? parseFloat(rem.replace('rem', '')) : rem) * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export const pxToInt = (px: string): number => {
  return parseInt(px.replace('px', ''))
}

export const styleVariables: { [key: string]: number | string } = {}
Object.keys(scssExports).forEach((k) => styleVariables[k] = scssExports[k].includes('rem') ? remToPx(scssExports[k]) : scssExports[k].includes('px') ? pxToInt(scssExports[k]) : scssExports[k])

export const waitForElement = async (id: string, ms: number): Promise<HTMLElement | undefined> => {
  let el: HTMLElement | undefined
  for (let i = 0; i < ms; i += 50) {
    el = document.getElementById(id)
    if (el) break
    await sleep(50)
  }
  return el
}

export const sortSwedish = <T>(arr: T[], key?: string): T[] => {
  const alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Å", "Ä", "Ö"];

  return arr.sort((a, b) => {
    const ai = alfabet.findIndex((l) => l === (key ? a[key] : a).charAt(0).toUpperCase())
    const bi = alfabet.findIndex((l) => l === (key ? b[key] : b).charAt(0).toUpperCase())
    return ai > bi ? 1 : ai === bi ? 0 : -1
  })
}

export const scrollToId = (id: string, behavior: ScrollBehavior = 'smooth') => {

  const el = window.document.getElementById(id)
  const { tablet, navbarHeightMobile, navbarHeight } = styleVariables;
  const topMargin = 0//(window.innerWidth < tablet ? navbarHeightMobile : navbarHeight) as number
  const top = el ? (el.getBoundingClientRect().top + window.scrollY) - topMargin : 0
  window.scrollTo({ top, behavior })
}