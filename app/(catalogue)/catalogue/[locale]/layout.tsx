import { AllTranslationsDocument, SiteDocument } from '@/graphql';
import { DictionaryProvider } from '@/app/(catalogue)/lib/context/dictionary';
import { apiQuery } from 'next-dato-utils/api';

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

	return (
		<DictionaryProvider locale={locale} messages={messages}>
			{children}
		</DictionaryProvider>
	);
}
