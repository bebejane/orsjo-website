import { CustomerAccessTokenCreateDocument, CustomerDocument } from '../../graphql'
import shopifyQuery from '../../shopify-query'
import { NextRequest, NextResponse } from 'next/server'
import { getCookie, setCookie } from 'cookies-next'
import { shopifyGraphqlError } from '../../utils'

export default async function login(req: NextRequest) {

  const input: CustomerAccessTokenCreateInput = await req.json()

  const { customerAccessTokenCreate }: { customerAccessTokenCreate: CustomerAccessTokenCreatePayload } = await shopifyQuery(CustomerAccessTokenCreateDocument, {
    variables: { input }
  })

  const { customerAccessToken } = customerAccessTokenCreate

  if (customerAccessTokenCreate.customerUserErrors?.length)
    return NextResponse.json({ success: false, errors: shopifyGraphqlError(customerAccessTokenCreate.customerUserErrors) }, { status: 500 })


  if (!customerAccessToken?.accessToken)
    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 })

  const { customer } = await shopifyQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, { variables: { accessToken: customerAccessToken.accessToken } })

  if (!customer)
    return NextResponse.json({ success: false, error: 'Customer not found' }, { status: 400 })

  const user: User = {
    id: customer.id,
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    customerAccessToken: customerAccessToken
  }
  setCookie('user', user, { req, maxAge: 60 * 60 * 24 })
  return NextResponse.json({ ...user })
}
