export const sortProductsByCategory = (products: AllProductsQuery['allProducts']) => {
	const sortedProducts = [...products]
		.sort((a, b) => {
			if (a.family?.id === b.family?.id)
				return a.categories[0].position < b.categories[0].position ? -1 : 1;
			else return 0;
		})
		.sort((a, b) => (a.title > b.title ? 1 : -1));
	return sortedProducts;
};

export const toLanguageLocale = (locale: string): SiteLocale => {
	if (['sv', 'no'].includes(locale)) return 'sv' as SiteLocale;
	else if (['en', 'da', 'en_GB', 'en-GB'].includes(locale)) return 'en' as SiteLocale;
	else return 'en' as SiteLocale;
};
