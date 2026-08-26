import s from './page.module.scss';
import { toLanguageLocale, sortProductsByCategory } from '@/pricelist/lib/utils';
import CatalogueLight from '@/pricelist/components/CatalogueLight';
import { apiQuery } from 'next-dato-utils/api';
import { AllPricelistProductsDocument } from '@/graphql';

export default async function CatalogueLightPage({
	params,
}: PageProps<'/pricelist/[locale]/[environment]/light'>) {
	const { locale, environment } = await (params as any);
	const { allProducts } = await apiQuery(AllPricelistProductsDocument, {
		all: true,
		environment,
		variables: { locale: toLanguageLocale(locale) },
		revalidate: 0,
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
