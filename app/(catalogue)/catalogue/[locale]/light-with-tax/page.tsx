import s from './page.module.scss';
import CatalogueLightWithTax from '@/catalogue/components/CatalogueLightWithTax';
import { apiQuery } from 'next-dato-utils/api';
import {
	getCurrencyRateByLocale,
	sortProductsByCategory,
	toLanguageLocale,
} from '@/catalogue/lib/utils';
import { AllProductsDocument } from '@/graphql';

export default async function CatalogueLightWithTaxPage({
	params,
}: PageProps<'/catalogue/[locale]/light-with-tax'>) {
	const { locale } = await (params as any);
	const currency = await getCurrencyRateByLocale(locale as SiteLocale);
	const { allProducts } = await apiQuery(AllProductsDocument, {
		variables: { locale: toLanguageLocale(locale) },
	});

	return (
		<div className={s.container}>
			<CatalogueLightWithTax
				products={sortProductsByCategory(allProducts)}
				withLightsource={false}
				locale={locale}
				taxRate={1.25}
				currency={currency}
			/>
		</div>
	);
}
