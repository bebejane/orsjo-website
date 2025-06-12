import { DatoCmsConfig } from 'next-dato-utils/config';
import client from './lib/client';

const routes = {
	about: async () => ['/about'],
	bespoke: async () => ['/professionals/bespoke'],
	catalogue: async () => ['/professionals/downloads'],
	color_material: async () => ['/professionals/colors-and-materials'],
	color_material_intro: async () => ['/professionals/colors-and-materials'],
	color_material_type: async () => ['/professionals/colors-and-materials'],
	contact: async () => ['/contact'],
	country: async () => ['/contact'],
	designer: async ({ slug }) => [`/designers/${slug}`],
	distributor: async () => ['/contact'],
	downloads_start: async () => ['/professionals/downloads'],
	factory_visit: async () => ['/professionals/factory-visit'],
	faq: async () => ['/support/faq'],
	faq_category: async () => ['/support/faq'],
	faq_start: async () => ['/support/faq'],
	job: async () => ['/about/jobs'],
	manual: async () => ['/support/manuals'],
	news: async ({ slug }) => [`/about/news/${slug}`, `/`],
	product: async ({ slug }) => [
		`/products/${slug}`,
		`/professionals/downloads`,
		`/support/manuals`,
		`/products`,
		`/`,
	],
	product_accessory: async ({ id }) => references(id),
	product_category: async ({ id }) => references(id),
	product_color: async ({ id }) => references(id),
	product_connection: async ({ id }) => references(id),
	product_dimmable: async ({ id }) => references(id),
	product_electrical: async ({ id }) => references(id),
	product_family: async ({ id }) => references(id),
	product_feature: async ({ id }) => references(id),
	product_lightsource: async ({ id }) => references(id),
	product_material: async ({ id }) => references(id),
	product_model_name: async ({ id }) => references(id),
	product_mounting: async ({ id }) => references(id),
	product_socket: async ({ id }) => references(id),
	product_start: async ({ id }) => ['/products'],
	project: async ({ slug }) => [`/professionals/projects/${slug}`, `/professionals/projects`, `/`],
	project_start: async () => ['/professionals/projects'],
	project_type: async () => ['/professionals/projects'],
	reseller: async () => ['/contact'],
	showroom: async () => ['/contact'],
	staff: async () => [`/contact`],
	start: async () => [`/`],
	sustainability: async () => ['/about/sustainability'],
	upload: async ({ id }) => references(id, true),
};

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
	routes,
} satisfies DatoCmsConfig;

async function references(itemId: string, upload: boolean = false): Promise<string[]> {
	if (!itemId) throw new Error('datocms.config: Missing reference: itemId');
	const paths: string[] = [];
	const itemTypes = await client.itemTypes.list();
	const items = await client[upload ? 'uploads' : 'items'].references(itemId, {
		version: 'published',
		limit: 500,
		nested: true,
	});

	for (const item of items) {
		const itemType = itemTypes.find(({ id }) => id === item.item_type.id);
		if (!itemType) continue;
		const p = await routes[itemType.api_key]?.(item);
		p && paths.push.apply(paths, p);
	}

	return paths;
}
