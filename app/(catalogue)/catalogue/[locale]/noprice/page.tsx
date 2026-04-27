import s from './page.module.scss';
import Catalogue from '@/catalogue/components/Catalogue';
import { apiQuery } from 'next-dato-utils/api';
import { sortProductsByCategory, toLanguageLocale } from '@/catalogue/lib/utils';
import { AllProductsDocument } from '@/graphql';
import { getCurrencyRateByLocale } from '@/lib/currency';

export default async function CatalogueNoPricePage({
	params,
}: PageProps<'/catalogue/[locale]/noprice'>) {
	const { locale } = await (params as any);
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		variables: { locale: toLanguageLocale(locale) },
	});

	return (
		<div className={s.container}>
			<Catalogue products={sortProductsByCategory(allProducts)} locale={locale} noPrice={true} />
		</div>
	);
}
