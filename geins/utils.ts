import client from '@/lib/client';
import geinsQuery from '@/geins/geins-query';
import { AllGeinsChannelsDocument } from '@/geins/graphql';
import { GEINS_CHANNEL_ID, GEINS_MARKET_CURRENCY, GEINS_MARKET_ID } from '@/geins/constants';
import { GeinsSettings } from '@geins/types';

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

export function createCheckoutUrl(cartId?: string | null, locale = 'sv-SE'): string {
	if (!cartId) return 'https://checkout.geins.services/v0/checkout';
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
	const checkoutTokenOptions: any = {
		cartId: cartId as string,
		checkoutSettings: {
			copyCart: false,
			customerType: 'PERSON' as CustomerType.PERSON,
			availablePaymentMethodIds: [23, 24, 25, 18],
			selectedPaymentMethodId: 23,
			availableShippingMethodIds: [],
			selectedShippingMethodId: 0,
			isCartEditable: false,
			redirectUrls: {
				success: `${siteUrl}/thank-you`,
				cancel: `${siteUrl}/products`,
				continue: `${siteUrl}/products`,
				terms: `${siteUrl}/support/terms-conditions`,
				privacy: `${siteUrl}/support/privacy-policy`,
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
		},
		geinsSettings: {
			environment: 'prod',
			apiKey: process.env.NEXT_PUBLIC_GEINS_MERCHANT_API_KEY!,
			channel: String(GEINS_CHANNEL_ID),
			accountName: 'orsjo',
			locale,
			tld: 'com',
		} as GeinsSettings,
	};
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
