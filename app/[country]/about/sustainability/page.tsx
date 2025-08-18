import page from '@/app/about/sustainability/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/about/sustainability/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
