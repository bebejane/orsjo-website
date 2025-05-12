import { create } from "zustand";
import shopifyQuery from '../shopify-query'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import {
  CustomerCreateDocument,
  CustomerAccessTokenCreateDocument,
  CustomerAccessTokenDeleteDocument,
  CustomerDocument
} from '../graphql'

export interface CustomerState {
  customer?: Customer
  customerAccessToken?: CustomerAccessToken | undefined
  updating: boolean
  error: string | undefined
  update: (fn: () => Promise<Customer | void>) => Promise<Customer | void>
  setCustomer: (customer: Customer) => Customer
  createCustomer: (customer: CustomerCreateInput) => void
  login: (email: string, password: string) => Promise<Customer | void>
  logout: () => void
}

const user = getCookie('user') ? JSON.parse(getCookie('user') as string) : undefined

const useCustomer = create<CustomerState>((set, get) => ({
  customer: user,
  customerAccessToken: user?.customerAccessToken,
  updating: false,
  error: undefined,
  setCustomer: (customer: Customer) => {
    set((state) => ({ customer }))
    setCookie('user', customer.id)
    return customer
  },
  createCustomer: async (input: CustomerCreateInput) => {
    return await get().update(async () => {
      const { createCustomer } = await shopifyQuery(CustomerCreateDocument, {
        variables: { input }
      })
      return createCustomer.customer
    })
  },
  login: async (email: string, password: string) => {
    return await get().update(async () => {

      const { customerAccessTokenCreate }: { customerAccessTokenCreate: CustomerAccessTokenCreatePayload } = await shopifyQuery(CustomerAccessTokenCreateDocument, {
        variables: { email, password }
      })

      const { customerAccessToken } = customerAccessTokenCreate
      const { customer } = await shopifyQuery(CustomerDocument, { variables: { accessToken: customerAccessToken?.accessToken } })
      console.log('login', customerAccessToken)
      set((state) => ({ customerAccessToken }))
      return get().setCustomer(customer)
    })
  },
  logout: async () => {
    await get().update(async () => {
      const { customerAccessTokenDelete }: { customerAccessTokenDelete: CustomerAccessTokenDeletePayload } = await shopifyQuery(CustomerAccessTokenDeleteDocument, {
        variables: { customerAccessToken: get().customerAccessToken?.accessToken }
      })
      set((state) => ({ customerAccessToken: undefined }))
    })
  },
  update: async (fn) => {
    set((state) => ({ updating: true, error: undefined }))
    return fn()
      .then((customer) => {
        return get().setCustomer(customer as Customer)
      })
      .catch((err) => set((state) => ({ error: err.message })))
      .finally(() => set((state) => ({ updating: false })))
  }
}));

export default useCustomer;
