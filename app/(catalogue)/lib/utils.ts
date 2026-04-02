import { AllCurrenciesDocument, CurrencyDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';

export type CurrencyRate = {
	isoCode: string;
	symbol: string;
	rate: number;
	rateDeduction: number;
	surcharge: number;
	vatRate: number;
};

export const getAllCurrencyRates = async (): Promise<CurrencyRate[]> => {
	const { currency } = await apiQuery(AllCurrenciesDocument, {
		revalidate: 60,
	});

	if (!currency) throw new Error('Currency not found');

	const currencies: CurrencyRate[] = [];

	for (const { value, locale } of currency.isoCode ?? []) {
		currencies.push({
			isoCode: value ?? '',
			symbol: currency.symbol?.find(({ locale: l }) => l === locale)?.value ?? '',
			rate: currency.rate?.find(({ locale: l }) => l === locale)?.value ?? 0,
			rateDeduction: currency.rateDeduction?.find(({ locale: l }) => l === locale)?.value ?? 0,
			surcharge: currency.surcharge?.find(({ locale: l }) => l === locale)?.value ?? 0,
			vatRate: currency.vatRate?.find(({ locale: l }) => l === locale)?.value ?? 0,
		});
	}

	return currencies;
};

export const getCurrencyRateByISO = async (currencyCode: string): Promise<CurrencyRate> => {
	const allCurrencies = await getAllCurrencyRates();
	const currency = allCurrencies.find((c) => c.isoCode === currencyCode);
	if (!currency) throw new Error(`Currency ${currencyCode} not found`);
	return currency as CurrencyRate;
};

export const getCurrencyRateByLocale = async (locale: SiteLocale): Promise<CurrencyRate> => {
	const { currency } = await apiQuery(CurrencyDocument, {
		revalidate: 60,
		variables: { locale },
	});

	if (!currency) throw new Error('Currency not found');
	return currency as CurrencyRate;
};

export const getPriceWithRatesAndTaxes = async (
	price: number,
	currencyCode: string,
): Promise<number> => {
	const c = await getCurrencyRateByISO(currencyCode);
	return convertPriceWithRatesAndTaxes(price, c);
};

export const convertPrice = (price: number, c: CurrencyRate) => {
	return Math.ceil((price * c.surcharge) / (c.rate * c.rateDeduction));
};

export const convertPriceWithRatesAndTaxes = (price: number, c: CurrencyRate) => {
	return Math.ceil((price * c.surcharge) / (c.rate * c.rateDeduction));
};

export const formatPrice = (price: number, locale: SiteLocale, c: CurrencyRate) => {
	const nf = new Intl.NumberFormat(
		`${locale.includes('_') ? `${locale.replace('_', '-')}` : locale}`,
	);
	return `${nf.format(convertPrice(price, c))} ${c.symbol}`;
};

const priceIncLight = (
	prodPrice: number,
	lightsources: LightsourceRecord[],
	locale: SiteLocale,
	currency: CurrencyRate,
) => {
	let price = prodPrice;
	lightsources
		.filter((l) => !l.optional && !l.included)
		.forEach((l) => (price += l.lightsource.price * (l.amount ? l.amount : 0)));
	console.log(price, prodPrice);
	return formatPrice(price, locale, currency);
};

const sortProductsByCategory = (products: AllProductsQuery['allProducts']) => {
	const sortedProducts = [...products]
		.sort((a, b) => {
			if (a.family?.id === b.family?.id)
				return a.categories[0].position < b.categories[0].position ? -1 : 1;
			else return 0;
		})
		.sort((a, b) => (a.title > b.title ? 1 : -1));
	return sortedProducts;
};

const toLanguageLocale = (locale: string): SiteLocale => {
	if (['sv', 'no'].includes(locale)) return 'sv' as SiteLocale;
	else if (['en', 'da', 'en_GB'].includes(locale)) return 'en' as SiteLocale;
	else return 'en' as SiteLocale;
};

export { priceIncLight, sortProductsByCategory, toLanguageLocale };
