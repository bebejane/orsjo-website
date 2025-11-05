import page from '@/app/about/news/page';
export { generateMetadata } from '@/app/about/news/page';
export default async (params: PageProps<'/about/news'>) => page(params);
