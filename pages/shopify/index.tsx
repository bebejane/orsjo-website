import styles from './index.module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { shopifyQuery } from '/lib/shopify/api';
import { AllShopifyProducts , ShopifyProduct }   from '/lib/shopify/graphql/product.gql'
import { PageProps } from '/lib/context/page';
import { Section } from '/components';

type Props = {
	products: AllShopifyProductsQuery['products']
}

export default function Shopify({ products } : Props){
	
	console.log(products)
	
	return (
    <Section className={styles.intro} top={true}>
			<ul>
      {products.edges.map(({node :{ title, priceRangeV2, id }}, idx)=>
				<li key={idx}>
					{title} {priceRangeV2.maxVariantPrice.amount} {id}
				</li>
			)}
			</ul>
    </Section>
	)
}

Shopify.page = { layout: 'normal', color: '--copper', menu: 'inverted' } as PageProps

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate }: any) => {

	const { products}  = await shopifyQuery(AllShopifyProducts)
	const { product } = await shopifyQuery(ShopifyProduct, {variables:{id:'gid://shopify/Product/6989375144036'}})
	console.log(product)
	return {
		props:{
			...props,
			
			products
		},
		revalidate
	};
});