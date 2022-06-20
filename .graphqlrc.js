require("@next/env").loadEnvConfig(".");

module.exports = {
  schema: {
    "https://graphql.datocms.com": {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,
        "X-Exclude-Invalid": true
      },
    },
  },
  extensions: {
    codegen: {
      overwrite: true,
      documents:'./graphql/**/*.gql',
      generates: {
        "@types/datocms.d.ts": {
          plugins: [
            "typescript",
            "typescript-operations",
            "typed-document-node",
            //"typescript-graphql-files-modules"
          ],
          config: {
            dedupeFragments: true,
            pureMagicComment: false,
            exportFragmentSpreadSubTypes: true,
            namingConvention: "keep",
          },
        },
      },
    },
  },
};