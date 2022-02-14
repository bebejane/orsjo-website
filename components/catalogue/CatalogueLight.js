import ProductRow from "./ProductRow"

export default function CatalogueLight({ products, withLightsource, locale }) {
	//Todo: Filtrera bort fasta anslutningar om withLightsource == true
	return (
		<>
			{products.map((product, pageNo) =>
				< ProductRow product={product} withLightsource={withLightsource} pageNo={pageNo + 1} locale={locale} />
			)}
		</>
	)
}