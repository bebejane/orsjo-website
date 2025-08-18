import page from '@/app/about/news/[news]/page';
export { generateMetadata, generateStaticParams } from '@/app/about/news/[news]/page';
export type PageParams = { params: Promise<{ country: string; news: string }> };
export default async (params: PageParams) => page(params);
