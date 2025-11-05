import page from '@/app/professionals/projects/[project]/page';
export { generateMetadata, generateStaticParams } from '@/app/professionals/projects/[project]/page';
export default async (params: PageProps<'/professionals/projects/[project]'>) => page(params);
