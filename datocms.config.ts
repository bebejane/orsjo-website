import { DatoCmsConfig } from 'next-dato-utils/config';
import client from './lib/client';
import { ApiError } from '@datocms/cma-client';

const routes: DatoCmsConfig['routes'] = {
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
	term: async () => ['/support/terms'],
	term_category: async () => ['/support/terms'],
	term_start: async () => ['/support/terms'],
	job: async () => ['/about/jobs'],
	manual: async () => ['/support/manuals'],
	news: async ({ slug }) => [`/about/news/${slug}`, `/`],
	product: async ({ slug }) => [`/products/${slug}`, `/professionals/downloads`, `/support/manuals`, `/products`, `/`],
	product_accessory: async ({ id }, locale) => references(id, [locale]),
	product_category: async ({ id }, locale) => references(id, [locale]),
	product_color: async ({ id }, locale) => references(id, [locale]),
	product_connection: async ({ id }, locale) => references(id, [locale]),
	product_dimmable: async ({ id }, locale) => references(id, [locale]),
	product_electrical: async ({ id }, locale) => references(id, [locale]),
	product_family: async ({ id }, locale) => references(id, [locale]),
	product_feature: async ({ id }, locale) => references(id, [locale]),
	product_lightsource: async ({ id }, locale) => references(id, [locale]),
	product_material: async ({ id }, locale) => references(id, [locale]),
	product_model_name: async ({ id }, locale) => references(id, [locale]),
	product_mounting: async ({ id }, locale) => references(id, [locale]),
	product_socket: async ({ id }, locale) => references(id, [locale]),
	product_start: async ({ id }) => ['/products'],
	project: async ({ slug }) => [`/professionals/projects/${slug}`, `/professionals/projects`, `/`],
	project_start: async () => ['/professionals/projects'],
	project_type: async () => ['/professionals/projects'],
	reseller: async () => ['/contact'],
	showroom: async () => ['/contact'],
	staff: async () => [`/contact`],
	start: async () => [`/`],
	sustainability: async () => ['/about/sustainability'],
	upload: async ({ id }, locale) => references(id, [locale], { upload: true }),
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

async function references(
	itemId: string,
	locales: (string | undefined)[],
	opt = { upload: false }
): Promise<string[] | null> {
	if (!itemId) throw new Error('datocms.config: Missing reference: itemId');
	const paths: string[] = [];

	try {
		const itemTypes = await client.itemTypes.list();
		const items = await client[opt.upload ? 'uploads' : 'items'].references(itemId, {
			version: 'published',
			limit: 500,
			nested: true,
		});

		for (const item of items) {
			const itemType = itemTypes.find(({ id }) => id === item.item_type.id);
			if (!itemType) continue;
			const record = await loadRecordWithLinked(item.id);
			for (const locale of locales) {
				const p = await routes[itemType.api_key]?.(record, locale);
				p && paths.push.apply(paths, p);
			}
		}
	} catch (e) {
		console.error((e as ApiError).message);
		throw e.message;
	}
	return paths;
}

export async function loadRecordWithLinked(id: string): Promise<any> {
	// 1) Get the record, expand blocks if you need them
	const record = await client.items.find(id, { nested: true, version: 'current' });

	// 2) Discover link fields for this model
	const itemTypeId = record.item_type.id;
	const fields = await client.fields.list(itemTypeId);
	const linkFields = fields.filter((f) => f.field_type === 'link' || f.field_type === 'links');

	// 3) Collect referenced IDs from those fields
	const ids = new Set<string>();
	for (const f of linkFields) {
		const value = (record as any)[f.api_key];
		if (!value) continue;
		if (Array.isArray(value)) value.forEach((v) => ids.add(v));
		else ids.add(value);
	}

	// 4) Bulk fetch linked records, if any
	const linkedRecords = ids.size
		? await client.items.list({
				filter: { ids: Array.from(ids).join(',') },
				version: 'current',
			})
		: [];

	Object.keys(record).forEach((key) => {
		record[key] = linkedRecords.find((r) => r.id === record[key]) ?? record[key];
	});
	return record;
}
