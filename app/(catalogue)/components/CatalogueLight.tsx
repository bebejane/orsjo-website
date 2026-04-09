import ProductRow from './ProductRow';

type CatalogueLightProps = {
	products: AllProductsQuery['allProducts'];
	withLightsource: boolean;
	locale: SiteLocale;
};

export default function CatalogueLight({ products, withLightsource, locale }: CatalogueLightProps) {
	return (
		<>
			{products.map((product, rowIdx) => (
				<ProductRow key={rowIdx} product={product} withLightsource={withLightsource} />
			))}
		</>
	);
}
