import '@/styles/index.scss';
import { apiQuery } from 'next-dato-utils/api';
import { GlobalDocument, ShippingDocument } from '@/graphql';
import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import { buildMenu } from '@/lib/menu';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import shopifyQuery from '@/lib/shopify/shopify-query';
import { LocalizationDocument } from '@/lib/shopify/graphql';
import * as Sentry from '@sentry/nextjs';
import { getLocalization } from '@/lib/shopify/utils';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-static';

export default async function RootLayout({ children, params, modals }: LayoutProps<'/'>) {
	const { locale } = await (params as any);
	setRequestLocale(locale);

	const [menu, { localization }, { shipping }] = await Promise.all([
		buildMenu(),
		shopifyQuery(LocalizationDocument),
		apiQuery(ShippingDocument),
	]);

	return (
		<html lang='en-US'>
			<body id='root'>
				{modals}
				<NextIntlClientProvider key={locale}>
					<Layout menu={menu} localization={localization} shipping={shipping}>
						{children}
					</Layout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

export async function generateStaticParams() {
	const localization = await getLocalization();
	return localization.availableCountries.map((country) => ({ country: country.isoCode.toLowerCase() }));
}

export async function generateMetadata(props: LayoutProps<'/'>): Promise<Metadata> {
	const {
		site: { globalSeo, faviconMetaTags },
	} = await apiQuery(GlobalDocument, {
		variables: {},
		revalidate: 60 * 60,
	});

	const siteName = globalSeo?.siteName ?? '';

	return {
		metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
		icons: faviconMetaTags.map(({ attributes: { rel, sizes, type, href: url } }) => ({
			rel,
			url,
			sizes,
			type,
		})) as Icon[],
		...(await buildMetadata({
			title: {
				template: `${siteName} — %s`,
				default: siteName ?? '',
			},
			description: globalSeo?.fallbackSeo?.description?.substring(0, 157),
			url: process.env.NEXT_PUBLIC_SITE_URL,
			image: globalSeo?.fallbackSeo?.image as FileField,
		})),
	};
}

export type BuildMetadataProps = {
	title?: string | any;
	description?: string | null | undefined;
	url?: string;
	image?: FileField | null | undefined;
};

export async function buildMetadata({ title, description, url, image }: BuildMetadataProps): Promise<Metadata> {
	description = !description ? '' : description.length > 160 ? `${description.substring(0, 157)}...` : description;

	return {
		title,
		alternates: {
			canonical: url,
		},
		description,
		openGraph: {
			title: title,
			description,
			url,
			images: [
				{
					url: `${image?.url}?w=1200&h=630&fit=fill&q=80`,
					width: 800,
					height: 600,
					alt: title,
				},
				{
					url: `${image?.url}?w=1600&h=800&fit=fill&q=80`,
					width: 1600,
					height: 800,
					alt: title,
				},
				{
					url: `${image?.url}?w=790&h=627&fit=crop&q=80`,
					width: 790,
					height: 627,
					alt: title,
				},
			],
			locale: 'en_US',
			type: 'website',
		},
		other: {
			...Sentry.getTraceData(),
		},
	};
}
