import styles from './FeaturedBlock.module.scss'
import { toSectionId } from '/lib/utils'
import { Image } from 'react-datocms'
import { ProductThumbnail } from '/components'
import Link from 'next/link'

export type ImageGalleryBlockProps = { data: Featured }

export default function FeaturedBlock({ data: { headline, items : products } }: ImageGalleryBlockProps) {
	
	return (
		<section className={styles.featured} id={toSectionId(headline)} title={headline}>
			<div className={styles.header}>
				<h3 className={styles.headline}>
					{headline}
				</h3>
				<div className={styles.next}>
					›
				</div>
			</div>
			<div className={styles.gallery}>
				{products.map((product, idx) => 
					<Link key={idx} href={`/products/${product.slug}`}>
						<a>
							<ProductThumbnail key={idx} product={product}/>
						</a>
					</Link>
				)}	
			</div>
		</section>
	)
}