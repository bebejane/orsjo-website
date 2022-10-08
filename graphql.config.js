require("@next/env").loadEnvConfig(".");


const config =  {
	dedupeOperationSuffix:true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: "keep",
	maybeValue: "T"
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
    'https://orsjo-dev.myshopify.com/admin/api/2022-10/graphql.json': {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_TOKEN,
        'Content-Type': 'application/json',
      },
    },
  },
  documents: 'lib/shopify/graphql/**/*.gql',
}

module.exports = {
  projects: {
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
            "@types/document-modules-shopify.d.ts": {
              plugins: ["typescript-graphql-files-modules"],
              config
            }
          },
        }
      },
    }
  }
};
