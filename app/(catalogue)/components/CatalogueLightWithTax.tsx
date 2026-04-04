import ProductRow from './ProductRow';

type CatalogueLightWithTaxProps = {
	products: AllProductsQuery['allProducts'];
	withLightsource: boolean;
	taxRate: number;
};

export default function CatalogueLightWithTax({
	products,
	withLightsource,
	taxRate,
}: CatalogueLightWithTaxProps) {
	return (
		<>
			{products.map((product, rowIdx) => (
				<ProductRow
					key={rowIdx}
					product={{
						...product,
						models: product.models.map((m) => ({
							...m,
							variants: m.variants.map((v) => ({ ...v, price: v.price * taxRate })),
						})),
					}}
					withLightsource={withLightsource}
				/>
			))}
		</>
	);
}
