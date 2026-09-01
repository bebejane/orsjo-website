import s from './page.module.scss';
import CatalogueLightWithTax from '@/pricelist/components/CatalogueLightWithTax';
import { apiQuery } from 'next-dato-utils/api';
import { getCurrencyRateByLocale } from '@/lib/currency';
import { AllPricelistProductsDocument } from '@/graphql';
import { toLanguageLocale, sortProductsByCategory } from '@/pricelist/lib/utils';

export default async function CatalogueLightWithTaxPage({
	params,
}: PageProps<'/pricelist/[locale]/[environment]/light-with-tax'>) {
	const { locale, environment } = await (params as any);
	const currency = await getCurrencyRateByLocale(locale as SiteLocale);
	const { allProducts } = await apiQuery(AllPricelistProductsDocument, {
		all: true,
		environment,
		variables: { locale: toLanguageLocale(locale) },
	});

	return (
		<div className={s.container}>
			<CatalogueLightWithTax
				products={sortProductsByCategory(allProducts)}
				withLightsource={false}
			/>
		</div>
	);
}
