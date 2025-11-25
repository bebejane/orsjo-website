import Shopify from 'shopify-api-node';

const shopify = new Shopify({
  shopName: `${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com` as string,
  accessToken: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN as string,
  apiVersion: process.env.SHOPIFY_ADMIN_API_VERSION as string,
});

export default shopify
