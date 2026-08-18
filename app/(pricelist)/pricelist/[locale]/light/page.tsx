import s from './page.module.scss';
import { toLanguageLocale, sortProductsByCategory } from '@/pricelist/lib/utils';
import CatalogueLight from '@/pricelist/components/pricelistLight';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument } from '@/graphql';

export default async function CatalogueLightPage({
	params,
}: PageProps<'/pricelist/[locale]/light'>) {
	const { locale } = await (params as any);
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		variables: { locale: toLanguageLocale(locale) },
	});

	return (
		<div className={s.container}>
			<CatalogueLight
				products={sortProductsByCategory(allProducts)}
				withLightsource={false}
				locale={locale}
			/>
		</div>
	);
}
