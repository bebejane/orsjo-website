import page from '@/app/about/jobs/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/about/jobs/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
