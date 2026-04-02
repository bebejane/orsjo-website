import s from './page.module.scss';
import CatalogueLight from '@/catalogue/components/CatalogueLight';
import { apiQuery } from 'next-dato-utils/api';
import {
	getCurrencyRateByLocale,
	sortProductsByCategory,
	toLanguageLocale,
} from '@/catalogue/lib/utils';
import { AllProductsDocument } from '@/graphql';

const hardWiredModelNameId = '107174981';
const fixedMountingId = '107174756';

export default async function CatalogueLightWrapper({
	params,
}: PageProps<'/catalogue/[locale]/with-lightsource'>) {
	const { locale } = await (params as any);
	const currency = await getCurrencyRateByLocale(locale as SiteLocale);
	const { allProducts } = await apiQuery(AllProductsDocument, {
		variables: { locale: toLanguageLocale(locale) },
	});

	let filteredProducts: AllProductsQuery['allProducts'] = [];
	allProducts.forEach((p, idx) =>
		filteredProducts.push({
			...allProducts[idx],
			models: p.models.filter((m) => !(m.name?.id == hardWiredModelNameId)),
		}),
	);

	filteredProducts = filteredProducts.filter(
		(p) => p.models.length > 0 && !(p.mounting?.id === fixedMountingId),
	);

	return (
		<div className={s.container}>
			<CatalogueLight
				products={sortProductsByCategory(filteredProducts)}
				withLightsource={true}
				locale={locale}
				currency={currency}
			/>
		</div>
	);
}
