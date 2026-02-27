import 'dotenv/config';
import { GeinsCore } from '@geins/core';
import { GeinsOMS } from '@geins/oms';
import * as mgmt from '@/geins/mgmt-api';
import * as merchant from '@/geins/merchant-api';
import * as crypto from 'crypto';
import geinsQuery from '@/geins/geins-query';
import {
	AllGeinsChannelsDocument,
	AllGeinsProductsDocument,
	GeinsProductsByCategoryDocument,
} from '@/geins/graphql';
import { sync, resetAll, resyncAll, syncProductStatus } from '@/geins/sync';
import { convertPriceWithRatesAndTaxes, getAllCurrencyRates } from '@/lib/utils';

const resync = async (reset = false) => {
	console.time('sync');
	if (reset) await resetAll();
	await resyncAll();
	console.timeEnd('sync');
};

const main = async () => {
	//console.log('main: test');
	const lampId = '167791073';
	const accessoryId = 'AxA_MbC2RWqrhWYh7DQyNQ';
	const lightsourceId = '107174798';
	const arg = process.argv[2];

	try {
		//await sync(lampId);
		//await resync();
		const p = await merchant.getProduct('andromeda');
		console.log(p);
		//await resyncAll(151);
		// const allCurrencies = await getAllCurrencyRates();
		// const se = allCurrencies.find((c) => c.isoCode === 'SEK');
		// const price = 97864;

		// console.log(se);
		// console.log(price);
		// console.log(convertPriceWithRatesAndTaxes(price, se));

		//await resync(false);
		//await resync();
		//const data = await merchant.getProductsByCategory(arg);
		//const data = await mgmt.getMarkets();
		//const data = await merchant.getAllProducts(arg ?? 'se');
		//console.log(data.products[0]?.unitPrice);
		//const paymentTypes = await mgmt.getPaymentMethods();

		//await sync(lampId);
		//const data = await mgmt.getPaymentMethods();
		//console.log(JSON.stringify(data, null, 2));
		//console.log(data?.length);
	} catch (error) {
		console.log(error);
	}
};

/**
 * Encodes a payload into a JWT token.
 *
 * @param payload - The payload to include in the token.
 * @param secretKey - The secret key used to sign the token (optional).
 * @returns The encoded JWT token.
 */
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

main();
