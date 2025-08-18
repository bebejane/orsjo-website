import page from '@/app/contact/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/contact/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
