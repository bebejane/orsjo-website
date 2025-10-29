import { DatoCmsConfig, getItemReferenceRoutes, getUploadReferenceRoutes } from 'next-dato-utils/config';
import { MetadataRoute } from 'next';

export default {
	routes: {
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
		product: async ({ slug }) => [
			`/products/${slug}`,
			`/professionals/downloads`,
			`/support/manuals`,
			`/products`,
			`/`,
		],
		product_accessory: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_category: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_color: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_connection: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_dimmable: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_electrical: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_family: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_feature: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_lightsource: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_material: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_model_name: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_mounting: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_socket: async ({ id }, locale) => getItemReferenceRoutes(id),
		product_start: async ({ id }) => ['/products'],
		project: async ({ slug }) => [`/professionals/projects/${slug}`, `/professionals/projects`, `/`],
		project_start: async () => ['/professionals/projects'],
		project_type: async () => ['/professionals/projects'],
		reseller: async () => ['/contact'],
		showroom: async () => ['/contact'],
		staff: async () => [`/contact`],
		start: async () => [`/`],
		sustainability: async () => ['/about/sustainability'],
		upload: async ({ id }, locale) => getUploadReferenceRoutes(id),
	},
	sitemap: async () => {
		return [] as MetadataRoute.Sitemap;
	},
	manifest: async () => {
		return {
			name: 'Örsjo',
			short_name: 'Örsjo',
			description: 'Örsjo website',
			start_url: '/',
			display: 'standalone',
			background_color: '#ffffff',
			theme_color: '#000000',
			icons: [
				{
					src: '/favicon.ico',
					sizes: 'any',
					type: 'image/x-icon',
				},
			],
		} satisfies MetadataRoute.Manifest;
	},
	robots: async () => {
		return {
			rules: {
				userAgent: '*',
				allow: '/',
			},
		};
	},
} satisfies DatoCmsConfig;
