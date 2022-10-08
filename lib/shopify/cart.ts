import create from "zustand";
import shallow from "zustand/shallow"
import Cart from "/components/shop/Cart";
import { shopifyQuery } from '/lib/shopify/api'
import { createCartDocument, CartDocument, addItemToCartDocument, removeItemFromCartDocument } from '/lib/shopify/graphql'
import { isServer } from "/lib/utils";

const initialCart = !isServer && localStorage.getItem('cart') ?  JSON.parse(localStorage.getItem('cart')) : undefined;


export interface StoreState {
  cart?: Cart,
  updatingCart:boolean,
  clearCart: () => void,
  createCart: () => void,
  setCart: (cart: Cart) => void,
  addToCart: (lines: CartLineInput[]) => void,
  removeFromCart: (lines: CartLineInput[]) => void, 
}
//localStorage.setItem('cart', JSON.stringify(cart))
const useCart = create<StoreState>((set, get) => ({
	cart: initialCart,
  updatingCart:false,
  clearCart: () => {
    set((state) => ({cart:undefined}))
    localStorage.removeItem('cart')
  },
  createCart: async () => {
    set((state) => ({updatingCart:true}))
    const { cartCreate }= await shopifyQuery(createCartDocument)
    get().setCart(cartCreate.cart)
    set((state) => ({updatingCart:false}))
  },
  setCart: (cart : Cart) => {
    set((state) => ({cart}))
    localStorage.setItem('cart', JSON.stringify(cart))
  },
  addToCart: async (lines: CartLineInput[]) =>  {
    set((state) => ({updatingCart:true}))
    const { cartLinesAdd } = await shopifyQuery(addItemToCartDocument, {
      variables:{
        cartId: get().cart?.id,
        lines
      }
    });
    get().setCart(cartLinesAdd.cart)
    set((state) => ({updatingCart:false}))
  },
  removeFromCart: async (lines: CartLineInput[]) =>  {
    set((state) => ({updatingCart:true}))
    const { cartLinesRemove } = await shopifyQuery(removeItemFromCartDocument, {
      variables:{
        cartId: get().cart?.id,
        lines
      }
    });
    get().setCart(cartLinesRemove.cart)
    set((state) => ({updatingCart:false}))
  },
}));

export default useCart;
export { shallow, useCart };
