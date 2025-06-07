import { buildClient } from '@datocms/cma-client';

const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN as string, environment: process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT as string });
export default client;