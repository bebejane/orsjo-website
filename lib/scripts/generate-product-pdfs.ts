import 'dotenv/config';
import { client } from '@/lib/client';
import { generate, upload } from '@/catalogue/lib/controllers/pdf';
import { Product, ProductCategory } from '@/types/datocms-cma';
import { getBrowser } from '@/app/(catalogue)/lib/puppeteer';
import { revalidatePath } from 'next/cache';

async function main() {
	const [products, categories] = await Promise.all([
		client.items.list<Product>({
			filter: {
				type: 'product',
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

	console.log(`generating pdfs for ${products.length} products`);

	for (const product of products) {
		const pdfs = await Promise.all(
			site.locales.map(async (locale) => {
				const id = product.id;
				const c = categories.filter(({ id }) => product.categories.includes(id));
				const title = `${product.title} - ${c.map(({ name }) => (locale === 'en' ? name.en : name.sv)).join(' · ')} (${locale})`;
				const url = `${process.env.NEXT_PUBLIC_SITE_URL}/catalogue/${locale.replace('-', '_')}/product/${id}`;
				console.log('Generating:', title);
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

	//products.forEach(({ slug }) => revalidatePath(`/[locale]/products/product/${slug}`, 'page'));
	console.log('done in:', Date.now() - now);
	process.exit(1);
}

main();
