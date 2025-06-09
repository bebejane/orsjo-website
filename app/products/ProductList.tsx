'use client';

import s from './ProductList.module.scss';
import { ProductThumbnail, Section } from '@/components';
import { useStore, useShallow } from '@/lib/store';
import { useEffect, useState, useMemo } from 'react';

export type ProductsByCategory = {
	products: ProductRecord[];
	name?: string;
	namePlural?: string;
};

export type ProductListProps = {
	products: AllProductsLightQuery['allProducts'];
	productCategories: ProductCategoriesQuery['productCategories'];
};

export default function ProductList({ productCategories, products }: ProductListProps) {
	const searchProducts = useStore(useShallow((state) => state.searchProducts));
	const productsByCategory: ProductsByCategory = useMemo<any>(() => ({}), []);
	productCategories.forEach(({ id, name, namePlural }) => {
		productsByCategory[id] = {
			name,
			namePlural,
			products: products.filter(({ categories }) => categories?.find((c) => c.name === name)),
		};
	});

	const [productsByCategorySearch, setProductsByCategorySearch] = useState<{ [index: string]: ProductsByCategory } | undefined>();

	useEffect(() => {
		if (!searchProducts) return setProductsByCategorySearch(undefined);

		const searchCategories: { [index: string]: ProductsByCategory } = {};

		Object.keys(productsByCategory).forEach((k) => {
			const prods = products
				.filter(({ categories }) => categories?.some((c) => c.name === k))
				.filter(({ title, designer }) => searchString(searchProducts, title) || searchString(searchProducts, designer?.name ?? ''));
			const category = productCategories.find((c) => c.name === k);

			if (prods.length)
				searchCategories[k] = {
					products: prods,
					name: category?.name,
					namePlural: category?.namePlural,
				} as ProductsByCategory;
		});

		setProductsByCategorySearch(searchCategories);
	}, [searchProducts, productsByCategory, products, productCategories]);

	useEffect(() => {
		window.scrollTo(0, 0);
		const featured = document.querySelectorAll<HTMLElement>(`[id^=featured-products]`);

		featured?.forEach((el) => {
			el.hidden = searchProducts ? true : false;
		});
	}, [searchProducts]);

	const isEmptySearch = productsByCategorySearch && Object.keys(productsByCategorySearch).length === 0;

	if (isEmptySearch) {
		return (
			<Section
				className={s.products}
				top={true}
			>
				<div className={s.emptySearch}>No products matching &quot;{searchProducts}&quot;...</div>
			</Section>
		);
	}

	const items = productsByCategorySearch || productsByCategory;

	return (
		<>
			{Object.keys(items)
				.map((name) => items[name])
				.map(({ products, namePlural }, idx) => {
					return (
						<Section
							className={s.products}
							key={idx}
							name={namePlural}
							top={productsByCategorySearch && idx === 0}
						>
							<h1>{namePlural}</h1>
							<ul>
								{products?.map((product, idx) => (
									<li key={idx}>
										<ProductThumbnail
											product={product}
											theme='light'
										/>
									</li>
								))}
							</ul>
						</Section>
					);
				})}
		</>
	);
}

const searchString = (str: string, value: string): boolean => {
	const s = str.toLowerCase().split(' ');
	const v = value.toLowerCase().split(' ');

	for (let i = 0; i < s.length; i++) {
		for (let x = 0; x < v.length; x++) {
			if (s[i] && s[i].length >= 2 && v[x].startsWith(s[i])) {
				return true;
			}
		}
	}
	return false;
};
