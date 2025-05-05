import "dotenv/config"
import type { IGraphQLConfig } from 'graphql-config'

const defaultConfig = {
	dedupeOperationSuffix: true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: "keep",
	skipDocumentsValidation: false,
}
console.log(process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT)
const config: IGraphQLConfig = {
	schema: {
		"https://graphql.datocms.com": {
			headers: {
				"Authorization": process.env.DATOCMS_API_TOKEN as string,
				"X-Environment": process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT as string,
				"X-Exclude-Invalid": "true",
			},
		},
	},
	documents: "graphql/**/*.gql",
	extensions: {
		endpoints: {
			default: {
				url: "https://graphql.datocms.com",
				headers: {
					"Authorization": process.env.DATOCMS_API_TOKEN as string,
					"X-Exclude-Invalid": "true",
				}
			}
		},
		codegen: {
			overwrite: true,
			generates: {
				"@types/datocms.d.ts": {
					plugins: [
						"typescript",
						"typescript-operations",
					],
					config: { ...defaultConfig, noExport: true }
				},
				"graphql/index.ts": {
					plugins: ["typed-document-node"],
					config: { ...defaultConfig }
				},
				"@types/document-modules.d.ts": {
					plugins: ["typescript-graphql-files-modules"],
					config: { ...defaultConfig }
				},
			},
		}
	},
}

export default config;