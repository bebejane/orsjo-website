import { sync } from '@/lib/shopify/sync';
import { basicAuth, revalidate } from 'next-dato-utils/route-handlers';
import { revalidatePath } from 'next/cache';
import config from '@/datocms.config';

export const POST = async (req: Request) => {
	return basicAuth(req, async (req) => {
		const { entity } = await req.json();
		if (!entity) return new Response('ok', { status: 422 });

		const itemId = entity?.id;

		try {
			const syncResult = await sync(itemId);
			const paths = await config.routes[syncResult.itemType]?.(entity.attributes);
			paths?.forEach((path) => revalidatePath(path));

			return new Response(JSON.stringify({ sync: syncResult, paths }), { status: 200, headers: { 'Content-Type': 'application/json' } });
		} catch (e) {
			console.log(e);
			return new Response(JSON.stringify({ error: e.message }), { status: 200, headers: { 'Content-Type': 'application/json' } });
		}
	});
};
