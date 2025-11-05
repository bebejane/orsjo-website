import page from '@/app/designers/[designer]/page';
export { generateMetadata, generateStaticParams } from '@/app/designers/[designer]/page';
export default async (params: PageProps<'/designers/[designer]'>) => page(params);
