import styles from './ProductGrid.module.scss'
import type { Product } from '/types'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import Page from "./Page"

type ProductGridProps = { products : Product[]}

export default function ProductGrid({ products } : ProductGridProps) {
  const t = useTranslations('Catalogue')
  return (
    <>
      <Page>
        <div className={cn(styles.gridPageOne, styles.productGrid)}>
          <a id="home"></a>
          <header>
            <h1>{t('products')}</h1>
            <p>{t('tip')}</p>
          </header>
          {products.slice(0, 20).map(({ image, title, slug }, idx) =>
            <a key={idx} className={styles.product} href={`#${slug}`}>
              <p>{title}</p>
              {image && <img src={`${image?.url}?w=300&fm=jpg`} />}
            </a>
          )}
        </div>
      </Page>
      <Page>
        <div className={cn(styles.productGrid, styles.fullGrid)}>
          {products.slice(21, 46).map(({ image, title, slug }, idx) =>
            <a key={idx} className={styles.product} href={`#${slug}`}>
              <p>{title}</p>
              {image && <img src={`${image?.url}?w=300&fm=jpg`} />}
            </a>
          )}
        </div>
      </Page>
      <Page>
        <div className={cn(styles.productGrid, styles.fullGrid)}>
          {products.slice(47, 72).map(({ image, title, slug }, idx) =>
            <a key={idx} className={styles.product} href={`#${slug}`}>
              <p>{title}</p>
              {image && <img src={`${image?.url}?w=300&fm=jpg`} />}
            </a>
          )}
        </div>
      </Page>
      <Page>
        <div className={cn(styles.productGrid, styles.fullGrid)}>
          {products.slice(72, 98).map(({ image, title, slug }, idx) =>
            <a key={idx} className={styles.product} href={`#${slug}`}>
              <p>{title}</p>
              {image && <img src={`${image?.url}?w=300&fm=jpg`} />}
            </a>
          )}
        </div>
      </Page>

    </>
  )
}
