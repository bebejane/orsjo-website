import { client } from '@/lib/client';
import { NextRequest, NextResponse } from 'next/server';
import { generate } from '@/catalogue/lib/controllers/pdf';

export async function POST(req: NextRequest) {
	const body = await req.json();
	const { entity } = body;

	if (!entity)
		return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 });

	try {
		const productIds = [];
		const productType = (await client.itemTypes.list()).find(
			({ api_key }) => api_key === 'product',
		);

		const {
			id,
			relationships: {
				item_type: {
					data: { id: itemTypeId },
				},
			},
		} = entity;

		if (itemTypeId === productType?.id) productIds.push(id);
		else {
			const items = await client.items.references(id, {
				nested: true,
				version: 'published',
			});
			productIds.push(
				...items.filter(({ item_type: { id } }) => id === productType?.id).map(({ id }) => id),
			);
		}

		if (!productIds.length) return NextResponse.json({ success: false, message: 'Invalid ID' });

		const now = Date.now();
		const site = await client.site.find();
		const buffers = [];
		for (const id of productIds) {
			for (const locale of site.locales) {
				buffers.push(
					await generate(
						`${process.env.NEXT_PUBLIC_SITE_URL}/catalogue/${locale.replace('-', '_')}/product/${id}`,
					),
				);
				console.log('.');
			}

			console.timeEnd('Generate PDF');
		}

		return NextResponse.json({
			success: true,
			message: 'Generateed PDFs for all products',
			productIds,
			duration: Date.now() - now,
		});
	} catch (err) {
		const message = err instanceof Error ? err.message : err;
		return NextResponse.json({ success: false, message }, { status: 500 });
	}
}
