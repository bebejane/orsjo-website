import styles from './Thumbnail.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import Link from 'next/link'
import { useState } from 'react'

export type ThumbnailProps = {
  slug: string,
  image: FileField,
  imageHover: FileField,
  inverted?: boolean,
  title: string,
  subtitle: string,
  className?: string
}

export default function Thumbnail({ image, imageHover, slug, inverted, title, subtitle, className }: ThumbnailProps) {

  const [hovering, setHovering] = useState(false);
  const handleMouseOver = ({type}) => setHovering(type === 'mouseenter')
  
  return (
    <div className={cn(styles.thumbnail, className, inverted && styles.inverted)} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
      <Link href={slug}>
        <a>
          <figure>
            <Image
              data={image.responsiveImage}
              className={styles.image}
              layout={'fill'}
              objectFit={'contain'}
            />
            {imageHover && 
              <div className={cn(styles.imageHover, hovering && styles.show)}>
                <Image 
                  data={imageHover.responsiveImage} 
                  className={styles.image}
                  layout={'fill'} 
                  objectFit={'cover'}
                />
              </div>
            }
          </figure>
          <figcaption>
            <span className={styles.title}>{title} <span className={styles.subtitle}>{subtitle}</span></span>
          </figcaption>
        </a>
      </Link>
    </div>
  )
}