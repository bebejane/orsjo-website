import ProductSheet from "./ProductSheet"
import ProductGrid from "./ProductGrid"
import Page from "./Page"


export default function Catalogue({ products }) {

	return (
		<>
			<Page>
				<ProductGrid products={products} />
			</Page>
			{products.map((product, pageNo) =>
				<ProductSheet product={product} pageNo={pageNo + 1} />
			)}
		</>
	)
}