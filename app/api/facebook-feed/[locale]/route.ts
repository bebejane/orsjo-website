import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts } from '@/geins/merchant-api';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument } from '@/graphql';

export const maxDuration = 60;

export async function GET(
	req: NextRequest,
	{ params }: RouteContext<'/api/facebook-feed/[locale]'>,
) {
	try {
		const locale = ((await params).locale ?? 'sv') as SiteLocale;
		const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
		const geinsMarketId = '1';
		const market = locale === 'sv' ? 'se' : ('gb' as SiteLocale);
		const marketId = locale;
		const [{ allProducts }, { products: geinsProducts }] = await Promise.all([
			apiQuery(AllProductsDocument, {
				all: true,
				variables: { locale },
			}),
			getAllProducts(geinsMarketId),
		]);

		const feedItems: string[] = [];
		for (const product of allProducts) {
			const geinsProduct = geinsProducts.find((p) =>
				p.categories?.find((c) => c?.alias === product.slug),
			);
			if (!geinsProduct) continue;
			for (const model of product.models) {
				for (const variant of model.variants) {
					const title = product.title;
					const description = product.description?.replace(/<[^>]*>/g, '').slice(0, 5000) || '';
					const productUrl = `${siteUrl}/${market}/products/${product.slug}`;
					const imageUrl = variant.image?.url;
					const isInStock = true;
					const availability = isInStock ? 'in stock' : 'out of stock';
					const articleNumber = variant.articleNo;
					const price = geinsProduct.unitPrice?.sellingPriceIncVat;
					const category = product.categories[0]?.name ?? '';
					const datoCatId = product?.categories?.[0]?.id;

					const gtin = geinsProduct.skus?.[0]?.gtin || '';
					const brand = 'Örsjö Belysning';
					const id = geinsProduct.productId;
					const item = `
					<item>
						<id><![CDATA[${id}]]></id>
						<title><![CDATA[${escapeXml(title)}]]></title>
						<description><![CDATA[${escapeXml(description.slice(0, 5000))}]]></description>
						<availability><![CDATA[${availability}]]></availability>
						<price><![CDATA[${price}]]></price>
						<link><![CDATA[${productUrl}]]></link>
						<image_link><![CDATA[${imageUrl}]]></image_link>
						<brand><![CDATA[${brand}]]></brand>
						<condition><![CDATA[new]]></condition>
						<category><![CDATA[${escapeXml(category)}]]></category>
						<gtin><![CDATA[${gtin}]]></gtin>
						<mpn><![CDATA[${articleNumber}]]></mpn>
					</item>`.trim();

					feedItems.push(item);
				}
			}
		}

		const xml = `<?xml version="1.0" encoding="UTF-8"?>
			<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0" encoding="UTF-8">
				<channel>
					<title>Örsjö Belysning</title>
					<link>${siteUrl}</link>
					<description>Örsjö Belysning Product Feed</description>
					${feedItems.join('\n')}
				</channel>
			</rss>`;

		return new NextResponse(xml, {
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control': 'max-age=3600, s-maxage=3600',
			},
		});
	} catch (error) {
		console.error('Facebook feed error:', error);
		return NextResponse.json(
			{
				error: 'Failed to generate feed',
				details: error instanceof Error ? error.message : 'Unknown error',
			},
			{ status: 500 },
		);
	}
}

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
