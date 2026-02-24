'use client';

import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import geinsQuery from '../geins-query';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { cartCookieOptions } from '../utils';
import {
	CartDocument,
	AddToCartDocument,
	ClearCartDocument,
	UpdateCartItemDocument,
	PlaceOrderDocument,
} from '../graphql';
import { GenerateCheckoutTokenOptions } from '@geins/types';

type Cart = CartQuery['getCart'] | undefined;

export interface CartState {
	cart?: Cart;
	updating: boolean;
	updatingId: string | null;
	error: string | undefined;
	country: string;
	update: (id: string | null, fn: (cart: Cart | undefined) => Promise<Cart>) => Promise<Cart>;
	clearCart: () => void;
	createCart: (country: string) => void;
	setCart: (cart: Cart) => Promise<Cart>;
	addToCart: (item: CartItemInputType, country: string) => Promise<Cart>;
	removeFromCart: (itemId: string, skuId: number) => Promise<Cart>;
	updateQuantity: (skuId: string, quantity: number, country: string) => Promise<Cart>;
	updateBuyerIdentity: (input: CartBuyerIdentityInput) => Promise<Cart>;
	clearError: () => void;
	createCheckoutToken: () => Promise<string | undefined>;
}

const useCart = create<CartState>((set, get) => ({
	cart: undefined,
	updating: false,
	updatingId: null,
	error: undefined,
	country: 'se',
	createCart: async (country: string) => {
		const id = await getCookie('cart', cartCookieOptions);
		let cart: Cart | null = null;

		if (id) {
			const res = await geinsQuery(CartDocument, { revalidate: 0, variables: { id }, country });
			cart = res.getCart ?? null;
		}

		if (!cart) {
			const { getCart } = await geinsQuery(CartDocument, {
				revalidate: 0,
				country,
				variables: { id: null },
			});
			cart = getCart;
		}

		console.log(cart);
		if (!cart) throw new Error('Cart not found');

		return get().setCart(cart as Cart);
	},
	clearCart: async () => {
		const cartId = get().cart?.id;
		if (!cartId) return;
		set((state) => ({ cart: undefined }));
		deleteCookie('cart', cartCookieOptions);
		await geinsQuery(ClearCartDocument, { revalidate: 0, variables: { id: cartId } });
	},
	setCart: async (cart: Cart) => {
		setCookie('cart', cart?.id, cartCookieOptions);
		set((state) => ({ cart }));
		return cart;
	},
	addToCart: async (item: CartItemInputType, country: string) => {
		return get().update(null, async (cart) => {
			const { addToCart } = await geinsQuery(AddToCartDocument, {
				revalidate: 0,
				variables: {
					id: cart?.id ?? '',
					item,
				},
			});
			return addToCart as Cart;
		});
	},
	removeFromCart: async (itemId: string, skuId: number) => {
		return get().update(null, async (cart) => {
			const { updateCartItem } = await geinsQuery(UpdateCartItemDocument, {
				revalidate: 0,
				variables: {
					id: cart?.id ?? '',
					item: {
						skuId,
						quantity: 0,
					},
				},
			});
			return updateCartItem as Cart;
		});
	},
	updateQuantity: async (skuId: string, quantity: number, country: string) => {
		return get().update(skuId, async (cart) => {
			const { updateCartItem } = await geinsQuery(UpdateCartItemDocument, {
				revalidate: 0,
				variables: {
					id: cart?.id ?? '',
					item: {
						id: skuId,
						quantity,
					},
				},
			});
			return updateCartItem;
		});
	},
	updateBuyerIdentity: async (buyerIdentity: CartBuyerIdentityInput) => {
		return get().update(null, async (cart) => {
			console.log('updatebuyeridenti');
			// const { cartBuyerIdentityUpdate } = await geinsQuery(CartBuyerIdentityUpdateDocument, {
			// 	revalidate: 0,
			// 	variables: {
			// 		cartId: id,
			// 		buyerIdentity,
			// 	},
			// });

			// if (cartBuyerIdentityUpdate?.userErrors && cartBuyerIdentityUpdate?.userErrors.length > 0)
			// 	throw cartBuyerIdentityUpdate?.userErrors;

			// const cart = cartBuyerIdentityUpdate?.cart as Cart;
			// if (!cart) throw new Error('Cart not found');
			return get().cart;
		});
	},
	update: async (id, fn) => {
		set((state) => ({ updating: true, updatingId: id ?? null, error: undefined }));
		return fn(get().cart)
			.then((cart) => {
				get().setCart(cart);
				return cart;
			})
			.catch((err) => set((state) => ({ error: err })))
			.finally(() => set((state) => ({ updating: false, updatingId: null })))
			.then();
	},
	clearError: () => {
		set(() => ({ error: undefined }));
	},
	createCheckoutToken: async () => {
		const cart = await get().cart;
		if (!cart) throw new Error('Cart not found');

		const { placeOrder } = await geinsQuery(PlaceOrderDocument, {
			revalidate: 0,
			variables: {
				cartId: cart.id as string,

				checkout: {
					checkoutUrls: {
						checkoutPageUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
						redirectUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
						termsPageUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/support/terms-conditions`,
					},
					customerType: 'PERSON' as CustomerType.PERSON,
					email: 'bjorn@konst-teknik.se',
					billingAddress: {
						firstName: 'Björn',
						lastName: 'Berglund',
					},
					shippingAddress: {
						firstName: 'Björn',
						lastName: 'Berglund',
						//email: 'bjorn@konst-teknik.se',
					},
				},
			},
		});
		//placeOrder?.redirectUrl
		//console.log(placeOrder);
		//return placeOrder?.redirectUrl;
		// const checkoutTokenOptions: GenerateCheckoutTokenOptions = {
		// 	cartId: cart.id as string,
		// 	//user: { email: 'user@test.se' },
		// 	selectedPaymentMethodId: 23,
		// 	selectedShippingMethodId: 1,
		// 	copyCart: true,
		// 	//customerType: CustomerType.PERSON,
		// 	redirectUrls: {
		// 		cancel: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
		// 		continue: `${process.env.NEXT_PUBLIC_SITE_URL}/products`,
		// 		terms: `${process.env.NEXT_PUBLIC_SITE_URL}/support/terms-conditions`,
		// 	},
		// 	branding: {
		// 		title: 'Örsjo',
		// 		logo: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.svg`,
		// 		styles: {
		// 			logoSize: '2.5rem',
		// 			radius: '5px',
		// 			accent: '#ffcc00',
		// 			accentForeground: '#000000',
		// 		},
		// 	},
		// };

		// // Generate checkout token
		//const token = await geinsOMS.createCheckoutToken(checkoutTokenOptions);

		// // Redirect to the checkout page
		//window.open(`https://checkout.geins.services/${token}`);
		return 'test';
	},
}));

export default useCart;
export { useShallow };
