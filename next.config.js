const withPlugins = require('next-compose-plugins');
const graphql = require('next-plugin-graphql')

const sassOptions = {
  includePaths: ['./components', './pages'],
  prependData: `
    @use "sass:math";
    @import "./styles/partials/mediaqueries"; 
    @import "./styles/partials/styles";
    @import "./styles/partials/variables";
    @import "./styles/partials/fonts";
  `
}
const nextOptions = {
  devIndicators: {
    buildActivity: false
  },
  experimental: {
    scrollRestoration: true
  },
  i18n: {
    locales: ['en', 'sv'],
    defaultLocale: 'en',
  }
}

const config = withPlugins([graphql], { sassOptions, ...nextOptions })
module.exports = config