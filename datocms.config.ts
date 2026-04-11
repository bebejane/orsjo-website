import {
	DatoCmsConfig,
	getItemApiKey,
	getItemReferenceRoutes,
	getUploadReferenceRoutes,
} from 'next-dato-utils/config';
import { MetadataRoute } from 'next';
import { defaultLocale, locales } from '@/i18n/routing';
import { SitemapDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';

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
	}
	throw new Error(`Unknown api key: ${apiKey}`);
}

export default {
	i18n: {
		defaultLocale,
		locales,
	},
	route: async (item, locale) => getRoute(item, locale),
	routes: {
		about: async () => ['/[locale]/about'],
		bespoke: async () => ['/[locale]/professionals/bespoke'],
		catalogue: async () => ['/[locale]/professionals/downloads'],
		color_material: async () => ['/[locale]/professionals/colors-and-materials'],
		color_material_intro: async () => ['/[locale]/professionals/colors-and-materials'],
		color_material_type: async () => ['/[locale]/professionals/colors-and-materials'],
		contact: async () => ['/[locale]/contact'],
		country: async () => ['/[locale]/contact'],
		designer: async ({ slug }) => [`/[locale]/designers/${slug}`],
		distributor: async () => ['/[locale]/contact'],
		downloads_start: async () => ['/[locale]/professionals/downloads'],
		factory_visit: async () => ['/[locale]/professionals/factory-visit'],
		faq: async () => ['/[locale]/support/faq'],
		faq_category: async () => ['/[locale]/support/faq'],
		faq_start: async () => ['/[locale]/support/faq'],
		term: async () => ['/[locale]/support/terms'],
		term_category: async () => ['/[locale]/support/terms'],
		term_start: async () => ['/[locale]/support/terms'],
		privacy_policy: async () => ['/[locale]/support/privacy-policy'],
		job: async () => ['/[locale]/about/jobs'],
		manual: async () => ['/[locale]/support/manuals'],
		news: async ({ slug }) => [`/[locale]/about/news/${slug}`, `/[locale]/`],
		product: async ({ slug }) => [
			`/[locale]/products/${slug}`,
			`/[locale]/professionals/downloads`,
			`/[locale]/support/manuals`,
			`/[locale]/products`,
			`/[locale]`,
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
		product_start: async ({ id }) => ['/[locale]/products'],
		project: async ({ slug }) => [
			`/[locale]/professionals/projects/${slug}`,
			`/[locale]/professionals/projects`,
			`/[locale]/`,
		],
		project_start: async () => ['/[locale]/professionals/projects'],
		project_type: async () => ['/[locale]/professionals/projects'],
		reseller: async () => ['/[locale]/contact'],
		showroom: async () => ['/[locale]/contact'],
		staff: async () => [`/[locale]/contact`],
		start: async () => [`/[locale]/`],
		sustainability: async () => ['/[locale]/about/sustainability'],
		shipping: async () => ['/[locale]/products'],
		upload: async ({ id }) => getUploadReferenceRoutes(id),
	},
	sitemap: async () => {
		const { allProducts, allDesigners, allProjects, allNews } = await apiQuery(SitemapDocument, {
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
