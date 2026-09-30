import { NextResponse } from 'next/server';
import { update, verifyAccessToken } from '@/pricelist/lib/controllers/pricelist';
import type { ProductUpdate } from '@/pricelist/lib/controllers/pricelist';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 800;

export async function POST(req: Request) {
	let body: { environment?: string; updates?: ProductUpdate };
	try {
		body = await req.json();
	} catch {
		return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
	}

	const token = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
	if (!token) {
		return NextResponse.json({ error: 'Missing access token' }, { status: 401 });
	}

	const { environment, updates } = body;
	if (!updates || !Object.keys(updates).length) {
		return NextResponse.json({ error: 'No updates provided' }, { status: 400 });
	}

	const stream = new ReadableStream({
		async start(controller) {
			const encoder = new TextEncoder();
			const send = (payload: unknown) => {
				try {
					controller.enqueue(encoder.encode(`${JSON.stringify(payload)}\n`));
				} catch (err) {
					console.error('Failed to stream progress', err);
				}
			};

			try {
				await verifyAccessToken(token);

				const result = await update(updates, environment ?? undefined, token, (progress) => {
					send({ type: 'progress', progress });
				});

				send({
					type: 'done',
					updated: result.updated.length,
					errors: result.errors.map(({ product, error }) => ({
						productId: product.id,
						title: product.title,
						error,
					})),
				});
			} catch (err) {
				const message = err instanceof Error ? err.message : (err as string);
				send({ type: 'error', message });
			} finally {
				controller.close();
			}
		},
	});

	return new Response(stream, {
		status: 200,
		headers: {
			'content-type': 'application/x-ndjson; charset=utf-8',
			'cache-control': 'no-cache, no-transform',
		},
	});
}