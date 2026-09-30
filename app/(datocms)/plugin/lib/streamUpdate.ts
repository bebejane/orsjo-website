'use client';

import type { ProductUpdate, UpdateProgress } from '@/pricelist/lib/controllers/pricelist';

export type UpdateError = {
	productId: string;
	title: string;
	error: string;
};

export type UpdateResult = {
	updated: number;
	errors: UpdateError[];
};

type StreamMessage =
	| { type: 'progress'; progress: UpdateProgress }
	| { type: 'done'; updated: number; errors: UpdateError[] }
	| { type: 'error'; message: string };

export async function streamUpdate(
	token: string,
	environment: string,
	updates: ProductUpdate,
	onProgress?: (progress: UpdateProgress) => void,
): Promise<UpdateResult> {
	const res = await fetch('/api/pricelist/update', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			...(token ? { authorization: `Bearer ${token}` } : {}),
		},
		body: JSON.stringify({ environment, updates }),
	});

	if (!res.ok || !res.body) {
		const message = (await res.text().catch(() => null)) || `Update failed (${res.status})`;
		throw new Error(message);
	}

	const reader = res.body.getReader();
	const decoder = new TextDecoder();
	let buffer = '';
	let result: UpdateResult | null = null;

	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		buffer += decoder.decode(value, { stream: true });

		let newline: number;
		while ((newline = buffer.indexOf('\n')) !== -1) {
			const line = buffer.slice(0, newline).trim();
			buffer = buffer.slice(newline + 1);
			if (!line) continue;

			const msg = JSON.parse(line) as StreamMessage;
			if (msg.type === 'progress') {
				onProgress?.(msg.progress);
			} else if (msg.type === 'done') {
				result = { updated: msg.updated, errors: msg.errors };
			} else if (msg.type === 'error') {
				throw new Error(msg.message);
			}
		}
	}

	if (!result) throw new Error('Update stream ended without a result');
	return result;
}