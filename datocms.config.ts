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
		product_start: async ({ id }) => ['/products'],
		project: async ({ slug }) => [`/professionals/projects/${slug}`, `/professionals/projects`, `/`],
		project_start: async () => ['/professionals/projects'],
		project_type: async () => ['/professionals/projects'],
		reseller: async () => ['/contact'],
		showroom: async () => ['/contact'],
		staff: async () => [`/contact`],
		start: async () => [`/`],
		sustainability: async () => ['/about/sustainability'],
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
