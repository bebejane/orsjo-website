import { buildClient } from '@datocms/cma-client';

const client = buildClient({
	apiToken: process.env.DATOCMS_API_TOKEN! || process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN!,
	environment: process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT!,
});
export default client;
export { client };
