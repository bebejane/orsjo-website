require("@next/env").loadEnvConfig(".");
console.log(process.env)
module.exports = {
  schema: {
    "https://graphql.datocms.com": {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,
      },
    },
  },
  extensions: {
    codegen: {
      overwrite: true,
      generates: {
        "types/datocms.d.ts": {
          plugins: [
            "typescript",
            "typescript-operations",
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