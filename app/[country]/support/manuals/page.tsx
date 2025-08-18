import page from '@/app/support/manuals/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/support/manuals/page';
export type PageParams = CountryParams;
export default async () => page();
