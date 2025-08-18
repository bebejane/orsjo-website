import page from '@/app/about/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/about/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
