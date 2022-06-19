import styles from './ProductThumbnail.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import Link from 'next/link'

export type ProductThumbnailProps = { product: ProductRecord, inverted?:boolean }

export default function ProductThumbnail({ product, inverted }: ProductThumbnailProps) {
	
	return (
    <div className={cn(styles.productThumbnail, inverted && styles.inverted)}>
      <Link href={`/products/${product.slug}`}>
        <a>
          <figure>
            <Image 
              data={product.image.responsiveImage} 
              className={styles.image}
              layout={'fill'} 
              objectFit={'contain'}
            />
          </figure>
          <figcaption>
            <span>{product.title}</span> by {product.designer?.name}
          </figcaption>
        </a>  
      </Link>
    </div>
	)
}