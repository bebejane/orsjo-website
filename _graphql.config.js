require('@next/env').loadEnvConfig('.')

const defaultConfig = {
  dedupeOperationSuffix: true,
  dedupeFragments: true,
  pureMagicComment: false,
  exportFragmentSpreadSubTypes: true,
  namingConvention: 'keep',
  maybeValue: 'T',
};

const datocms = {
  schema: {
    'https://graphql.datocms.com': {
      'headers': {
        'Authorization': process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,
        'X-Exclude-Invalid': true,
      },
    },
  },
  documents: 'graphql/**/*.gql',
}

const shopify = {
  schema: {
    'https://orsjo-dev.myshopify.com/admin/api/2022-10/graphql.json': {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_TOKEN,
        'Content-Type': 'application/json',
      },
    },
  },
  documents: 'lib/shopify/graphql/**/*.gql',
}

const config = {
  //schema:datocms.schema,
  //documents:datocms.documents,  
  overwrite:true,
  generates: {
    '@types/datocms.d.ts': {
      ...datocms,
      plugins: ['typescript', 'typescript-operations'],
      config: { ...defaultConfig, noExport: true },
    },
    'graphql/index.ts': {
      ...datocms,
      plugins: ['typed-document-node'],
      config: defaultConfig,
    },
    '@types/document-modules.d.ts': {
      ...datocms,
      plugins: ['typescript-graphql-files-modules'],
      config: defaultConfig,
    },
    
    '@types/shopify.d.ts': {
      ...shopify,
      plugins: ['typescript', 'typescript-operations'],
      config: { ...defaultConfig, noExport: true },
    },
    'lib/shopify/graphql/index.ts': {
      ...shopify,
      plugins: ['typed-document-node'],
      config: defaultConfig,
    },
    '@types/document-modules-shopify.d.ts': {
      ...shopify,
      plugins: ['typescript-graphql-files-modules'],
      config: defaultConfig,
    },
    
  },
  
}
module.exports = config;