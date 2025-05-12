import { CustomerCreateDocument } from '../../graphql'
import shopifyQuery from '../../shopify-query'
import { NextRequest, NextResponse } from 'next/server'
import { shopifyGraphqlError } from '../../utils'

export default async function register(req: NextRequest) {

  const input: CustomerCreateInput = await req.json()

  try {
    const { customerCreate } = await shopifyQuery<CustomerCreateMutation, CustomerCreateMutationVariables>(CustomerCreateDocument, {
      variables: { input }
    })

    if (!customerCreate)
      return NextResponse.json({ success: false, error: 'Customer not found' }, { status: 400 })
    if (customerCreate.customerUserErrors)
      return NextResponse.json({ success: false, errors: shopifyGraphqlError(customerCreate.customerUserErrors) }, { status: 500 })
    else
      return NextResponse.json({ success: true, ...customerCreate.customer })

  } catch (error) {
    const errors = (error as Error).message
    return NextResponse.json({ success: false, errors }, { status: 500 })
  }
}
