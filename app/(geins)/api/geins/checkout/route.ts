import { GeinsCore, GeinsLogLevel } from '@geins/core';
import { GeinsOMS } from '@geins/oms';
import type { GenerateCheckoutTokenOptions, GeinsSettings } from '@geins/types';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const GET = async (req: Request) => {
	try {
		const geinsSettings: GeinsSettings = {
			apiKey: process.env.GEINS_MERCHANT_API_KEY!,
			accountName: 'orsjo',
			channel: 'mystore1.orsjo',
			tld: 'app',
			locale: 'sv-SE',
			market: 'se',
			logLevel: 'DEBUG' as GeinsLogLevel,
		};

		const geinsCore = new GeinsCore(geinsSettings);
		const geinsOMS = new GeinsOMS(geinsCore);
		const cartId = new URL(req.url).searchParams.get('cart_id') as string;

		if (!cartId) throw new Error('No cart id');

		const cart = await geinsOMS.cart.get(cartId);

		if (!cart) throw new Error('No cart found');

		const checkoutTokenOptions: GenerateCheckoutTokenOptions = {
			cartId: cart?.id as string,
			copyCart: true,
			customerType: 'PERSON' as CustomerType.PERSON,
			redirectUrls: {
				cancel: `${process.env.NEXT_PUBLIC_SITE_URL}`,
				continue: `${process.env.NEXT_PUBLIC_SITE_URL}/products`,
				terms: `${process.env.NEXT_PUBLIC_SITE_URL}/support/terms-conditions`,
			},
			branding: {
				title: 'Örsjo',
				logo: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.svg`,
				styles: {
					logoSize: '2.5rem',
					radius: '5px',
					accent: '#ffcc00',
					accentForeground: '#000000',
				},
			},
			geinsSettings,
		};
		const token = await geinsOMS.createCheckoutToken(checkoutTokenOptions);
		const url = `https://checkout.geins.services/v0/checkout/${token}`;
		console.log('checkout url', url);

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
