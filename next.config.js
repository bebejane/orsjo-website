const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const sassOptions = {
	includePaths: ["./components", "./pages"],
	prependData: `
    @use "sass:math";
    @import "./styles/partials/mediaqueries"; 
    @import "./styles/partials/mixins"; 
    @import "./styles/partials/styles";
    @import "./styles/partials/variables";
    @import "./styles/partials/fonts";  
  `,
};
const nextOptions = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	devIndicators: {
		buildActivity: false,
	},
	experimental: {
		scrollRestoration: true,
		largePageDataBytes: 200 * 1000,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			loader: "graphql-tag/loader",
		});
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
	async redirects() {
		return [
			{
				source: "/produkter",
				destination: "/products",
				permanent: true,
			},
			{
				source: "/produkter/:path*",
				destination: "/products/:path*",
				permanent: true,
			},
			{
				source: "/product/:path*",
				destination: "/products/:path*",
				permanent: true,
			},
			{
				source: "/projekt",
				destination: "/professionals/projects",
				permanent: true,
			},
			{
				source: "/projects",
				destination: "/professionals/projects",
				permanent: true,
			},
			{
				source: "/designers",
				destination: "/",
				permanent: true,
			},
			{
				source: "/designer/:path*",
				destination: "/designers/:path*",
				permanent: true,
			},
			{
				source: "/nyheter",
				destination: "/about/news",
				permanent: true,
			},
			{
				source: "/news",
				destination: "/about/news",
				permanent: true,
			},
			{
				source: "/nyheter/:path*",
				destination: "/about/news",
				permanent: true,
			},
			{
				source: "/faq",
				destination: "/support/faq",
				permanent: true,
			},
			{
				source: "/kontakt",
				destination: "/contact",
				permanent: true,
			},
			{
				source: "/about-orsjo",
				destination: "/about",
				permanent: true,
			},
			{
				source: "/om-orsjo",
				destination: "/about",
				permanent: true,
			},
		];
	},
};

const config = withBundleAnalyzer({ sassOptions, ...nextOptions });
module.exports = config;
