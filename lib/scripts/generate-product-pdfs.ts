import 'dotenv/config';
import { client } from '@/lib/client';
import { generate, upload } from '@/pricelist/lib/controllers/pdf';
import { Product, ProductCategory } from '@/types/datocms-cma';
import { getBrowser } from '@/pricelist/lib/puppeteer';

async function main() {
	const [products, categories] = await Promise.all([
		client.items.list<Product>({
			filter: {
				type: 'product',
			},
			page: {
				limit: 500,
				offset: 0,
			},
			version: 'published',
		}),
		client.items.list<ProductCategory>({
			filter: {
				type: 'product_category',
			},
			page: {
				limit: 500,
				offset: 0,
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
				const url = `${process.env.NEXT_PUBLIC_SITE_URL}/pricelist/${locale.replace('-', '_')}/${process.env.DATOCMS_ENVIRONMENT}/product/${id}`;
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
