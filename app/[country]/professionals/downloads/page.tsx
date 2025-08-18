import page from '@/app/professionals/downloads/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/professionals/downloads/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
