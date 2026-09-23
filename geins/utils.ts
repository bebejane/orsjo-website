import client from '@/lib/client';
import geinsQuery from '@/geins/geins-query';
import { AllGeinsChannelsDocument } from '@/geins/graphql';
import { GEINS_CHANNEL_ID } from '@/geins/constants';
import { CheckoutSettings, GeinsSettings } from '@geins/types';

export const itemTypeId = async (type: string) =>
	(await client.itemTypes.list()).find((t) => t.api_key === type)?.id as string;

/**
 * Market ids are country codes (e.g. 'se', 'gb', 'dk'). They are NOT valid
 * BCP-47 locales: 'se' is Northern Sami, and 'gb'/'dk'/'at'/… are not languages
 * at all. Passing them to Intl makes each JS engine pick its own fallback
 * (Node formats 'se' as "13 000 Skr", Chrome falls back to "SEK 13,000"),
 * which causes React hydration mismatches on the server-rendered price.
 * Map every market to a real locale so server and browser always agree.
 */
export const MARKET_LOCALES: Record<string, string> = {
	se: 'sv-SE',
	no: 'nb-NO',
	gb: 'en-GB',
	dk: 'da-DK',
	de: 'de-DE',
	at: 'de-AT',
	be: 'nl-BE',
	bg: 'bg-BG',
	hr: 'hr-HR',
	cy: 'el-CY',
	cz: 'cs-CZ',
	ee: 'et-EE',
	fi: 'fi-FI',
	fr: 'fr-FR',
	gr: 'el-GR',
	hu: 'hu-HU',
	ie: 'en-IE',
	it: 'it-IT',
	lv: 'lv-LV',
	lt: 'lt-LT',
	lu: 'fr-LU',
	mt: 'mt-MT',
	nl: 'nl-NL',
	pl: 'pl-PL',
	pt: 'pt-PT',
	ro: 'ro-RO',
	sk: 'sk-SK',
	si: 'sl-SI',
	es: 'es-ES',
};

export const marketLocale = (market: string): string =>
	MARKET_LOCALES[market?.toLowerCase()] ?? market;

export const formatGeinsPrice = (
	price: number,
	market: string,
	currency?: CurrencyType | null,
	quantity = 1,
): string => {
	if (!price || !currency) return '';

	return `${new Intl.NumberFormat(marketLocale(market), {
		style: 'currency',
		maximumFractionDigits: 0,
		currency: currency?.code,
		compactDisplay: 'short',
	}).format(price * quantity)}`;
};

export const getChannel = async (): Promise<
	NonNullable<AllGeinsChannelsQuery['channels']>[number] | undefined
> => {
	const { channels } = await geinsQuery(AllGeinsChannelsDocument);
	return channels?.[0];
};

export type Market = {
	id: string;
	country: {
		name: string;
		code: string;
	};
	currency: {
		name: string;
		symbol: string;
		code: string;
		rate: number;
	};
};

export const getProductImageUrl = (product: ProductType): string | undefined => {
	if (!product) return undefined;
	const productImages = product.productImages as ProductImageType[];
	const imageUrl = productImages[0]?.fileName
		? `https://orsjo.commerce.services/product/raw/${productImages[0].fileName}`
		: undefined;
	return imageUrl;
};

export function createCheckoutUrl(cartId?: string | null, locale = 'se'): string {
	if (!cartId) return 'https://checkout.geins.services/v0/checkout';
	const siteUrl = 'https://www.orsjo.com';

	const checkoutTokenOptions: any = {
		cartId: cartId as string,
		checkoutSettings: {
			copyCart: true,
			customerType: 'PERSON' as CustomerType.PERSON,
			availablePaymentMethodIds: [23, 24, 25, 18],
			selectedPaymentMethodId: 23,
			availableShippingMethodIds: [],
			selectedShippingMethodId: 0,
			isCartEditable: false,
			redirectUrls: {
				success: `${siteUrl}/${locale}/thank-you`,
				cancel: `${siteUrl}/${locale}/products`,
				continue: `${siteUrl}/${locale}/products`,
				terms: `${siteUrl}/${locale}/support/terms-conditions`,
				privacy: `${siteUrl}/${locale}/support/privacy-policy`,
			},
			branding: {
				title: 'Orsjo Belysning Checkout',
				logo: `${siteUrl}/images/logo.svg`,
				styles: {
					logoSize: '2.5rem',
					radius: '5px',
					accent: '#ffcc00',
					accentForeground: '#000000',
				},
			},
		} as CheckoutSettings,
		geinsSettings: {
			environment: 'prod',
			apiKey: process.env.NEXT_PUBLIC_GEINS_MERCHANT_API_KEY!,
			channel: `${String(GEINS_CHANNEL_ID)}`,
			accountName: 'orsjo',
			market: locale,
			locale: locale === 'se' ? 'sv' : 'en',
			tld: 'com',
		} as GeinsSettings,
	};
	//console.log(checkoutTokenOptions.geinsSettings);

	const base64UrlEncode = (data: string): string =>
		btoa(data).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

	// Encode header and payload
	const encodedHeader = base64UrlEncode(
		JSON.stringify({
			alg: 'none',
			typ: 'JWT',
		}),
	);
	const encodedPayload = base64UrlEncode(JSON.stringify(checkoutTokenOptions));
	const token = `${encodedHeader}.${encodedPayload}`;
	const url = `https://checkout.geins.services/v0/checkout/${token}`;

	return url;
}

export const cartCookieOptions = {
	path: '/',
	secure: false,
	maxAge: 60 * 60 * 24,
	sameSite: true,
	domain: new URL(process.env.NEXT_PUBLIC_SITE_URL as string).hostname,
};
