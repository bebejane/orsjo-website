import ProductRow from "./ProductRow"

type CatalogueLightProps = { products: Product[], withLightsource:boolean, locale: Locale }

export default function CatalogueLight({ products, withLightsource, locale } : CatalogueLightProps) {
	return (
		<>
			{products.map((product, rowIdx) =>
				<ProductRow
					key={rowIdx} 
					product={product} 
					withLightsource={withLightsource} 
					locale={locale}
				/>
			)}
		</>
	)
}