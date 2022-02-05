import ProductSheet from "./ProductSheet"

export default function Catalogue({products}){
	return (	
		products.map((product, pageNo) => 
			<ProductSheet product={product} pageNo={pageNo}/>
		)
	)
}