//@ts-nocheck
import type { RequestInit } from 'next/dist/server/web/spec-extension/request';
import type { DocumentNode } from 'graphql';
import { print } from 'graphql/language/printer';
import * as Sentry from '@sentry/nextjs';

const shopifyApiEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

export type ApiQueryOptions<V = void> = {
	variables?: V;
	revalidate?: number | undefined;
	tags?: string[] | undefined;
	logs?: boolean;
	all?: boolean;
	country?: string;
	admin?: boolean;
};

export type DefaultApiQueryOptions = ApiQueryOptions & {
	variables: undefined;
	revalidate: number | undefined;
	tags: string[] | undefined;
	logs: boolean;
	all: boolean;
	admin: boolean;
};

const defaultOptions: DefaultApiQueryOptions = {
	variables: undefined,
	revalidate: 60,
	tags: undefined,
	logs: false,
	all: false,
	admin: false,
};

export interface TypedDocumentNode<
	TResult = { [key: string]: any },
	TVariables = { [key: string]: any },
> extends DocumentNode {
	__apiType?: (variables: TVariables) => TResult;
	__resultType?: TResult;
	__variablesType?: TVariables;
}

export default async function shopifyQuery<TResult = any, TVariables = Record<string, any>>(
	query: TypedDocumentNode<TResult, TVariables>,
	options?: ApiQueryOptions<TVariables>
): Promise<TResult> {
	const opt = { ...defaultOptions, ...(options ?? {}) };

	if (!process.env.NEXT_PUBLIC_SHOPIFY_STORE)
		throw new Error('NEXT_PUBLIC_SHOPIFY_STORE is not set');
	if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION)
		throw new Error('NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION is not set');
	if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN)
		throw new Error('NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN is not set');

	const queryId = (query.definitions?.[0] as any).name?.value as string;
	const country = ((opt.country as CountryCode) ?? 'se').toUpperCase();

	const dedupeOptions: DedupeOptions = {
		body: JSON.stringify({
			query: print(query),
			variables: options?.variables ? { ...options.variables, country } : { country },
		}) as string,
		...opt,
		queryId,
	};

	const { data } = await dedupedFetch({ ...dedupeOptions, tags: [] });
	return { ...data };
}

export type DedupeOptions = {
	url?: string;
	body: string;
	revalidate?: number;
	tags?: string[] | undefined;
	queryId: string;
	logs: boolean;
};

const dedupedFetch = async (options: DedupeOptions) => {
	const { body, revalidate, tags, queryId, logs, admin } = options;

	const headers = {
		'X-Shopify-Storefront-Access-Token': (process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN ||
			process.env.SHOPIFY_STOREFRONT_API_TOKEN) as string,
		'Content-Type': 'application/json',
	} as unknown as HeadersInit;

	let endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

	if (admin) {
		headers['X-Shopify-Access-Token'] = process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN as string;
		endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com/admin/api/${process.env.SHOPIFY_ADMIN_API_VERSION}/graphql.json`;
	} else
		headers['X-Shopify-Storefront-Access-Token'] = (process.env
			.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN ||
			process.env.SHOPIFY_STOREFRONT_API_TOKEN) as string;

	const response = await fetch(endpoint, {
		method: 'POST',
		headers,
		body,
		next: {
			revalidate,
			cache: 'no-store',
			tags: Array.isArray(tags) ? tags : undefined,
		},
	} as RequestInit);

	const responseBody = await response.json();

	if (!response.ok) {
		console.error(`${response.status} ${response.statusText}`);
		try {
			console.error(JSON.stringify(response, null, 2));
		} catch (e) {}

		Sentry.captureException(new Error(`shopify-query: ${response.status}: ${response.statusText}`));
		throw new Error(`${response.status} ${response.statusText}`);
	}

	if (responseBody.errors) {
		console.error(responseBody.errors);
		const message = responseBody.errors
			.map(({ message }: { message: string }) => message)
			.join('. ');
		Sentry.captureException(new Error(message));
		throw new Error(message);
	}
	logs && console.log(queryId, { ...options, body: undefined }, response.headers.get('x-cache'));
	return responseBody;
};
