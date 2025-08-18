import page from '@/app/professionals/bespoke/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/professionals/bespoke/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
