import page from '@/app/support/faq/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/support/faq/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
