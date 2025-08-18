import page from '@/app/professionals/factory-visit/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/professionals/factory-visit/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
