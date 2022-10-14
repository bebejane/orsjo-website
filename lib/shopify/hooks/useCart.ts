import create from "zustand";
import { shopifyQuery } from '/lib/shopify/api'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { 
  CreateCartDocument, 
  CartDocument, 
  AddItemToCartDocument, 
  RemoveItemFromCartDocument, 
  UpdateItemFromCartDocument 
} from '/lib/shopify/graphql'

export interface CartState {
  cart?: Cart,
  updating:boolean,
  error:string,
  update: (fn: () => Promise<Cart>) => void,
  clearCart: () => void,
  createCart: () => void,
  setCart: (cart: Cart) => void,
  addToCart: (lines: CartLineInput[]) => void,
  removeFromCart: (lines: CartLineInput[]) => void, 
  updateQuantity: (id: string, quantity:number) => void, 
}

const useCart = create<CartState>((set, get) => ({
	cart: undefined,
  updating:false,
  error:undefined,
  createCart: async () => {
    get().update(async()=>{
      const id = getCookie('cart')
      let cart;

      if(id)
        return (await shopifyQuery(CartDocument, {variables:{id}})).cart
      else
        return (await shopifyQuery(CreateCartDocument)).cartCreate.cart;
    })
  },
  clearCart: () => {
    set((state) => ({cart:undefined}))
    deleteCookie('cart')
  },
  setCart: (cart : Cart) => {
    set((state) => ({cart}))
    setCookie('cart', cart.id)
  },
  addToCart: async (lines: CartLineInput[]) =>  {
    get().update(async()=>{
      const { cartLinesAdd } = await shopifyQuery(AddItemToCartDocument, {
        variables:{
          cartId: get().cart?.id,
          lines
        }
      });
      return cartLinesAdd.cart
    })
    
  },
  removeFromCart: async (lines: CartLineInput[]) =>  {
    get().update(async ()=>{
      const { cartLinesRemove } = await shopifyQuery(RemoveItemFromCartDocument, {
        variables:{
          cartId: get().cart?.id,
          lines
        }
      });
      return cartLinesRemove.cart
    })    
  },
  updateQuantity: async(id:string, quantity: number ) =>{
    get().update(async ()=>{
      const c = get().cart as Cart
      const lines = c.lines.edges.map(l => ({id:l.node.id, quantity:l.node.id === id ? quantity : l.node.quantity}))
      const { cartLinesUpdate } = await shopifyQuery(UpdateItemFromCartDocument , {
        variables:{
          cartId: get().cart?.id,
          lines
        }
      });
      return cartLinesUpdate.cart
    })   
  },
  update:(fn) => {
    set((state) => ({updating:true, error:undefined}))
    fn()
    .then((cart)=>get().setCart(cart))
    .catch((err)=>set((state) => ({error:err.message})))
    .finally(()=>set((state) => ({updating:false})))
  },
}));

export default useCart;
