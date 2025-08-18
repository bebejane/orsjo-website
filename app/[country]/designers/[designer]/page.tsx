import page from '@/app/designers/[designer]/page';
export { generateMetadata, generateStaticParams } from '@/app/designers/[designer]/page';
export type PageParams = { params: Promise<{ country: string; designer: string }> };
export default async (params: PageParams) => page(params);
