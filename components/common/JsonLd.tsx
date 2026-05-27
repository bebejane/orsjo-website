'use client';

import Script from 'next/script';

export type JsonLdProps = {
	data: Record<string, unknown>;
};

export default function JsonLd({ data }: JsonLdProps) {
	return (
		<Script
			id='json-ld'
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

type ProductJsonLdProps = {
	product: any;
	geinsProduct: any;
	currency: string;
	baseUrl: string;
};

export function ProductJsonLd({ product, geinsProduct, currency, baseUrl }: ProductJsonLdProps) {
	const firstVariant = product.models?.[0]?.variants?.[0];
	const sku = firstVariant?.articleNo ?? '';
	const priceValue = parseFloat(geinsProduct?.unitPrice?.sellingPriceIncVat ?? '0');
	const firstSku = geinsProduct?.skus?.[0];
	const inStock = 1000; //TODO: fix this
	const availability = inStock > 0 ? 'InStock' : 'OutOfStock';
	const url = `${baseUrl}/products/${product?.slug ?? ''}`;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product' as const,
		'name': product.title ?? '',
		'description': product.description,
		'image': product.image?.url ?? '',
		sku,
		'brand': {
			'@type': 'Brand' as const,
			'name': 'Örsjö Belysning',
		},
		'offers': {
			'@type': 'Offer' as const,
			'price': priceValue,
			'priceCurrency': currency,
			'availability': `https://schema.org/${availability}`,
			url,
		},
		url,
	};

	return <JsonLd data={jsonLd} />;
}
