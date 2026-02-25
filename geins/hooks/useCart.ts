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
	marketId: string;
	update: (id: string | null, fn: (cart: Cart | undefined) => Promise<Cart>) => Promise<Cart>;
	clearCart: () => void;
	createCart: (country: string) => void;
	setCart: (cart: Cart) => Promise<Cart>;
	addToCart: (item: CartItemInputType, country: string) => Promise<Cart>;
	removeFromCart: (itemId: string, skuId: number) => Promise<Cart>;
	updateQuantity: (skuId: string, quantity: number, country: string) => Promise<Cart>;
	clearError: () => void;
	setMarketId: (id: string) => void;
}

const useCart = create<CartState>((set, get) => ({
	cart: undefined,
	updating: false,
	updatingId: null,
	error: undefined,
	marketId: GEINS_MARKET_ID,
	createCart: async (marketId?: string) => {
		const id = await getCookie('cart', cartCookieOptions);
		let cart: Cart | null = null;

		marketId = marketId ?? get().marketId;

		if (id) {
			const res = await geinsQuery(CartDocument, {
				revalidate: 0,
				variables: { id },
				marketId: marketId ?? get().marketId,
			});
			cart = res.getCart ?? null;
		}

		if (!cart) {
			const { getCart } = await geinsQuery(CartDocument, {
				revalidate: 0,
				marketId: get().marketId,
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
		await geinsQuery(ClearCartDocument, {
			revalidate: 0,
			variables: { id: cartId, marketId: get().marketId },
		});
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
					marketId: get().marketId,
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
					marketId: get().marketId,
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
					marketId: get().marketId,
				},
			});
			return updateCartItem;
		});
	},
	clearError: () => {
		set(() => ({ error: undefined }));
	},
	setMarketId: (id: string) => {
		set(() => ({ marketId: id }));
		get().createCart(id);
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
