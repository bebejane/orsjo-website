import ProductRow from "./ProductRow"

export default function CatalogueLight({ products }) {

	return (
		<>
			{products.map((product, pageNo) =>
				<ProductRow product={product} pageNo={pageNo + 1} />
			)}
		</>
	)
}