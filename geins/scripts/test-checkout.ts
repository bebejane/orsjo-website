import 'dotenv/config';
import { GeinsCore, GeinsLogLevel } from '@geins/core';
import { GeinsOMS } from '@geins/oms';
import type { GenerateCheckoutTokenOptions, GeinsSettings } from '@geins/types';

async function main() {
	const siteUrl = 'https://orsjo-geins.vercel.app';
	const geinsSettings: GeinsSettings = {
		apiKey: process.env.GEINS_MERCHANT_API_KEY!,
		accountName: 'orsjo',
		channel: '1',
		market: 'se',
		tld: 'com',
		locale: 'sv-SE',
	};

	const geinsCore = new GeinsCore(geinsSettings);
	const geinsOMS = new GeinsOMS(geinsCore);

	let cart = await geinsOMS.cart.create();
	cart = await geinsOMS.cart.addItem(cart.id, {
		skuId: 7523,
		quantity: 1,
	});

	if (!cart) throw new Error('No cart found');

	const checkoutTokenOptions: GenerateCheckoutTokenOptions = {
		geinsSettings,
		cartId: cart?.id as string,
		copyCart: true,
		customerType: 'PERSON' as CustomerType.PERSON,
		selectedPaymentMethodId: 23,
		selectedShippingMethodId: 0,
		isCartEditable: true,
		availablePaymentMethodIds: [23],
		availableShippingMethodIds: [],
		redirectUrls: {
			success: `${siteUrl}`,
			cancel: `${siteUrl}`,
			continue: `${siteUrl}/products`,
			terms: `${siteUrl}/support/terms-conditions`,
			privacy: `${siteUrl}/support/privacy-policy`,
		},
		branding: {
			title: 'Örsjo',
			icon: `${siteUrl}/images/logo.svg`,
			logo: `${siteUrl}/images/logo.svg`,
			styles: {
				logoSize: '2.5rem',
				radius: '5px',
				accent: '#ffcc00',
				accentForeground: '#000000',
			},
		},
	};
	const token = await geinsOMS.createCheckoutToken(checkoutTokenOptions);
	const url = `https://checkout.geins.services/v0/checkout/${token}`;
	console.log(url);
}
main();
