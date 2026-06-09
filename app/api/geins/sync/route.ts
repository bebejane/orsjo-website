import { sync, syncProductStatus } from '@/geins/sync';
import client from '@/lib/client';
import { Product } from '@/types/datocms-cma';
import { basicAuth } from 'next-dato-utils/route-handlers';
import { waitUntil } from '@vercel/functions';

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
			const item = await client.items.find<Product>(id);

			if (!item) throw new Error(`No item with id ${id} found`);

			waitUntil(
				new Promise(async (resolve) => {
					const res = await sync(item.id);
					if (item.slug) await syncProductStatus(item.slug, status);
					resolve(res);
				})
					.then((res) => {
						console.log(res);
						return res;
					})
					.catch((e) => console.error(e)),
			);

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
