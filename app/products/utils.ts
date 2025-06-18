export function findCheapestVariant(
	product: ProductRecord,
	shopifyProducts: AllShopifyProductsQuery['products']
): ProductVariant | undefined {
	const shopifyProduct = shopifyProducts.edges.find(({ node }) => node.handle === product.slug);
	if (!shopifyProduct) return undefined;

	//@ts-ignore
	return shopifyProduct.node.variants.edges.reduce<undefined | ProductVariant>((acc, variant) => {
		if (!acc) return variant.node;
		return parseFloat(variant.node.price.amount) > parseFloat(acc.price.amount) ? variant.node : acc;
	}, undefined);
}
