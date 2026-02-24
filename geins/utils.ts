import client from './datocms-client';
import geinsQuery from '@/geins/geins-query';
import { AllGeinsChannelsDocument } from '@/geins/graphql';

export const itemTypeId = async (type: string) =>
	(await client.itemTypes.list()).find((t) => t.api_key === type)?.id as string;

export const formatGeinsPrice = (price: number, currencyCode = 'SEK', quantity = 1): string => {
	if (!price) return '';

	return `${new Intl.NumberFormat('sv-SE', {
		style: 'decimal',
		currency: currencyCode,
	}).format(price * quantity)} ${currencyCode}`;
};

export const priceWithVAT = (money: MoneyV2): MoneyV2 => {
	if (!money) throw new Error('Invalid price');
	if (money.currencyCode !== 'SEK') return money;
	else {
		return {
			...money,
			amount: Math.ceil(money.amount * 1.25),
		};
	}
};

export const getChannel = async (): Promise<
	NonNullable<AllGeinsChannelsQuery['channels']>[number] | undefined
> => {
	const { channels } = await geinsQuery(AllGeinsChannelsDocument);
	return channels?.[0];
};

export type Market = {
	id: string;
	country: {
		name: string;
		code: string;
	};
	currency: {
		name: string;
		symbol: string;
		code: string;
		rate: number;
	};
};

export const getMarkets = async (): Promise<MarketType[]> => {
	const channel = await getChannel();
	if (!channel) return [];
	return channel.markets as MarketType[];
};

export const getProductImageUrl = (product: ProductType): string | undefined => {
	if (!product) return undefined;
	const productImages = product.productImages as ProductImageType[];
	const imageUrl = productImages[0]?.fileName
		? `https://orsjo.commerce.services/product/raw/${productImages[0].fileName}`
		: undefined;
	return imageUrl;
};

export const cartCookieOptions = {
	path: '/',
	secure: false,
	maxAge: 60 * 60 * 24,
	sameSite: true,
	domain: new URL(process.env.NEXT_PUBLIC_SITE_URL as string).hostname,
};
