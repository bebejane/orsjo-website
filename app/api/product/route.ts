import { client } from '@/lib/client';
import { NextRequest, NextResponse } from 'next/server';
import { generate, upload } from '@/catalogue/lib/controllers/pdf';
import { Product, ProductCategory } from '@/types/datocms-cma';
import { getBrowser } from '@/app/(catalogue)/lib/puppeteer';
import { basicAuth } from 'next-dato-utils/route-handlers';

export const maxDuration = 1200;

export async function POST(req: NextRequest) {
	return basicAuth(req, async (req) => {
		try {
			const body = await req.json();
			const { entity } = body ?? {};

			if (!entity)
				return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 });

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
			console.log(productIds);

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

			await getBrowser();

			console.log(`generating pdfs for ${productIds.length} products`);

			for (const product of products) {
				const pdfs = await Promise.all(
					site.locales.map(async (locale) => {
						const id = product.id;
						const c = categories.filter(({ id }) => product.categories.includes(id));
						const title = `${product.title} - ${c.map(({ name }) => (locale === 'en' ? name.en : name.sv)).join(' · ')} (${locale})`;
						const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue/${locale.replace('-', '_')}/product/${id}`;
						return {
							id,
							buffer: await generate(url),
							title,
							locale: locale as SiteLocale,
							tags: ['product-pdf'],
						};
					}),
				);

				for (const { id, buffer, title, locale, tags } of pdfs) {
					await upload(id, buffer, {
						title,
						locale,
						tags,
					});
				}
			}

			return NextResponse.json({
				success: true,
				message: 'generate and uploaded',
				productIds,
				duration: Date.now() - now,
			});
		} catch (err) {
			console.log(err);
			const message = err instanceof Error ? err.message : err;
			return NextResponse.json({ success: false, message }, { status: 500 });
		}
	});
}
