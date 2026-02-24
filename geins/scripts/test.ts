import 'dotenv/config';
import { GeinsCore } from '@geins/core';
import { GeinsOMS } from '@geins/oms';

import type { GenerateCheckoutTokenOptions, GeinsSettings, CartType } from '@geins/types';
import * as mgmt from '@/geins/mgmt-api';
import * as merchant from '@/geins/merchant-api';
import geinsQuery from '@/geins/geins-query';
import { AllGeinsChannelsDocument, AllGeinsProductsDocument } from '@/geins/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { sleep } from 'next-dato-utils/utils';
import { sync, resetAll, resyncAll, syncProductStatus } from '@/geins/sync';
import { AllProductsDocument } from '@/graphql';
import { getAllCurrencyRates } from '@/lib/utils';

const geinsSettings: GeinsSettings = {
	apiKey: process.env.NEXT_PUBLIC_GEINS_MERCHANT_API_KEY!,
	accountName: 'orsjo', // 'name'
	channel: 'mystore1.orsjo', // 'channel'
	tld: 'com', // 'com'
	locale: 'sv-SE', // 'sv-SE'
	market: 'se', // 'us'
};

// Initialize GeinsCore and GeinsOMS
const geinsCore = new GeinsCore(geinsSettings);
const geinsOMS = new GeinsOMS(geinsCore);

const resync = async () => {
	console.time('sync');
	await resetAll();
	await resyncAll();
	console.timeEnd('sync');
};

const main = async () => {
	//console.log('main: test');
	const lampId = '167791073';
	const accessoryId = 'AxA_MbC2RWqrhWYh7DQyNQ';
	const lightsourceId = '107174798';
	try {
		//await syncProductStatus('andromeda', 'publish');
		//const d = await merchant.getAccessories();
		//console.log(JSON.stringify(d, null, 2));
		//const d = await mgmt.getPriceLists();console.log(JSON.stringify(d, null, 2));
		//await sync(lampId);
		//const pricelists = await mgmt.getPriceLists();
		//console.log(JSON.stringify(pricelists, null, 2));
		//await resync();
		await resyncAll();
		//await resyncAll();
		//const allCurrencies = await getAllCurrencyRates();
		//await resyncAll();
		//console.log(allCurrencies);
		//const res = await merchant.getProducts();
		// let products;
		// for (let i = 0; i < 10; i++) {
		// 	const res = await merchant.getAllProducts();
		// 	console.log(res[0]?.productId);
		// }
	} catch (error) {
		console.log(error);
	}
};

const cart = async () => {
	const newCart = await geinsOMS.cart.create();
	await geinsOMS.cart.items.add({ skuId: 6698, quantity: 1 });
	const cart = await geinsOMS.cart.get(newCart?.id);
	console.log(cart);
	const checkoutTokenOptions: GenerateCheckoutTokenOptions = {
		cartId: cart?.id as string,
		//user: { email: 'user@test.se' },
		selectedPaymentMethodId: 23,
		selectedShippingMethodId: 1,
		copyCart: true,
		customerType: 'PERSON' as CustomerType.PERSON,
		redirectUrls: {
			cancel: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
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
	};
	const token = await geinsOMS.createCheckoutToken(checkoutTokenOptions);

	// Redirect to the checkout page
	console.log(`https://checkout.geins.services/${token}`);
};
//cart();
main();
//syncAll();
