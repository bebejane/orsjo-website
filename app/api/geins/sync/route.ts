import { sync, syncProductStatus } from '@/geins/sync';
import { basicAuth } from 'next-dato-utils/route-handlers';

export const POST = async (req: Request) => {
	return basicAuth(req, async (req) => {
		const data = await req.json();
		if (!data?.entity) return new Response('ok', { status: 422 });

		const entity = data.entity as any;
		const {
			meta: { status },
		} = entity as any;
		const { id } = entity;
		const slug = entity.attributes.slug;

		try {
			console.log('syncing:', id, status);
			const item = await sync(id);
			await syncProductStatus(entity.attributes.slug, status);

			return new Response(
				JSON.stringify({
					sync: { id: entity.id, slug, status, item },
				}),
				{
					status: 200,
					headers: { 'Content-Type': 'application/json' },
				},
			);
		} catch (e) {
			const message = e instanceof Error ? e.message : e;
			return new Response(JSON.stringify({ error: message }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			});
		}
	});
};
