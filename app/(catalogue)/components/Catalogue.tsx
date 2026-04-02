import ProductSheet from './ProductSheet';
import ProductGrid from './ProductGrid';
import { CurrencyRate } from '@/catalogue/lib/utils';

type CatalogueProps = {
	products: AllProductsQuery['allProducts'];
	locale: SiteLocale;
	noPrice?: boolean;
	currency: CurrencyRate;
};

export default function Catalogue({ products, locale, noPrice = false, currency }: CatalogueProps) {
	return (
		<>
			<ProductGrid products={products} />
			{products.map((product, pageNo) => (
				<ProductSheet
					key={pageNo}
					product={product}
					pageNo={pageNo + 1}
					locale={locale}
					withPrice={noPrice ? false : true}
					currency={currency}
				/>
			))}
		</>
	);
}
