import page from '@/app/professionals/colors-and-materials/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/professionals/colors-and-materials/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
