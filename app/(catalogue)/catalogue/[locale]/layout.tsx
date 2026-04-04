import { AllTranslationsDocument } from '@/graphql';
import { CatalogueProvider } from '@/catalogue/lib/context/catalogue';
import { apiQuery } from 'next-dato-utils/api';
import { getCurrencyRateByLocale } from '@/lib/currency';

export const dynamic = 'force-dynamic';

export default async function CatalogueLayout({
	children,
	params,
}: LayoutProps<'/catalogue/[locale]'>) {
	const { locale } = await (params as any);
	const { allTranslations } = await apiQuery(AllTranslationsDocument, {
		variables: { locale: locale as SiteLocale },
	});

	const messages: Record<string, Record<string, string>> = {};
	allTranslations
		.map(({ page }) => page)
		.forEach((page) => {
			allTranslations
				.filter((t) => t.page === page)
				.forEach(({ key, value }) => {
					Object.assign(messages, { [page]: { ...(messages[page] ?? {}), [key]: value } });
				});
		});

	const currency = await getCurrencyRateByLocale(locale as SiteLocale);

	return (
		<CatalogueProvider locale={locale} messages={messages} currency={currency}>
			{children}
		</CatalogueProvider>
	);
}
