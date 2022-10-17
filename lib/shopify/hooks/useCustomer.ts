import create from "zustand";
import { shopifyQuery } from '/lib/shopify/api'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import {
  CustomerCreateDocument,
  CustomerAccessTokenCreateDocument,
  CustomerAccessTokenDeleteDocument,
  CustomerDocument
} from '/lib/shopify/graphql'

export interface CustomerState {
  customer?: Customer,
  customerAccessToken?: CustomerAccessToken,
  updating: boolean,
  error: string,
  update: (fn: () => Promise<Customer | void>) => Promise<Customer | void>,
  setCustomer: (customer: Customer) => Customer
  createCustomer: (customer: CustomerCreateInput) => void,
  login: (email: string, password: string) => Promise<Customer | void>
  logout: () => void
}

const useCustomer = create<CustomerState>((set, get) => ({
  customer: undefined,
  updating: false,
  error: undefined,
  setCustomer: (customer: Customer) => {
    set((state) => ({ customer }))
    setCookie('customer', customer.id)
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

      const { customerAccessTokenCreate } = await shopifyQuery(CustomerAccessTokenCreateDocument, { 
        variables: { email, password } 
      })
      
      const accessToken = customerAccessTokenCreate.customerAccessToken
      const { customer } = await shopifyQuery(CustomerDocument, { variables: { accessToken } })
      set((state) => ({ customerAccessToken: accessToken }))
      return get().setCustomer(customer)
    })
  },
  logout: async () => {
    await get().update(async () => {
      const { customerAccessTokenCreate } = await shopifyQuery(CustomerAccessTokenDeleteDocument, {
        variables: { accessToken: get().customerAccessToken?.accessToken }
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
