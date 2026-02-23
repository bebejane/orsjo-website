import 'dotenv/config';
import { Environment, GeinsCore, GeinsLogLevel, GeinsSettings } from '@geins/core';

const geinsSettings: GeinsSettings = {
	apiKey: process.env.GEINS_MERCHANT_API_KEY!!,
	accountName: 'orsjo',
	channel: 'mystore1.orsjo',
	tld: 'your-tld',
	locale: 'sv-SE',
	market: 'SE|SEK',
	environment: 'PRODUCTION' as Environment,
	logLevel: 'INFO' as GeinsLogLevel,
};

export const geinsCore = new GeinsCore(geinsSettings);
export const geinsGraphql = geinsCore.graphql;
