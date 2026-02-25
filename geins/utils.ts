import client from '@/lib/client';
import geinsQuery from '@/geins/geins-query';
import { AllGeinsChannelsDocument } from '@/geins/graphql';
import { GEINS_CHANNEL_ID, GEINS_MARKET_CURRENCY } from '@/geins/constants';
import { GeinsLogLevel, GeinsSettings, GenerateCheckoutTokenOptions } from '@geins/types';

export const itemTypeId = async (type: string) =>
	(await client.itemTypes.list()).find((t) => t.api_key === type)?.id as string;

export const formatGeinsPrice = (
	price: number,
	currencyCode = GEINS_MARKET_CURRENCY,
	quantity = 1,
): string => {
	if (!price) return '';

	return `${new Intl.NumberFormat('sv-SE', {
		style: 'decimal',
		maximumFractionDigits: 0,
		currency: currencyCode,
	}).format(price * quantity)} ${currencyCode}`;
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

export function createCheckoutUrl(cartId?: string): string {
	if (!cartId) return '';
	const geinsSettings: GeinsSettings = {
		apiKey: process.env.GEINS_MERCHANT_API_KEY!,
		accountName: 'orsjo',
		channel: String(GEINS_CHANNEL_ID),
		market: 'se',
		tld: 'com',
		locale: 'sv-SE',
		logLevel: 'DEBUG' as GeinsLogLevel,
	};

	const checkoutTokenOptions: GenerateCheckoutTokenOptions = {
		geinsSettings,
		cartId: cartId,
		copyCart: true,
		customerType: 'PERSON' as CustomerType.PERSON,
		selectedPaymentMethodId: 23,
		selectedShippingMethodId: 0,
		isCartEditable: true,
		availablePaymentMethodIds: [23],
		availableShippingMethodIds: [],
		redirectUrls: {
			success: `${process.env.NEXT_PUBLIC_SITE_URL}`,
			cancel: `${process.env.NEXT_PUBLIC_SITE_URL}`,
			continue: `${process.env.NEXT_PUBLIC_SITE_URL}/products`,
			terms: `${process.env.NEXT_PUBLIC_SITE_URL}/support/terms-conditions`,
			privacy: `${process.env.NEXT_PUBLIC_SITE_URL}/support/privacy-policy`,
		},
		branding: {
			title: 'Orsjo',
			//icon: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.svg`,
			logo: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.svg`,
			styles: {
				logoSize: '2.5rem',
				radius: '5px',
				accent: '#ffcc00',
				accentForeground: '#000000',
			},
		},
	};

	const base64UrlEncode = (data: string): string =>
		btoa(data).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

	// JWT header
	const header = {
		alg: 'none',
		typ: 'JWT',
	};

	// Encode header and payload
	const encodedHeader = base64UrlEncode(JSON.stringify(header));
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
