<<<<<<< HEAD
import { DatoCmsConfig, getItemReferenceRoutes, getUploadReferenceRoutes } from 'next-dato-utils/config';
=======
import {
	DatoCmsConfig,
	getItemApiKey,
	getItemReferenceRoutes,
	getUploadReferenceRoutes,
} from 'next-dato-utils/config';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { MetadataRoute } from 'next';
import { defaultLocale, locales } from '@/i18n/routing';
import { SitemapDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';

<<<<<<< HEAD
=======
export function getRoute(item: any, locale?: string | null): string {
	const apiKey = getItemApiKey(item);
	if (!apiKey) throw new Error('No api key found');
	const { slug } = item;

	switch (apiKey) {
		case 'about':
			return '/about';
		case 'bespoke':
			return '/professionals/bespoke';
		case 'catalogue':
			return '/professionals/downloads';
		case 'color_material':
		case 'color_material_intro':
		case 'color_material_type':
			return '/professionals/colors-and-materials';
		case 'contact':
		case 'country':
		case 'distributor':
		case 'reseller':
		case 'showroom':
		case 'staff':
			return '/contact';
		case 'designer':
			return `/designers/${slug}`;
		case 'downloads_start':
			return '/professionals/downloads';
		case 'factory_visit':
			return '/professionals/factory-visit';
		case 'faq':
		case 'faq_category':
		case 'faq_start':
			return '/support/faq';
		case 'term':
		case 'term_category':
		case 'term_start':
			return '/support/terms';
		case 'privacy_policy':
			return '/support/privacy-policy';
		case 'job':
			return '/about/jobs';
		case 'manual':
			return '/support/manuals';
		case 'news':
			return `/about/news/${slug}`;
		case 'product':
			return `/products/${slug}`;
		case 'product_accessory':
		case 'product_category':
		case 'product_color':
		case 'product_connection':
		case 'product_dimmable':
		case 'product_electrical':
		case 'product_family':
		case 'product_feature':
		case 'product_lightsource':
		case 'product_material':
		case 'product_model_name':
		case 'product_mounting':
		case 'product_socket':
		case 'product_start':
			return '/products';
		case 'project':
			return `/professionals/projects/${slug}`;
		case 'project_start':
		case 'project_type':
			return '/professionals/projects';
		case 'start':
			return '/';
		case 'sustainability':
			return '/about/sustainability';
		case 'shipping':
			return '/products';
		case 'cancel_purchase':
			return '/support/cancel-purchase';
	}
	throw new Error(`Unknown api key: ${apiKey}`);
}

>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
export default {
	i18n: {
		defaultLocale,
		locales,
	},
<<<<<<< HEAD
	routes: {
		about: async () => ['/se/about'],
		bespoke: async () => ['/se/professionals/bespoke'],
		catalogue: async () => ['/se/professionals/downloads'],
		color_material: async () => ['/se/professionals/colors-and-materials'],
		color_material_intro: async () => ['/se/professionals/colors-and-materials'],
		color_material_type: async () => ['/se/professionals/colors-and-materials'],
		contact: async () => ['/se/contact'],
		country: async () => ['/se/contact'],
		designer: async ({ slug }) => [`/se/designers/${slug}`],
		distributor: async () => ['/se/contact'],
		downloads_start: async () => ['/se/professionals/downloads'],
		factory_visit: async () => ['/se/professionals/factory-visit'],
		faq: async () => ['/se/support/faq'],
		faq_category: async () => ['/se/support/faq'],
		faq_start: async () => ['/se/support/faq'],
		term: async () => ['/se/support/terms'],
		term_category: async () => ['/se/support/terms'],
		term_start: async () => ['/se/support/terms'],
		privacy_policy: async () => ['/se/support/privacy-policy'],
		job: async () => ['/se/about/jobs'],
		manual: async () => ['/se/support/manuals'],
		news: async ({ slug }) => [`/se/about/news/${slug}`, `/se/`],
		product: async ({ slug }) => [
			`/se/products/${slug}`,
			`/se/professionals/downloads`,
			`/se/support/manuals`,
			`/se/products`,
			`/se`,
		],
		product_accessory: async ({ id }) => getItemReferenceRoutes(id),
		product_category: async ({ id }) => getItemReferenceRoutes(id),
		product_color: async ({ id }) => getItemReferenceRoutes(id),
		product_connection: async ({ id }) => getItemReferenceRoutes(id),
		product_dimmable: async ({ id }) => getItemReferenceRoutes(id),
		product_electrical: async ({ id }) => getItemReferenceRoutes(id),
		product_family: async ({ id }) => getItemReferenceRoutes(id),
		product_feature: async ({ id }) => getItemReferenceRoutes(id),
		product_lightsource: async ({ id }) => getItemReferenceRoutes(id),
		product_material: async ({ id }) => getItemReferenceRoutes(id),
		product_model_name: async ({ id }) => getItemReferenceRoutes(id),
		product_mounting: async ({ id }) => getItemReferenceRoutes(id),
		product_socket: async ({ id }) => getItemReferenceRoutes(id),
		product_start: async ({ id }) => ['/se/products'],
		project: async ({ slug }) => [`/se/professionals/projects/${slug}`, `/se/professionals/projects`, `/se/`],
		project_start: async () => ['/se/professionals/projects'],
		project_type: async () => ['/se/professionals/projects'],
		reseller: async () => ['/se/contact'],
		showroom: async () => ['/se/contact'],
		staff: async () => [`/se/contact`],
		start: async () => [`/se/`],
		sustainability: async () => ['/se/about/sustainability'],
		shipping: async () => ['/se/products'],
=======
	route: async (item, locale) => getRoute(item, locale),
	routes: {
		about: async (_item, locale) => [`/${locale}/about`],
		bespoke: async (_item, locale) => [`/${locale}/professionals/bespoke`],
		cancel_purchase: async (_item, locale) => [`/${locale}/support/cancel-purchase`],
		catalogue: async (_item, locale) => [`/${locale}/professionals/downloads`],
		color_material: async (_item, locale) => [`/${locale}/professionals/colors-and-materials`],
		color_material_intro: async (_item, locale) => [
			`/${locale}/professionals/colors-and-materials`,
		],
		color_material_type: async (_item, locale) => [`/${locale}/professionals/colors-and-materials`],
		contact: async (_item, locale) => [`/${locale}/contact`],
		country: async (_item, locale) => [`/${locale}/contact`],
		designer: async ({ slug }, locale) => [`/${locale}/designers/${slug}`],
		distributor: async (_item, locale) => [`/${locale}/contact`],
		downloads_start: async (_item, locale) => [`/${locale}/professionals/downloads`],
		factory_visit: async (_item, locale) => [`/${locale}/professionals/factory-visit`],
		faq: async (_item, locale) => [`/${locale}/support/faq`],
		faq_category: async (_item, locale) => [`/${locale}/support/faq`],
		faq_start: async (_item, locale) => [`/${locale}/support/faq`],
		term: async (_item, locale) => [`/${locale}/support/terms`],
		term_category: async (_item, locale) => [`/${locale}/support/terms`],
		term_start: async (_item, locale) => [`/${locale}/support/terms`],
		privacy_policy: async (_item, locale) => [`/${locale}/support/privacy-policy`],
		job: async (_item, locale) => [`/${locale}/about/jobs`],
		manual: async (_item, locale) => [`/${locale}/support/manuals`],
		news: async ({ slug }, locale) => [`/${locale}/about/news/${slug}`, `/${locale}/about/news`],
		product: async ({ slug }, locale) => [
			`/${locale}/products/${slug}`,
			`/${locale}/professionals/downloads`,
			`/${locale}/support/manuals`,
			`/${locale}/products`,
			`/${locale}`,
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
		product_start: async ({ id }, locale) => [`/${locale}/products`],
		project: async ({ slug }, locale) => [
			`/${locale}/professionals/projects/${slug}`,
			`/${locale}/professionals/projects`,
			`/${locale}`,
		],
		project_start: async (_item, locale) => [`/${locale}/professionals/projects`],
		project_type: async (_item, locale) => [`/${locale}/professionals/projects`],
		reseller: async (_item, locale) => [`/${locale}/contact`],
		showroom: async (_item, locale) => [`/${locale}/contact`],
		staff: async (_item, locale) => [`/${locale}/contact`],
		start: async (_item, locale) => [`/${locale}`],
		sustainability: async (_item, locale) => [`/${locale}/about/sustainability`],
		shipping: async (_item, locale) => [`/${locale}/products`],
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		upload: async ({ id }) => getUploadReferenceRoutes(id),
	},
	sitemap: async () => {
		const { allProducts, allDesigners, allProjects, allNews } = await apiQuery(SitemapDocument, {
<<<<<<< HEAD
			revalidate: 60 * 60,
=======
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
			all: true,
		});

		function generateAlternates(path: string): { languages: any } {
			const languages: any = {};

			locales
				.filter((locale) => locale !== defaultLocale)
				.forEach((l) => {
					languages[`en-${l.toUpperCase()}`] = `${process.env.NEXT_PUBLIC_SITE_URL}/${l}${path}`;
				});
			return { languages };
		}

		const staticRoutes: MetadataRoute.Sitemap = [
			'/',
			'/professionals/projects',
			'/professionals/bespoke',
			'/professionals/downloads',
			'/professionals/colors-and-materials',
			'/about',
			'/about/sustainability',
			'/about/news',
			'/about/jobs',
			'/support/faq',
			'/support/manuals',
			'/support/terms-conditions',
			'/support/privacy-policy',
			'/contact',
		].map((p) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}${p}`,
			lastModified: new Date(),
			changeFrequency: p === '/' ? 'weekly' : 'monthly',
			priority: p === '/' ? 1 : 0.8,
		}));

		const productRoutes = allProducts.map(({ slug, _updatedAt }) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/products/${slug}`,
			alternates: generateAlternates(`/products/${slug}`),
			lastModified: new Date(_updatedAt).toISOString(),
			changeFrequency: 'monthly',
			priority: 0.8,
		}));

		const designerRoutes = allDesigners.map(({ slug, _updatedAt }) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/designers/${slug}`,
			lastModified: new Date(_updatedAt).toISOString(),
			changeFrequency: 'yearly',
			priority: 0.8,
		}));

		const projectRoutes = allProjects.map(({ slug, _updatedAt }) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/professionals/projects/${slug}`,
			alternates: generateAlternates(`/professionals/projects/${slug}`),
			lastModified: new Date(_updatedAt).toISOString(),
			changeFrequency: 'monthly',
			priority: 0.8,
		}));

		const newsRoutes = allNews.map(({ slug, _updatedAt }) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/about/news/${slug}`,
			lastModified: new Date(_updatedAt).toISOString(),
			changeFrequency: 'monthly',
			priority: 0.8,
		}));

		return [
			...staticRoutes,
			...productRoutes,
			...designerRoutes,
			...projectRoutes,
			...newsRoutes,
		] as MetadataRoute.Sitemap;
	},
	manifest: async () => {
		return {
			name: 'Örsjo',
			short_name: 'Örsjo',
<<<<<<< HEAD
			description: 'Örsjo website',
=======
			description:
				'Our company is built on simple values and strong beliefs. We develop and produce premium lighting by hand in our local factory, with a sincere intention to leave the best possible mark on our planet.',
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
