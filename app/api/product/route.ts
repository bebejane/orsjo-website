import { client } from '@/lib/client';
import { NextRequest, NextResponse } from 'next/server';
import { generate, upload } from '@/catalogue/lib/controllers/pdf';
import { Product, ProductCategory } from '@/types/datocms-cma';

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

		if (itemTypeId === productType?.id) {
			productIds.push(id);
		} else {
			const items = await client.items.references(id, {
				nested: true,
				version: 'published',
			});
			productIds.push(
				...items.filter(({ item_type: { id } }) => id === productType?.id).map(({ id }) => id),
			);
		}

		if (!productIds.length)
			return NextResponse.json({ success: false, message: 'Invalid Id' }, { status: 400 });

		const [products, categories] = await Promise.all([
			client.items.list<Product>({
				filter: {
					type: 'product',
					fields: { id: { in: productIds } },
				},
				version: 'published',
			}),
			client.items.list<ProductCategory>({
				filter: {
					type: 'product_category',
				},
				version: 'published',
			}),
		]);

		const now = Date.now();
		const site = await client.site.find();

		for (const product of products) {
			for (const locale of site.locales) {
				const c = categories.filter(({ id }) => product.categories.includes(id));
				const title = `${product.title} - ${c.map(({ name }) => (locale === 'en' ? name.en : name.sv)).join(' · ')} (${locale})`;
				const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue/${locale.replace('-', '_')}/product/${id}`;
				console.log('generate', id, locale, url);
				await upload(id, await generate(url), {
					title,
					locale: locale as SiteLocale,
					tags: ['product-pdf'],
				});
				console.log('.');
			}
		}

		return NextResponse.json({
			success: true,
			message: 'generate and uploaded',
			productIds,
			duration: Date.now() - now,
		});
	} catch (err) {
		const message = err instanceof Error ? err.message : err;
		return NextResponse.json({ success: false, message }, { status: 500 });
	}
}
