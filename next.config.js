const sassOptions = {
  includePaths: ['./components', './pages'],
  prependData: `
    @use "sass:math";
    @import "./styles/partials/mediaqueries"; 
    @import "./styles/partials/mixins"; 
    @import "./styles/partials/styles";
    @import "./styles/partials/variables";
    @import "./styles/partials/fonts";  `
}
const nextOptions = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    buildActivity: false
  },
  experimental: {
    scrollRestoration: true
  },
  i18n: {
    locales: ['en', 'sv', 'no'],
    defaultLocale: 'en',
    localeDetection: false
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
}

const config = { sassOptions, ...nextOptions }
module.exports = config