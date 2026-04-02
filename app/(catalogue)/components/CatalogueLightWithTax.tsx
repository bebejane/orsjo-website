import { CurrencyRate } from '@/catalogue/lib/utils';
import ProductRow from './ProductRow';

type CatalogueLightWithTaxProps = {
	products: AllProductsQuery['allProducts'];
	withLightsource: boolean;
	locale: SiteLocale;
	taxRate: number;
	currency: CurrencyRate;
};

export default function CatalogueLightWithTax({
	products,
	withLightsource,
	locale,
	taxRate,
	currency,
}: CatalogueLightWithTaxProps) {
	return (
		<>
			{products.map((product, rowIdx) => (
				<ProductRow
					key={rowIdx}
					product={{
						...product,
						models: product.models.map((m) => ({
							...m,
							variants: m.variants.map((v) => ({ ...v, price: v.price * taxRate })),
						})),
					}}
					withLightsource={withLightsource}
					locale={locale}
					currency={currency}
				/>
			))}
		</>
	);
}
