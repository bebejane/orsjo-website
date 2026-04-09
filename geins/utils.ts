import client from '@/lib/client';
import geinsQuery from '@/geins/geins-query';
import { AllGeinsChannelsDocument } from '@/geins/graphql';
import { GEINS_CHANNEL_ID } from '@/geins/constants';
import { CheckoutSettings, GeinsSettings } from '@geins/types';

export const itemTypeId = async (type: string) =>
	(await client.itemTypes.list()).find((t) => t.api_key === type)?.id as string;

export const formatGeinsPrice = (
	price: number,
	market: string,
	currency?: CurrencyType | null,
	quantity = 1,
): string => {
	if (!price || !currency) return '';

	return `${new Intl.NumberFormat(market, {
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

export function createCheckoutUrl(cartId?: string | null, locale = 'se', baseUrl?: string): string {
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
	console.log(checkoutTokenOptions.geinsSettings);

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
	console.log(url);
	return url;
}

export const cartCookieOptions = {
	path: '/',
	secure: false,
	maxAge: 60 * 60 * 24,
	sameSite: true,
	domain: new URL(process.env.NEXT_PUBLIC_SITE_URL as string).hostname,
};
