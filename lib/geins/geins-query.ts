import type { RequestInit } from 'next/dist/server/web/spec-extension/request';
import type { DocumentNode } from 'graphql';
import { print } from 'graphql/language/printer';
import * as Sentry from '@sentry/nextjs';

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
	revalidate: 0,
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

export default async function geinsQuery<TResult = any, TVariables = Record<string, any>>(
	query: TypedDocumentNode<TResult, TVariables>,
	options?: ApiQueryOptions<TVariables>,
): Promise<TResult> {
	const opt = { ...defaultOptions, ...(options ?? {}) };

	if (!process.env.GEINS_MERCHANT_API_KEY) throw new Error('GEINS_MERCHANT_API_KEY is not set');

	const queryId = (query.definitions?.[0] as any).name?.value as string;

	const dedupeOptions: DedupeOptions = {
		body: JSON.stringify({
			query: print(query),
			variables: options?.variables ? { ...options.variables } : {},
		}) as string,
		...opt,
		queryId,
	};
	console.log(queryId, options?.variables);

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
	const { body, revalidate, tags, queryId, logs } = options;

	const headers = {
		'X-ApiKey': process.env.GEINS_MERCHANT_API_KEY,
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	} as unknown as HeadersInit;

	const response = await fetch(`https://merchantapi.geins.io/graphql`, {
		method: 'POST',
		headers,
		body,
		next: {
			revalidate: revalidate ?? 0,
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

		Sentry.captureException(new Error(`geins-query: ${response.status}: ${response.statusText}`));
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
