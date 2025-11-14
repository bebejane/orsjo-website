import { DatoCmsConfig, getItemReferenceRoutes, getUploadReferenceRoutes } from 'next-dato-utils/config';
import { MetadataRoute } from 'next';
import { defaultLocale, locales } from '@/i18n/routing';
import { SitemapDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';

export default {
	i18n: {
		defaultLocale,
		locales,
	},
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
		upload: async ({ id }) => getUploadReferenceRoutes(id),
	},
	sitemap: async () => {
		const { allProducts, allDesigners, allProjects, allNews } = await apiQuery(SitemapDocument, {
			revalidate: 60 * 60,
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
