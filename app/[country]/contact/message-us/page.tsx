import page from '@/app/contact/message-us/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/contact/message-us/page';
export type PageParams = CountryParams;
export default async (params: PageParams) => page(params);
