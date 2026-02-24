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
	const arg = process.argv[2];

	try {
		//await resync();
		//await resyncAll();
		console.log(arg);
		//await resync();
		const data = await merchant.getProductsByCategory(arg);
		//await sync(lampId);
		//const data = await mgmt.getPaymentMethods();
		console.log(data);
		console.log(data?.length);
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
//syncAll();
