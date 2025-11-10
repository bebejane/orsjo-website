import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import shopifyQuery from '../shopify-query';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { cartCookieOptions } from '../utils';
import {
	CreateCartDocument,
	CartDocument,
	AddItemToCartDocument,
	RemoveItemFromCartDocument,
	UpdateItemFromCartDocument,
	CartBuyerIdentityUpdateDocument,
} from '../graphql';

export interface CartState {
	cart?: CartQuery['cart'];
	updating: boolean;
	updatingId: string | null;
	error: string | undefined;
	country: string;
	update: (id: string | null, fn: () => Promise<CartQuery['cart']>) => void;
	clearCart: () => void;
	createCart: (country: string) => void;
	setCart: (cart: CartQuery['cart']) => Promise<CartQuery['cart']>;
	addToCart: (lines: CartLineInput | CartLineInput[], country: string) => void;
	removeFromCart: (id: string) => void;
	updateQuantity: (id: string, quantity: number, country: string) => void;
	updateBuyerIdentity: (input: CartBuyerIdentityInput) => void;
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
		let cart: CartQuery['cart'] | null = null;

		if (id) {
			const res = await shopifyQuery(CartDocument, { revalidate: 0, variables: { id }, country });
			cart = res.cart ?? null;
		}

		if (!cart) {
			const { cartCreate } = await shopifyQuery(CreateCartDocument, { revalidate: 0, country });
			if (cartCreate?.userErrors.length) throw cartCreate.userErrors;

			cart = cartCreate?.cart;
		}

		if (!cart) throw new Error('Cart not found');

		return get().setCart(cart as CartQuery['cart']);
	},
	clearCart: () => {
		set((state) => ({ cart: undefined }));
		deleteCookie('cart', cartCookieOptions);
	},
	setCart: async (cart: CartQuery['cart']) => {
		setCookie('cart', cart?.id, cartCookieOptions);
		set((state) => ({ cart }));
		return cart;
	},
	addToCart: async (lines: CartLineInput | CartLineInput[], country: string) => {
		get().update(null, async () => {
			const cart = get().cart as CartQuery['cart'];
			const { cartLinesAdd } = await shopifyQuery(AddItemToCartDocument, {
				revalidate: 10,
				variables: {
					cartId: cart?.id ?? '',
					lines,
				},
				country,
			});

			if (cartLinesAdd?.userErrors && cartLinesAdd?.userErrors.length > 0) throw cartLinesAdd.userErrors;

			if (!cartLinesAdd?.cart) throw new Error('Cart not found');

			return cartLinesAdd.cart as CartQuery['cart'];
		});
	},
	removeFromCart: async (id: string) => {
		get().update(id, async () => {
			const cart = get().cart as CartQuery['cart'];

			const { cartLinesRemove } = await shopifyQuery(RemoveItemFromCartDocument, {
				revalidate: 0,
				variables: {
					cartId: cart?.id ?? '',
					lineIds: [id],
				},
			});

			if (cartLinesRemove?.userErrors && cartLinesRemove?.userErrors.length > 0) throw cartLinesRemove.userErrors;

			if (!cartLinesRemove?.cart) throw new Error('Cart not found');
			return cartLinesRemove.cart as CartQuery['cart'];
		});
	},
	updateQuantity: async (id: string, quantity: number, country: string) => {
		get().update(id, async () => {
			const cart = get().cart as CartQuery['cart'];
			if (!cart) throw new Error('Cart not found');
			const lines = cart.lines.edges.map((l) => ({
				id: l.node.id,
				quantity: l.node.id === id ? quantity : l.node.quantity,
			}));
			const { cartLinesUpdate } = await shopifyQuery(UpdateItemFromCartDocument, {
				revalidate: 0,
				variables: {
					cartId: cart?.id,
					lines,
				},
				country,
			});

			if (cartLinesUpdate?.userErrors && cartLinesUpdate?.userErrors.length > 0) throw cartLinesUpdate.userErrors;

			if (!cartLinesUpdate?.cart) throw new Error('Cart not found');
			return cartLinesUpdate.cart as CartQuery['cart'];
		});
	},
	updateBuyerIdentity: async (buyerIdentity: CartBuyerIdentityInput) => {
		get().update(null, async () => {
			const id = getCookie('cart', cartCookieOptions) as string;
			const { cartBuyerIdentityUpdate } = await shopifyQuery(CartBuyerIdentityUpdateDocument, {
				revalidate: 0,
				variables: {
					cartId: id,
					buyerIdentity,
				},
			});

			if (cartBuyerIdentityUpdate?.userErrors && cartBuyerIdentityUpdate?.userErrors.length > 0)
				throw cartBuyerIdentityUpdate?.userErrors;

			const cart = cartBuyerIdentityUpdate?.cart as CartQuery['cart'];
			if (!cart) throw new Error('Cart not found');
			return cart;
		});
	},
	update: (id, fn) => {
		set((state) => ({ updating: true, updatingId: id ?? null, error: undefined }));
		fn()
			.then((cart) => get().setCart(cart))
			.catch((err) => set((state) => ({ error: err })))
			.finally(() => set((state) => ({ updating: false, updatingId: null })));
	},
	clearError: () => {
		set(() => ({ error: undefined }));
	},
}));

export default useCart;
export { useShallow };
