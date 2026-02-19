import { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';
import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';

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
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	logging: false,
	devIndicators: false,
	reactStrictMode: false,
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

export default withNextIntl(nextConfig);
/*
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

	// Automatically tree-shake Sentry logger statements to reduce bundle size
	disableLogger: true,

	// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
	// See the following for more information:
	// https://docs.sentry.io/product/crons/
	// https://vercel.com/docs/cron-jobs
	automaticVercelMonitors: true,
});
*/
