import page from '@/app/professionals/projects/[project]/page';
export { generateMetadata, generateStaticParams } from '@/app/professionals/projects/[project]/page';
export type PageParams = { params: Promise<{ country: string; project: string }> };
export default async (params: PageParams) => page(params);
