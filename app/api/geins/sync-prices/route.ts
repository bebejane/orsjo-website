import { resyncAllProductPrices } from '@/geins/sync';
import { basicAuth } from 'next-dato-utils/route-handlers';
import { waitUntil } from '@vercel/functions';
import { revalidatePath } from 'next/cache';

export const maxDuration = 60;

export const POST = async (req: Request) => {
	return basicAuth(req, async (req) => {
		const data = await req.json();
		if (!data?.entity) return new Response('ok', { status: 422 });
		try {
			async function run() {
				const response = await resyncAllProductPrices();
				revalidatePath('/[locale]/products', 'layout');
				console.log(response);
			}
			waitUntil(run());
			return new Response(
				JSON.stringify({ success: true, message: 'resyncing all product prices' }),
				{
					status: 200,
					headers: { 'Content-Type': 'application/json' },
				},
			);
		} catch (e) {
			const message = e instanceof Error ? e.message : e;
			console.log(e);
			return new Response(JSON.stringify({ error: message }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			});
		}
	});
};
