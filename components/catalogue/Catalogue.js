import ProductSheet from "./ProductSheet"
import ProductGrid from "./ProductGrid"


export default function Catalogue({ products, locale }) {

	return (
		<>
			<ProductGrid products={products} />
			{products.map((product, pageNo) =>
				<ProductSheet product={product} pageNo={pageNo + 1} locale={locale}/>
			)}
		</>
	)
}