import styles from './ProductGrid.module.scss'
import cn from 'classnames'

export default function ProductGrid({ product }) {

  return (
    <>
      <section className={cn(styles.page, styles.gridPageOne)}>
        {product.colorImages.map(({ url, title }, idx) => {
          const maxWidth = 100 / product.colorImages.length;
          return (
            <div key={idx} className={styles.color} style={{ maxWidth: `${maxWidth}%` }}>
              <img
                className={styles.colorImage}
                src={`${url}?w=600`}
              />
              <div className={styles.description}><span className="small">{title || 'No description'}</span></div>
            </div>
          )
        })}
      </section>

    </>
  )
}
