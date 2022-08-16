import styles from './[...product].module.scss'
import cn from 'classnames'
import { GetAllProductsDocument, GetProductDocument, GetRelatedProductsDocument, GetAllProductsByCategoryDocument } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { withGlobalProps } from '/lib/hoc'
import { List, ListItem } from '/components'
import { Image } from 'react-datocms'
import { FullWidthImage, Text, TwoColumnImage, ImageGallery, FeaturedGallery, ProductThumbnail, Section } from '/components'
import { Gallery } from '/components'
import { useState } from 'react'
import { chunkArray, parseSpecifications } from '/lib/utils'

const allProductImages = (product: ProductRecord) => {
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

const allDrawings = (product: ProductRecord) => {
	const drawings = []
	product.models.forEach(m => m.drawing && drawings.push(m.drawing))
	return drawings;
}

export type ProductProps = { product: ProductRecord, related: ProductRecord[], relatedByCategory: ProductRecord[] };

export default function Product({ product, related, relatedByCategory }: ProductProps) {

	const [galleryIndex, setGalleryIndex] = useState<number>(-1)
	const [drawingGalleryIndex, setDrawingGalleryIndex] = useState<number>(-1)
	
	const specs = parseSpecifications(product, 'en', null)
	const specsCols = [
		{ label: 'Designer', value: specs.designer},
		{ label: 'Mounting', value: specs.mounting},
		{ label: 'Electrical Data', value: specs.electricalData},
		{ label: 'Socket', value: specs.socket},
		{ label: 'Connection', value: specs.connection},
		{ label: 'Lightsource', value: specs.lightsource}
	].filter(el => el.value)

	const singleModel = product.models.length === 1
	const images = allProductImages(product)
	const drawings = allDrawings(product)

	const handleImageClick = (id: string) => {
		const index = images.findIndex((i) => i.id === id)
		setGalleryIndex(index >= 0 ? index : -1)
	}

	return (
		<>
			<Section name="Introduction" className={styles.product}>
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
								{product.categories.map(({ name }) => name).join(', ')}
							</h3>
						</div>
					</div>
				</div>
				{product.productGallery.map(block => {
					switch (block.__typename) {
						case 'FullwidthImageRecord':
							return <FullWidthImage data={block} onClick={handleImageClick} />
						case 'TextRecord':
							return <Text data={block} />
						case 'TwoColumnImageRecord':
							return <TwoColumnImage data={block} onClick={handleImageClick} />
						case 'ImageGalleryRecord':
							return <ImageGallery data={block} onClick={handleImageClick} />
						default:
							return null
					}
				})}
			</Section>
			<Section name="Specifications" className={styles.details}>
				<List initial={0}>
					<ListItem title={'Specifications'} className={styles.listItemContent}>
						<ul className={styles.specifications}>
							{specsCols.map(({ label, value }, idx) =>
								<li key={idx}>
									<span>{label}</span>
									<span>{value}</span>
								</li>
							)}
						</ul>
						<div className={styles.articles}>
							<header>
								<span>Art no</span>
								<span>Model</span>
								<span>Art no</span>
								<span>Model</span>
							</header>
							<div className={cn(styles.content, !singleModel && styles.multi)}>
								{product.models.map(({ name, variants, lightsources, accessories }, idx) => {

									const art = variants.map(v => ({
										articleNo: v.articleNo,
										label: [v.color?.name, v.material?.name, v.feature?.name].filter(el => el).join(', ')
									}))

									const access = accessories.map(a => ({
										articleNo: a.articleNo,
										label: a.accessory.name
									}))

									const light = lightsources.map(l => ({
										articleNo: l.lightsource.articleNo,
										label: `${l.lightsource.name} (need ${l.amount})`,
										included: l.included,
										optional: l.optional,
										amount: l.amount
									}))

									const cols = art.concat(access).concat(light)
									const rows = chunkArray(cols, cols.length > 2 ? Math.ceil(cols.length / 2) : 2)
									
									if(singleModel){
										return(
											<>
												{rows.map((row, idx) =>
													<ul key={idx}>
														<li>
															<span>{row[0].articleNo}</span>
															<span>{row[0].label}</span>
															<span>{row[1]?.articleNo}</span>
															<span>{row[1]?.label}</span>
														</li>
													</ul>
												)}
											</>
										)
									}
									
									return (
										<>
											<ul>
												<li className={styles.subheader}><span></span><span>{name?.name}</span></li>
												{rows.map((row, idx) =>
													<>
														<li>
															<span>{row[0].articleNo}</span>
															<span>{row[0].label}</span>		
														</li>									
														<li>
															<span>{row[1]?.articleNo}</span>
															<span>{row[1]?.label}</span>
														</li>
													</>
												)}
											</ul>
										</>
									)
								})}
							</div>
						</div>
						<ul className={styles.dimensions}>
							<li>
								<span>Dimensions</span>
								<button  onClick={() => setDrawingGalleryIndex(0)}>
									View drawing{drawings.length > 1 && 's'} +
								</button>
							</li>
						</ul>
					</ListItem>
					<ListItem title={'Downloads'} className={styles.listItemContent}>
						<ul className={styles.downloads}>
							<li>
								<div className={styles.fileIcon}>PDF</div>
								<div className={styles.label}>Product Sheet (SE)</div>
							</li>
							<li>
								<div className={styles.fileIcon}>PDF</div>
								<div className={styles.label}>Product Sheet (EN)</div>
							</li>
							<li>
								<div className={styles.fileIcon}>BIM</div>
								<div className={styles.label}>Bim files</div>
							</li>
							<li>
								<div className={styles.fileIcon}>CAD</div>
								<div className={styles.label}>Cad Files</div>
							</li>
						</ul>
					</ListItem>
				</List>
			</Section>
			<Section name="Related" className={styles.related} bgColor='--mid-gray'>
				<FeaturedGallery 
					headline="Related" 
					products={related} 
					theme={'light'}
					id="related"
				/>
				<FeaturedGallery 
					headline={`Other ${product.categories[0].name}s`} 
					products={relatedByCategory} 
					theme={'light'}
					id="relatedbycategory" 
				/>
			</Section>
			{galleryIndex > -1 &&
				<Gallery
					images={images}
					index={galleryIndex}
					onClose={() => setGalleryIndex(-1)}
				/>
			}
			{drawingGalleryIndex > -1 &&
				<Gallery
					images={drawings}
					index={drawingGalleryIndex}
					onClose={() => setDrawingGalleryIndex(-1)}
				/>
			}
		</>
	)
}

Product.layout = { layout: 'full', color: '--white', menu: 'normal' } as PageLayoutProps

export async function getStaticPaths(context) {
	const { products } = await apiQuery(GetAllProductsDocument, {})
	const paths = products.map(({ slug }) => ({ params: { product: [slug] } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({ model: 'product' }, async ({ props, context, revalidate }) => {

	const { product }: { product: ProductRecord } = await apiQuery(GetProductDocument, { variables: { slug: context.params.product[0] } })

	if (!product)
		return { notFound: true }

	const { products: related } = await apiQuery(GetRelatedProductsDocument, { variables: { designerId: product.designer.id, familyId: product.family.id } })
	const { products: relatedByCategory } = await apiQuery(GetAllProductsByCategoryDocument, { variables: { categoryId: product.categories[0]?.id } })


	return {
		props: {
			...props,
			product,
			related: related.filter(p => p.id !== product.id),
			relatedByCategory
		},
		revalidate
	};
});