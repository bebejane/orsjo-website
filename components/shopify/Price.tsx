'use client';

import useProduct from '@/lib/shopify/hooks/useProduct';
import { parseGid } from '@/lib/shopify/utils';
import { formatPrice } from '@/lib/shopify/utils';

export type Props = {
	slug: string;
	variantId?: string | null | undefined;
};

export default function Price({ slug, variantId }: Props) {
	const { product: shopifyProduct } = useProduct({ handle: slug });
	const variant =
		(shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant) ??
		(shopifyProduct?.variants.edges[0]?.node as ProductVariant);
	if (!variant) return null;
	return (
		<>
			{formatPrice(variant.price.amount)} {variant.price.currencyCode}
		</>
	);
}
