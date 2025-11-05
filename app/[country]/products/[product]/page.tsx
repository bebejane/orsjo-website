import page from '@/app/products/[product]/page';
export { generateMetadata, generateStaticParams } from '@/app/products/[product]/page';
export default async (params: PageProps<'/[country]/products/[product]'>) => page(params);
