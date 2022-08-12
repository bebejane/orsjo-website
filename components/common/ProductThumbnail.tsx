import styles from './ProductThumbnail.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import Link from 'next/link'
import { useState } from 'react'

export type ProductThumbnailProps = { product: ProductRecord, inverted?:boolean }

export default function ProductThumbnail({ product, inverted }: ProductThumbnailProps) {
	
  const [hovering, setHovering] = useState(false);
  const handleMouseOver = ({type}) => setHovering(type === 'mouseenter')

  if(!product.image) return null

	return (
    <div className={cn(styles.productThumbnail, inverted && styles.inverted)} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
      <Link href={`/products/${product.slug}`}>
        <a>
          <figure>
            <Image 
              data={product.image.responsiveImage} 
              className={styles.image}
              layout={'fill'} 
              objectFit={'contain'}
            />
            <div className={cn(styles.environmentImage, hovering && styles.show)}>
              <Image 
                data={product.environmentImage.responsiveImage} 
                className={styles.image}
                layout={'fill'} 
                objectFit={'cover'}
              />
            </div>
          </figure>
          <figcaption>
            <span>{product.title}</span> by {product.designer?.name}
          </figcaption>
          
        </a>  
      </Link>
      {product.markAsNew && <div className={styles.new}>NEW</div>}
    </div>
	)
}