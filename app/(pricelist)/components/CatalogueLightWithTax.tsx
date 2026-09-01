import ProductRow from './ProductRow';

type CatalogueLightWithTaxProps = {
	products: AllProductsQuery['allProducts'];
	withLightsource: boolean;
};

export default function CatalogueLightWithTax({
	products,
	withLightsource,
}: CatalogueLightWithTaxProps) {
	return (
		<>
			{products.map((product, rowIdx) => (
				<ProductRow
					key={rowIdx}
					withLightsource={withLightsource}
					withVat={true}
					product={product}
				/>
			))}
		</>
	);
}
