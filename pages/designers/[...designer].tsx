import styles from './[...designer].module.scss'
import withGlobalProps from "/lib/withGlobalProps";
import { AllDesignersDocument, DesignerDocument, AllProductsByDesignerDocument, AllProductsLightDocument } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { Image } from 'react-datocms'
import { PageLayoutProps } from '/lib/context/layout'
import { ProductThumbnail, Section, FeaturedGallery } from '/components'

export type DesignerProps = { designer: DesignerRecord, products: ProductRecord[], designers: DesignerRecord[] };

export default function Designer({ designer, products, designers }: DesignerProps) {

	return (
		<>
			<Section type="full" className={styles.designer}>
				<header>
					<div className={styles.artist} key={designer.id}>
						<h1>{designer.name}</h1>
						<p className={styles.description}>
							{designer.description}
						</p>
					</div>
					<figure>
						{designer.image &&
							<Image data={designer.image.responsiveImage} layout={'fill'} objectFit={'cover'} />
						}
						<figcaption>
							<h1>{designer.name}
							</h1>
						</figcaption>
					</figure>
				</header>
			</Section>
			<Section type="margin" className={styles.products} bgColor='--mid-gray'>
				<h1>Products by <br />{designer.name}</h1>
				<div className={styles.gallery}>
					<ul>
						{products.map((p, idx) => 
							<li key={idx}>
								<ProductThumbnail 
									key={idx} 
									product={p} 
									theme="light" 
								/>
							</li>
						)}
					</ul>
				</div>
			</Section>
			<Section type="margin" className={styles.otherDesigners} bgColor='--warm-gray'>
				<h1>Other designers</h1>
				<div className={styles.gallery}>
					<FeaturedGallery 
						items={designers} 
						id="all-designers" 
						theme='light' 
						arrowAlign='middle' 
						fadeColor={'--warm-gray'} 
					/>
				</div>
			</Section>
		</>
	)
}

Designer.layout = { layout: 'full', color: '--warm-gray', menu: 'inverted' } as PageLayoutProps

export async function getStaticPaths(context) {
	const { designers } = await apiQuery(AllDesignersDocument)
	const paths = designers.map(({ slug }) => ({ params: { designer: [slug] } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({ queries: [AllDesignersDocument, AllProductsLightDocument] }, async ({ props, context, revalidate }) => {

	const { designers, products: allProducts } = props;
	const { designer } = await apiQuery(DesignerDocument, { variables: { slug: context.params.designer[0] } })
	const { products } = await apiQuery(AllProductsByDesignerDocument, { variables: { id: designer.id } })

	if (!designer)
		return { notFound: true }

	return {
		props: {
			...props,
			designer,
			designers: designers.filter(({ id }) => allProducts.find((p) => p.designer?.id === id)).sort(() => Math.random() > 0.5 ? 1 : -1),
			products
		},
		revalidate
	};
});