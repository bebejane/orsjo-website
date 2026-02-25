import { GEINS_CHANNEL_ID } from '@/geins/constants';
import { GeinsCore, GeinsLogLevel } from '@geins/core';
import { GeinsOMS } from '@geins/oms';
import type { GenerateCheckoutTokenOptions, GeinsSettings } from '@geins/types';
import * as mgmt from '@/geins/mgmt-api';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const GET = async (req: Request) => {
	try {
		const cartId = new URL(req.url).searchParams.get('cart_id') as string;

		if (!cartId) throw new Error('No cart id');

		const url = await createCheckoutUrl(cartId);
		console.log(url);
		const response = NextResponse.redirect(url);
		return response;
	} catch (e) {
		console.log(e);
		const message = e instanceof Error ? e.message : e;
		return new Response(JSON.stringify({ error: message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};

async function createCheckoutUrl(cartId?: string): Promise<string> {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
	const geinsSettings: GeinsSettings = {
		apiKey: process.env.GEINS_MERCHANT_API_KEY!,
		accountName: 'orsjo',
		channel: String(GEINS_CHANNEL_ID),
		market: 'se',
		tld: 'com',
		locale: 'sv-SE',
	};

	const geinsCore = new GeinsCore(geinsSettings);
	const geinsOMS = new GeinsOMS(geinsCore);
	const paymentTypes = await mgmt.getPaymentMethods();
	const shippingOptions = await mgmt.getShippingOptions();
	const availablePaymentMethodIds = paymentTypes.map((p: any) => p.PaymentId);
	const selectedPaymentMethodId = availablePaymentMethodIds?.[0] ?? 0;
	const availableShippingMethodIds = shippingOptions.map((p: any) => p.Id);
	const selectedShippingMethodId = availableShippingMethodIds?.[0] ?? 0;

	const checkoutTokenOptions: GenerateCheckoutTokenOptions = {
		geinsSettings,
		cartId: cartId as string,
		copyCart: true,
		customerType: 'PERSON' as CustomerType.PERSON,
		availablePaymentMethodIds,
		selectedPaymentMethodId,
		availableShippingMethodIds,
		selectedShippingMethodId,
		isCartEditable: false,
		redirectUrls: {
			success: `${siteUrl}`,
			cancel: `${siteUrl}/products`,
			continue: `${siteUrl}/products`,
			terms: `${siteUrl}/support/terms-conditions`,
			privacy: `${siteUrl}/support/privacy-policy`,
		},
		branding: {
			title: 'Orsjo Checkout',
			logo: `${siteUrl}/images/logo.svg`,
			styles: {
				logoSize: '2.5rem',
				radius: '5px',
				accent: '#ffcc00',
				accentForeground: '#000000',
			},
		},
	};
	console.log(checkoutTokenOptions);

	const token = await geinsOMS.createCheckoutToken(checkoutTokenOptions);
	const url = `https://checkout.geins.services/v0/checkout/${token}`;
	return url;
}
