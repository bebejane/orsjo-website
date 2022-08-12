import styles from './[...product].module.scss'
import { GetAllProductsDocument, GetProductDocument } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { withGlobalProps } from '/lib/hoc'
import { List, ListItem } from '/components'
import { Image } from 'react-datocms'
import { FullWidthImage, Text, TwoColumnImage, ImageGallery } from '/components'

export type ProductProps = { product: ProductRecord };

export default function Product({ product }: ProductProps) {
	
	return (
		<>
			<section className={styles.product}>
				<div className={styles.image}>
					<Image data={product.image?.responsiveImage} layout={'fill'} objectFit={'contain'} />
					<div className={styles.overlay}>
						<div className={styles.text}>
							<h1 className={styles.title}>
								{product.title}
							</h1>
							<h1 className={styles.designer}>
								By {product.designer?.name}
							</h1>
							<h3 className={styles.type}>
								type
							</h3>
						</div>
					</div>
				</div>
				{product.productGallery.map(block => {
					switch (block.__typename) {
						case 'FullwidthImageRecord':
							return <FullWidthImage data={block} />
						case 'TextRecord':
							return <Text data={block} />
						case 'TwoColumnImageRecord':
							return <TwoColumnImage data={block} />
						case 'ImageGalleryRecord':
							return <ImageGallery data={block} />
						default:
							return null
					}
				})}
			</section>
			<section className={styles.details}>
				<List initial={0}>
					<ListItem title={'Specifications'}>
						specs content
					</ListItem>
					<ListItem title={'Downloads'}>
						downloads content
					</ListItem>
				</List>
			</section>
		</>
	)
}

export async function getStaticPaths(context) {
	const { products } = await apiQuery(GetAllProductsDocument, {})
	const paths = products.map(({ slug }) => ({ params: { product: [slug] } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({ model: 'product' }, async ({ props, context, revalidate }) => {
	const { product } = await apiQuery(GetProductDocument, { variables: { slug: context.params.product[0] } })

	if (!product)
		return { notFound: true }

	return {
		props: {
			...props,
			product
		},
		revalidate
	};
});