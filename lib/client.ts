import { buildClient } from '@datocms/cma-client';

const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN as string });
export default client;