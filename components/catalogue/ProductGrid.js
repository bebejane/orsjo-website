import styles from './ProductGrid.module.scss'
import cn from 'classnames'

export default function ProductGrid({ products }) {
  return (
    <>
      <div className={cn(styles.gridPageOne, styles.productGrid)}>
        <a name="home"></a>
        <header>
          <h1>Products</h1>
          <p>Tip: Click on a product to navigate and use the logo to return to this page.</p>
        </header>
        {products.map(({ image, title, slug }) =>
          <a className={styles.product} href={`#${slug}`}>
            <p>{title}</p>
            {image && <img src={`${image?.url}?w=300`} />}
          </a>
        )}
      </div>
    </>
  )
}
