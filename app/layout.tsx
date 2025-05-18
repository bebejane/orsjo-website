import '@/styles/index.scss';
import { apiQuery } from 'next-dato-utils/api';
import { GlobalDocument } from '@/graphql';
import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import { buildMenu } from '@/lib/menu';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import shopify from '@/lib/shopify/rest-client';
import shopifyQuery from '@/lib/shopify/shopify-query';
import { LocalizationDocument } from '@/lib/shopify/graphql';

export type LayoutProps = {
	children: React.ReactNode;
};

export default async function RootLayout({ children }: LayoutProps) {
	const menu = await buildMenu();
	const { localization } = await shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(
		LocalizationDocument
	);

	return (
		<html lang='en-US'>
			<body id='root'>
				<Layout menu={menu} localization={localization}>
					{children}
				</Layout>
			</body>
		</html>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	const {
		site: { globalSeo, faviconMetaTags },
	} = await apiQuery<GlobalQuery, GlobalQueryVariables>(GlobalDocument, {
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

export async function buildMetadata({
	title,
	description,
	url,
	image,
}: BuildMetadataProps): Promise<Metadata> {
	description = !description
		? ''
		: description.length > 160
			? `${description.substring(0, 157)}...`
			: description;

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
	};
}
