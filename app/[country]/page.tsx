import page from '../page';
import { CountryParams } from '@/app/[country]/layout';

export { generateStaticParams } from './layout';

export const dynamic = 'force-static';
export type PageParams = CountryParams;
export default async (params: CountryParams) => page(params);
