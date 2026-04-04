import s from './page.module.scss';
import CatalogueLightWithTax from '@/catalogue/components/CatalogueLightWithTax';
import { apiQuery } from 'next-dato-utils/api';
import { getCurrencyRateByLocale } from '@/lib/currency';
import { AllProductsDocument } from '@/graphql';
import { toLanguageLocale, sortProductsByCategory } from '@/catalogue/lib/utils';

export default async function CatalogueLightWithTaxPage({
	params,
}: PageProps<'/catalogue/[locale]/light-with-tax'>) {
	const { locale } = await (params as any);
	const currency = await getCurrencyRateByLocale(locale as SiteLocale);
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		variables: { locale: toLanguageLocale(locale) },
	});

	return (
		<div className={s.container}>
			<CatalogueLightWithTax
				products={sortProductsByCategory(allProducts)}
				withLightsource={false}
				taxRate={1.25}
			/>
		</div>
	);
}
