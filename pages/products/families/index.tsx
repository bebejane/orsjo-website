import styles from './index.module.scss';
import { AllProductFamiliesDocument, AllProductsByFamilyDocument } from '/graphql';
import withGlobalProps from '/lib/withGlobalProps';
import { ProductThumbnail, Section } from '/components';

import type { PageProps } from '/lib/context/page';
import { apiQuery } from 'dato-nextjs-utils/api';
import { useEffect } from 'react';

export type ProductFamilyProps = {
	allProductFamilies: ProductFamilyRecord[];
};

export default function ProductFamily({ allProductFamilies }: ProductFamilyProps) {
	useEffect(() => {
		if (document.location.hash) {
			const sectionId = document.location.hash.slice(1);
			const section = document.querySelector(`[id="${sectionId}"]`);
			setTimeout(() => {
				//@ts-ignore
				section?.scrollIntoView({ behavior: 'instant' });
			}, 300);
		}
	}, []);

	return (
		<>
			{allProductFamilies.map(({ name, slug, _allReferencingProducts }, idx) => (
				<Section className={styles.products} name={name} top={idx === 0} key={slug}>
					<h1>{name}</h1>
					<ul>
						{_allReferencingProducts?.map((product, idx) => (
							<li key={idx}>
								<ProductThumbnail product={product} theme='light' />
							</li>
						))}
					</ul>
				</Section>
			))}
		</>
	);
}

ProductFamily.page = {
	title: 'Product families',
	layout: 'normal',
	menu: 'normal',
	color: '--white',
} as PageProps;

/*
export async function getStaticPaths(context) {
	const { allProductFamilies } = await apiQuery(AllProductFamiliesDocument, {});
	const paths = allProductFamilies.map(({ slug }) => ({ params: { family: slug } }));
	return {
		paths,
		fallback: 'blocking',
	};
}
*/
export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {
	const { allProductFamilies } = await apiQuery(AllProductFamiliesDocument, {});

	return {
		props: {
			...props,
			allProductFamilies: allProductFamilies.filter(
				({ _allReferencingProducts }) => _allReferencingProducts.length > 0
			),
		},
		revalidate,
	};
});
