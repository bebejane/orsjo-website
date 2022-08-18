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
  className?: string,
  theme?: 'dark' | 'light',
  type?: 'product' | 'project'
}

export default function Thumbnail({ image, imageHover, slug, inverted, title, subtitle, className, theme = 'light', type = 'product' }: ThumbnailProps) {

  const [hovering, setHovering] = useState(false);
  const handleMouseOver = ({type}) => setHovering(type === 'mouseenter')
  
  return (
    <div 
      className={cn(styles.thumbnail, className, inverted && styles.inverted, styles[theme], styles[type])} 
      onMouseEnter={handleMouseOver} 
      onMouseLeave={handleMouseOver}
    >
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

export type ProductThumbnailProps = { 
  product: ProductRecord, 
  inverted?:boolean,
  className?: string,
  theme: 'dark' | 'light'
}

export function ProductThumbnail({ product, inverted, theme = 'dark', className }: ProductThumbnailProps) {
	
	return (
    <Thumbnail  
      slug={`/products/${product.slug}`} 
      image={product.image}
      imageHover={product.environmentImage} 
      title={product.title}
      subtitle={`by ${product.designer?.name}`}
      className={className}
      inverted={inverted}
      theme={theme}
      type="product"
    />
	)
}

export type ProjectThumbnailProps = { 
  project: ProjectRecord, 
  inverted?: boolean, 
  className?: string,
  theme: 'dark' | 'light'
}
export function ProjectThumbnail({ project, inverted, theme = 'dark', className }: ProjectThumbnailProps) {
	
	return (
    <Thumbnail  
      slug={`/professionals/projects/${project.slug}`} 
      image={project.image}
      imageHover={project.secondaryImage} 
      title={project.title}
      subtitle={project.location}
      inverted={inverted}
      className={className}
      theme={theme}
      type="project"
    />
	)
}

