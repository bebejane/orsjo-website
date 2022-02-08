import ProductSheet from "./ProductSheet"
import ProductGrid from "./ProductGrid"

export default function Catalogue({products}){

	return (
		<>
			<ProductGrid products={products}/>
			{products.map((product, pageNo) => 
				<ProductSheet product={product} pageNo={pageNo+1}/>
			)}
		</>
	)
}