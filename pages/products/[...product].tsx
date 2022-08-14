import styles from './[...product].module.scss'
import { GetAllProductsDocument, GetProductDocument } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { withGlobalProps } from '/lib/hoc'
import { List, ListItem } from '/components'
import { Image } from 'react-datocms'
import { FullWidthImage, Text, TwoColumnImage, ImageGallery } from '/components'
import { Gallery } from '/components'
import { useState } from 'react'

export type ProductProps = { product: ProductRecord };

const allProductImages = (product :ProductRecord) => {
	const images = [product.image]
	product.productGallery.forEach(block => {
		switch (block.__typename) {
			case 'FullwidthImageRecord':
				images.push(block.image);
			case 'TwoColumnImageRecord':
				images.push.apply(images, [block.firstImage, block.lastImage]);
			case 'ImageGalleryRecord':
				images.push.apply(images, block.gallery);
		}
	})
	return images.filter(img => img);
}

export default function Product({ product }: ProductProps) {
	
	const [galleryIndex, setGalleryIndex] = useState<number>(-1)
	const images = allProductImages(product)

	const handleImageClick = (id :string) => {
		const index = images.findIndex((i)=> i.id === id)
		setGalleryIndex(index >= 0 ? index : -1)
	}

	return (
		<>
			<section className={styles.product}>
				<div className={styles.image}>
					<Image 
						data={product.image?.responsiveImage} 
						layout={'fill'} 
						objectFit={'contain'}
					/>
					<div className={styles.overlay}>
						<div className={styles.text}>
							<h1 className={styles.title}>
								{product.title}
							</h1>
							<h1 className={styles.designer}>
								By {product.designer?.name}
							</h1>
							<h3 className={styles.type}>
								{product.categories.map(({name}) => name).join(', ')}
							</h3>
						</div>
					</div>
				</div>
				{product.productGallery.map(block => {
					switch (block.__typename) {
						case 'FullwidthImageRecord':
							return <FullWidthImage data={block} onClick={handleImageClick}/>
						case 'TextRecord':
							return <Text data={block} />
						case 'TwoColumnImageRecord':
							return <TwoColumnImage data={block} onClick={handleImageClick}/>
						case 'ImageGalleryRecord':
							return <ImageGallery data={block} onClick={handleImageClick}/>
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
			
			{galleryIndex > -1 && 
				<Gallery 
					images={images} 
					index={galleryIndex} 
					onClose={()=>setGalleryIndex(-1)}
				/>
			}
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