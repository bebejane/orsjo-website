import React, { useEffect, useState, useRef } from 'react'
import styles from './Cart.module.scss'
import useCart from '../../lib/shopify/hooks/useCart'
import Link from 'next/link'

export type CartProps = {}

export default function Cart({ }: CartProps) {

  const [cart, clearCart, createCart, updatingCart] = useCart((state) => [state.cart, state.clearCart, state.createCart, state.updatingCart])
  const [error, setError] = useState()
  const isEmpty = !cart || cart.lines.edges.length === 0 

  useEffect(()=>{
    if(!cart)
      createCart()
  }, [cart, createCart])
  
	return (
		<div id="cart" className={styles.cart} >
      <h2>Cart</h2>
      <p className="medium">
        {isEmpty && 'Empty...'}
        {updatingCart && '...'}
        <table>
          {cart?.lines.edges.map(({node}, idx) => 
            <tr key={idx}>
              <td>{node.quantity} </td>
              <td>X</td>
              <td>{node.merchandise.product.title}</td>
              <td>{node.cost?.totalAmount.amount}</td>
            </tr>
          )}
        </table>
      </p>
      <button onClick={()=>clearCart()}>Clear</button>
      <Link href="/shop/cart">
        <a><button>Checkout</button></a>
      </Link>
		</div>
	)
}