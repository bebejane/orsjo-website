import styles from './index.module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { shopifyQuery, client } from '/lib/shopify/api';
import AllShopifyProducts  from '/lib/shopify/graphql/products.gql'
import { PageProps } from '/lib/context/page';
import gql from 'graphql-tag';
import { Section } from '/components';
import cn from 'classnames'
import { useState, useEffect } from 'react';

export default function Shopify({ products }){
	console.log(products)
	return (
    <Section className={styles.intro} top={true}>
			<ul>
      {products.map(({node})=>
				<li>{node.title}</li>
			)}
			</ul>
    </Section>
	)
}

Shopify.page = { layout: 'normal', color: '--copper', menu: 'inverted' } as PageProps

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate }: any) => {


	const { data : { products }}  = await client.query({query:AllShopifyProducts })
	
	return {
		props:{
			...props,
			products : products.edges
		},
		revalidate
	};
});