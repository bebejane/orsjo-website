import { CurrencyRate } from '@/catalogue/lib/utils';
import ProductRow from './ProductRow';

type CatalogueLightProps = {
	products: AllProductsQuery['allProducts'];
	withLightsource: boolean;
	locale: SiteLocale;
	currency: CurrencyRate;
};

export default function CatalogueLight({
	products,
	withLightsource,
	locale,
	currency,
}: CatalogueLightProps) {
	return (
		<>
			{products.map((product, rowIdx) => (
				<ProductRow
					key={rowIdx}
					product={product}
					withLightsource={withLightsource}
					locale={locale}
					currency={currency}
				/>
			))}
		</>
	);
}
