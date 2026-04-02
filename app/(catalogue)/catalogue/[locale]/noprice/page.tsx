import s from './page.module.scss';
import Catalogue from '@/catalogue/components/Catalogue';
import { apiQuery } from 'next-dato-utils/api';
import {
	getCurrencyRateByLocale,
	sortProductsByCategory,
	toLanguageLocale,
} from '@/catalogue/lib/utils';
import { AllProductsDocument } from '@/graphql';

export default async function CatalogueNoPricePage({
	params,
}: PageProps<'/catalogue/[locale]/noprice'>) {
	const { locale } = await (params as any);
	const currency = await getCurrencyRateByLocale(locale as SiteLocale);
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		variables: { locale: toLanguageLocale(locale) },
	});

	return (
		<div className={s.container}>
			<Catalogue
				products={sortProductsByCategory(allProducts)}
				locale={locale}
				noPrice={true}
				currency={currency}
			/>
		</div>
	);
}
