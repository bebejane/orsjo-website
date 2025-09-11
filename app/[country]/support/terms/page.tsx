import page from '@/app/support/terms/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/support/terms/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
