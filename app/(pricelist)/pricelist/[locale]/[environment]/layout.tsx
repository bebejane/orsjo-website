import { AllTranslationsDocument } from '@/graphql';
import { PricelistProvider } from '@/pricelist/lib/context/pricelist';
import { apiQuery } from 'next-dato-utils/api';
import { getCurrencyRateByLocale } from '@/lib/currency';
import { toLanguageLocale } from '@/pricelist/lib/utils';

export const dynamic = 'force-dynamic';

export default async function CatalogueLayout({
	children,
	params,
}: LayoutProps<'/pricelist/[locale]/[environment]'>) {
	const { locale, environment } = await (params as any);
	const { allTranslations } = await apiQuery(AllTranslationsDocument, {
		environment,
		variables: { locale: toLanguageLocale(locale) },
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
	const language = toLanguageLocale(locale);
	const currency = await getCurrencyRateByLocale(locale as SiteLocale, 0);

	return (
		<PricelistProvider locale={locale} language={language} messages={messages} currency={currency}>
			{children}
		</PricelistProvider>
	);
}
