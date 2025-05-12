import { buildClient } from '@datocms/cma-client-node'
import { NextRequest, NextResponse } from 'next/server'

export default async function test(req: NextRequest) {

  try {
    //console.log(printExecutableGraphQLDocument(AllShopifyProductsDocument))
    //const data = await shopify.get({ path: `customers` })
    //const data: any = await graphqlClient.query({ data: printExecutableGraphQLDocument(AllShopifyProductsDocument), query: { first: 250 } })
    //const data = await shopifyQuery(AllShopifyProductsDocument, { variables: { first: 250 } })

    //const data = await shopify.smartCollection.list({ limit: 250 })
    return NextResponse.json({ success: true })
  } catch (error) {
    //console.log(error)
    throw error

  }
}
