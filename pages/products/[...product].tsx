import styles from './[...product].module.scss'
import cn from 'classnames'
import { AllProductsDocument, ProductDocument, RelatedProductsDocument, AllProductsByCategoryDocument } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { withGlobalProps } from '/lib/hoc'
import { useStore } from '/lib/store'
import { List, ListItem } from '/components'
import { Image } from 'react-datocms'
import { FullWidthImage, Text, TwoColumnImage, ImageGallery, FeaturedGallery, ProductThumbnail, Section, Icon } from '/components'
import { useState, useEffect } from 'react'
import { chunkArray, parseSpecifications, recordImages } from '/lib/utils'
import { useLayout } from '/lib/context/layout'
import useScrollInfo from '/lib/hooks/useScrollInfo'
import { useRouter } from 'next/router'

const allDrawings = (product: ProductRecord) => {
	const drawings = []
	product.models.forEach(m => m.drawing && drawings.push(m.drawing))
	return drawings;
}

export type ProductProps = { product: ProductRecord, related: ProductRecord[], relatedByCategory: ProductRecord[] };

export default function Product({ product, related, relatedByCategory }: ProductProps) {
	
	const router = useRouter()
	const [setGallery, setGalleryIndex] = useStore((state) => [state.setGallery, state.setGalleryIndex])
	const { scrolledPosition, viewportHeight } = useScrollInfo()
	const { color } = useLayout()
	const [listIndex, setListIndex] = useState()
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
	const productCategories = product.categories.map(({ name }, idx) => name).join(', ')
	
	const images = recordImages(product)
	const drawings = allDrawings(product)
	
	const handleGalleryClick = (type: string, id:string) => {
		console.log(id, drawings)
		setGallery({images : type === 'product' ? images : drawings, index:0})
		setGalleryIndex(id)
	}

	useEffect(()=>{
		console.log(router.asPath)
		if(router.asPath.endsWith('specifications'))
			setListIndex(0)
		if(router.asPath.endsWith('downloads'))
			setListIndex(1)

	}, [router])

	useEffect(()=>setGallery({images}), [])
	
	const overlayOpacity = Math.max(0, ((viewportHeight-(scrolledPosition*2)) / viewportHeight));
	
	return (
		<>
			<Section name="Introduction" className={styles.product}>
				<div className={styles.intro}>
					<Image
						className={styles.image}
						data={product.image?.responsiveImage}
						layout={'fill'}
						objectFit={'contain'}
					/>
					<div className={styles.overlay} style={{opacity: overlayOpacity}}>
						<div className={styles.text}>
							<h1 className={styles.title}>
								{product.title}
							</h1>
							<h1 className={styles.designer}>
								By {product.designer?.name}
							</h1>
							<h3 className={styles.type}>
								{productCategories}
							</h3>
						</div>
					</div>
				</div>
				{product.productGallery.map((block, idx) => {
					switch (block.__typename) {
						case 'FullwidthImageRecord':
							return <FullWidthImage key={idx} data={block} onClick={(id)=> handleGalleryClick('product', id)} />
						case 'TextRecord':
							return <Text key={idx} data={block} />
						case 'TwoColumnImageRecord':
							return <TwoColumnImage key={idx} data={block} onClick={(id)=> handleGalleryClick('product', id)} />
						case 'ImageGalleryRecord':
							return <ImageGallery key={idx} data={block} onClick={(id)=> handleGalleryClick('product', id)} />
						default:
							return null
					}
				})}
			</Section>
			<Section className={styles.details}>
				<List index={listIndex}>
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
														<li key={idx}>
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
								<button onClick={() => handleGalleryClick('drawings', drawings[0].id)} >
									View drawing{drawings.length > 1 && 's'} +
								</button>
							</li>
						</ul>
					</ListItem>
					<ListItem title={'Downloads'} className={styles.listItemContent}>
						<ul className={styles.downloads}>
								<li>
									<a href={`${product.pdfFiles.find(({locale}) => locale ==='sv')?.value.url}`} download>
										<Icon>PDF</Icon>
										<div className={styles.label}>Product Sheet (SE)</div>
									</a>
								</li>
								<li>
									<a href={`${product.pdfFiles.find(({locale}) => locale ==='en')?.value.url}`} download>
										<Icon>PDF</Icon>
										<div className={styles.label}>Product Sheet (EN)</div>
									</a>
								</li>
								<li>
									<a href={product.bimLink || undefined}>
										<Icon>BIM</Icon>
										<div className={styles.label}>Bim files</div>
									</a>
								</li>
								<li>
									<a href={product.lightFile?.url}>
										<Icon>CAD</Icon>
										<div className={styles.label}>Cad Files</div>
									</a>
								</li>
						</ul>
					</ListItem>
				</List>
			</Section>
			<Section name="Related" className={styles.related} bgColor='--mid-gray'>
				
				{relatedByCategory.length > 0 &&
					<FeaturedGallery 
						headline={`Other ${product.categories[0].namePlural}`} 
						products={relatedByCategory} 
						theme={'light'}
						id="relatedbycategory" 
						fadeColor={color}
					/>
				}

				{related.length > 0 && 
					<FeaturedGallery 
						headline={`Related`} 
						products={related} 
						theme={'light'}
						id="related"
						fadeColor={color}
					/>
				}
			</Section>
			
		</>
	)
}

Product.layout = { layout: 'normal', color: '--white', menu: 'normal' } as PageLayoutProps

export async function getStaticPaths(context) {
	const { products } = await apiQuery(AllProductsDocument, {})
	const paths = products.map(({ slug }) => ({ params: { product: [slug] } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({ }, async ({ props, context, revalidate }) => {

	const { product }: { product: ProductRecord } = await apiQuery(ProductDocument, { variables: { slug: context.params.product[0] } })

	if (!product)
		return { notFound: true }

	const { products: related } = await apiQuery(RelatedProductsDocument, { variables: { designerId: product.designer.id, familyId: product.family.id } })
	const { products: relatedByCategory } = await apiQuery(AllProductsByCategoryDocument, { variables: { categoryId: product.categories[0]?.id } })

	return {
		props: {
			...props,
			product,
			related: related.filter(p => p.id !== product.id),
			relatedByCategory: relatedByCategory.filter(p => p.id !== product.id),
		},
		revalidate
	};
});