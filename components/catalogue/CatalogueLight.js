import ProductRow from "./ProductRow"

export default function CatalogueLight({ products, withLightsource }) {

	//Todo: Filtrera bort fasta anslutningar
	return (
		<>
			{products.map((product, pageNo) =>
				<ProductRow product={product} withLightsource={withLightsource} pageNo={pageNo + 1} />
			)}
		</>
	)
}