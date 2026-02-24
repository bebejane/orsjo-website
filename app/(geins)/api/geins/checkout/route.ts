import {
	GEINS_CHANNEL_ID,
	GEINS_MARKET_ID,
	GEINS_MGMT_CHANNEL_ID,
	GEINS_MGMT_MARKET_ID,
} from '@/geins/constants';
import { GeinsCore, GeinsLogLevel } from '@geins/core';
import { GeinsOMS } from '@geins/oms';
import type { GenerateCheckoutTokenOptions, GeinsSettings } from '@geins/types';
import * as crypto from 'crypto';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const GET = async (req: Request) => {
	try {
		const geinsSettings: GeinsSettings = {
			apiKey: process.env.GEINS_MERCHANT_API_KEY!,
			accountName: 'orsjo',
			channel: GEINS_MGMT_CHANNEL_ID,
			market: GEINS_MGMT_MARKET_ID,
			// channel: GEINS_CHANNEL_ID,
			// market: GEINS_MARKET_ID,
			tld: 'com',
			locale: 'sv-SE',
			logLevel: 'DEBUG' as GeinsLogLevel,
		};

		const geinsCore = new GeinsCore(geinsSettings);
		const geinsOMS = new GeinsOMS(geinsCore);
		const cartId = new URL(req.url).searchParams.get('cart_id') as string;

		if (!cartId) throw new Error('No cart id');

		const cart = await geinsOMS.cart.get(cartId);

		if (!cart) throw new Error('No cart found');

		const checkoutTokenOptions: GenerateCheckoutTokenOptions = {
			geinsSettings,
			cartId: cart?.id as string,
			copyCart: true,
			customerType: 'PERSON' as CustomerType.PERSON,
			selectedPaymentMethodId: 0,
			selectedShippingMethodId: 0,
			isCartEditable: true,
			availablePaymentMethodIds: [],
			availableShippingMethodIds: [],
			redirectUrls: {
				success: `${process.env.NEXT_PUBLIC_SITE_URL}`,
				cancel: `${process.env.NEXT_PUBLIC_SITE_URL}`,
				continue: `${process.env.NEXT_PUBLIC_SITE_URL}/products`,
				terms: `${process.env.NEXT_PUBLIC_SITE_URL}/support/terms-conditions`,
				privacy: `${process.env.NEXT_PUBLIC_SITE_URL}/support/privacy-policy`,
			},
			branding: {
				title: 'Örsjo',
				icon: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.svg`,
				logo: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.svg`,
				styles: {
					logoSize: '2.5rem',
					radius: '5px',
					accent: '#ffcc00',
					accentForeground: '#000000',
				},
			},
		};
		const token = await geinsOMS.createCheckoutToken(checkoutTokenOptions);
		const token2 = encodeJWT(checkoutTokenOptions);
		const url = `https://checkout.geins.services/v0/checkout/${token}`;
		console.log(geinsSettings);
		//console.log('checkout url', url);
		console.log(token);
		console.log('');
		console.log(token2);

		const response = NextResponse.redirect(url);
		return response;
	} catch (e) {
		const message = e instanceof Error ? e.message : e;
		return new Response(JSON.stringify({ error: message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};

export function encodeJWT(payload: Record<string, unknown>, secretKey?: string): string {
	if (!payload || typeof payload !== 'object') {
		throw new Error('Payload must be a valid object.');
	}

	const base64UrlEncode = (data: string): string =>
		btoa(data).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

	// JWT header
	const header = {
		alg: secretKey ? 'HS256' : 'none',
		typ: 'JWT',
	};

	// Encode header and payload
	const encodedHeader = base64UrlEncode(JSON.stringify(header));
	const encodedPayload = base64UrlEncode(JSON.stringify(payload));

	if (!secretKey) {
		// Return unsigned token if no secretKey is provided
		return `${encodedHeader}.${encodedPayload}`;
	}

	// Create the signature
	const signature = crypto
		.createHmac('sha256', secretKey)
		.update(`${encodedHeader}.${encodedPayload}`)
		.digest('base64')
		.replace(/=/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_');

	// Combine header, payload, and signature
	return `${encodedHeader}.${encodedPayload}.${signature}`;
}
