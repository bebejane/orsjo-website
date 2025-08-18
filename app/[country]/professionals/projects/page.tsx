import page from '@/app/professionals/projects/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/professionals/projects/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
