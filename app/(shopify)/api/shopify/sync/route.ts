import { sync, syncProductStatus } from '@/lib/shopify/sync';
import { basicAuth } from 'next-dato-utils/route-handlers';
import { revalidatePath } from 'next/cache';
import config from '@/datocms.config';
import { stat } from 'fs';

//export const dynamic = 'force-dynamic';

export const POST = async (req: Request) => {
	return basicAuth(req, async (req) => {
		const data = await req.json();
		if (!data?.entity) return new Response('ok', { status: 422 });
		const { entity, event_type } = data;
		try {
			//await sleep(3000);

			const { id } = entity;
			console.log('syncing:', id, event_type);

			if (event_type === 'delete' || event_type === 'unpublish') {
				//@ts-ignore
				await syncProductStatus(entity.attributes.slug, 'DRAFT');
				return new Response(
					JSON.stringify({ sync: { id: entity.id, handle: entity.attributes.slug, status: 'DRAFT' } }),
					{
						status: 200,
						headers: { 'Content-Type': 'application/json' },
					}
				);
			}
			const syncResult = await sync(id);
			console.log('synced:', syncResult);
			const paths = await config.routes[syncResult.itemType]?.({ ...entity.attributes, id });
			paths?.forEach((path) => revalidatePath(path));

			return new Response(JSON.stringify({ sync: syncResult }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			});
		} catch (e) {
			console.log(e);
			return new Response(JSON.stringify({ error: e.message }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			});
		}
	});
};
