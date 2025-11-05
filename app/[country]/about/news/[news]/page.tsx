import page from '@/app/about/news/[news]/page';
export { generateMetadata, generateStaticParams } from '@/app/about/news/[news]/page';
export default async (params: PageProps<'/about/news/[news]'>) => page(params);
