require("@next/env").loadEnvConfig(".");
const config =  {
	dedupeOperationSuffix:true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: "keep",
}

module.exports = {
	schema: {
		"https://graphql.datocms.com": {
			headers: {
				Authorization: process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,
				"X-Exclude-Invalid": true,
			},
		},
	},
  documents: "graphql/**/*.gql",
	extensions: {
		codegen: {
			overwrite: true,
			generates: {
				"@types/datocms.d.ts": {
					plugins: [
						"typescript",
						"typescript-operations",
					],
					config
				},
        "graphql/index.ts": {
          plugins: ["typed-document-node"],
					config
        },
        "@types/document-modules.d.ts": {
          plugins: ["typescript-graphql-files-modules"],
					config
        },
			},
		}
	},
};
