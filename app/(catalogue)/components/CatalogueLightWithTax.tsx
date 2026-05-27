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
					withLightsource={withLightsource}
					product={{
						...product,
						models: product.models.map((m) => ({
							...m,
							variants: m.variants.map((v) => ({ ...v, price: v.price * taxRate })),
							lightsources: m.lightsources.map((l) => ({
								...l,
								lightsource: { ...l.lightsource, price: l.lightsource.price * taxRate },
							})),
							accessories: m.accessories.map((a) => ({
								...a,
								accessory: { ...a.accessory, price: a.accessory?.price * taxRate } as any,
							})),
						})),
					}}
				/>
			))}
		</>
	);
}
