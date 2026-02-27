import { GEINS_CHANNEL_ID, GEINS_MARKET_ID } from '@/geins/constants';
import { GeinsCore } from '@geins/core';
import { GeinsOMS } from '@geins/oms';
import type { GenerateCheckoutTokenOptions, GeinsSettings } from '@geins/types';
import * as mgmt from '@/geins/mgmt-api';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const GET = async (req: Request) => {
	try {
		const searchParams = new URL(req.url).searchParams;
		const cartId = searchParams.get('cart_id') ?? undefined;
		const marketId = searchParams.get('market_id') ?? undefined;
		const locale = searchParams.get('locale') ?? undefined;

		if (!cartId) throw new Error('No cart id');

		const url = await createCheckoutUrl(cartId, marketId, locale);
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

async function createCheckoutUrl(
	cartId?: string,
	market = GEINS_MARKET_ID,
	locale = 'sv-SE',
): Promise<string> {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
	const geinsSettings: GeinsSettings = {
		apiKey: process.env.GEINS_MERCHANT_API_KEY!,
		channel: String(GEINS_CHANNEL_ID),
		accountName: 'orsjo',
		market,
		locale,
		tld: 'com',
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
			title: 'Orsjo Belysning Checkout',
			logo: `${siteUrl}/images/logo.svg`,
			icon: `${siteUrl}/images/logo.png`,
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
