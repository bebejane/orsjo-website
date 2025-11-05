import page from '@/app/about/page';
export { generateMetadata } from '@/app/about/page';
export default async (params: PageProps<'/about'>) => page(params);
