import page from '../page';
export { generateStaticParams } from './layout';
export const dynamic = 'force-static';
export default async (params: PageProps<'/'>) => page(params);
