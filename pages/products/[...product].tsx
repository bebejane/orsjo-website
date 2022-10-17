import styles from './[...product].module.scss'
import cn from 'classnames'
import { 
	AllProductsLightDocument, 
	ProductDocument, 
	RelatedProductsDocument, 
	AllProductsByCategoryDocument,
	RelatedProjectsForProductDocument
} from '/graphql'
import { apiQuery } from '/lib/dato/api'
import withGlobalProps from "/lib/withGlobalProps";
import { useStore } from '/lib/store'
import { isServer } from '/lib/utils'
import { Image } from 'react-datocms'
import { SectionListItem, FeaturedGallery, Block, Section, Icon } from '/components'
import React, { useState, useEffect } from 'react'
import { chunkArray, parseSpecifications, recordImages, productDownloads, ProductRecordWithPdfFiles } from '/lib/utils'
import useScrollInfo from '/lib/hooks/useScrollInfo'
import { useRouter } from 'next/router'
import type { PageProps } from '/lib/context/page';
import type { ProductDownload } from '/lib/utils';
import Markdown from '/lib/dato/components/Markdown';

export type ProductProps = {
	product: ProductRecord,
	relatedProducts: ProductRecord[],
	relatedProjects: ProjectRecord[],
	productsByCategory: ProductRecord[],
	images: FileField[] 
	drawings: FileField[]
	specsCols: { label:string, value:string }[]
	files: ProductDownload[]
}

export default function Product({ 
	product, 
	relatedProducts, 
	relatedProjects, 
	productsByCategory, 
	images, 
	drawings, 
	specsCols, 
	files 
}: ProductProps) {

	const router = useRouter()
	const [setGallery, setGalleryId] = useStore((state) => [state.setGallery, state.setGalleryId])
	const { scrolledPosition, viewportHeight } = useScrollInfo()
	const [list, setList] = useState({ specifications: false, downloads: false })
	const singleModel = product.models.length === 1
	
	const handleGalleryClick = (type: string, id: string) => {
		setGallery({ images: type === 'product' ? images : drawings, index: 0 })
		setGalleryId(id)
	}

	useEffect(() => { // Toggle specs/downloads on sidebar click

		const handleHashChange = (url : string) => {
			setList((l) => ({
				...l,
				specifications: url.endsWith('specifications') || l.specifications,
				downloads: url.endsWith('downloads') || l.downloads
			}))
		}

		router.events.on("hashChangeStart", handleHashChange);
		return () => router.events.off("hashChangeStart", handleHashChange)

	}, [router.events])

	useEffect(() => {
		setGallery({ images })
	}, [images, setGallery])

	const overlayOpacity = isServer ? 1 : Math.max(0, ((viewportHeight - (scrolledPosition * 4)) / viewportHeight));
	const scale = Math.max(0, (viewportHeight - (scrolledPosition * 4)) / viewportHeight)

	return (
		<>
			<Section name="Introduction" className={styles.product}>
				<div className={styles.intro} onClick={() => handleGalleryClick('product', product.image?.id)}>
					<Image
						className={styles.image}
						data={product.image?.responsiveImage}
						layout={'fill'}
						objectFit={'contain'}
						pictureStyle={{ paddingBottom: `${3 * scale}em` }}
					/>
					<div
						className={styles.overlay}
						style={{ opacity: overlayOpacity }}>
						<div className={styles.text}>
							<h1 className={styles.title}>
								{product.title}
							</h1>
							<h1 className={styles.designer}>
								By {product.designer?.name}
							</h1>
							<h3 className={styles.type}>
								{product.categories.map(({ name }, idx) => name).join(', ')}
							</h3>
						</div>
					</div>
				</div>
				<Markdown className={styles.description}>
					{product.description}
				</Markdown>
				{product.productGallery.map((block, idx) =>
					<Block
						key={idx}
						data={block}
						onClick={(id) => handleGalleryClick('product', id)}
					/>
				)}
			</Section>
			<SectionListItem
				title={'Specifications'}
				className={cn(styles.listItemContent, styles.top)}
				selected={list.specifications === true}
				idx={0}
				total={2}
				onToggle={() => setList({ ...list, specifications: !list.specifications })}
			>
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
						{product.models.map(({ id, name, variants, lightsources, accessories }, midx) => {

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
							const rows = chunkArray(cols, 2)

							if (singleModel) {
								return (
									rows.map((row, idx) =>
										<ul key={`${id}-${idx}`}>
											<li>
												<span>{row[0].articleNo}</span>
												<span>{row[0].label}</span>
												<span>{row[1]?.articleNo}</span>
												<span>{row[1]?.label}</span>
											</li>
										</ul>
									)
								)
							}

							return (
								<ul key={id}>
									<li className={styles.subheader}><span></span><span>{name?.name}</span></li>
									{rows.map((row, idx) =>
										<React.Fragment key={`${id}-${idx}`}>
											<li key={`${id}-${idx}-c1`}>
												<span>{row[0].articleNo}</span>
												<span>{row[0].label}</span>
											</li>
											<li key={`${id}-${idx}-c2`}>
												<span>{row[1]?.articleNo}</span>
												<span>{row[1]?.label}</span>
											</li>
										</React.Fragment>
									)}
								</ul>
							)
						})}
					</div>
				</div>

				<div className={styles.dimensions}>
					<span>Dimensions</span>
					<button onClick={() => handleGalleryClick('drawings', drawings[0].id)} disabled={drawings.length === 0}>
						{drawings.length ?
							<>View drawing{drawings.length > 1 && 's'}</>
							:
							<>No drawings available</>
						}
					</button>
				</div>

			</SectionListItem>
			<SectionListItem
				title={'Downloads'}
				className={cn(styles.listItemContent, styles.bottom)}
				selected={list.downloads === true}
				idx={1}
				total={2}
				onToggle={() => setList({ ...list, downloads: !list.downloads })}
			>
				<ul className={styles.downloads}>
					{files.map(({ href, type, label }, idx) =>
						<li key={idx}>
							<a href={href} download target="_new">
								<Icon type={type} label={label} disabled={!href} />
							</a>
						</li>
					)}
				</ul>
			</SectionListItem>

			<Section name="Related" className={styles.related} bgColor='--mid-gray'>
				{relatedProducts.length > 0 &&
					<FeaturedGallery
						headline={`Related`}
						items={relatedProducts}
						theme={'light'}
						id="related"
						fadeColor={'--mid-gray'}
					/>
				}
				{relatedProjects.length > 0 &&
					<FeaturedGallery
						headline={`Related Projects`}
						items={relatedProjects}
						theme={'light'}
						id="relatedProjects"
						fadeColor={'--mid-gray'}
					/>
				}
				{productsByCategory.length > 0 &&
					<FeaturedGallery
						headline={`Other ${product.categories[0].namePlural}`}
						items={productsByCategory}
						theme={'light'}
						id="relatedbycategory"
						fadeColor={'--mid-gray'}
					/>
				}
			</Section>
		</>
	)
}

Product.page = { layout: 'normal', color: '--white', menu: 'normal' } as PageProps

export async function getStaticPaths(context) {
	const { products } = await apiQuery(AllProductsLightDocument, {})
	const paths = products.map(({ slug }) => ({ params: { product: [slug] } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({}, async ({ props, context, revalidate }) => {

	const { product }: { product: ProductRecord } = await apiQuery(ProductDocument, { variables: { slug: context.params.product[0] } })

	if (!product) return { notFound: true }

	const { productsByCategory, relatedProducts, relatedProjects } = await apiQuery([
		RelatedProductsDocument, AllProductsByCategoryDocument, RelatedProjectsForProductDocument
	], {
		variables: [
			{ designerId: product.designer.id, familyId: product.family.id },
			{ categoryId: product.categories[0]?.id },
			{ productId: product.id }
		]
	}) as { productsByCategory: ProductRecord[], relatedProducts: ProductRecord[], relatedProjects : ProjectRecord[]}

	const specs = parseSpecifications(product, 'en', null)
	const specsCols = [
		{ label: 'Designer', value: specs.designer },
		{ label: 'Mounting', value: specs.mounting },
		{ label: 'Electrical Data', value: specs.electricalData },
		{ label: 'Socket', value: specs.socket },
		{ label: 'Connection', value: specs.connection },
		{ label: 'Lightsource', value: specs.lightsource }
	].filter(el => el.value)


	const images = recordImages(product, ['environmentImage', 'drawing'])
	const files = productDownloads(product as ProductRecordWithPdfFiles)
	const drawings = [];
	product.models.forEach(m => m.drawing && drawings.push({ ...m.drawing, title: m.name?.name || null }))

	return {
		props: {
			...props,
			product,
			relatedProducts: relatedProducts.filter(p => p.id !== product.id).sort((a, b) => a.family.id === b.family.id ? 1 : -1),
			productsByCategory: productsByCategory.filter(p => p.id !== product.id),
			relatedProjects,
			images,
			files,
			drawings,
			specsCols
		},
		revalidate
	};
});