import styles from './Thumbnail.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import Link from 'next/link'

export type ProductThumbnailProps = {
  slug: string,
  image: FileField,
  inverted?: boolean,
  title: string,
  subtitle: string,
  className: string
}

export default function Thumbnail({ image, slug, inverted, title, subtitle, className }: ProductThumbnailProps) {

  return (
    <div className={cn(styles.thumbnail, className, inverted && styles.inverted)}>
      <Link href={slug}>
        <a>
          <figure>
            <Image
              data={image.responsiveImage}
              className={styles.image}
              layout={'fill'}
              objectFit={'cover'}
            />
          </figure>
          <figcaption>
            <span className={styles.title}>{title} <span className={styles.subtitle}>{subtitle}</span></span>
          </figcaption>
        </a>
      </Link>
    </div>
  )
}