import { sync, syncProductStatus } from '@/geins/sync';
import { basicAuth } from 'next-dato-utils/route-handlers';
import { revalidatePath } from 'next/cache';
import config from '@/datocms.config';

export const POST = async (req: Request) => {
	return basicAuth(req, async (req) => {
		const data = await req.json();
		if (!data?.entity) return new Response('ok', { status: 422 });
		const entity = data.entity as any;
		const {
			meta: { status },
		} = data as any;
		const { id } = entity;
		const slug = entity.attributes.slug;

		try {
			if (!status) throw new Error('No status');
			console.log('syncing:', id, status);

			const s = await syncProductStatus(entity.attributes.slug, status);
			return new Response(
				JSON.stringify({
					sync: { id: entity.id, slug, status: s },
				}),
				{
					status: 200,
					headers: { 'Content-Type': 'application/json' },
				},
			);

			const syncResult = await sync(id);
			console.log('synced:', syncResult);

			// const apiKey = syncResult.itemType as keyof typeof config.routes;

			// if (!(apiKey in config.routes)) throw new Error(`No route found for ${apiKey}`);

			// const paths = await config.routes[apiKey]({ ...entity.attributes, id });
			// paths?.forEach((path) => revalidatePath(path));

			return new Response(JSON.stringify({ sync: syncResult }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			});
		} catch (e) {
			const message = e instanceof Error ? e.message : e;
			return new Response(JSON.stringify({ error: message }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			});
		}
	});
};
