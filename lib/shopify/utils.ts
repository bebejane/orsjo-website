import client from './datocms-client';

export const getShopifyId = (id: string): number => {
	const shopifyId = Buffer.from(id).toString('base64') as string;
	return shopifyId.includes('/') ? parseInt(shopifyId.split('/').pop()?.split('?')[0] as string) : parseInt(shopifyId);
};

export const parseGid = (id: string): string => {
	return parseInt(id.split('/').pop()?.split('?')[0] as string).toString();
};

export const shopifyGraphqlError = (errors: CustomerUserError[]): string | undefined => {
	if (!errors || !errors.length) return undefined;
	return errors.map((e) => e.message).join('\n');
};

export const itemTypeId = async (type: string) =>
	(await client.itemTypes.list()).find((t) => t.api_key === type)?.id as string;

export const formatShopifyPrice = (money: MoneyV2, quantity = 1): string => {
	if (!money) return '';

	const price = priceWithVAT(money);

	return `${new Intl.NumberFormat('sv-SE', { style: 'decimal', currency: price.currencyCode }).format(
		price.amount * quantity
	)} ${price.currencyCode}`;
};

export const priceWithVAT = (money: MoneyV2): MoneyV2 => {
	if (!money) throw new Error('Invalid price');
	if (money.currencyCode !== 'SEK') return money;
	else {
		return {
			...money,
			amount: money.amount * 1.25,
		};
	}
};

export const cartCookieOptions = {
	path: '/',
	secure: false,
	maxAge: 60 * 60 * 24,
	sameSite: true,
	domain: process.env.NODE_ENV === 'development' ? 'localhost' : 'humaneight.com',
};
