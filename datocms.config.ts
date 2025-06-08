import { DatoCmsConfig } from 'next-dato-utils/config';
import client from './lib/client';

export default {
	description: 'Örsjo is a digital platform for the Norwegian public sector.',
	name: 'Örsjo',
	url: {
		dev: 'http://localhost:3000',
		public: 'https://orsjo-dev.vercel.app',
	},
	theme: {
		background: '#fff',
		color: '#000',
	},
	sitemap: async () => {
		return [];
	},
	routes: {
		about: async ({ id }) => ['/about'],
		bespoke: async ({ id }) => ['/professionals/bespoke'],
		catalogue: async ({ id }) => ['/professionals/downloads'],
		color_material: async ({ id }) => ['/professionals/colors-and-materials'],
		color_material_intro: async ({ id }) => ['/professionals/colors-and-materials'],
		color_material_type: async ({ id }) => ['/professionals/colors-and-materials'],
		contact: async ({ id }) => ['/contact'],
		country: async ({ id }) => ['/contact'],
		designer: async ({ slug }) => [`/designers/${slug}`],
		distributor: async ({ id }) => ['/contact'],
		downloads_start: async ({ id }) => ['/professionals/downloads'],
		factory_visit: async ({ id }) => ['/professionals/factory-visit'],
		faq: async ({ id }) => ['/support/faq'],
		faq_category: async ({ id }) => ['/support/faq'],
		faq_start: async ({ id }) => ['/support/faq'],
		job: async ({ id }) => ['/about/jobs'],
		manual: async () => ['/support/manuals'],
		news: async ({ slug }) => [`/about/news/${slug}`, `/`],
		product: async ({ slug }) => [`/products/${slug}`, `/professionals/downloads`, `/support/manuals`, `/products`, `/`],
		product_accessory: async (item) => {
			console.log(item);
			const { id } = item;
			return productReferences(id);
		},
		product_category: async ({ id }) => productReferences(id),
		product_color: async ({ id }) => productReferences(id),
		product_connection: async ({ id }) => productReferences(id),
		product_dimmable: async ({ id }) => productReferences(id),
		product_electrical: async ({ id }) => productReferences(id),
		product_family: async ({ id }) => productReferences(id),
		product_feature: async ({ id }) => productReferences(id),
		product_lightsource: async ({ id }) => productReferences(id),
		product_material: async ({ id }) => productReferences(id),
		product_model_name: async ({ id }) => productReferences(id),
		product_mounting: async ({ id }) => productReferences(id),
		product_socket: async ({ id }) => productReferences(id),
		product_start: async ({ id }) => ['/products'],
		project: async ({ slug }) => [`/professionals/projects/${slug}`, `/professionals/projects`, `/`],
		project_start: async () => ['/professionals/projects'],
		project_type: async () => ['/professionals/projects'],
		reseller: async () => ['/contact'],
		showroom: async () => ['/contact'],
		staff: async () => [`/contact`],
		start: async () => [`/`],
		sustainability: async () => ['/about/sustainability'],
	},
} satisfies DatoCmsConfig;

async function productReferences(itemId: string): Promise<string[]> {
	if (!itemId) throw new Error('Missing reference: itemId');
	const paths: string[] = [];
	const products = await client.items.references(itemId, { version: 'published', limit: 500 });
	if (products.length) {
		paths.push(`/products`);
		paths.push(`/professionals/downloads`);
		paths.push(`/support/manuals`);
		paths.push(`/`);
		paths.push.apply(
			paths,
			products.map((product) => `/products/${product.slug}`)
		);
	}
	return paths;
}
