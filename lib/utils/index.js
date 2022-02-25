import withGlobalProps from './withGlobalProps'
import { format } from 'number-currency-format';

const sleep = (ms) => new Promise((res) => setTimeout(() => res()), ms)

const formatPrice = (price, locale) => {
  const currency = locale === 'en' ? '€' : locale === 'no' ? 'NOK' : locale === 'sv' ? ':-' : ':-'
  price = Math.round(price);
  return format(price, { currency, thousandSeparator: ' ', decimalsDigits: 0, decimalSeparator: '' })
}

const convertPrice = (price, locale) => {
  if (locale === 'sv') { return formatPrice(price, locale) }
  if (locale === 'en') {
    price = (price * 1.1 * 0.975) / (10.1449 * 0.95);
    return formatPrice(price, locale);
  }
  if (locale === 'no') {
    price = (price * 1.1 * 0.975) / (.998015 * 0.95);
    return formatPrice(price, locale);
  }
}

const priceIncLight = (prodPrice, lightsources) => {
  let price = prodPrice;
  const locale = 'sv';
  lightsources.filter((l) => !l.optional && !l.included).forEach((l) => price += (l.lightsource.price * l.amount))
  return formatPrice(price, locale);
}

const sortProductsByCategory = (products) => {
  const sortedProducts = products.sort((a, b) => {
    if(a.family?.id === b.family?.id)
      return a.categories[0].position < b.categories[0].position ? -1 : 1;
    else
      return 0
  })
  return sortedProducts;
}

export {
  withGlobalProps,
  sleep,
  formatPrice,
  convertPrice,
  priceIncLight,
  sortProductsByCategory
}