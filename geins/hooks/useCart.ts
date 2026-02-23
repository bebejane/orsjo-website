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
	removeFromCart: (skuId: string) => Promise<Cart>;
	updateQuantity: (skuId: string, quantity: number, country: string) => Promise<Cart>;
	updateBuyerIdentity: (input: CartBuyerIdentityInput) => Promise<Cart>;
	clearError: () => void;
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
			console.log({
				id: cart?.id ?? '',
				item,
			});
			const { addToCart } = await geinsQuery(AddToCartDocument, {
				revalidate: 0,
				variables: {
					id: cart?.id ?? '',
					item,
				},
			});
			console.log(addToCart);
			return addToCart as Cart;
		});
	},
	removeFromCart: async (skuId: string) => {
		return get().update(null, async (cart) => {
			return get().addToCart({ id: skuId, quantity: 0 }, get().country);
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
}));

export default useCart;
export { useShallow };
