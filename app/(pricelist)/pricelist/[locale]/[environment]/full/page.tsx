import s from './page.module.scss';
import Catalogue from '@/pricelist/components/Catalogue';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument } from '@/graphql';
import { toLanguageLocale, sortProductsByCategory } from '@/pricelist/lib/utils';

export default async function CataloguePage({
	params,
}: PageProps<'/pricelist/[locale]/[environment]/full'>) {
	const { locale, environment } = await (params as any);
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		environment,
		variables: { locale: toLanguageLocale(locale) },
	});

	return (
		<div className={s.container}>
			<Catalogue products={sortProductsByCategory(allProducts)} locale={locale} />
		</div>
	);
}
