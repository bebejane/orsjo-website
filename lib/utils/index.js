import withGlobalProps from './withGlobalProps'
import { format  } from 'number-currency-format';

const sleep = (ms) => new Promise((res)=>setTimeout(()=>res()), ms)

const formatPrice = (price, locale) => {
  const currency = locale === 'en' ? '€' : locale === 'no' ? 'nok' : locale === 'sv' ? ':-' : ':-'
  return format( price, {currency, thousandSeparator:' ' })
}

export {
  withGlobalProps,
  sleep,
  formatPrice
}