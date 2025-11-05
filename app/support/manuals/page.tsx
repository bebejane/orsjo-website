import s from './page.module.scss';
import { AllProductManualsDocument, ManualsIntroDocument } from '@/graphql';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import ManualList from '@/app/support/manuals/ManualList';
import { Metadata } from 'next';

export type ManualsProps = {
	products: ProductRecord[];
	manual: ManualRecord;
};

export default async function Manuals(props: PageProps<'/support/manuals'>) {
	const [{ manual }, { allProducts }] = await Promise.all([
		apiQuery(ManualsIntroDocument),
		apiQuery(AllProductManualsDocument, {
			all: true,
		}),
	]);

	if (!manual) notFound();

	return (
		<>
			<Section name='Manuals' className={s.intro} top={true}>
				<h1 className='topMargin'>{manual.title}</h1>
				<p>{manual.intro}</p>
			</Section>
			<ManualList products={allProducts.filter(({ mountingInstructions }) => mountingInstructions)} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Manuals',
	};
}
