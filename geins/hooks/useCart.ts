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
} from '../graphql';
import { GEINS_MARKET_ID } from '@/geins/constants';

type Cart = CartQuery['getCart'] | undefined;

export interface CartState {
	cart?: Cart;
	updating: boolean;
	updatingId: string | null;
	error: string | undefined;
	update: (id: string | null, fn: (cart: Cart | undefined) => Promise<Cart>) => Promise<Cart>;
	clearCart: () => void;
	createCart: (marketId: string) => void;
	setCart: (cart: Cart) => Promise<Cart>;
	addToCart: (items: CartItemInputType[], maarketId: string) => Promise<Cart>;
	removeFromCart: (skuId: number) => Promise<Cart>;
	updateQuantity: (skuId: string, quantity: number, marketId: string) => Promise<Cart>;
	clearError: () => void;
}

const useCart = create<CartState>((set, get) => ({
	cart: undefined,
	updating: false,
	updatingId: null,
	error: undefined,
	createCart: async (marketId: string) => {
		const id = await getCookie('cart', cartCookieOptions);
		let cart: Cart | null = null;

		if (id) {
			const res = await geinsQuery(CartDocument, {
				revalidate: 0,
				variables: { id, marketId },
			});
			cart = res.getCart ?? null;
		}

		if (!cart) {
			const { getCart } = await geinsQuery(CartDocument, {
				revalidate: 0,
				variables: { id: null, marketId },
			});
			cart = getCart;
		}
		if (!cart) throw new Error('Cart not found');
		return get().setCart(cart as Cart);
	},
	addToCart: async (items: CartItemInputType[], marketId: string) => {
		return get().update(null, async (cart) => {
			let addToCart: Cart = null;
			const id = cart?.id ?? '';
			for (const item of items) {
				addToCart = (
					await geinsQuery(AddToCartDocument, {
						revalidate: 0,
						variables: {
							id,
							item,
							marketId,
						},
					})
				).addToCart;
			}
			return addToCart as Cart;
		});
	},
	removeFromCart: async (skuId: number) => {
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
	updateQuantity: async (skuId: string, quantity: number) => {
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
	clearCart: async () => {
		const cartId = get().cart?.id;
		if (!cartId) return;

		deleteCookie('cart', cartCookieOptions);
		set((state) => ({ cart: undefined }));
		await geinsQuery(ClearCartDocument, {
			revalidate: 0,
			variables: { id: cartId },
		});
	},
	setCart: async (cart: Cart) => {
		setCookie('cart', cart?.id, cartCookieOptions);
		set((state) => ({ cart }));
		return cart;
	},
	clearError: () => {
		set(() => ({ error: undefined }));
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
}));

export default useCart;
export { useShallow };
