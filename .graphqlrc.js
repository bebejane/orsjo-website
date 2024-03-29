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
		"https://graphql.datocms.com": {
			headers: {
				Authorization: process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN
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
};
