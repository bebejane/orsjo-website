require("@next/env").loadEnvConfig(".");


const config =  {
	dedupeOperationSuffix:true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: "keep",
	maybeValue: "T"
}


module.exports = {
	schema: {
		"https://orsjo.myshopify.com/admin/api/2022-10/graphql.json": {
			headers: {
				'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_TOKEN,
				'Content-Type': 'application/json',
			},
		},
	},
  documents: "lib/shopify/graphql/**/*.gql",
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
};
