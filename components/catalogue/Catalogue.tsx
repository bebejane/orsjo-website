import ProductSheet from "./ProductSheet"
import ProductGrid from "./ProductGrid"

type CatalogueProps = { products : Product[], locale : Locale }

export default function Catalogue({ products, locale } : CatalogueProps) {

	return (
		<>
			<ProductGrid products={products} />
			{products.map((product, pageNo) =>
				<ProductSheet 
					key={pageNo} 
					product={product} 
					pageNo={pageNo + 1} 
					locale={locale}
				/>
			)}
		</>
	)
}