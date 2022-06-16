import styles from './ProductThumbnail.module.scss'
import { Image } from 'react-datocms'

type ProductThumbnailProps = { product: Product }

export default function ProductThumbnail({ product }: ProductThumbnailProps) {
	
	return (
    <div className={styles.productThumbnail}>
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
    </div>
	)
}