import shopifyQuery from '@/lib/shopify/shopify-query';
import { LocalizationDocument } from '@/lib/shopify/graphql';

export type CountryParams = { params: Promise<{ country: string }>; searchParams: any };

export type LayoutProps = {
	children: React.ReactNode;
};

export const dynamic = 'force-static';

export async function generateStaticParams() {
	const { localization } = await shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument, {
		variables: { language: 'SE' as LanguageCode },
		country: 'SE',
	});

	return localization.availableCountries.map((country) => ({ country: country.isoCode.toLowerCase() }));
}

export default async function CountryLayout({ children }: LayoutProps) {
	return <>{children}</>;
}
