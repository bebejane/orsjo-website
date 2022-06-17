import styles from './Product.module.scss'
import { GetAllProducts, GetProduct } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { withGlobalProps } from '/lib/hoc'
import { List, ListItem } from '/components'
import { Image } from 'react-datocms'
import { FullWidthImageBlock, TextBlock, TwoColumnImageBlock, ImageGalleryBlock } from '/components'

export type ProductProps = { product: Product };

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
							return <FullWidthImageBlock data={block} />
						case 'TextRecord':
							return <TextBlock data={block} />
						case 'TwoColumnImageRecord':
							return <TwoColumnImageBlock data={block} />
						case 'ImageGalleryRecord':
							return <ImageGalleryBlock data={block} />
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
	const { products } = await apiQuery(GetAllProducts)
	const paths = products.map(({ slug }) => ({ params: { product: [slug] } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({ model: 'product' }, async ({ props, context, revalidate }) => {
	const { product } = await apiQuery(GetProduct, { variables: { slug: context.params.product[0] } })

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