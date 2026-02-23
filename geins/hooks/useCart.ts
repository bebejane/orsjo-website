import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import geinsQuery from '../geins-query';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { cartCookieOptions } from '../utils';
import { CartDocument, AddToCartDocument, ClearCartDocument } from '../graphql';

export interface CartState {
	cart?: CartQuery['getCart'];
	updating: boolean;
	updatingId: string | null;
	error: string | undefined;
	country: string;
	update: (id: string | null, fn: () => Promise<CartQuery['getCart']>) => void;
	clearCart: () => void;
	createCart: (country: string) => void;
	setCart: (cart: CartQuery['getCart']) => Promise<CartQuery['getCart']>;
	addToCart: (lines: CartItemInputType, country: string) => void;
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
		let cart: CartQuery['getCart'] | null = null;

		if (id) {
			const res = await geinsQuery(CartDocument, { revalidate: 0, variables: { id }, country });
			cart = res.getCart ?? null;
		}

		if (!cart) {
			const { getCart } = await geinsQuery(CartDocument, { revalidate: 0, country });
			cart = getCart;
		}

		console.log(cart);
		if (!cart) throw new Error('Cart not found');

		return get().setCart(cart as CartQuery['getCart']);
	},
	clearCart: async () => {
		const cartId = get().cart?.id;
		if (!cartId) return;
		set((state) => ({ cart: undefined }));
		deleteCookie('cart', cartCookieOptions);
		await geinsQuery(ClearCartDocument, { revalidate: 0, variables: { id: cartId } });
	},
	setCart: async (cart: CartQuery['getCart']) => {
		setCookie('cart', cart?.id, cartCookieOptions);
		set((state) => ({ cart }));
		return cart;
	},
	addToCart: async (item: CartItemInputType, country: string) => {
		return get().update(null, async () => {
			const cart = get().cart as CartQuery['getCart'];
			const { addToCart } = await geinsQuery(AddToCartDocument, {
				revalidate: 10,
				variables: {
					id: cart?.id ?? '',
					item,
				},
			});
			return addToCart as CartQuery['getCart'];
		});
	},
	removeFromCart: async (id: string) => {
		get().update(id, async () => {
			const cart = get().cart as CartQuery['getCart'];
			return cart;
			// const { cartLinesRemove } = await geinsQuery(RemoveItemFromCartDocument, {
			// 	revalidate: 0,
			// 	variables: {
			// 		cartId: cart?.id ?? '',
			// 		lineIds: [id],
			// 	},
			// });

			// if (!cartLinesRemove?.cart) throw new Error('Cart not found');
			// return cartLinesRemove.cart as CartQuery['getCart'];
		});
	},
	updateQuantity: async (id: string, quantity: number, country: string) => {
		get().update(id, async () => {
			const cart = get().cart as CartQuery['getCart'];
			if (!cart) throw new Error('Cart not found');
			return cart;
			// const lines = cart.lines.edges.map((l) => ({
			// 	id: l.node.id,
			// 	quantity: l.node.id === id ? quantity : l.node.quantity,
			// }));
			// const { cartLinesUpdate } = await geinsQuery(UpdateItemFromCartDocument, {
			// 	revalidate: 0,
			// 	variables: {
			// 		cartId: cart?.id,
			// 		lines,
			// 	},
			// 	country,
			// });

			// return cartLinesUpdate.cart as CartQuery['getCart'];
		});
	},
	updateBuyerIdentity: async (buyerIdentity: CartBuyerIdentityInput) => {
		get().update(null, async () => {
			const id = getCookie('cart', cartCookieOptions) as string;

			// const { cartBuyerIdentityUpdate } = await geinsQuery(CartBuyerIdentityUpdateDocument, {
			// 	revalidate: 0,
			// 	variables: {
			// 		cartId: id,
			// 		buyerIdentity,
			// 	},
			// });

			// if (cartBuyerIdentityUpdate?.userErrors && cartBuyerIdentityUpdate?.userErrors.length > 0)
			// 	throw cartBuyerIdentityUpdate?.userErrors;

			// const cart = cartBuyerIdentityUpdate?.cart as CartQuery['getCart'];
			// if (!cart) throw new Error('Cart not found');
			return get().cart;
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
