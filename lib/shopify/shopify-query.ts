
import type { RequestInit } from 'next/dist/server/web/spec-extension/request'
import { print } from 'graphql/language/printer'
import type { DocumentNode } from '@/node_modules/graphql'
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

export type ApiQueryOptions<V = void> = {
  variables?: V;
  revalidate?: number | undefined;
  tags?: string[] | undefined,
  logs?: boolean
  all?: boolean,
  country?: string
  admin?: boolean
};

export type DefaultApiQueryOptions = ApiQueryOptions & {
  variables: undefined,
  revalidate: number | undefined,
  tags: string[] | undefined,
  logs: boolean
  all: boolean
  admin: boolean
}

const defaultOptions: DefaultApiQueryOptions = {
  variables: undefined,
  revalidate: 0,
  tags: undefined,
  logs: false,
  all: false,
  admin: false,
};

export default async function shopifyQuery<T = void, V = void>(query: TypedDocumentNode, options?: ApiQueryOptions<V>): Promise<T> {

  const opt = { ...defaultOptions, ...(options ?? {}) };

  if (!process.env.NEXT_PUBLIC_SHOPIFY_STORE)
    throw new Error('NEXT_PUBLIC_SHOPIFY_STORE is not set')
  if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION)
    throw new Error('NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION is not set')
  if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN)
    throw new Error('NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN is not set')

  const queryId = ((query as DocumentNode).definitions?.[0] as any).name?.value as string
  const country = (opt.country as CountryCode ?? 'SE').toUpperCase();

  const dedupeOptions: DedupeOptions = {
    body: JSON.stringify({
      query: print(query as DocumentNode),
      variables: options?.variables ? { ...options.variables } : { country }
    }) as string,
    ...opt,
    queryId
  }

  const { data } = await dedupedFetch({ ...dedupeOptions, tags: [] });
  return { ...data }
}

export type DedupeOptions = {
  url?: string
  body: string;
  revalidate?: number;
  tags?: string[] | undefined
  queryId: string,
  logs: boolean
  admin: boolean
}

const dedupedFetch = async (options: DedupeOptions) => {
  const {
    url,
    body,
    revalidate,
    tags,
    queryId,
    logs,
    admin
  } = options;

  const headers = {
    'Content-Type': 'application/json'
  } as unknown as HeadersInit

  let endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

  if (admin) {
    headers['X-Shopify-Access-Token'] = process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN as string
    endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com/admin/api/${process.env.SHOPIFY_ADMIN_API_VERSION}/graphql.json`;
  } else
    headers['X-Shopify-Storefront-Access-Token'] = (process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN || process.env.SHOPIFY_STOREFRONT_API_TOKEN) as string

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body,
    next: {
      revalidate,
      cache: 'no-store',
      tags: Array.isArray(tags) ? tags : undefined
    }
  } as RequestInit);

  const responseBody = await response.json();

  if (!response.ok)
    throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);

  if (responseBody.errors) {
    const message = responseBody.errors.map(({ message }: { message: string }) => message).join('. ')
    throw new Error(message);
  }
  logs && console.log(queryId, { ...options, body: undefined }, response.headers.get('x-cache'))
  return responseBody;
}