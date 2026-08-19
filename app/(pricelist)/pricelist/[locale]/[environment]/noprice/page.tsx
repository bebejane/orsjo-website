import s from './page.module.scss';
import Catalogue from '@/pricelist/components/Catalogue';
import { apiQuery } from 'next-dato-utils/api';
import { sortProductsByCategory, toLanguageLocale } from '@/pricelist/lib/utils';
import { AllProductsDocument } from '@/graphql';

export default async function CatalogueNoPricePage({
	params,
}: PageProps<'/pricelist/[locale]/[environment]/noprice'>) {
	const { locale, environment } = await (params as any);
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		environment,
		variables: { locale: toLanguageLocale(locale) },
	});

	return (
		<div className={s.container}>
			<Catalogue products={sortProductsByCategory(allProducts)} locale={locale} noPrice={true} />
		</div>
	);
}
