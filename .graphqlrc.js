require("@next/env").loadEnvConfig(".");

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
					config: {
						dedupeFragments: true,
						pureMagicComment: false,
						exportFragmentSpreadSubTypes: true,
						namingConvention: "keep",
					},
				},
        "graphql/documents.ts": {
          plugins: ["typed-document-node"],
          config: {
            dedupeFragments: true,
            pureMagicComment: false,
            exportFragmentSpreadSubTypes: true,
            namingConvention: "keep",
          },
        },
        "@types/document-modules.d.ts": {
          plugins: ["typescript-graphql-files-modules"],
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
