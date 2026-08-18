import s from './page.module.scss';
import Catalogue from '@/pricelist/components/Catalogue';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument } from '@/graphql';
import { toLanguageLocale } from '@/pricelist/lib/utils';

export default async function CataloguePage({ params }: PageProps<'/pricelist/[locale]/full'>) {
	const { locale } = await (params as any);
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		variables: { locale: toLanguageLocale(locale) },
	});

	return (
		<div className={s.container}>
			<Catalogue products={allProducts} locale={locale} />
		</div>
	);
}
