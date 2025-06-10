import { NextConfig } from 'next';

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: ['./components', './pages', './app'],
		silenceDeprecations: ['legacy-js-api', 'mixed-decls'],
		prependData: `
			@use "sass:math";
    	@use "./styles/mixin";
  	`,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	logging: {},
	reactStrictMode: false,
	turbopack: {
		rules: {
			'*.svg': {
				as: '*.js',
				loaders: ['@svgr/webpack'],
			},
		},
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	async redirects() {
		return [
			{
				source: '/produkter',
				destination: '/products',
				permanent: true,
			},
			{
				source: '/produkter/:path*',
				destination: '/products/:path*',
				permanent: true,
			},
			{
				source: '/product/:path*',
				destination: '/products/:path*',
				permanent: true,
			},
			{
				source: '/projekt',
				destination: '/professionals/projects',
				permanent: true,
			},
			{
				source: '/projects',
				destination: '/professionals/projects',
				permanent: true,
			},
			{
				source: '/designers',
				destination: '/',
				permanent: true,
			},
			{
				source: '/designer/:path*',
				destination: '/designers/:path*',
				permanent: true,
			},
			{
				source: '/nyheter',
				destination: '/about/news',
				permanent: true,
			},
			{
				source: '/news',
				destination: '/about/news',
				permanent: true,
			},
			{
				source: '/nyheter/:path*',
				destination: '/about/news',
				permanent: true,
			},
			{
				source: '/faq',
				destination: '/support/faq',
				permanent: true,
			},
			{
				source: '/kontakt',
				destination: '/contact',
				permanent: true,
			},
			{
				source: '/about-orsjo',
				destination: '/about',
				permanent: true,
			},
			{
				source: '/om-orsjo',
				destination: '/about',
				permanent: true,
			},
			{
				source: '/manual',
				destination: '/support/manuals',
				permanent: true,
			},
		];
	},
	async headers() {
		return [
			{
				source: '/api/web-previews',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{ key: 'Access-Control-Allow-Methods', value: 'POST,OPTIONS' },
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
				],
			},
			{
				source: '/api/backup',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
					{ key: 'Access-Control-Allow-Methods', value: 'POST,OPTIONS' },
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
				],
			},
		];
	},
};

export default nextConfig;
