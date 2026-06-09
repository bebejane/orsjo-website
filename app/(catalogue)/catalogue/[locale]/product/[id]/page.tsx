import s from './page.module.scss';
import ProductSheet from '@/catalogue/components/ProductSheet';
import { ProductByIdDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';

export default async function ProductCataloguePage({
	params,
}: PageProps<'/catalogue/[locale]/product/[id]'>) {
	const { id, locale } = await (params as any);
	const { product } = await apiQuery(ProductByIdDocument, {
		variables: { id },
	});

	if (!product) return { notFound: true };

	return (
		<div className={s.container}>
			<ProductSheet product={product} withPrice={false} />
		</div>
	);
}
