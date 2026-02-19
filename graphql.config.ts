import 'dotenv/config';
import type { IGraphQLConfig } from 'graphql-config';

const geinsApiEndpoint = 'https://merchantapi.geins.io/graphql';

const defaultConfig = {
	dedupeOperationSuffix: true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: 'keep',
	skipDocumentsValidation: false,
};

const datocms = {
	schema: {
		'https://graphql.datocms.com': {
			headers: {
				'Authorization': process.env.DATOCMS_API_TOKEN as string,
				'X-Environment': process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT as string,
				'X-Exclude-Invalid': 'true',
			},
		},
	},
	documents: ['graphql/**/*.gql'],
	extensions: {
		endpoints: {
			default: {
				url: 'https://graphql.datocms.com',
				headers: {
					'Authorization': process.env.DATOCMS_API_TOKEN as string,
					'X-Exclude-Invalid': 'true',
				},
			},
		},
		codegen: {
			overwrite: true,
			generates: {
				'types/datocms.d.ts': {
					plugins: ['typescript', 'typescript-operations'],
					config: { ...defaultConfig, noExport: true },
				},
				'graphql/index.ts': {
					plugins: ['typed-document-node'],
					config: { ...defaultConfig },
				},
				'types/document-modules.d.ts': {
					plugins: ['typescript-graphql-files-modules'],
					config: { ...defaultConfig },
				},
			},
		},
	},
};

const geins = {
	schema: {
		'https://merchantapi.geins.io/graphql': {
			headers: {
				'Accept': 'application/json',
				'X-ApiKey': process.env.GEINS_MERCHANT_API_KEY as string,
				'Content-Type': 'application/json',
			},
		},
	},
	documents: ['lib/geins/graphql/**/*.gql'],
	extensions: {
		codegen: {
			overwrite: true,
			generates: {
				'types/geins-graphql.d.ts': {
					plugins: ['typescript', 'typescript-operations'],
					config: { ...defaultConfig, noExport: true },
				},
				'lib/geins/graphql/index.ts': {
					plugins: ['typed-document-node'],
					config: { ...defaultConfig },
				},
				'types/document-modules-geins.d.ts': {
					plugins: ['typescript-graphql-files-modules'],
					config: { ...defaultConfig },
				},
			},
		},
	},
};

const config: IGraphQLConfig = {
	projects: {
		geins,
	},
};
export default config;
