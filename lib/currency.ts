import { AllCurrenciesDocument, CurrencyDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';

export type CurrencyRate = {
	isoCode: string;
	symbol: string;
	rate: number;
	rateDeduction: number;
	surcharge: number;
	vatRate: number;
	locale: SiteLocale;
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
			locale: locale as SiteLocale,
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
	return { ...currency, locale } as CurrencyRate;
};

export const getPriceWithRatesAndTaxes = async (
	price: number,
	currencyCode: string,
): Promise<number> => {
	const c = await getCurrencyRateByISO(currencyCode);
	return convertPriceWithRatesAndTaxes(price, c);
};

export const convertPriceWithRate = (price: number, c: CurrencyRate) => {
	if (price === 0) return 0;
	return Math.ceil((price * c.surcharge) / (c.rate * c.rateDeduction));
};

export const convertPriceWithRatesAndTaxes = (price: number, c: CurrencyRate) => {
	if (price === 0) return 0;
	return Math.ceil((price * c.surcharge) / (c.rate * c.rateDeduction));
};

export const formatPrice = async (price: number, locale: SiteLocale) => {
	const c = await getCurrencyRateByLocale(locale);
	const nf = new Intl.NumberFormat(
		`${!locale.includes('-') ? `${locale}-${locale.toUpperCase()}` : locale}`,
	);
	return `${nf.format(Math.ceil(price))} ${c.symbol}`;
};

export const formatPriceWithCurrency = async (price: number, currency: CurrencyRate) => {
	const locale = currency.locale;
	const nf = new Intl.NumberFormat(
		`${!locale.includes('-') ? `${locale}-${locale.toUpperCase()}` : locale}`,
	);
	return `${nf.format(Math.ceil(price))} ${currency.symbol}`;
};

export async function formatPriceWithLightsources(
	prodPrice: number,
	lightsources: LightsourceRecord[],
	currency: CurrencyRate,
) {
	let price = prodPrice;
	lightsources
		.filter((l) => !l.optional && !l.included)
		.forEach((l) => (price += l.lightsource.price * (l.amount ? l.amount : 0)));

	return formatPriceWithCurrency(price, currency);
}
