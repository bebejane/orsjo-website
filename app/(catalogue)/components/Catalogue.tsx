import ProductSheet from './ProductSheet';
import ProductGrid from './ProductGrid';
import { CurrencyRate } from '@/lib/currency';

type CatalogueProps = {
	products: AllProductsQuery['allProducts'];
	locale: SiteLocale;
	noPrice?: boolean;
};

export default function Catalogue({ products, locale, noPrice = false }: CatalogueProps) {
	return (
		<>
			<ProductGrid products={products} />
			{products.map((product, pageNo) => (
				<ProductSheet key={pageNo} product={product} withPrice={noPrice ? false : true} />
			))}
		</>
	);
}
