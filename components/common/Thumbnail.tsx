import styles from './Thumbnail.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import Link from 'next/link'
import { useState } from 'react'

export type ThumbnailProps = {
  slug?: string,
  image: FileField,
  imageHover?: FileField,
  inverted?: boolean,
  title: string,
  subtitle?: string,
  className?: string,
  lazyload?: boolean
  objectFit?: 'contain' | 'cover',
  markAsNew?: boolean,
  onClick?: () => void,
  theme?: 'dark' | 'light' | 'mid',
  type?: 'product' | 'project' | 'designer' | 'news' | 'staff' | 'material',
  showMarkAsNew?: boolean
}

export default function Thumbnail({
  image,
  imageHover,
  slug,
  inverted,
  title,
  subtitle,
  markAsNew = false,
  className,
  onClick,
  objectFit = 'contain',
  theme = 'light',
  type = 'product',
  showMarkAsNew = true,
  lazyload = true
}: ThumbnailProps) {

  const [hovering, setHovering] = useState(false);
  const isTouch = typeof window !== 'undefined' && matchMedia('(hover: none), (pointer: coarse)').matches;
  const handleMouseOver = ({ type }) => !isTouch && setHovering(type === 'mouseenter')

  const content = (
    <>
      <figure>
        {image &&
          <Image
            data={image.responsiveImage}
            className={styles.image}
            layout={'fill'}
            lazyLoad={lazyload}
            fadeInDuration={100}
            objectFit={objectFit}
          />
        }
        {imageHover && !isTouch &&
          <div className={cn(styles.imageHover, hovering && styles.show)}>
            <Image
              data={imageHover.responsiveImage}
              className={styles.image}
              lazyLoad={lazyload}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        }
      </figure>
      <figcaption>
        <span className={styles.title}>{title} <span className={styles.subtitle}>{subtitle}</span></span>
      </figcaption>
    </>
  )

  return (
    <div
      className={cn(styles.thumbnail, className, inverted && styles.inverted, styles[theme], styles[type])}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
      onClick={onClick}
    >
      {slug ?
        <Link scroll={false} href={slug} >
          <a className={styles.wrap}>
            {content}
          </a>
        </Link>
        :
        <div className={styles.wrap}>{content}</div>
      }

      {markAsNew && showMarkAsNew &&
        <div className={cn(styles.markAsNew)}>
          <span>New</span>
        </div>
      }
    </div>
  )
}

export type BaseThumbnailProps = {
  inverted?: boolean,
  className?: string,
  theme: 'dark' | 'light' | 'mid',
  showMarkAsNew?: boolean,
  lazyload?: boolean
}

export type ProductThumbnailProps = BaseThumbnailProps & {
  product: ProductRecord
}

export function ProductThumbnail({ product, inverted, theme = 'dark', className, showMarkAsNew, lazyload }: ProductThumbnailProps) {

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
      markAsNew={product.markAsNew}
      type="product"
      lazyload={lazyload}
      showMarkAsNew={showMarkAsNew}
    />
  )
}

export type ProjectThumbnailProps = BaseThumbnailProps & {
  project: ProjectRecord,
}

export function ProjectThumbnail({ project, inverted, theme = 'dark', className, showMarkAsNew, lazyload }: ProjectThumbnailProps) {

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
      lazyload={lazyload}
      showMarkAsNew={showMarkAsNew}
    />
  )
}

export type DesignerThumbnailProps = BaseThumbnailProps & {
  designer: DesignerRecord
}
export function DesignerThumbnail({ designer, inverted, theme = 'dark', className, showMarkAsNew, lazyload }: DesignerThumbnailProps) {

  return (
    <Thumbnail
      slug={`/designers/${designer.slug}`}
      image={designer.image}
      title={designer.name}
      inverted={inverted}
      className={className}
      theme={theme}
      type="designer"
      lazyload={lazyload}
      showMarkAsNew={showMarkAsNew}
    />
  )
}

export type NewsThumbnailProps = BaseThumbnailProps & {
  news: NewsRecord,
}
export function NewsThumbnail({ news, inverted, theme = 'dark', className, showMarkAsNew, lazyload }: NewsThumbnailProps) {

  return (
    <Thumbnail
      slug={`/about/news/${news.slug}`}
      image={news.image}
      title={news.title}
      inverted={inverted}
      className={className}
      theme={theme}
      type="news"
      lazyload={lazyload}
      showMarkAsNew={showMarkAsNew}
    />
  )
}

export type StaffThumbnailProps = BaseThumbnailProps & {
  staff: StaffRecord,
}
export function StaffThumbnail({ staff, inverted, theme = 'dark', className, showMarkAsNew, lazyload }: StaffThumbnailProps) {

  return (
    <Thumbnail
      slug={`/contact#${staff.id}`}
      image={staff.image}
      title={staff.name}
      inverted={inverted}
      className={className}
      theme={theme}
      type="staff"
      lazyload={lazyload}
      showMarkAsNew={showMarkAsNew}
    />
  )
}