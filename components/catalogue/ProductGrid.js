import styles from './ProductGrid.module.scss'
import cn from 'classnames'

export default function ProductGrid({ products }) {
  return (
    <>
      <section className={cn(styles.page, styles.gridPageOne)}>
        {products.map(({image, title, slug})=>
          <div>
            {title} {slug}
            {image && <img src={`${image?.url}?w=300`}/>}
          </div>
        )}
      </section>
    </>
  )
}
