<<<<<<< HEAD
import { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';
import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';
=======
import 'dotenv/config';
import { NextConfig } from 'next';
import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';
import { withSentryConfig } from '@sentry/nextjs';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: ['./components', './app'],
		prependData: `
			@use "sass:math";
			@use "@/styles/mediaqueries" as *;
			@use "@/styles/functions" as *;
			@use "@/styles/mixin" as *;
  	`,
	},
<<<<<<< HEAD
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	logging: false,
	devIndicators: false,
	reactStrictMode: false,
=======
	devIndicators: false,
	reactStrictMode: false,
	typescript: {
		ignoreBuildErrors: true,
	},
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	turbopack: {
		rules: {
			'*.svg': {
				as: '*.js',
				loaders: ['@svgr/webpack'],
			},
		},
		resolveAlias: {
			'datocms.config': './datocms.config.ts',
		},
	},
<<<<<<< HEAD
=======
	experimental: {
		workerThreads: false,
		cpus: 1,
	},
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});
		config.module.exprContextCritical = false;
		config.resolve.alias['datocms.config'] = path.join(__dirname, 'datocms.config.ts');
		return config;
	},
	async headers() {
		return [
			{
<<<<<<< HEAD
=======
				source: '/:path*',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: `frame-ancestors 'self' https://plugins-cdn.datocms.com/ ${process.env.NEXT_PUBLIC_DATOCMS_BASE_EDITING_URL} ${process.env.NEXT_PUBLIC_SITE_URL}`,
					},
				],
			},
			{
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
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
<<<<<<< HEAD
};

export default withNextIntl(nextConfig);

/*
=======
	async rewrites() {
		return [
			{
				source: '/mail/:path*',
				destination: '/images/email/:path*',
			},
		];
	},
};

//export default withNextIntl(nextConfig);

>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
export default withSentryConfig(withNextIntl(nextConfig), {
	// For all available options, see:
	// https://www.npmjs.com/package/@sentry/webpack-plugin#options

	org: 'konst-och-teknik',
	project: 'orsjo',

	// Only print logs for uploading source maps in CI
	silent: !process.env.CI,

	// For all available options, see:
	// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

	// Upload a larger set of source maps for prettier stack traces (increases build time)
	widenClientFileUpload: true,

	// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
	// This can increase your server load as well as your hosting bill.
	// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
	// side errors will fail.
	tunnelRoute: '/monitoring',
	telemetry: false,
<<<<<<< HEAD

	// Automatically tree-shake Sentry logger statements to reduce bundle size
	disableLogger: true,

	// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
	// See the following for more information:
	// https://docs.sentry.io/product/crons/
	// https://vercel.com/docs/cron-jobs
	automaticVercelMonitors: true,
});
*/
=======
});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
