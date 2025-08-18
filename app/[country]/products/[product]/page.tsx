import page from '@/app/products/[product]/page';
export { generateMetadata, generateStaticParams } from '@/app/products/[product]/page';
export type PageParams = { params: Promise<{ country: string; product: string }> };
export default async (params: PageParams) => page(params);
