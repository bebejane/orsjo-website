
import styles from './index.module.scss'
import { GetProductStartDocument, GetAllProductsDocument, GetProductCategoriesDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import Link from 'next/link'
import { Featured, ProductThumbnail, Section } from '/components'
import { sectionId } from '/lib/utils'
import { useStore } from '/lib/store';
import { useEffect, useState } from 'react';

export type ProductsStartProps = {
	productStart: ProductStartRecord,
	products: ProductRecord[],
	productCategories: ProductCategoryRecord[]
}

export default function Products({ productStart: { featured }, products, productCategories }: ProductsStartProps) {

	const [productsByCategorySearch, setProductsByCategorySearch] = useState()

	const searchProducts = useStore((state) => state.searchProducts);
	const productsByCategory = {}
	productCategories.forEach(({ name }) => {
		productsByCategory[name] = products.filter(({ categories }) => categories[0].name === name)
	})

	const search = (str: string, value: string) => {
		const s = str.toLowerCase().split(' ');
		const v = value.toLowerCase().split(' ');

		for (let i = 0; i < s.length; i++) {
			for (let x = 0; x < v.length; x++) {
				if (v[x].startsWith(s[i]))
					return true
			}
		}
		return false
	}

	useEffect(() => {
		if (!searchProducts)
			return setProductsByCategorySearch(undefined)

		const searchCategories = {}

		Object.keys(productsByCategory).forEach(k => {

			const res = products
				.filter(({ categories }) => categories[0].name === k)
				.filter(({ title, designer: { name } }) => search(searchProducts, title) || search(searchProducts, name))

			if (res.length)
				searchCategories[k] = res
		})

		setProductsByCategorySearch(searchCategories);

	}, [searchProducts, productCategories])

	const prodsByCat = productsByCategorySearch || productsByCategory
	const isEmptySearch = productsByCategorySearch && Object.keys(productsByCategorySearch).length === 0

	if (isEmptySearch) {
		return (
			<Section className={styles.products} top={true} key={idx}>
				<div className={styles.emptySearch}>
					No products matching "{searchProducts}"...
				</div>
			</Section>
		)
	}

	return (
		<>
			{!productsByCategorySearch && featured.slice(0).map((data, idx) =>
				<Section className={styles.products} top={idx === 0 } key={idx}>
					<Featured key={`featured-${idx}`} data={data} />
				</Section>
			)}

			{Object.keys(prodsByCat).map(name => prodsByCat[name]).map((products, idx) => {
				const category = products[0].categories?.[0].name
				return (
					<Section className={styles.products} key={idx} name={category} top={productsByCategorySearch && idx === 0}>
						<h1>{category}</h1>
						<ul >
							{products.map((product, idx) =>
								<li key={idx}>
									<ProductThumbnail product={product} />
								</li>
							)}
						</ul>
					</Section>
				)
			})}
		</>
	)
}

export const getStaticProps = withGlobalProps({ queries: [GetAllProductsDocument, GetProductStartDocument, GetProductCategoriesDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});