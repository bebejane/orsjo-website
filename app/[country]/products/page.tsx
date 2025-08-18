import page from '@/app/products/page';
import { CountryParams } from '@/app/[country]/layout';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
