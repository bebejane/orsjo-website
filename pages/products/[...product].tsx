import styles from './[...product].module.scss'
import cn from 'classnames'
import { GetAllProductsDocument, GetProductDocument, GetRelatedProductsDocument, GetAllProductsByCategoryDocument } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { withGlobalProps } from '/lib/hoc'
import { List, ListItem } from '/components'
import { Image } from 'react-datocms'
import { FullWidthImage, Text, TwoColumnImage, ImageGallery } from '/components'
import { Gallery } from '/components'
import { useState } from 'react'
import { chunkArray, parseSpecifications } from '/lib/utils'

export type ProductProps = { product: ProductRecord, related: ProductRecord[] };

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
const allDrawings = (product :ProductRecord) => {
	const drawings = []
	product.models.forEach(m => m.drawing && drawings.push(m.drawing))
	return drawings;
}
export default function Product({ product, related, relatedByCategory }: ProductProps) {
	
	console.log(relatedByCategory)
	const [galleryIndex, setGalleryIndex] = useState<number>(-1)
	const [drawingGalleryIndex, setDrawingGalleryIndex] = useState<number>(-1)

	const specs = parseSpecifications(product, 'en', null)
	const images = allProductImages(product)
	const drawings = allDrawings(product)

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
					<ListItem title={'Specifications'} className={styles.listItemContent}>
						<table className={styles.specifications}>
							<tbody>
								<tr>
									<td>Designer</td>
									<td>{specs.designer}</td>
									<td>Connection</td>
									<td>{specs.connection}</td>
								</tr>
								<tr>
									<td>Electrical Data</td>
									<td>{specs.electricalData}</td>
									<td>Lightsource</td>
									<td>{specs.lightsource}</td>
								</tr>
								<tr>
									<td>Mounting</td>
									<td>{specs.mounting}</td>
									<td>Socket</td>
									<td>{specs.socket}</td>
								</tr>
							</tbody>
						</table>
						<table className={styles.articles}>
							<tbody>
								<tr>
									<th>Art no</th>
									<th>Model</th>
									<th>Art no</th>
									<th>Model</th>
								</tr>
								{product.models.map(({variants, lightsources, accessories}, idx)=> {
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
										label: l.lightsource.name,
										included: l.included,
										opttional: l.optional,
									}))

									const cols = art.concat(access).concat(light)
									const rows = chunkArray(cols, cols.length > 2 ? cols.length/2 : 2)
									
									return(
										rows.map((row, idx) => 
											<tr key={idx}>
												<td>{row[0].articleNo}</td>
												<td>{row[0].label}</td>
												<td>{row[1]?.articleNo}</td>
												<td>{row[1]?.label}</td>
											</tr>	
										)
									)
								})}
							</tbody>
						</table>
						<table className={styles.specifications}>
							<tbody>
								<tr>
									<td>
										Dimensions		
									</td>
									<td>
										<strong onClick={()=>setDrawingGalleryIndex(0)}>
											View drawing +
										</strong>
										</td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
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
			</section>
			<section className={styles.related}>
				
			</section>
			{galleryIndex > -1 && 
				<Gallery 
					images={images} 
					index={galleryIndex} 
					onClose={()=>setGalleryIndex(-1)}
				/>
			}
			{drawingGalleryIndex > -1 && 
				<Gallery 
					images={drawings} 
					index={drawingGalleryIndex} 
					onClose={()=>setDrawingGalleryIndex(-1)}
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
	const { product } : { product : ProductRecord} = await apiQuery(GetProductDocument, { variables: { slug: context.params.product[0] } })
	const { products : related } = await apiQuery(GetRelatedProductsDocument, { variables: { designerId: product.designer.id, familyId: product.family.id } })
	const { products : relatedByCategory } = await apiQuery(GetAllProductsByCategoryDocument, { variables: { categoryId: product.categories[0]?.id}})
	
	if (!product)
		return { notFound: true }

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