import styles from './[...designer].module.scss'
import { GetAllDesignersDocument, GetDesignerDocument, GetAllProductsByDesignerDocument } from '/graphql'
import { apiQuery } from '/lib/dato/api'
import { withGlobalProps } from '/lib/hoc'
import { Image } from 'react-datocms'
import { PageLayoutProps } from '/lib/context/layout'
import { useLayout } from '/lib/context/layout'
import { ProductThumbnail } from '/components'
import { chunkArray } from '/lib/utils'

export type DesignerProps = { designer: DesignerRecord, products: ProductRecord[] };

export default function Designer({designer, products} : DesignerProps){

	const { color } = useLayout()
	const productRows = chunkArray(products, 3)
	
	return (
		<>
			<section className={styles.designer}>
				<header>
					<h1>{designer.name}</h1>
					<figure>
						{designer.image && 
							<Image data={designer.image.responsiveImage} layout={'fill'} objectFit={'cover'} />
						}
					</figure>
					<div className={styles.overlay} style={{backgroundColor: color}}></div>
				</header>
			</section>
			<section className={styles.products}>
				<h1>Products by<br/>{designer.name}</h1>	
				<div className={styles.gallery}>	
				{productRows.map((prods, ridx) => {
					return(
						<ul key={ridx}>
							{prods.map((p, idx) => 
								<li key={idx}>
									<ProductThumbnail key={idx} product={p}/>
								</li>
							)}
						</ul>
					)
				})}
				</div>
			</section>
		</>
	)
}

Designer.layout = {layout:'full', color:'--beige'} as PageLayoutProps

export async function getStaticPaths(context) {
	const { designers } = await apiQuery(GetAllDesignersDocument)
	const paths = designers.map(({ slug }) => ({ params: { designer: [slug] } }))
	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = withGlobalProps({ model: 'designer' }, async ({ props, context, revalidate }) => {

	const { designer } = await apiQuery(GetDesignerDocument, {variables: { slug: context.params.designer[0] }})
	const { products } = await apiQuery(GetAllProductsByDesignerDocument, {variables: { id: designer.id }})
	
	if (!designer) 
		return { notFound: true }

	return {
		props: {
			...props,
			designer,
			products
		},
		revalidate
	};
});