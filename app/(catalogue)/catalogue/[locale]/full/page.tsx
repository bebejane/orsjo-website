import s from './page.module.scss';
import Catalogue from '@/app/(catalogue)/components/Catalogue';
import { apiQuery } from 'next-dato-utils/api';
import { getCurrencyRateByLocale, toLanguageLocale } from '@/catalogue/lib/utils';
import { AllProductsDocument } from '@/graphql';

export default async function CataloguePage({ params }: PageProps<'/catalogue/[locale]/full'>) {
	const { locale } = await (params as any);
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		variables: { locale: toLanguageLocale(locale) },
	});

	const currency = await getCurrencyRateByLocale(locale as SiteLocale);

	return (
		<div className={s.container}>
			<Catalogue products={allProducts} locale={locale} currency={currency} />
		</div>
	);
}
