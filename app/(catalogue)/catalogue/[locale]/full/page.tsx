import s from './page.module.scss';
import Catalogue from '@/app/(catalogue)/components/Catalogue';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument } from '@/graphql';
import { toLanguageLocale } from '@/app/(catalogue)/lib/utils';

export default async function CataloguePage({ params }: PageProps<'/catalogue/[locale]/full'>) {
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
