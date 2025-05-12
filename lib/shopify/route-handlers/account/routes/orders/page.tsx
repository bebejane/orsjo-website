import { GetServerSideProps } from 'next/types'
import s from './orders.module.scss'
import { getCookie, getCookies } from 'cookies-next'
import { CustomerOrdersDocument } from '@shopify/graphql'
import shopifyQuery from '@shopify/shopify-query'
import { flattenConnection, parseGid } from '@shopify/utils'
import React from 'react'

type Props = {
  customer: Customer
  orders: Order[]
}

export default function Orders({ customer, orders: _orders }: Props) {

  const [errors, setErrors] = React.useState<string[]>([])
  const [orders, setOrders] = React.useState<Order[]>(_orders)

  const cancel = async (order: Order) => {
    const res = await fetch('/api/shopify/account/orders/cancel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order }),
    })

    const data = await res.json()

    if (data.errors) {
      setErrors(data.errors)
    } else if (data.success) {
      location.reload()
    }
  }

  return (
    <div className={s.container}>
      <h1>Orders</h1>
      {errors.map((error, idx) => <p key={idx} className={s.error}>{error}</p>)}
      <table>
        {orders.map((order, idx) => {
          return (
            <tbody key={idx} className={order.canceledAt ? s.cancelled : undefined}>
              <tr>
                <td colSpan={2}>
                  {order.processedAt}
                </td>
                <td colSpan={2} style={{ textAlign: 'right' }}>
                  {order.fulfillmentStatus === 'UNFULFILLED' && <button onClick={() => cancel(order)}>Cancel</button>}
                </td>

              </tr>
              {order.lineItems.edges.map((lineItem, i) =>
                <tr key={i}>
                  <td>
                    {lineItem.node.quantity}
                  </td>
                  <td>
                    {lineItem.node.title}
                  </td>
                  <td>
                    {lineItem.node.variant?.title}
                  </td>
                  <td>
                    {lineItem.node.variant?.price.amount} {lineItem.node.variant?.price.currencyCode}
                  </td>
                </tr>
              )}
              <tr className={s.total}>
                <td colSpan={4} style={{ textAlign: 'right' }}>
                  <hr />
                  {order.totalPrice.amount} {order.totalPrice.currencyCode}
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div >
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

  const user = getCookie('user', { req, res });

  if (!user) {
    return {
      redirect: {
        destination: '/account/auth/login',
        permanent: false,
      }
    }
  }
  const accessToken = JSON.parse(user).customerAccessToken?.accessToken
  const { customer }: { customer: Customer } = await shopifyQuery(CustomerOrdersDocument, { variables: { accessToken } })

  return {
    props: {
      orders: flattenConnection(customer.orders),
    }
  }

}