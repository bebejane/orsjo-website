require("@next/env").loadEnvConfig(".");

const defaultConfig =  {
	dedupeOperationSuffix:true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: "keep",
	maybeValue: "T",
}

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
    'https://orsjo-dev.myshopify.com/api/2022-10/graphql.json': {
      headers: {
        'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_API_TOKEN,
        'Content-Type': 'application/json',
      },
    },
  },
  documents: 'lib/shopify/graphql/**/*.gql',
}

module.exports = {
  //schema:datocms.schema,documents:datocms.documents,
  schema:shopify.schema,documents:shopify.documents,
  overwrite:true,
  generates: {
    /*
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
    */
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
/*
module.exports = {
  projects: {
    shopify: {
      ...shopify,
      extensions: {
        codegen: {
          overwrite: true,
          generates: {
            "@types/shopify.d.ts": {
              plugins: [
                "typescript",
                "typescript-operations",
              ],
              config:{...config, noExport: true}
            },
            "lib/shopify/graphql/index.ts": {
              plugins: ["typed-document-node"],
              config
            },
            "@types/document-modules.d.ts": {
              plugins: ["typescript-graphql-files-modules"],
              config
            }
          },
        }
      },
    },
    default: {
      ...datocms,
      extensions: {
        codegen: {
          overwrite: true,
          generates: {
            "@types/datocms.d.ts": {
              plugins: [
                "typescript",
                "typescript-operations",
              ],
              config:{...config, noExport: true}
            },
            "graphql/index.ts": {
              plugins: ["typed-document-node"],
              config
            },
            "@types/document-modules.d.ts": {
              plugins: ["typescript-graphql-files-modules"],
              config
            }
          },
        }
      },
    },
    
  }
};
*/