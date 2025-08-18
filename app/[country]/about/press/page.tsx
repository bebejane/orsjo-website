import page from '@/app/about/press/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/about/press/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
