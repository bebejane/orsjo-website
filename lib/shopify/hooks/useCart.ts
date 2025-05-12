import { create } from "zustand";
import shopifyQuery from '../shopify-query'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { cartCookieOptions } from '../utils'
import {
  CreateCartDocument,
  CartDocument,
  AddItemToCartDocument,
  RemoveItemFromCartDocument,
  UpdateItemFromCartDocument,
  CartBuyerIdentityUpdateDocument
} from '../graphql'

export interface CartState {
  cart?: Cart,
  updating: boolean,
  updatingId: string | null,
  error: string | undefined,
  country: string,
  update: (id: string | null, fn: () => Promise<Cart>) => void,
  clearCart: () => void,
  createCart: (country: string) => void,
  setCart: (cart: Cart) => Promise<Cart>,
  addToCart: (lines: CartLineInput, country: string) => void,
  removeFromCart: (id: string) => void,
  updateQuantity: (id: string, quantity: number, country: string) => void,
  updateBuyerIdentity: (input: CartBuyerIdentityInput) => void,
}

const useCart = create<CartState>((set, get) => ({
  cart: undefined,
  updating: false,
  updatingId: null,
  error: undefined,
  country: 'SE',
  createCart: async (country: string) => {
    const id = getCookie('cart', cartCookieOptions)
    let cart = null;

    if (id) {
      const res = (await shopifyQuery<CartQuery, CartQueryVariables>(CartDocument, { revalidate: 0, variables: { id }, country }))
      cart = res.cart ?? null
    }

    if (!cart)
      cart = (await shopifyQuery<CreateCartMutation, CreateCartMutationVariables>(CreateCartDocument, { revalidate: 0, country }))?.cartCreate?.cart;


    if (!cart)
      throw new Error('Cart not found')

    return get().setCart(cart as Cart)
  },
  clearCart: () => {
    set((state) => ({ cart: undefined }))
    deleteCookie('cart', cartCookieOptions)
  },
  setCart: async (cart: Cart) => {
    setCookie('cart', cart.id, cartCookieOptions)
    set((state) => ({ cart }))
    return cart
  },
  addToCart: async (line: CartLineInput, country: string) => {
    get().update(null, async () => {

      const cart = get().cart as Cart
      const { cartLinesAdd } = await shopifyQuery<AddItemToCartMutation, AddItemToCartMutationVariables>(AddItemToCartDocument, {
        revalidate: 0,
        variables: {
          cartId: cart.id,
          lines: [line]
        },
        country
      });

      if (cartLinesAdd?.userErrors && cartLinesAdd?.userErrors.length > 0)
        throw new Error(cartLinesAdd?.userErrors.map(e => e.message).join('. '))

      if (!cartLinesAdd?.cart)
        throw new Error('Cart not found')

      return cartLinesAdd.cart as Cart
    })
  },
  removeFromCart: async (id: string) => {
    get().update(id, async () => {
      const cart = get().cart as Cart

      const { cartLinesRemove } = await shopifyQuery<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>(RemoveItemFromCartDocument, {
        revalidate: 0,
        variables: {
          cartId: cart.id,
          lineIds: [id]
        }
      });

      if (!cartLinesRemove?.cart) throw new Error('Cart not found')
      return cartLinesRemove.cart as Cart
    })
  },
  updateQuantity: async (id: string, quantity: number, country: string) => {
    get().update(id, async () => {
      const cart = get().cart as Cart
      const lines = cart.lines.edges.map(l => ({ id: l.node.id, quantity: l.node.id === id ? quantity : l.node.quantity }))
      const { cartLinesUpdate } = await shopifyQuery<UpdateItemFromCartMutation, UpdateItemFromCartMutationVariables>(UpdateItemFromCartDocument, {
        revalidate: 0,
        variables: {
          cartId: cart?.id,
          lines
        },
        country

      });
      if (!cartLinesUpdate?.cart) throw new Error('Cart not found')
      return cartLinesUpdate.cart as Cart

    })
  },
  updateBuyerIdentity: async (buyerIdentity: CartBuyerIdentityInput) => {
    get().update(null, async () => {
      const id = getCookie('cart', cartCookieOptions) as string
      const { cartBuyerIdentityUpdate } = await shopifyQuery<CartBuyerIdentityUpdateMutation, CartBuyerIdentityUpdateMutationVariables>(CartBuyerIdentityUpdateDocument, {
        revalidate: 0,
        variables: {
          cartId: id,
          buyerIdentity
        }
      });
      const cart = cartBuyerIdentityUpdate?.cart as Cart
      if (!cart) throw new Error('Cart not found')
      return cart
    })
  },
  update: (id, fn) => {
    set((state) => ({ updating: true, updatingId: id ?? null, error: undefined }))
    fn()
      .then((cart) => get().setCart(cart))
      .catch((err) => set((state) => ({ error: err.message })))
      .finally(() => set((state) => ({ updating: false, updatingId: null })))
  },
}));

export default useCart;
