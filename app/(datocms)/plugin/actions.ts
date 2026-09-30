'use server';

import { apiQuery } from 'next-dato-utils/api';
import { SiteDocument } from '@/graphql';
import { getAllCurrencyRates } from '@/lib/currency';
import {
	DRAFT_ENVIRONMENT,
	ProductUpdatesResponse,
	verifyAccessToken,
} from '@/pricelist/lib/controllers/pricelist';
import * as pricelistController from '@/pricelist/lib/controllers/pricelist';

export async function getAdminData() {
	const [
		{
			_site: { locales },
		},
		currentPricelist,
		draftEnvironment,
		currencies,
	] = await Promise.all([
		apiQuery(SiteDocument),
		pricelistController.currentPricelist(),
		pricelistController.draftEnvironment(),
		getAllCurrencyRates(),
	]);

	return {
		locales,
		currentPricelist,
		draftEnvironment,
		currencies,
	};
}

export async function uploadPricelist(
	token: string,
	file: ArrayBuffer,
	filename: string,
): Promise<void> {
	await verifyAccessToken(token);
	const buffer = Buffer.from(file);
	await pricelistController.updateCurrentPricelistFile(buffer, filename, token);
}

export async function parsePricelist(
	token: string,
	file: ArrayBuffer,
	environment = DRAFT_ENVIRONMENT,
): Promise<ProductUpdatesResponse> {
	await verifyAccessToken(token);
	const buffer = Buffer.from(file);
	const articles = await pricelistController.parse(buffer);
	return pricelistController.generate(articles, environment, token);
}
