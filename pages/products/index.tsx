import styles from "./index.module.scss";
import {
	ProductStartDocument,
	AllProductsLightDocument,
	ProductCategoriesDocument,
} from "/graphql";
import withGlobalProps from "/lib/withGlobalProps";
import { FeaturedGallery, ProductThumbnail, Section } from "/components";
import { useStore, shallow } from "/lib/store";
import { useEffect, useState, useMemo } from "react";

import type { PageProps } from "/lib/context/page";

export type ProductsByCategory = {
	products: ProductRecord[];
	name: string;
	namePlural: string;
};

export type ProductsStartProps = {
	productStart: ProductStartRecord;
	products: ProductRecord[];
	productCategories: ProductCategoryRecord[];
};

const searchString = (str: string, value: string): boolean => {
	const s = str.toLowerCase().split(" ");
	const v = value.toLowerCase().split(" ");

	for (let i = 0; i < s.length; i++) {
		for (let x = 0; x < v.length; x++) {
			if (s[i] && s[i].length >= 2 && v[x].startsWith(s[i])) {
				return true;
			}
		}
	}
	return false;
};

export default function Products({
	productStart: { featured },
	products,
	productCategories,
}: ProductsStartProps) {
	const productsByCategory: ProductsByCategory = useMemo<any>(() => ({}), []);
	productCategories.forEach(({ name, namePlural }) => {
		productsByCategory[name] = {
			name,
			namePlural,
			products: products.filter(({ categories }) => categories?.find((c) => c.name === name)),
		};
	});

	const [productsByCategorySearch, setProductsByCategorySearch] = useState<
		{ [index: string]: ProductsByCategory } | undefined
	>();
	const searchProducts = useStore((state) => state.searchProducts, shallow);

	useEffect(() => {
		if (!searchProducts) return setProductsByCategorySearch(undefined);

		const searchCategories: { [index: string]: ProductsByCategory } = {};

		Object.keys(productsByCategory).forEach((k) => {
			const prods = products
				.filter(({ categories }) => categories?.some((c) => c.name === k))
				.filter(
					({ title, designer: { name } }) =>
						searchString(searchProducts, title) || searchString(searchProducts, name)
				);
			const category = productCategories.find((c) => c.name === k);
			if (prods.length)
				searchCategories[k] = {
					products: prods,
					name: category?.name,
					namePlural: category?.namePlural,
				};
		});
		setProductsByCategorySearch(searchCategories);
	}, [searchProducts, productsByCategory, products, productCategories]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [searchProducts]);

	const prodsByCat = productsByCategorySearch || productsByCategory;
	const isEmptySearch =
		productsByCategorySearch && Object.keys(productsByCategorySearch).length === 0;

	if (isEmptySearch) {
		return (
			<Section
				className={styles.products}
				top={true}
			>
				<div className={styles.emptySearch}>
					No products matching &quot;{searchProducts}&quot;...
				</div>
			</Section>
		);
	}

	return (
		<>
			{!productsByCategorySearch &&
				featured.slice(0).map((data, idx) => (
					<Section
						className={styles.featured}
						name={data.headline}
						top={idx === 0}
						key={idx}
					>
						<FeaturedGallery
							key={`featured-${idx}`}
							headline={data.headline}
							id={data.id}
							items={data.items as ProductRecord[]}
							theme='light'
							showMarkAsNew={data.showMarkAsNew}
						/>
					</Section>
				))}

			{Object.keys(prodsByCat)
				.map((name) => prodsByCat[name])
				.map(({ products, namePlural }, idx) => {
					return (
						<Section
							className={styles.products}
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

Products.page = {
	title: "Products",
	layout: "normal",
	menu: "normal",
	color: "--white",
} as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [AllProductsLightDocument, ProductStartDocument, ProductCategoriesDocument] },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);
